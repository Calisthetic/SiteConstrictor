const Router = require('express')
const divController = require('../controllers/div.controller')

const router = new Router()
const path = 'div'

router.post('/' + path + '', divController.createDiv)
router.get('/' + path + '', divController.getDiv) 
router.get('/' + path + '/:id', divController.getOneDiv)
router.put('/' + path + '', divController.updateDiv)
router.delete('/' + path + '/:id', divController.deleteDiv)

module.exports = router