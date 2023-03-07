const Router = require('express')
const sizeController = require('../controllers/size.controller')

const router = new Router()
const path = 'size'

router.post('/' + path + '', sizeController.createSize)
router.get('/' + path + '', sizeController .getSize) 
router.get('/' + path + '/:id', sizeController.getOneSize)
router.put('/' + path + '', sizeController.updateSize)
router.delete('/' + path + '/:id', sizeController.deleteSize)

module.exports = router