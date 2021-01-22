const express = require('express')

const routes = express.Router()

const produtoController = require('../controller/produtoController')

//list
routes.get('/',produtoController.list)

//filtro
routes.post('/',produtoController.filtro)

//abreadd
routes.get('/',produtoController.abreadd)

//add
routes.post('/',produtoController.add)

//abre edit
routes.get('/edt/:id',produtoController.abreedit)

//edit
routes.post('/edt/:id',produtoController.edit)

//del
routes.get('/del/:id',produtoController.del)

module.exports = routes;