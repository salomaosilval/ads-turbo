import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/app/_providers/theme-provider";
import ThemeToggle from "@/app/_components/ui/theme-toggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ads Turbo | Domine o Tráfego Pago e Aumente suas Vendas",
  description:
    "Aprenda estratégias comprovadas de tráfego pago para Facebook e Google Ads. Aumente suas vendas com anúncios que convertem. Curso completo + mentoria exclusiva.",
  keywords:
    "tráfego pago, facebook ads, google ads, marketing digital, anúncios online, curso de tráfego",
  authors: [{ name: "Ads Turbo" }],
  openGraph: {
    title: "Ads Turbo | Domine o Tráfego Pago e Aumente suas Vendas",
    description:
      "Aprenda estratégias comprovadas de tráfego pago para Facebook e Google Ads. Aumente suas vendas com anúncios que convertem.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
