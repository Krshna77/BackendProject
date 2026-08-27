// app.get('/user' ,(req , res) =>{
//     const data = {
//         name:"Krishna",
//         lastname:"chaurasia",
//         age:12,
//         college:"OCT"
//     }

//     res.send(data);
// })

// app.post('/profile' ,(req , res) =>{
//     res.send("fetching the profile")
// })

// app.use('/' , (req , res) => {
//     res.send("this is the")
// })




// app.get('/user' ,(req , res , next) =>{
//     console.log("first handler")
//     next();
// },(req , res , next) =>{
//     console.log("second handler");
//     next()
// },(req , res,next) =>{
//     console.log("third handler");
//     res.send("at fourth handler response is handled")
// })

// const {adminAuth , userAuth} = require('./middlewares/auth')

// app.use('/admin' , adminAuth)

// app.get('/admin' , (req , res) =>{
//     console.log("response is sent")
//     res.send("all data is sent")
// })


// app.get('/user' ,userAuth ,  (req , res) =>{
//     console.log("response is sent")
//     res.send("user data is sent")
// })