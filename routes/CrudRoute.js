const express = require("express")
const { ViewUser, addUser, CreateUser } = require("../controllers/CrudControllers")

const routes = express.Router()

routes.get('/',ViewUser)
routes.get('/adduser',addUser)
routes.post('/createUser',CreateUser)


module.exports = routes