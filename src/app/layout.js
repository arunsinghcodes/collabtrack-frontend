import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

export const metadata = {
  title: "CollabTrack",
  description: "Project Management System"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
      <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
