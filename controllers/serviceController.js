const seviceModel = require("../userModels/servicesModel")

const Services = async(req , res) =>{
try {
    const sevices = await seviceModel.find();
    if(!sevices){
        return res.status(400).json({
            error : "no services available "
        })
    }
    res.status(200).json({
        msg : sevices
    })
} catch (error) {
    console.error("error in services " , error);
    
    
}
};

module.exports = {
    Services
}