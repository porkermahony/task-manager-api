require('../src/db/mongoose')
const User = require('../src/models/user')

/* User.findByIdAndUpdate('5f228630278563a92c82eb10', { age: 12 }).then((user) => {
    console.log(user)
    return User.countDocuments({age: 12})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
}) */

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count
}

updateAgeAndCount('5f228630278563a92c82eb10', 27).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})