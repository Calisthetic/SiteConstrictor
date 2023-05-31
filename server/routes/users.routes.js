const Router = require('express')
const usersController = require('../controllers/users.controller')

const router = new Router()
const path = 'user'

router.post('/' + path + '', usersController.createUser)
router.get('/' + path + '', usersController.getUsers) 
router.get('/' + path + '/:id', usersController.getOneUser)
router.get('/' + path + 'Auth', usersController.getAuthUser)
router.put('/' + path + '', usersController.updateUser)
router.delete('/' + path + '/:id', usersController.deleteUser)

module.exports = router