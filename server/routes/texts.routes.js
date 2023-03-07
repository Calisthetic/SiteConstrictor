const Router = require('express')
const textController = require('../controllers/text.controller')

const router = new Router()
const path = 'text'

router.post('/' + path + '', textController.createText)
router.get('/' + path + '', textController.getText) 
router.get('/' + path + '/:id', textController.getOneText)
router.put('/' + path + '', textController.updateText)
router.delete('/' + path + '/:id', textController.deleteText)

module.exports = router