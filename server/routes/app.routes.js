const Router = require('express')
const appRouter = new Router()

appRouter.get('' || '/', (req, res) => {
    res.json("Server works now, are you?");
})
// router.post('/user', userController.createUser)
// router.get('/user', userController.getUsersByDivision) //! All || by division
// router.get('/user/:id', userController.getOneUser)
// router.put('/user', userController.updateUser)
// router.delete('/user/:id', userController.deleteUser)

module.exports = appRouter