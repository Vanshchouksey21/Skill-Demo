
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");    

const UserModel = require("../userModels/usermodel")
const home = async(req , res)=>{
    try {
        res.status(200).json({
            message:"everything is working",
            node:"learning node in a good manner"
        })
    } catch (error) {
        console.error(error);
        
        
    }
}


    const registration = async(req , res)=>{
      console.log("Request Body:", req.body); 

     try {
    const { username, email, phone, password } = req.body;

    console.log("Request Body:", req.body); 

    const useremail = await UserModel.findOne({ email: email.toLowerCase() });
    console.log("User Found:", useremail); 


    const hashpass = await bcrypt.hash(password , 10);

    if (useremail) {
      return res.status(400).json({
        error: "user already exist",
      });
    }

    const UserCreated = await UserModel.create({
      username,
      email: email.toLowerCase(),
      phone,
      password : hashpass,
    });

    res.status(201).json({
      "success": true,
      message: "user created successfully",
      details: UserCreated,
      token : await UserCreated.generateToken(),
      userID:UserCreated._id.toString()
    });
  } catch (error) {
            res.status(500).json({
                error:"Internal server error"
            })
            console.error(error);    
        }
    }

    const Login = async (req ,res)=>{
      try {
        const {email , password} = req.body ;

        const validUser =  await UserModel.findOne({email});
        if(!validUser){
          return res.status(500).json({
            msg : "invalid crediatials"
          })
        }

        const userpass = await bcrypt.compare(password , validUser.password);

        if(!userpass){
          return res.status(500).json({
            error :"Invalid credientials"
          })
        }
         res.status(201).json({
          "success": true,
      message: "user Logined successfully",
      details: validUser,
      token : await validUser.generateToken(),
      userID:validUser._id.toString()
    });
        
      } catch (error) {
        // console.error(error);
        // res.status(400).json({
        //   error : error
        // })
        next(error)
        
      }

    }

module.exports= {
    home,
    registration,
    Login
}