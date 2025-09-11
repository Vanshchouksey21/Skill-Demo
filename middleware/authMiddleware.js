    const jwt = require("jsonwebtoken")
    const user = require("../userModels/usermodel")

    const authmiddleware = async(req , res , next)=>{
        const token = req.header('Authorization')
        if(!token){
                return res.status(404).
                json({
                    error :" Invalid Token "
                })
        }

    
        const jwtToken = token.replace("Bearer ","").trim() ;
        console.log("Token :" , jwtToken);


        try {
            const verified = jwt.verify(jwtToken , process.env.SECRET);
            const userData = await user.findOne({email: verified.email}).select({password :0 , })
            console.log(userData);
          

            req.user = userData ;
            req.token = token ;
            req.userId = userData._id

              next() ;
            
            
            
        } catch (error) {
            return res.status(404).
                json({
                    error :" Invalid Token "
                })
        }
    
        

    }

    module.exports = authmiddleware