import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "B&DM Abogados",
  description: "Servicios legales - Estudio jurídico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
          <Header />  
          <Nav />
          {children} 
          <Footer />
      </body>
    </html>
  );
};
