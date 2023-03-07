const Router = require('express')
const projectsController = require('../controllers/projects.controller')

const router = new Router()
const path = 'project'

router.post('/' + path + '', projectsController.createProject)
router.get('/' + path + '', projectsController.getProject) 
router.get('/' + path + '/:id', projectsController.getOneProject)
router.put('/' + path + '', projectsController.updateProject)
router.delete('/' + path + '/:id', projectsController.deleteProject)

module.exports = router