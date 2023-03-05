const Router = require('express')
const blocksController = require('../controllers/blocks.controller')

const router = new Router()
const path = 'blocks'

router.post('/' + path + '', blocksController.createBlock)
router.get('/' + path + '', blocksController.getBlocks) 
router.get('/' + path + '/:id', blocksController.getOneBlock)
router.put('/' + path + '', blocksController.updateBlock)
router.delete('/' + path + '/:id', blocksController.deleteBlock)

module.exports = router