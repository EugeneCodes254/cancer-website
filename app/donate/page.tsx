"use client";

import { createDonationAction } from "@/action/donate";
import { useActionState, useState } from "react";
// import { createDonationAction } from "@/actions/donate";

const PRESET_AMOUNTS = ["10", "25", "50", "100", "250"];

const CURRENCIES = [
  { value: "USDT", label: "USDT", icon: "₮", desc: "Tether" },
  { value: "USDC", label: "USDC", icon: "$", desc: "USD Coin" },
  { value: "BNB",  label: "BNB",  icon: "◈", desc: "BNB Chain" },
  { value: "BTC",  label: "BTC",  icon: "₿", desc: "Bitcoin" },
  { value: "ETH",  label: "ETH",  icon: "Ξ", desc: "Ethereum" },
] as const;

export default function DonatePage() {
  const [state, formAction, isPending] = useActionState(createDonationAction, {});
  const [selectedAmount, setSelectedAmount] = useState("25");
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [showCustom, setShowCustom] = useState(false);

  function handleAmountClick(amt: string) {
    if (amt === "custom") {
      setShowCustom(true);
      setSelectedAmount("custom");
    } else {
      setShowCustom(false);
      setSelectedAmount(amt);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 mb-4">
            <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Make a Donation</h1>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            Your contribution supports cancer research and helps families in their fight.
            100% of donations go directly to our programs.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form action={formAction} className="space-y-7">

            {/* Step 1: Choose Currency */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                1. Choose your cryptocurrency
              </label>
              <div className="grid grid-cols-5 gap-2">
                {CURRENCIES.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setSelectedCurrency(c.value)}
                    className={`flex flex-col items-center justify-center py-3 px-1 rounded-xl border-2 transition-all text-xs font-medium
                      ${selectedCurrency === c.value
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                  >
                    <span className="text-lg mb-1">{c.icon}</span>
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
              <input type="hidden" name="currency" value={selectedCurrency} />
            </div>

            {/* Step 2: Choose Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                2. Select amount ({selectedCurrency})
              </label>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {PRESET_AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleAmountClick(amt)}
                    className={`py-2.5 rounded-lg border-2 text-sm font-semibold transition-all
                      ${selectedAmount === amt
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                  >
                    {amt} {selectedCurrency}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => handleAmountClick("custom")}
                  className={`py-2.5 rounded-lg border-2 text-sm font-semibold transition-all
                    ${selectedAmount === "custom"
                      ? "border-rose-500 bg-rose-50 text-rose-700"
                      : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                >
                  Custom
                </button>
              </div>

              {/* Hidden amount input for preset values */}
              {!showCustom && (
                <input type="hidden" name="amount" value={selectedAmount} />
              )}

              {/* Custom amount input */}
              {showCustom && (
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <span className="text-gray-400 text-sm font-medium">{selectedCurrency}</span>
                  </div>
                  <input
                    type="number"
                    name="customAmount"
                    min="1"
                    step="0.01"
                    placeholder="Enter amount"
                    className="w-full pl-16 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-rose-500 focus:outline-none text-sm"
                    autoFocus
                  />
                  <input type="hidden" name="amount" value="custom" />
                </div>
              )}
            </div>

            {/* Step 3: Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                3. Your email (for receipt)
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-rose-500 focus:outline-none text-sm transition-colors"
              />
            </div>

            {/* Error message */}
            {state?.error && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                </svg>
                {state.error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-rose-600 hover:bg-rose-700 disabled:bg-rose-300 text-white font-semibold py-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
            >
              {isPending ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Connecting to Binance Pay…
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                  Donate with Binance Pay
                </>
              )}
            </button>

          </form>

          {/* Trust badges */}
          <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
              Secured by Binance Pay
            </span>
            <span>·</span>
            <span>No crypto wallet needed</span>
            <span>·</span>
            <span>Receipt via email</span>
          </div>
        </div>
      </div>
    </main>
  );
}
