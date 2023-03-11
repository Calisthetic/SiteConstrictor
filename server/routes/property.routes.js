const Router = require('express')
const propertyController = require('../controllers/property.controller')

const router = new Router()
const path = 'property'

router.post('/' + path + '', propertyController.createProperty)
router.get('/' + path + '', propertyController.getProperty) 
router.get('/' + path + '/:id', propertyController.getOneProperty)
router.put('/' + path + '', propertyController.updateProperty)
router.delete('/' + path + '/:id', propertyController.deleteProperty)

module.exports = router