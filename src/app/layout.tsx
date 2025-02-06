import type { Metadata } from 'next';
import { Geist, Kirang_Haerang } from 'next/font/google';
import './globals.css';

// TODO: Fonts
const kirang = Kirang_Haerang({
  weight: '400',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Egg Timer',
  description: 'Time for the perfect yolk.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kirang} ${geistSans.variable}`}>{children}</body>
    </html>
  );
}
