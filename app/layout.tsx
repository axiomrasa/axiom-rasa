import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react'; // Yeni import

const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'AXIOM RASA',
  description: 'Creative Technologist & UI Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${mono.className} bg-black antialiased overflow-hidden`}>
        {/* Background Ambience */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_70%)] opacity-10" />
        </div>
        
        <div className="relative z-10">
          {children}
        </div>

        {/* Vercel Analytics tracking point */}
        <Analytics /> 
      </body>
    </html>
  );
}