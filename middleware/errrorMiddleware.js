const errorMidleware = (err , req , res , next) =>{
const status = err.status || 500 ;
const message = err.message || "BAckend error "
const extradetails = err.extradetails || " Error From backend "

return res.status(status).json({
    message , extradetails
})


}


module.exports = errorMidleware ;