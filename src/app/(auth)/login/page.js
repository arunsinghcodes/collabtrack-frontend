"use client";

import { useState } from "react";
import { loginApi } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginApi({ email, password });

      localStorage.setItem("accessToken", res.data.data.accessToken);

      router.push("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-80 space-y-4">
        <input
          placeholder="Email"
          className="w-full border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white p-2"
        >
          Login
        </button>
      </div>
    </div>
  );
}
