const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// app.get("/movie",async(req , res)=>{
//     var name = req.query.value;
//     const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDgbfDh0ugI2tFCTlEaHre9wigPFc273OA&maxResults=5&type=video&q="+name;
//     try{
//         const response = await fetch(url);
//         const data = await response.json();
//         return res.json(data);
//     }catch(error){
//         console.log(error);
//     }
// })
       

app.listen(5500,()=>{
    console.log('server running at port 5500');
})
