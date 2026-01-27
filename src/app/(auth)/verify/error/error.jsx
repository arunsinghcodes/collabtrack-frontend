"use client";

import Link from "next/link";
import { XCircle, RefreshCcw, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function VerifyErrorPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-destructive/10 via-background to-background" />

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
        {/* icon */}
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-destructive/10 p-3">
            <XCircle className="h-10 w-10 text-destructive" />
          </div>
        </div>

        {/* text */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">
            Verification link invalid
          </h1>

          <p className="text-sm text-muted-foreground">
            This verification link is either expired or already used.
            Please request a new verification email.
          </p>
        </div>

        {/* actions */}
        <div className="mt-6 space-y-3">
          <Link
            href="/auth/resend-verification"
            className="
              flex items-center justify-center gap-2
              w-full rounded-md bg-primary px-4 py-2
              text-sm font-medium text-primary-foreground
              hover:bg-primary/90 transition
            "
          >
            <RefreshCcw className="h-4 w-4" />
            Resend verification email
          </Link>

          <Link
            href="/login"
            className="
              flex items-center justify-center gap-2
              w-full rounded-md border px-4 py-2
              text-sm font-medium
              hover:bg-muted transition
            "
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>
        </div>

        {/* footer */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          If the issue persists, contact support.
        </p>
      </motion.div>
    </div>
  );
}
