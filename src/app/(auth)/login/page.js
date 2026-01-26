"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginApi } from "@/services/auth.service";
import { Loader2, LogIn } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await loginApi({ email, password });

      localStorage.setItem("accessToken", res.data.data.accessToken);

      router.push("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
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
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              mt-1 w-full rounded-md border bg-background px-3 py-2
              text-sm outline-none
              focus:border-primary focus:ring-1 focus:ring-primary
            "
          />
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
    </div>
  );
}
