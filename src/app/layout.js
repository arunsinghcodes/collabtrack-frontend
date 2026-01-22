// "use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
// import { useEffect } from "react";

export const metadata = {
  title: "CollabTrack",
  description: "Project Management System"
};

export default function RootLayout({ children }) {

//   useEffect(() => {
//   const handler = (e) => {
//     if ((e.metaKey || e.ctrlKey) && e.key === "b") {
//       e.preventDefault();
//       toggleCollapse();
//     }
//   };

//   window.addEventListener("keydown", handler);
//   return () => window.removeEventListener("keydown", handler);
// }, []);


  return (
    <html lang="en" className="dark">
      <body>
      <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
