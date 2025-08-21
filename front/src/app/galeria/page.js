import Image from "next/image";
import "@/styles/galeria.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const metadata = {
  title: "Galeria B&DM Abogados",
  description: "Servicios legales",
};

export default function Galeria() {
  const imagenes = [
    { src: "img/galeria/inmomap.jpg", alt: "InmoMap" },
    { src: "img/galeria/dipaolo.jpg", alt: "Di Paolo Propiedades" },
    { src: "img/galeria/pucciano.jpg", alt: "Escribania Pucciano" },
    { src: "img/galeria/uom.jpg", alt: "UOM - San Martin" },
    { src: "img/galeria/dimena.jpg", alt: "Di Menna Propiedades" },
    { src: "img/galeria/vitolo.jpg", alt: "Aseguradora - Miguel Vitolo" },
    { src: "img/galeria/escribania Moleon.jpg", alt: "Moleon Escribania" },
  ];

  return (
    <main className="holder container py-5">
      <h3 className="mb-4 text-center">Quienes nos eligen...</h3>

      <div
        id="galeriaCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner text-center">
          {imagenes.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="2000" // cambia de imagen cada 2 segundos
            >
              <Image
                src={`/${img.src}`}
                alt={img.alt}
                width={400}
                height={150}
                className="d-inline-block rounded"
              />
              {/* <div className="carousel-caption d-none d-md-block">
                <h6>{img.alt}</h6>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

/*import "@/styles/galeria.css";

export const metadata = {
  title: "Galeria B&DM Abogados",
  description: "Servicios legales",
};

export default function Galeria() {
    return (
        <main className="holder">
        <div className="galeria">
            <h3>Quienes nos eligen...</h3>
            <img src="img/galeria/inmomap.jpg" alt="InmoMap"/>
            <img src="img/galeria/dipaolo.jpg" alt="Di Paolo Propiedades"/>
            <img src="img/galeria/pucciano.jpg" alt="Escribania Pucciano"/>
            <img src="img/galeria/uom.jpg" alt="UOM - San Martin"/>
            <img src="img/galeria/dimena.jpg" alt="Di Menna Propiedades"/>
            <img src="img/galeria/vitolo.jpg" alt="Aseguradora - Miguel Vitolo"/>
            <img src="img/galeria/escribania Moleon.jpg" alt="Moleon Escribania"/>

        </div>
    </main>
    )
}*/