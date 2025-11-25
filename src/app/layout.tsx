import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';


import "./globals.css";


export const metadata: Metadata = {
  title: "Ouarda Qerrouech | Software Engineer",
    description: 'Software Engineer graduate with a passion for code and creativity.',

  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        
          <Header />
          <main className="flex-grow py-8">{children}</main>
          <Footer />

        
        
      </body>
    </html>
  );
}
