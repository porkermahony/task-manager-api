require('./db/mongoose')
const express = require('express')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

/* const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a Word document!'))
        }

        cb(undefined, true)
    }
})

app.post('/upload', upload.single('upload'), (req,res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
}) */



/* app.use((req, res, next) => {
    if( req.method === 'GET' ) {
        res.send('GET requests are disabled')
    } else {
        next()
    }
}) */

/* app.use((req, res, next) => {
    res.status(503).send("Na ezt nem!")
})
 */

app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is up on port " + port)
})

/* const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'sagr35ygesRg35t' }, 'thisismynewcourse')
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)


}

myFunction() */

/* const pet = {
    name: 'Hal'
}

pet.toJSON = function() {
    return {}
}

console.log(JSON.stringify(pet)) */

/* const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5f27a53586cec50ec358cb4a')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5f27a45f0f4af804de666fba')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main() */