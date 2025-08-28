"use client";

import Image from "next/image";

export default function Carousel() {
  const images = [
    "/img/galeria/inmomap.jpg",
    "/img/galeria/dipaolo.jpg",
    "/img/galeria/vitolo.jpg",
    "/img/galeria/dimena.jpg",
    "/img/galeria/escribania_moleon.jpg",
    "/img/galeria/pucciano.jpg",
    "/img/galeria/uom.jpg",
  ];

  return (
    <div
      id="galeriaCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="contenedor-padre">
        <div className="div-a-centrar">
          <div className="carousel-inner">
            {images.map((src, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <Image
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  className="d-block w-50 mx-auto"
                  width={400}
                  height={250}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controles */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#galeriaCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#galeriaCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}