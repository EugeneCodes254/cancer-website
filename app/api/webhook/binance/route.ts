import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/binance";
import { Resend } from "resend";
import DonationConfirmationEmail from "@/emails/DonationConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY!);

interface BinanceWebhookPayload {
  bizType: string;
  bizId: string;
  bizStatus: string;
  data: string; // JSON string containing order details
}

interface BinanceOrderData {
  merchantTradeNo: string;
  totalFee: string;
  currency: string;
  openUserId: string;
  orderNote?: string; // We stored donor email here
  transactionId: string;
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();

    // Extract Binance Pay signature headers
    const timestamp = req.headers.get("BinancePay-Timestamp") ?? "";
    const nonce = req.headers.get("BinancePay-Nonce") ?? "";
    const signature = req.headers.get("BinancePay-Signature") ?? "";

    // Verify the webhook is genuinely from Binance
    const isValid = verifyWebhookSignature(timestamp, nonce, rawBody, signature);
    if (!isValid) {
      console.error("Invalid Binance Pay webhook signature");
      return NextResponse.json({ returnCode: "FAIL", returnMessage: "Invalid signature" }, { status: 401 });
    }

    const payload: BinanceWebhookPayload = JSON.parse(rawBody);

    // Only process successful payment events
    if (payload.bizType !== "PAY" || payload.bizStatus !== "PAY_SUCCESS") {
      // Acknowledge other events without processing
      return NextResponse.json({ returnCode: "SUCCESS", returnMessage: null });
    }

    const orderData: BinanceOrderData = JSON.parse(payload.data);
    const {
      merchantTradeNo,
      totalFee,
      currency,
      transactionId,
      orderNote: donorEmail,
    } = orderData;

    // Log the successful donation
    console.log("Donation received:", {
      merchantTradeNo,
      amount: totalFee,
      currency,
      transactionId,
      donorEmail,
      timestamp: new Date().toISOString(),
    });

    // TODO: Persist donation to your database here
    // await db.donations.create({ ... })

    // Send confirmation email via Resend
    if (donorEmail) {
      await resend.emails.send({
        from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`,
        to: donorEmail,
        subject: "Thank you for your donation 💛",
        react: DonationConfirmationEmail({
          donorEmail,
          amount: totalFee,
          currency,
          merchantTradeNo,
          transactionId,
          donatedAt: new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        }),
      });
    }

    // Binance Pay requires this exact response to acknowledge receipt
    return NextResponse.json({ returnCode: "SUCCESS", returnMessage: null });
  } catch (error) {
    console.error("Webhook processing error:", error);
    // Still return SUCCESS to Binance so it doesn't retry indefinitely
    // Log the error to your monitoring service here (e.g. Sentry)
    return NextResponse.json({ returnCode: "SUCCESS", returnMessage: null });
  }
}
