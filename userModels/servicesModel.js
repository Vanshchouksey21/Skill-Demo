const {Schema , model} = require("mongoose")


const SevicSchema = new Schema({
    service: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  providerName: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true  

});


const Service =  model("Service" , SevicSchema);
module.exports  = Service ;