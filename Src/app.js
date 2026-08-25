const express = require('express')

const app = express()



app.use("/test" , (req , res) => {
    res.send("this is the test page")
})
app.use("/contact" , (req , res) => {
    res.send("this is the contact page")
})

app.use('/' , (req , res) => {
    res.send("this is the")
})



app.listen(3000 , () =>{
    console.log("listening on port 3000")
})