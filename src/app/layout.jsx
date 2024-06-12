import { Inter } from 'next/font/google';
import './globals.css';
import dotenv from 'dotenv';
import { SessionProvider } from 'next-auth/react';

dotenv.config();

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Modern Pilgrim',
  description: 'Open source shared travel tips and tricks',
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-soft-white`}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
