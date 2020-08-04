let express = require('express');
let app = express();
let port = process.env.PORT || 3000

app.use(express.json({limit:'50mb'}));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./files/'));
app.get("/" , (req , res)=>{
    res.sendFile(__dirname + '/files/index.html')
})


app.listen(port , ()=>{
    console.log('server is running')
})