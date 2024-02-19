import Navbar from "@/Components/Navbar/Navbar";
import  Footer from "@/Components/Footer/Footer";
import './globals.css';
import {Inter} from 'next/font/google'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="container">
        <Navbar/>
        {children}
        <Footer/>
        </div>
    
        </body>
    </html>
  )
}