import crypto from "crypto";

const API_KEY = process.env.BINANCE_PAY_API_KEY!;
const SECRET_KEY = process.env.BINANCE_PAY_SECRET_KEY!;
const CERT_SN = process.env.BINANCE_PAY_CERTIFICATE_SN!;

const BASE_URL = "https://bpay.binanceapi.com";

export type SupportedCurrency =
  | "USDT"
  | "USDC"
  | "BNB"
  | "BTC"
  | "ETH"
  | "BUSD";

export interface CreateOrderPayload {
  merchantTradeNo: string;
  orderAmount: string;
  currency: SupportedCurrency;
  description: string;
  returnUrl: string;
  cancelUrl: string;
  webhookUrl: string;
  donorEmail: string;
}

export interface BinanceOrderResponse {
  status: string;
  code: string;
  data?: {
    prepayId: string;
    terminalType: string;
    expireTime: number;
    qrcodeLink: string;
    qrContent: string;
    checkoutUrl: string;
    deeplink: string;
    universalUrl: string;
  };
  errorMessage?: string;
}

/**
 * Generates the HMAC-SHA512 signature required by Binance Pay API.
 * Format: timestamp\nnonce\npayload
 */
function generateSignature(
  timestamp: string,
  nonce: string,
  payload: string
): string {
  const message = `${timestamp}\n${nonce}\n${payload}`;
  return crypto
    .createHmac("sha512", SECRET_KEY)
    .update(message)
    .digest("hex")
    .toUpperCase();
}

/**
 * Generates a random nonce string (32 chars).
 */
function generateNonce(): string {
  return crypto.randomBytes(16).toString("hex").toUpperCase();
}

/**
 * Generates a unique merchant trade number.
 * Format: DONATE-{timestamp}-{random}
 */
export function generateMerchantTradeNo(): string {
  const random = crypto.randomBytes(4).toString("hex").toUpperCase();
  return `DONATE-${Date.now()}-${random}`;
}

/**
 * Creates a Binance Pay order and returns the checkout URL.
 */
export async function createBinancePayOrder(
  payload: CreateOrderPayload
): Promise<BinanceOrderResponse> {
  const timestamp = Date.now().toString();
  const nonce = generateNonce();

  const body = {
    env: { terminalType: "WEB" },
    merchantTradeNo: payload.merchantTradeNo,
    orderAmount: payload.orderAmount,
    currency: payload.currency,
    description: payload.description,
    goods: {
      goodsType: "02", // Virtual goods / donation
      goodsCategory: "Z000",
      referenceGoodsId: payload.merchantTradeNo,
      goodsName: "Donation",
      goodsDetail: payload.description,
    },
    returnUrl: payload.returnUrl,
    cancelUrl: payload.cancelUrl,
    webhookUrl: payload.webhookUrl,
    // Store donor email in order note for retrieval in webhook
    orderNote: payload.donorEmail,
  };

  const bodyString = JSON.stringify(body);
  const signature = generateSignature(timestamp, nonce, bodyString);

  const response = await fetch(`${BASE_URL}/binancepay/openapi/v3/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "BinancePay-Timestamp": timestamp,
      "BinancePay-Nonce": nonce,
      "BinancePay-Certificate-SN": API_KEY,
      "BinancePay-Signature": signature,
    },
    body: bodyString,
  });

  const data: BinanceOrderResponse = await response.json();
  return data;
}

/**
 * Queries an existing order's status by merchantTradeNo.
 */
export async function queryBinanceOrder(merchantTradeNo: string): Promise<{
  status: string;
  tradeStatus?: string;
  transactionId?: string;
  openUserId?: string;
  payerInfo?: { name: string };
}> {
  const timestamp = Date.now().toString();
  const nonce = generateNonce();
  const body = JSON.stringify({ merchantTradeNo });
  const signature = generateSignature(timestamp, nonce, body);

  const response = await fetch(
    `${BASE_URL}/binancepay/openapi/v2/order/query`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "BinancePay-Timestamp": timestamp,
        "BinancePay-Nonce": nonce,
        "BinancePay-Certificate-SN": API_KEY,
        "BinancePay-Signature": signature,
      },
      body,
    }
  );

  return response.json();
}

/**
 * Verifies the webhook signature from Binance to ensure authenticity.
 * Returns true if signature is valid.
 */
export function verifyWebhookSignature(
  timestamp: string,
  nonce: string,
  body: string,
  receivedSignature: string
): boolean {
  const expectedSignature = generateSignature(timestamp, nonce, body);
  return expectedSignature === receivedSignature.toUpperCase();
}
