import localFont from "next/font/local";
import "./globals.css";
import FooterWrapper from "./_components/common/wrabber/FotterWrabber";
import HeaderWrapper from "./_components/common/wrabber/HeaderWrabber";


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

export const metadata = {
  title: "RealEstate website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        <>
          <HeaderWrapper />

          <main className="w-full min-h-screen">{children}</main>

          <FooterWrapper />
        </>
      </body>
    </html>
  );
}