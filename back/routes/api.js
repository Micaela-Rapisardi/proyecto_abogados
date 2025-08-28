var express = require('express');
var router = express.Router();
var novedadesModel=require('./../models/novedadesModel');
var nodemailer=require('nodemailer');


// listar novedades

router.get('/novedades', async function (req, res, next) {
    try {
        let novedades = await novedadesModel.getNovedades();
        res.json(novedades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: 'Error al obtener novedades' });
    }
});


//enviar formulario de contacto
router.post('/contacto', async (req, res) => { 
    try {
        const mail = {
            to: 'rapisardimicaela.data@gmail.com', 
            subject: 'Contacto web',
            html: `${req.body.nombre} se contacto a traves de la web y quiere más informacion a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
        }

        const transport = nodemailer.createTransport({ 
            host: process.env.SMTP_HOST, 
            port: process.env.SMTP_PORT, 
            auth:{
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        await transport.sendMail(mail)

        res.status(201).json({
            error: false,
            message: 'Mensaje enviado'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: 'Error al enviar el mensaje' });
    }
});

module.exports=router;