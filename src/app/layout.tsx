import type { Metadata } from 'next';
import { Geist, Hi_Melody, Kirang_Haerang } from 'next/font/google';
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

const hiMelody = Hi_Melody({
  weight: '400',
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
      <body className={`${kirang} ${geistSans.variable} ${hiMelody}`}>
        {children}
      </body>
    </html>
  );
}
