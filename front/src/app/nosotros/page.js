import "@/styles/nosotros.css";

export const metadata = {
  title: "B&DM Abogados",
  description: "Servicios legales",
};

export default function Nosotros() {

  return (
    <main className="holder">
        <div className="historia">
            <h3>Historia</h3>
            <p>B&DM Abogados nació con el objetivo de acompañar a las personas en la resolución de conflictos legales de manera profesional y humana.</p>
            <p>Desde nuestros inicios, hemos trabajado con responsabilidad y dedicación, construyendo una relación de confianza con nuestros clientes y con la comunidad de Villa Bosch.</p>
            <p>Nos especializamos en diferentes ramas del derecho, para brindarte un asesoramiento integral y personalizado</p>
        </div>
        <div className="staff">
            <h3>Staff</h3>
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros1.jpg" alt="Juan Gomez"/>
                    <h5>Juan Gomez</h5>
                    <h6>Abogado</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate enim quae consequatur sequi necessitatibus possimus veritatis recusandae, inventore placeat laborum, deleniti sint deserunt, unde repellendus impedit. Velit cum eum illum?</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros2.jpg" alt="Pedro Fernandez"/>
                    <h5>Pedro Fernandez</h5>
                    <h6>Abogado</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate enim quae consequatur sequi necessitatibus possimus veritatis recusandae, inventore placeat laborum, deleniti sint deserunt, unde repellendus impedit. Velit cum eum illum?</p>
                </div>
            </div>
        </div>
    </main>
  )
}