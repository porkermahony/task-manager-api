require('../src/db/mongoose')
const Task = require('../src/models/task')

/* Task.findByIdAndDelete('5f22a4826e4aaf98903dd11a').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
}) */

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: completed})

    return { task, count }
}

deleteTaskAndCount('5f22aef36e4aaf98903dd11c', true).then((result) => {
    console.log('Task', result.task)
    console.log('Count', result.count)
}).catch((e) => {
    console.log('Error', e)
})