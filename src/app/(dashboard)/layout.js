"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import EmailVerificationBanner from "@/components/auth/email-verification-banner";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const { user, loading, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return null; // or full screen loader
  }

  if (!user) return null;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <EmailVerificationBanner user={user} />
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
