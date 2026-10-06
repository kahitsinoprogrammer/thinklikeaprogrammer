import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Think Like A Programmer | Build useful things with technology",
  description: "Beginner-friendly courses in programming, practical problem-solving, and AI-assisted development.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
