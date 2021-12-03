const mongoose=require('mongoose');
const {Schema}=mongoose;
const student=new Schema(
{
BName: String,
SName: String,
Due: String
});
module.exports=mongoose.model("Library",student,"Library");