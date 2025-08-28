import Carousel from "./Carousel";

export const metadata = {
  title: "Galería B&DM Abogados",
  description: "Servicios legales",
};

export default function GaleriaPage() {
  return (
    <main className="p-8">
      <h4 className="text-2xl font-bold mb-6">Quienes confían en nosotros...</h4>
      <Carousel />
    </main>
  );
}