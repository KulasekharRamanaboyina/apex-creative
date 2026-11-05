import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import '../index.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import apexLogo from '@/assets/logo.png';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'APEX CREATIVE — IDEAS · VISUALS · IMPACT',
  description: 'Official website of APEX CREATIVE. A new, ambitious creative design and digital marketing agency built to combine strategy, craft, and digital growth.',
  icons: {
    icon: apexLogo.src,
    apple: '/brand/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const saved = localStorage.getItem('apex-theme'); const theme = saved === 'light' || saved === 'dark' ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.dataset.theme = theme; } catch { document.documentElement.dataset.theme = 'light'; } })();`,
          }}
        />
      </head>
      <body className="bg-[#f5f3ef] text-[#080908] antialiased selection:bg-[#ffc900] selection:text-[#080908] font-sans overflow-x-hidden min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
