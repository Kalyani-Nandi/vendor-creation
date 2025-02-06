import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientProvider from "./components/ClientProvider";
import AuthGuard from "./auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JS Tigers - Next.js App",
  description: "A modern Next.js application with Prisma and PostgreSQL",
};

function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        <ClientProvider>
          <AuthGuard>
            <Navbar />
            <main className="container mx-auto px-4 py-6 h-full min-h-screen">
              {children}
            </main>
            <Footer />
          </AuthGuard>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
export default RootLayout;
