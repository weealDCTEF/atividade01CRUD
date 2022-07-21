const express = require('express');
const upload = require('../config/upload.js');
const router = express.Router();
const controller = require('../controller/UsuarioController.js');

/*HTTPS:GET*/ 
router.get('/add',controller.open_add);
router.get('/list',controller.list);
router.get('/delete_user/:id',controller.delete_user);
router.get('/edit_user/:id',controller.open_edit);
router.get('/pedido/:id',controller.mostrarPedido);
router.get('/pedido/:id/imprimindo',controller.imprimirPedido);

/*HTTPS:POST*/ 

router.post('/add',upload.single('foto_perfil'),controller.add);
router.post('/list',controller.list_filter);
router.post("/edit_user/:id",upload.single('foto_perfil'),controller.edit_user);
router.post('/list',controller.list_filter);




module.exports = router;

