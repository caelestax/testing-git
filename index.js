const express = require('express'); 
const app = express(); 

app.get("/getApi" , function(req , res ){
      res.send("hi it works ")
      console.log("server start on local host 3000 ")
}); 
app.listen(3000); 