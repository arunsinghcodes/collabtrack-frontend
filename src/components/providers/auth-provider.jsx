"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/auth-store";

export default function AuthProvider({ children }) {
  // const fetchUser = useAuthStore((s) => s.fetchUser);
  // const loading = useAuthStore((s) => s.loading);

  // useEffect(() => {
  //   fetchUser();
  // }, [fetchUser]);

  // if (loading) {
  //   return null; // or loading screen
  // }

  return children;
}
