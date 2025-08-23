'use client'

import React, {useState} from 'react';

export default function ContactoForm({postUrl}) {
        
        const initialForm = {
            nombre: '',
            email:'',
            telefono:'',
            mensaje:''
        }

        const [sending, setSending] = useState(false); 
        const [msg, setMsg] = useState('');
        const [formData, setFormData] = useState(initialForm);

        const handleChange = e => {
            const { name, value } = e.target; 
            setFormData(oldData => ({
            ...oldData,
            [name]: value
}));
        }

        const handleSubmit= async e => {
            e.preventDefault();
            setMsg('');
            setSending(true)

            const rawResponse = await fetch(postUrl, {
                method:'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const response = await rawResponse.json();
            console.log(response);
            setSending(false);
            setMsg(response.message);
            if (response.error === false) { 
                setFormData(initialForm)
            }
    }

    return (
        <main className="holder contacto">
        <div>
           
            <form action="" method="" className="formulario" onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="nombre">Apellido y nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
                <p className="acciones"><input type="submit" value="Enviar"/></p>
            </form>
        </div>
        
        <div className="datos">
            <h3>Contactanos</h3>
            <ul>
                <li>Teléfono: 5435-7967</li>
                <li>Email: bdmabogados@gmail.com</li>
                <li>Dirección: Martín Fierro 2536, Villa Bosch, Bs. As.</li>
            </ul>
        </div>
    </main>
    )
}