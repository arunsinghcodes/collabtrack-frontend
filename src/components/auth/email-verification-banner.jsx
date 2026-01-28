"use client";

import { MailWarning, X } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/api";

export default function EmailVerificationBanner({ user }) {
  const [hidden, setHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  if (hidden || user?.isEmailVerified) return null;

  const resendEmail = async () => {
    try {
      setLoading(true);
      await api.post("/auth/resend-email-verification");
      setSent(true);
    } catch (err) {
      alert(
        err?.response?.data?.message ||
          "Failed to resend verification email"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-b bg-yellow-50 dark:bg-yellow-900/20 px-6 py-3 text-sm flex items-center justify-between">
      <div className="flex items-center gap-3">
        <MailWarning className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />

        <div>
          <p className="font-medium text-yellow-800 dark:text-yellow-300">
            Verify your email address
          </p>

          <p className="text-yellow-700 dark:text-yellow-400">
            Please verify your email to unlock all features.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {!sent ? (
          <button
            onClick={resendEmail}
            disabled={loading}
            className="
              rounded-md bg-yellow-600 px-3 py-1.5
              text-white text-sm font-medium
              hover:bg-yellow-700
              disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Resend email"}
          </button>
        ) : (
          <span className="text-green-600 font-medium">
            Email sent ✓
          </span>
        )}

        <button
          onClick={() => setHidden(true)}
          className="rounded-md p-1 hover:bg-black/10 dark:hover:bg-white/10"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
