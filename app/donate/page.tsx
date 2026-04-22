"use client";

import { createDonationAction } from "@/action/donate";
import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Heart, ShieldCheck, Loader2, Lock } from "lucide-react";
import Link from "next/link";

const PRESET_AMOUNTS = ["10", "25", "50", "100", "250"];

const CURRENCIES = [
  { value: "USDT", label: "USDT", symbol: "₮" },
  { value: "USDC", label: "USDC", symbol: "$" },
  { value: "BNB",  label: "BNB",  symbol: "◈" },
  { value: "BTC",  label: "BTC",  symbol: "₿" },
  { value: "ETH",  label: "ETH",  symbol: "Ξ" },
] as const;

export default function DonatePage() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(createDonationAction, {});
  const [selectedAmount, setSelectedAmount] = useState("25");
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [showCustom, setShowCustom] = useState(false);

  function handleAmountClick(amt: string) {
    setShowCustom(amt === "custom");
    setSelectedAmount(amt);
  }

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-pink-500/5 to-transparent pointer-events-none" />

      <div className="w-full max-w-lg relative z-10">
        
        {/* Navigation / Back Button */}
        <button 
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 font-body text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Mission
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6 border border-gold/20 shadow-glow-gold/10">
            <Heart size={28} className="fill-current" />
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            Make a <span className="italic text-gradient-gold">Donation</span>
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto font-body font-light">
            Your contribution supports cancer research and helps families in Kenya. 
            <span className="block mt-2 font-medium text-foreground/80 text-[10px] uppercase tracking-widest">
              100% On-Chain Transparency
            </span>
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card border border-border rounded-sm p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle top accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <form action={formAction} className="space-y-10">

            {/* Step 1 — Currency */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                  01 — Asset
                </p>
                <span className="text-[9px] text-gold uppercase tracking-tighter">Secure Gateway</span>
              </div>
              
              <div className="grid grid-cols-5 gap-2">
                {CURRENCIES.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setSelectedCurrency(c.value)}
                    className={`
                      flex flex-col items-center justify-center py-4 rounded-sm border transition-all duration-300
                      ${selectedCurrency === c.value
                        ? "border-gold bg-gold/5 text-gold shadow-glow-gold/20"
                        : "border-border text-muted-foreground hover:border-gold/30 hover:text-foreground"
                      }
                    `}
                  >
                    <span className="text-lg mb-1 leading-none font-display">{c.symbol}</span>
                    <span className="text-[9px] font-bold tracking-widest">{c.label}</span>
                  </button>
                ))}
              </div>
              <input type="hidden" name="currency" value={selectedCurrency} />
            </div>

            {/* Step 2 — Amount */}
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                02 — Amount ({selectedCurrency})
              </p>
              <div className="grid grid-cols-3 gap-2">
                {PRESET_AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleAmountClick(amt)}
                    className={`
                      py-4 rounded-sm border text-xs font-bold transition-all duration-300
                      ${selectedAmount === amt
                        ? "border-gold bg-gold/5 text-gold shadow-glow-gold/20"
                        : "border-border text-muted-foreground hover:border-gold/30"
                      }
                    `}
                  >
                    {amt}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => handleAmountClick("custom")}
                  className={`
                    py-4 rounded-sm border text-xs font-bold transition-all duration-300
                    ${selectedAmount === "custom"
                      ? "border-gold bg-gold/5 text-gold shadow-glow-gold/20"
                      : "border-border text-muted-foreground hover:border-gold/30"
                    }
                  `}
                >
                  Custom
                </button>
              </div>

              {!showCustom && <input type="hidden" name="amount" value={selectedAmount} />}

              {showCustom && (
                <div className="relative mt-4 group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold text-[10px] font-bold tracking-widest pointer-events-none">
                    {selectedCurrency}
                  </div>
                  <input
                    type="number"
                    name="customAmount"
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    autoFocus
                    className="w-full pl-16 pr-4 py-4 bg-muted/50 border border-border rounded-sm text-sm font-body focus:border-gold focus:outline-none transition-all placeholder:text-muted-foreground/30"
                  />
                  <input type="hidden" name="amount" value="custom" />
                </div>
              )}
            </div>

            {/* Step 3 — Email */}
            <div className="space-y-4">
              <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                03 — Receipt Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="guardian@example.com"
                className="w-full px-5 py-4 bg-muted/50 border border-border rounded-sm text-sm font-body focus:border-gold focus:outline-none transition-all"
              />
            </div>

            {/* Error Message */}
            {state?.error && (
              <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-sm text-[11px] text-destructive font-bold uppercase tracking-widest flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
                {state.error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="group w-full bg-gold text-black font-body font-bold py-5 rounded-sm transition-all duration-500 text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-gold/10 hover:shadow-gold/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0"
            >
              {isPending ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Encrypting Transaction...
                </>
              ) : (
                <>
                  <Lock size={14} />
                  Authorize Binance Pay
                </>
              )}
            </button>

          </form>

          {/* Trust Footer */}
          <div className="mt-10 pt-8 border-t border-border/40 flex flex-col gap-4">
            <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold">
              <span className="flex items-center gap-2">
                <ShieldCheck size={12} className="text-gold" />
                Secured by Binance Pay
              </span>
              <span>v4.0.1 Protocol</span>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <p className="mt-8 text-center font-body text-[10px] text-muted-foreground uppercase tracking-widest">
          Need help? <Link href="/support" className="text-gold hover:underline">Contact Support</Link>
        </p>
      </div>
    </main>
  );
}
