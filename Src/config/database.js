const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        process.env.MONGODB_URI,
    );
};

module.exports = { connectDB }

// connectDB().then(() =>{
//     console.log("db connection is succesful")
// }).catch((err)=>{
//     console.log("something went wrong ")
//     console.log(err)
// })
