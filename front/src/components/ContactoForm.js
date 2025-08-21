export default function ContactoForm() {
    return (
        <main class="holder contacto">
        <div>
            <h3>Dejanos tu consulta</h3>
            <form action="" method="" className="formulario">
                <p>
                    <label htmlFor="nombre">Apellido y nombre</label>
                    <input type="text" id="name"/>
                </p>
                <p>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p className="acciones"><input type="submit" value="Enviar"/></p>
            </form>
        </div>
        
        <div class="datos">
            <h3>Contactanos</h3>
            <ul>
                <li>Teléfono: 5435-7967</li>
                <li>Email: b&dmabogados@gmail.com</li>
                <li>Dirección: Martín Fierro 2536, Villa Bosch, Bs. As.</li>
            </ul>
        </div>
    </main>
    )
}