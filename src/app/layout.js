import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import KeyboardShortcuts from "@/components/providers/keyboard-shortcuts";
import "@/lib/axios-interceptor";
import AxiosProvider from "@/components/providers/axios-provider";

export const metadata = {
  title: "CollabTrack",
  description: "Project Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AxiosProvider />
          <KeyboardShortcuts />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
