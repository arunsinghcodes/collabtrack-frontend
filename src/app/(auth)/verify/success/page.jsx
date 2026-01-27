"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VerifySuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          w-full max-w-md
          rounded-xl
          border
          bg-background/80
          backdrop-blur-md
          p-8
          shadow-xl
          text-center
        "
      >
        {/* icon */}
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex justify-center mb-4"
        >
          <CheckCircle2 className="h-16 w-16 text-primary" />
        </motion.div>

        {/* title */}
        <h1 className="text-2xl font-semibold mb-2">
          Email verified successfully
        </h1>

        {/* subtitle */}
        <p className="text-sm text-muted-foreground mb-6">
          Your email has been verified. You can now log in to your account.
        </p>

        {/* action */}
        <Link
          href="/login"
          className="
            inline-flex items-center justify-center gap-2
            rounded-md bg-primary px-6 py-2.5
            text-sm font-medium text-primary-foreground
            hover:bg-primary/90
            transition
          "
        >
          Go to login
          <ArrowRight className="h-4 w-4" />
        </Link>
        {/* footer */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          You may now close this tab safely.
        </p>
      </motion.div>
    </div>
  );
}
