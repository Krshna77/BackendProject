const express = require('express')

const app = express()

const { connectDB } = require('./config/database')
const User = require('./models/user')


app.use(express.json())

app.post('/signUp', async (req, res) => {
    console.log(req.body)
    const user = new User(req.body)

    try {
        await user.save();
        res.send("user added successfully")
    } catch (err) {
        res.status(400).send("error saving user" + err)
    }


})

app.get('/getUser', async (req, res) => {
    const userEmail = req.body.email;

    try {
        const user = await User.find({ email: userEmail });
        if (user.length === 0) {
            res.status(400).send("user not found")
        } else {
            res.send(user);
        }
    } catch(err) {
        res.status(400).send("error saving user" + err)

    }

})

app.get('/feed', async (req, res) => {


    try {
        const user = await user.find({});
        res.send(user);
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
