"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";

export default function LoginPage() {
  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await login(form);
      router.push("/dashboard");
    } catch (err) {
      alert(err.message || "Login failed");
    }
  };

  return (
    <form onSubmit={submit} className="mx-auto mt-32 max-w-sm space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        placeholder="Email"
        className="w-full border p-2"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <button className="w-full bg-black text-white p-2">Login</button>
    </form>
  );
}
