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

                {/* <ContactoForm postUrl={`$(process.env.NEXT_APP_API_URL)/api/contacto`}/> */}
                <ContactoForm postUrl={`${process.env.NEXT_PUBLIC_API_URL}/api/contacto`} />

            </div>
        </main>

    )
}