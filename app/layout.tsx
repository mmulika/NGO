import type { Metadata } from "next";
import "./globals.css";
import PayPalModal from "./components/ui/PayPalModal";

export const metadata: Metadata = {
  title: "TEEM Foundation - Empowering Youth Across Kenya",
  description:
    "Teenage Girls Empowerment Foundation (TEEM) is dedicated to empowering adolescent girls and boys across Kenya, focusing on breaking cycles of poverty, early pregnancies, and lack of education.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning={true}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <PayPalModal />
        {children}
      </body>
    </html>
  );
}
