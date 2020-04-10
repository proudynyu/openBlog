const { Router } = require('express');
const connection = require('./database/connection')
const homeController = require('./controllers/homeController')
const blogController = require('./controllers/blogController')
const profileController = require('./controllers/profileController')
const registerController = require('./controllers/registerController')

const routes = Router()

// HOME
routes.get('/', homeController.index);

// PROFILE
routes.get('/profile/:id', profileController.index);

routes.post('/profile/createblog', blogController.create);

// REGISTERS
routes.post('/register', registerController.create);


module.exports = routes;