"use client";

import { useState, useEffect } from "react";
import { Check, ShieldCheck, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CaptchaProps {
  onVerify: (token: string | null) => void;
  isRTL?: boolean;
}

export default function Captcha({ onVerify, isRTL = false }: CaptchaProps) {
  const [status, setStatus] = useState<"idle" | "verifying" | "success">("idle");

  const handleVerify = () => {
    if (status !== "idle") return;
    setStatus("verifying");
    
    // Simulate verification delay
    setTimeout(() => {
      setStatus("success");
      onVerify("verified-token-" + Math.random().toString(36).substring(7));
    }, 1500);
  };

  return (
    <div className={cn(
      "w-full p-4 rounded-xl border border-[#E2EAF8] dark:border-[#1E3150] bg-[#F8FAFC] dark:bg-[#10192C]/50 flex items-center gap-4 select-none cursor-pointer group transition-all",
      status === "success" ? "border-green-500/50 bg-green-500/5" : "hover:border-blue-500/50",
      isRTL && "flex-row-reverse text-right"
    )}
    onClick={handleVerify}
    >
      <div className="relative flex-shrink-0">
        <div className={cn(
          "w-6 h-6 rounded border-2 transition-all flex items-center justify-center",
          status === "idle" && "border-[#CED4DA] dark:border-[#2D3F5E] group-hover:border-blue-500",
          status === "verifying" && "border-blue-500",
          status === "success" && "border-green-500 bg-green-500"
        )}>
          {status === "verifying" && (
            <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
          )}
          {status === "success" && (
            <Check className="w-4 h-4 text-white" />
          )}
        </div>
      </div>

      <div className="flex-1">
        <p className="text-[13px] font-medium text-brand-ink dark:text-[#F5F5F7]">
          {status === "idle" && (isRTL ? "أنا لست برنامج روبوت" : "I am not a robot")}
          {status === "verifying" && (isRTL ? "جاري التحقق..." : "Verifying...")}
          {status === "success" && (isRTL ? "تم التحقق" : "Verified")}
        </p>
        <p className="text-[10px] text-[#6B6B6B] dark:text-[#A1A1A6] mt-0.5 uppercase tracking-wider font-bold">
          {isRTL ? "مدعوم من مسار" : "Protected by Masarat Digital"}
        </p>
      </div>

      <div className="flex-shrink-0 opacity-20 group-hover:opacity-40 transition-opacity">
        <ShieldCheck className="w-6 h-6 text-brand-ink dark:text-white" />
      </div>
    </div>
  );
}
