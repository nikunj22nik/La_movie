const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
email:{
    type:String,
    required:true,
    unique:true
},
password:{
  type:String,
  required:true  
},
name:{
    type:String,
    required:true
},
age:{
    type:Number,
},

genre:{
    type:String,
    required:true
},
profession:{
    type:String,
     required:true
},

otp:{
    type:Number
  },
valid:{
  type:Boolean,
  default:false

},
gender:{
    type:String,
    
}

},
{
    timestamps: true,
  }
  
  )

const User=mongoose.model('user',userSchema);
module.exports=User;