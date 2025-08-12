//import "@/styles/globals.css"
import "@/styles/home.css";

//import Image from "next/image";
//import styles from "./page.module.css";

export default function Home() {

  return (
    <main className="holder">
           <div className="bienvenidos">
            <section className="bienvenido">
                <h3>Bienvenidos</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe perspiciatis aperiam exercitationem possimus, quibusdam repellendus quos quisquam sed cupiditate eveniet accusamus, ab odit natus esse, ea sit voluptatibus modi aliquid!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae eveniet accusamus repellendus quo ex ipsa temporibus, cumque non cupiditate consectetur maxime accusantium landitiis, exercitationem quos saepe iusto iste asperiores voluptatibus!</p>
            </section>
        </div>

        <div>
            <section className="py-5 text-center">
                <div className="container">
                    <h3 className="mb-4">Nuestras Áreas De Especialización</h3>
                    <div className="row row-cols-1 row-cols-md-4 g-4">

                        <div className="col">
                            <div className="card h-100 text-center p-3">
                                <div className="icono mb-2">
                                    <img src="img/assets/icons/civil.svg" alt="Derecho Civil" width="40"></img>
                                </div>
                                <h5 className="card-title">Derecho Civil</h5>
                                <p className="card-text">Soluciones legales en conflictos patrimoniales, contratos y
                                    relaciones civiles.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-3">
                                <div className="icono mb-2">
                                    <img src="img/assets/icons/laboral.svg" alt="Derecho Laboral" width="40"></img>
                                </div>
                                <h5 className="card-title">Derecho Laboral</h5>
                                <p className="card-text">Defendemos tus derechos como trabajador ante despidos, accidentes y
                                    conflictos.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-3">
                                <div className="icono mb-2">
                                    <img src="img/assets/icons/suseciones.svg" alt="Sucesiones" width="40"></img>
                                </div>
                                <h5 className="card-title">Sucesiones</h5>
                                <p className="card-text">Asesoramos con claridad en cada paso del proceso sucesorio.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-3">
                                <div className="icono mb-2">
                                    <img src="img/assets/icons/siniestro transito.svg" alt="Siniestros de Tránsito"
                                        width="40"></img>
                                </div>
                                <h5 className="card-title">Siniestros de Tránsito</h5>
                                <p className="card-text">Reclamamos indemnizaciones por accidentes y lesiones sufridas en el
                                    tránsito.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-3">
                                <div className="icono mb-2">
                                    <img src="img/assets/icons/danos.svg" alt="Daños" width="40"></img>
                                </div>
                                <h5 className="card-title">Daños</h5>
                                <p className="card-text">Acciones legales por daños y perjuicios sufridos en distintos
                                    ámbitos.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-3">
                                <div className="icono mb-2">
                                    <img src="img/assets/icons/ejecuciones.svg" alt="Ejecuciones" width="40"></img>
                                </div>
                                <h5 className="card-title">Ejecuciones</h5>
                                <p className="card-text">Recuperación de créditos mediante juicios ejecutivos y vías legales
                                    rápidas.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-3">
                                <div className="icono mb-2">
                                    <img src="img/assets/icons/desalojo.svg" alt="Desalojos" width="40"></img>
                                </div>
                                <h5 className="card-title">Desalojos</h5>
                                <p className="card-text">Acciones legales para recuperar inmuebles ocupados o impagos.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-3">
                                <div className="icono mb-2">
                                    <img src="img/assets/icons/reajustes.svg" alt="Reajustes" width="40"></img>
                                </div>
                                <h5 className="card-title">Reajustes Previsionales</h5>
                                <p className="card-text">Gestionamos reajustes de haberes jubilatorios y reconocimiento de
                                    derechos.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
       
    </main >
  );
}
