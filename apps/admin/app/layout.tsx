import 'ui/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Favicon from '../public/favicon.ico';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store Admin',
  description: 'Store Admin to manage products and orders',
  icons: [{ rel: 'icon', url: Favicon.src}],
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
