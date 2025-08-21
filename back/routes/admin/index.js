var express = require('express');
var router = express.Router();

// Panel principal del admin
router.get('/', function(req, res, next) {
  res.render('admin/index', { 
    title: 'Panel de Administración',
    usuario: req.session.usuario 
  });
});

module.exports = router;