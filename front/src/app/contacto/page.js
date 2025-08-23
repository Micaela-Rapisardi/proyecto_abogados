import "@/styles/contacto.css";

import ContactoForm from "@/components/ContactoForm";

export const metadata = {
    title: "Contacto B&DM Abogados",
    description: "Servicios legales",
};

export default function Contacto() {
    return (
        <main className="holder contacto">
            <div>
                <h3>Dejanos tu consulta</h3>

                <ContactoForm postUrl="http://localhost:3000/api/contacto"/>

            </div>
        </main>

    )
}