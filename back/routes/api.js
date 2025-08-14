var express = require('express');
var router = express.Router();
var novedadesModel=require('./../models/novedadesModel');


// listar novedades
router.get('/novedades', async function (req, res, next) {
    let novedades=await novedadesModel.getNovedades();
    res.json(novedades);
});

module.exports=router;