// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient({ useUnifiedTopology: true })
// const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    /* db.collection('users').insertOne({
        name: "Vikram",
        age: 26
    }, (error, result) => {
        if(error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops)
    }) */

    /* db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        }, {
            name: "Gunther",
            age: 91
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }

        console.log(result.ops)
    }) */

    /* db.collection('tasks').insertMany([
        {
            description: 'This is the first task description',
            complete: true
        }, {
            description: 'This is the second task description',
            complete: false
        }, {
            description: 'This is the third task description',
            complete: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }

        console.log(result.ops)
    }) */

    /* db.collection('users').findOne({
        _id: new ObjectID("5f202f3af901813754b65fe2")
    }, (error, user) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }

        console.log(user)
    }) */

    /* db.collection('users').find({ age: 27 }).toArray((error, user) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }

        console.log(user)
    }) */

    /* db.collection('users').find({ age: 27 }).count((error, user) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }

        console.log(user)
    }) */

    /* db.collection('tasks').findOne({
        _id: new ObjectID('5f212632b4bce34431ad0799')
    }, (error, result) => {
        console.log(result)
    })

    db.collection('tasks').find({ complete: false }).toArray((error,task) => {
        console.log(task)
    }) */

    /* db.collection('users').updateOne({ 
        name: 'Jen' 
    }, { 
        $inc: { 
            age: 1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }) */

    /* db.collection('tasks').updateMany({ 
        complete: false 
    }, { 
        $set: { 
            complete: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }) */

    /* db.collection('users').deleteMany({ 
        age: 27 
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }) */

    db.collection('tasks').deleteOne({ 
        description: 'This is the second task description' 
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})