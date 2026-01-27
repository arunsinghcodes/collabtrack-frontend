"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MailCheck, Loader2 } from "lucide-react";
import { api } from "@/lib/api";
import Link from "next/link";

export default function ResendVerificationPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleResend = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await api.post("/auth/resend-email-verification", {
        email,
      });

      setSuccess(true);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Unable to resend verification email"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          w-full max-w-md
          rounded-xl border
          bg-background/80 backdrop-blur
          p-8 shadow-xl
        "
      >
        {!success ? (
          <>
            {/* icon */}
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MailCheck className="h-10 w-10 text-primary" />
              </div>
            </div>

            {/* text */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold">
                Resend verification email
              </h1>

              <p className="text-sm text-muted-foreground">
                Enter your email address and we’ll send you a new verification
                link.
              </p>
            </div>

            {/* form */}
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    mt-1 w-full rounded-md border bg-background px-3 py-2
                    text-sm outline-none
                    focus:border-primary focus:ring-1 focus:ring-primary
                  "
                />
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <button
                onClick={handleResend}
                disabled={loading}
                className="
                  flex w-full items-center justify-center gap-2
                  rounded-md bg-primary px-4 py-2
                  text-sm font-medium text-primary-foreground
                  hover:bg-primary/90
                  disabled:opacity-60
                "
              >
                {loading && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                Resend verification
              </button>
            </div>

            {/* footer */}
            <div className="mt-6 text-center text-xs text-muted-foreground">
              <Link
                href="/login"
                className="hover:underline"
              >
                Back to login
              </Link>
            </div>
          </>
        ) : (
          <>
            {/* success state */}
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MailCheck className="h-10 w-10 text-primary" />
              </div>
            </div>

            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold">
                Verification email sent
              </h1>

              <p className="text-sm text-muted-foreground">
                Please check your inbox and click the verification link.
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="
                  inline-flex items-center justify-center
                  rounded-md bg-primary px-4 py-2
                  text-sm font-medium text-primary-foreground
                  hover:bg-primary/90
                "
              >
                Go to login
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
