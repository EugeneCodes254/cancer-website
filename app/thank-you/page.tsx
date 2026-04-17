import Link from "next/link";
import { queryBinanceOrder } from "@/lib/binance";

interface ThankYouPageProps {
  searchParams: Promise<{ order?: string }>;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const { order: merchantTradeNo } = await searchParams;

  // Optionally query order status for display
  let orderDetails: { amount?: string; currency?: string } = {};
  if (merchantTradeNo) {
    try {
      const result = await queryBinanceOrder(merchantTradeNo);
      if (result.status === "SUCCESS") {
        // result contains tradeStatus, transactionId, etc.
      }
    } catch {
      // Non-critical — page still shows without order details
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">

        {/* Success icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Thank You! 💛
        </h1>

        <p className="text-gray-500 text-sm leading-relaxed mb-2">
          Your donation has been received and will go directly towards
          cancer research and patient support programs.
        </p>

        <p className="text-gray-400 text-xs mb-8">
          A confirmation receipt has been sent to your email address.
        </p>

        {merchantTradeNo && (
          <div className="bg-white rounded-xl border border-gray-100 px-6 py-4 mb-8 text-left shadow-sm">
            <p className="text-xs text-gray-400 mb-1">Order reference</p>
            <p className="text-sm font-mono text-gray-700">{merchantTradeNo}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Donate again
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Back to home
          </Link>
        </div>

      </div>
    </main>
  );
}
