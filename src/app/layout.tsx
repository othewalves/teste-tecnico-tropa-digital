import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { UserProvider } from "./hooks/UserContext";

const RobotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Tropa Digital",
  description: "Desenvolvimento de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${RobotoFont.className}`}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
