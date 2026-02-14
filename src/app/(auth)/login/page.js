"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginApi } from "@/services/auth.service";
import { Loader2, LogIn, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/auth-store";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const login = useAuthStore((s) => s.login);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const success = await login({ email, password });

      if (success) {
        router.replace("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
        w-[380px]
        rounded-xl
        border
        bg-background/80
        backdrop-blur-md
        p-8
        shadow-lg
      "
    >
      {/* Title */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold">CollabTrack</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Sign in to your workspace
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4">
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

        <div>
          <label className="text-sm font-medium">Password</label>

          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
        w-full rounded-md border bg-background
        px-3 py-2 pr-10
        text-sm outline-none
        focus:border-primary focus:ring-1 focus:ring-primary
      "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
        absolute right-2 top-1/2 -translate-y-1/2
        text-muted-foreground
        hover:text-foreground
      "
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="
            mt-2 flex w-full items-center justify-center gap-2
            rounded-md bg-primary px-4 py-2 text-sm font-medium
            text-primary-foreground
            hover:bg-primary/90
            disabled:opacity-60
          "
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <LogIn className="h-4 w-4" />
          )}
          Login
        </button>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} CollabTrack
      </div>
    </motion.div>
  );
}
