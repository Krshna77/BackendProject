const adminAuth = (req , res , next) =>{
    const token = 'xyzsdfa';
    const adminAuthtoken = token === 'xyz';
    if(!adminAuthtoken){
        console.log("middlewares is called")
        res.status(401).send("unauthorized access")
    } else{
        next();
    }
}

const userAuth= (req , res , next) =>{
    const token = 'xyz';
    const adminAuthtoken = token === 'xyz';
    if(!adminAuthtoken){
        console.log("middlewares is called")
        res.status(401).send("unauthorized access")
    } else{
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}
