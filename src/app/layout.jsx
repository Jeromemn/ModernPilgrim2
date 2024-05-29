import { Inter } from 'next/font/google';
import './globals.css';
import dotenv from 'dotenv';

dotenv.config();

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Modern Pilgrim',
  description: 'Open source shared travel tips and tricks',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-soft-white`}>{children}</body>
    </html>
  );
}
