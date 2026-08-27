const express = require('express')

const app = express()

const { connectDB } = require('./config/database')
const User = require('./models/user')



app.post('/signUp', async (req, res) => {
    const user = new User({
        firstName: "krishna",
        lastName: "chaurasia",
        email: "krishna@gmail.com",
        age: 19,
        gender: "male"
    })

    try {
        await user.save();
        res.send("user added successfully")
    }catch(err){
        res.status(400).send("error saving user" + err)
    }

    
})


connectDB().then(() => {
    console.log("db connection is succesful")
    app.listen(3000, () => {
        console.log("listening on port 3000")
    })
}).catch((err) => {
    console.log("something went wrong ")
    console.log(err)
})
