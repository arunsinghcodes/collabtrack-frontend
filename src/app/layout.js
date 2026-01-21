import "./globals.css";

export const metadata = {
  title: "CollabTrack",
  description: "Project Management System"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
