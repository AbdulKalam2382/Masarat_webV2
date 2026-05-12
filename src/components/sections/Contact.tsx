"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Globe, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import Captcha from "@/components/ui/Captcha";

const schema = z.object({
  firstName: z.string().min(2, 'First name is required').regex(/^[a-zA-Z\s\u0600-\u06FF\-\.]+$/, 'Invalid name format'),
  lastName: z.string().min(2, 'Last name is required').regex(/^[a-zA-Z\s\u0600-\u06FF\-\.]+$/, 'Invalid name format'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Invalid phone number').regex(/^[0-9+\s\-\(\)]+$/, 'Invalid phone format'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const { t, isRTL } = useLanguage();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, captchaToken }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setStatus('success');
      reset();
      setCaptchaToken(null);
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message);
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage(null);
      }, 6000);
    }
  };

  const onError = (errors: any) => {
    const firstError = Object.values(errors)[0] as any;
    if (firstError) {
      setErrorMessage(firstError.message);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage(null);
      }, 5000);
    }
  };

  const getFieldStatus = (name: keyof FormData) => {
    if (errors[name]) return "error";
    if (dirtyFields[name] && !errors[name]) return "valid";
    return "idle";
  };

  const inputClasses = (name: keyof FormData) => cn(
    "bg-[#F8FAFC] border-[0.5px] rounded-[12px] px-4 py-3 outline-none transition-all text-sm text-brand-ink placeholder-[#A1A1A1] w-full",
    {
      "border-[#E5E5EA] dark:border-[#1E3150] focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20": getFieldStatus(name) === "idle",
      "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20": getFieldStatus(name) === "error",
      "border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500/20": getFieldStatus(name) === "valid",
    }
  );

  const shakeAnimation = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 }
    }
  };

  const contactInfo = [
    { icon: <Globe size={20} />, text: "www.masaratkwt.com", href: "https://www.masaratkwt.com" },
    { icon: <Mail size={20} />, text: "info@masaratkwt.com", href: "mailto:info@masaratkwt.com" },
    { icon: <Phone size={20} />, text: "+965 67013229", href: "tel:+96567013229" },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0B1221] overflow-hidden transition-colors duration-500">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "p-6 bg-[#EEF3FB] dark:bg-[#10192C] border-[0.5px] border-[#E2EAF8] dark:border-[#1E3150] rounded-[16px] flex items-center gap-6 hover:border-blue-500/50 transition-all group shadow-sm",
                    isRTL ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className="p-3 bg-blue-50 dark:bg-blue-600/10 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {info.icon}
                  </div>
                  <span className="text-sm font-semibold tracking-tight text-brand-ink dark:text-[#F5F5F7]">
                    {info.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#10192C] border-[0.5px] border-[#E2EAF8] dark:border-[#1E3150] p-10 md:p-14 rounded-[40px] shadow-2xl relative overflow-hidden transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.03)_0%,_transparent_50%)] pointer-events-none" />
            
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className={cn("text-xs font-bold uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1A6] px-1", isRTL && "text-right")}>
                    {t("contact_page.form_firstname")}
                  </label>
                  <input 
                    {...register("firstName")}
                    type="text" 
                    placeholder={isRTL ? "أحمد" : "John"}
                    className={cn(inputClasses("firstName"), isRTL && "text-right")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={cn("text-xs font-bold uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1A6] px-1", isRTL && "text-right")}>
                    {t("contact_page.form_lastname")}
                  </label>
                  <input 
                    {...register("lastName")}
                    type="text" 
                    placeholder={isRTL ? "علي" : "Doe"}
                    className={cn(inputClasses("lastName"), isRTL && "text-right")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className={cn("text-xs font-bold uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1A6] px-1", isRTL && "text-right")}>
                  {t("contact_page.form_email")}
                </label>
                <input 
                  {...register("email")}
                  type="email" 
                  placeholder="name@company.com"
                  className={cn(inputClasses("email"), isRTL && "text-right")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className={cn("text-xs font-bold uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1A6] px-1", isRTL && "text-right")}>
                  {isRTL ? "رقم الهاتف" : "Phone Number"}
                </label>
                <input 
                  {...register("phone")}
                  type="tel" 
                  placeholder="+965 1234 5678"
                  className={cn(inputClasses("phone"), isRTL && "text-right")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className={cn("text-xs font-bold uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1A6] px-1", isRTL && "text-right")}>
                  {t("contact_page.form_company")}
                </label>
                <input 
                  {...register("company")}
                  type="text" 
                  placeholder={isRTL ? "اسم الشركة" : "ACME Corp"}
                  className={cn(inputClasses("company"), isRTL && "text-right")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className={cn("text-xs font-bold uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1A6] px-1", isRTL && "text-right")}>
                  {t("contact_page.form_message")}
                </label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  placeholder={isRTL ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
                  className={cn(inputClasses("message"), "resize-none", isRTL && "text-right")}
                />
              </div>

              <div className="mt-2">
                <Captcha onVerify={setCaptchaToken} isRTL={isRTL} />
              </div>

              <motion.div
                animate={Object.keys(errors).length > 0 ? "shake" : ""}
                variants={shakeAnimation}
              >
                <button 
                  disabled={status === 'loading' || status === 'success' || !captchaToken}
                  className={cn(
                    "w-full py-5 rounded-[16px] font-bold text-base flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg",
                    {
                      "bg-[#1B3A6B] text-white hover:bg-blue-700 hover:shadow-blue-600/20 hover:scale-[1.02]": status === 'idle' || status === 'error',
                      "bg-blue-600 text-white cursor-wait": status === 'loading',
                      "bg-green-500 text-white": status === 'success',
                      "flex-row-reverse": isRTL
                    }
                  )}
                >
                  {status === 'idle' && (
                    <>
                      {t("contact_page.form_submit")}
                      <Send size={18} className={cn("transition-transform", isRTL ? "rotate-180" : "group-hover:translate-x-1 group-hover:-translate-y-1")} />
                    </>
                  )}
                  {status === 'loading' && (
                    <>
                      {t("contact_page.form_sending")}
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      {t("contact_page.form_sent")}
                      <CheckCircle2 size={18} />
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      {isRTL ? "حاول مرة أخرى" : "Try Again"}
                      <AlertCircle size={18} />
                    </>
                  )}
                </button>
              </motion.div>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={cn("flex items-center gap-2 text-green-500 bg-green-500/10 p-4 rounded-[12px] border border-green-500/20", isRTL && "flex-row-reverse")}
                  >
                    <CheckCircle2 size={18} />
                    <p className="text-sm font-semibold">{t("contact_page.form_success")}</p>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={cn("flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-[12px] border border-red-500/20", isRTL && "flex-row-reverse")}
                  >
                    <AlertCircle size={18} />
                    <p className="text-sm font-semibold">{errorMessage || t("contact_page.form_error")}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
