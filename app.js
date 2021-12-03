const express=require("express");
const app=express();
const mongoose = require('mongoose');
const url="mongodb+srv://salman:salman@cluster0.fcnln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const stu=require("./schema");
mongoose.connect(url).then(()=>console.log("Conected to DB"));
app.use(express.json())
app.post("/add-new-post",async(req,res)=>{
const bname=req.body.BName;
const sname=req.body.SName;
const due=req.body.Due;
try
{
const st=new stu(
{
BName:bname,
SName:sname,
Due:due
}
)
const savedst=await st.save()
res.json(
{"message":"Student marks are saved","data":savedst}
)
}
catch(err)
{
res.json(err);
}
})
app.use("/",(req,res)=>{
res.send("salman")
res.json({
})
}
)
app.listen(3000,()=>console.log("Express Started"))
