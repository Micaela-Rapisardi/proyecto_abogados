import "@/styles/novedades.css";
import NovedadItem from "@/components/NovedadItem";

export const metadata = {
    title: "B&DM Abogados",
    description: "Servicios legales",
};

export default async function Novedades() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/novedades`);
  const novedades = await data.json();

  // función para limitar a 200 palabras
  const limitarTexto = (texto, limitePalabras) => {
      const palabras = texto.split(" ");
      if (palabras.length <= limitePalabras) return texto;
      return palabras.slice(0, limitePalabras).join(" ") + "...";
  };

  return (
    <section className="holder">
        <h2>Novedades</h2>

        {novedades.map((item) => (
            <NovedadItem
                key={item.id}
                titulo={item.titulo}
                subtitulo={item.subtitulo}
                cuerpo={limitarTexto(item.cuerpo, 200)}
            />
        ))}
    </section>
  );
}

// import "@/styles/novedades.css";

// import NovedadItem from "@/components/NovedadItem";

// export const metadata = {
//     title: "B&DM Abogados",
//     description: "Servicios legales",
// };

// export default async function Novedades() {
//   const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/novedades`);
//   const novedades = await data.json();


    // return (
    //     <section className="holder">
    //         <h2>Novedades</h2>

    //         {
    //             novedades.map((item) =>
    //             <NovedadItem 
    //                 key={item.id}
    //                 titulo={item.titulo}
    //                 subtitulo={item.subtitulo}
    //                 cuerpo={limitarTexto(item.cuerpo, 200)}/>)
    //         }
        
    //     </section>

    // )
