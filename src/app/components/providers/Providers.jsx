'use client';
import { SWRConfig } from 'swr';

export default function Providers({ children }) {
  return <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>;
}
