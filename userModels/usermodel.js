const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");    


const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true
    },
  
    email :{
        type:String,
        required:true,
        unique:true
    },
    phone :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    isAdmin :{
        type:Boolean,
        default:false
    }
})

userSchema.methods.generateToken = async function (){
try {
   return jwt.sign({
    user_id : this._id.toString(),
    email: this.email,
    isAdmin: this.isAdmin
   },
   process.env.SECRET,{
   expiresIn:"1d"
   }
)
} catch (error) {
    console.error(error);
    
}
}


const User = mongoose.model("User" , userSchema);

module.exports = User ;