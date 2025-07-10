import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Appbar from "@/components/shared/Appbar";
import Footer from "@/components/shared/Footer";
import TopPageBtn from "@/components/shared/TopPageBtn";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code", // optional for CSS usage
  weight: ["400", "500", "600", "700"], // or just '400' if you only need regular
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    template: "%s | TripWhirl",
    default: "Book your holidays in India | TripWhirl Site",
  },
  description:
    "Book holidays, weekend getaways, and travel experiences across India and beyond with TripWhirl. Trusted deals, curated stays, and seamless planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={firaCode.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Appbar />
          <TopPageBtn />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
