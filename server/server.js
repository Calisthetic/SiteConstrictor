const express = require('express')

const appRouter = require('./routes/app.routes')
const blocksRouter = require('./routes/blocks.routes')
const borderRadiusRouter = require('./routes/border_radius.routes')
const borderRouter = require('./routes/border.routes')
const colorRouter = require('./routes/color.routes')
const gradientRouter = require('./routes/gradient.routes')
const projectsRouter = require('./routes/projects.routes')
const shadowRouter = require('./routes/shadow.routes')
const sizeRouter = require('./routes/size.routes')
const textShadowRouter = require('./routes/text_shadow.routes')
const textRouter = require('./routes/texts.routes')
const usersRouter = require('./routes/users.routes')

const app = express()

app.use(express.json())

app.use('/api', appRouter)
app.use('/api', blocksRouter)
app.use('/api', borderRadiusRouter)
app.use('/api', borderRouter)
app.use('/api', colorRouter)
app.use('/api', gradientRouter)
app.use('/api', projectsRouter)
app.use('/api', shadowRouter)
app.use('/api', sizeRouter)
app.use('/api', textShadowRouter)
app.use('/api', textRouter)
app.use('/api', usersRouter)

// app.get("/api", (req, res) => {
    //res.json({"users": ["userOne", "userTwo"] })
//})

app.listen(8080, () => console.log("Server started")) 
