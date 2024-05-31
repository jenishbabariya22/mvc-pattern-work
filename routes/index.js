const express = require("express")

const routes = express.Router()

routes.use('/crud',require('./CrudRoute'))

module.exports = routes