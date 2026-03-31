import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

/**
 * @module Rasa_Core
 * @description Primary typography configuration for the Axiom Rasa ecosystem.
 */
const mono = JetBrains_Mono({ 
  subsets: ['latin'], 
  display: 'swap' 
});

/**
 * @constant metadata
 * @description SEO and document header parameters.
 */
export const metadata = {
  title: 'AXIOM RASA',
  description: 'Creative Technologist & UI Engineer',
};

/**
 * @function RootLayout
 * @description Core structural wrapper providing global typography and ambient background layers.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mono.className} bg-black antialiased overflow-hidden`}>
        
        {/* Layer: Ambient Visual Matrix */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_70%)] opacity-10" />
        </div>

        {/* Layer: Primary Application Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Layer: Telemetry & Performance Tracking */}
        <Analytics />
      </body>
    </html>
  );
}