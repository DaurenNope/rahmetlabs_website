import './globals.css';
import { Syne, Inter, Space_Grotesk } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Rahmet Labs - We Automate Things That You Hate To Do',
  description: 'AI, Web3, automation, and web development. We transform businesses through intelligent systems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}