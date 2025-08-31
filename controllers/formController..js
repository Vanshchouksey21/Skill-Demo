const contact = require("../userModels/contactSchema")


const contactForm =  async( req , res , next)=>{

    try {
        const response = req.body;
            await contact.create(response);
            res.status(200).json({
                deatils : contact , 
                msg : "message saved sucessfully"
            })
    } catch (error) {
       
       next(error)
    }

}

module.exports = {
    contactForm
}