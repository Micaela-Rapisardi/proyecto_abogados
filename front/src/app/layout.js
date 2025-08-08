import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export const metadata = {
  title: "B&DM Abogados",
  description: "Servicios legales - Estudio jurídico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
          <Header/>  
          <Nav/>
          {children}
      </body>
      <Footer/>
    </html>
  );
};
