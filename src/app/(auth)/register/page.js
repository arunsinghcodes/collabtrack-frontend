"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2, UserPlus } from "lucide-react";
import { registerApi } from "@/services/auth.service";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
  if (!name || !email || !password || !confirmPassword) {
    setError("All fields are required");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  try {
    setLoading(true);
    setError("");

    await registerApi({
      username: name, // ✅ IMPORTANT
      email,
      password,
    });

    router.push("/login");
  } catch (err) {
    setError(
      err?.response?.data?.message ||
      "Registration failed"
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
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
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold">Create account</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Start managing your projects
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="text-sm font-medium">Full name</label>
          <input
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              mt-1 w-full rounded-md border bg-background
              px-3 py-2 text-sm outline-none
              focus:border-primary focus:ring-1 focus:ring-primary
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              mt-1 w-full rounded-md border bg-background
              px-3 py-2 text-sm outline-none
              focus:border-primary focus:ring-1 focus:ring-primary
            "
          />
        </div>

        {/* Password */}
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
                px-3 py-2 pr-10 text-sm outline-none
                focus:border-primary focus:ring-1 focus:ring-primary
              "
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm font-medium">Confirm password</label>
          <div className="relative mt-1">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="
                w-full rounded-md border bg-background
                px-3 py-2 pr-10 text-sm outline-none
                focus:border-primary focus:ring-1 focus:ring-primary
              "
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showConfirm ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}

        {/* Button */}
        <button
          onClick={handleRegister}
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
            <UserPlus className="h-4 w-4" />
          )}
          Create account
        </button>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <button
          onClick={() => router.push("/login")}
          className="text-primary hover:underline"
        >
          Sign in
        </button>
      </div>
    </motion.div>
  );
}
