//import "@/styles/novedades.css";

import NovedadItem from "@/components/NovedadItem";

export const metadata = {
    title: "B&DM Abogados",
    description: "Servicios legales",
};

export default async function Novedades() {
    const data = await fetch('${process.env.NEXT_APP_API_URL}/api/novedades')
    //const data = await fetch('http://http://localhost:3000/api/novedades')
    const novedades =await data.json();

    return (
        <section className="holder">
            <h2>Novedades</h2>

            {
                novedades.map((item) =><NovedadItem 
                    key={item.id}
                    titulo={item.titulo}
                    subtitulo={item.subtitulo}
                    cuerpo={item.cuerpo}/>)
            }

           {/*<NovedadItem />*/}
            
        </section>

    )
}