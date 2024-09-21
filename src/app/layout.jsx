import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar/Navbar";
import { Gabarito, Poppins } from "next/font/google";
import Toolbar from "@/components/layouts/Toolbar/Toolbar";


// const gabarito = Gabarito({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ['900', '800', '700', '600', '500', '400', '300', '200', '100'],
  subsets: ['latin'],
  style: ['normal', 'italic']
});

export const metadata = {
  title: "Invitationery Asia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <div className="container mx-auto">
          <Navbar />
          <Toolbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
