"use server";

import { redirect } from "next/navigation";
import {
  createBinancePayOrder,
  generateMerchantTradeNo,
  type SupportedCurrency,
} from "@/lib/binance";

export interface DonateFormState {
  error?: string;
}

export async function createDonationAction(
  _prevState: DonateFormState,
  formData: FormData
): Promise<DonateFormState> {
  const amount = formData.get("amount") as string;
  const currency = formData.get("currency") as SupportedCurrency;
  const email = formData.get("email") as string;
  const customAmount = formData.get("customAmount") as string;

  const finalAmount = amount === "custom" ? customAmount : amount;

  // --- Validation ---
  if (!finalAmount || isNaN(Number(finalAmount)) || Number(finalAmount) <= 0) {
    return { error: "Please enter a valid donation amount." };
  }
  if (Number(finalAmount) < 1) {
    return { error: "Minimum donation amount is 1 USDT equivalent." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }
  if (!currency) {
    return { error: "Please select a currency." };
  }

  const merchantTradeNo = generateMerchantTradeNo();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

  const result = await createBinancePayOrder({
    merchantTradeNo,
    orderAmount: Number(finalAmount).toFixed(2),
    currency,
    description: `Cancer Research Donation - ${currency} ${finalAmount}`,
    returnUrl: `${baseUrl}/thank-you?order=${merchantTradeNo}`,
    cancelUrl: `${baseUrl}/donate?cancelled=true`,
    webhookUrl: `${baseUrl}/api/webhook/binance`,
    donorEmail: email,
  });

  if (result.status !== "SUCCESS" || !result.data?.checkoutUrl) {
    console.error("Binance Pay order creation failed:", result);
    return {
      error:
        result.errorMessage ||
        "Payment setup failed. Please try again.",
    };
  }

  // Redirect to Binance Pay hosted checkout page
  redirect(result.data.checkoutUrl);
}
