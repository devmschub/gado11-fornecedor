import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Gado 11 Antecipa - Liquidez Imediata',
  description: 'Liquidez imediata para sua empresa com agilidade e segurança.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} font-sans antialiased bg-[#061a0a] text-white overflow-x-hidden selection:bg-[#13ec5b] selection:text-[#061a0a]`}
      >
        {children}
      </body>
    </html>
  );
}
