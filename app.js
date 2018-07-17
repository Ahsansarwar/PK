var express=require("Express");
var bodyparser=require("Body-parser");
var mongoose=require("Mongoose");
var app=express();


const user = require("./routes/users.js")
const customer=require("./routes/customers.js")
const port=process.env.PORT||3000;

//
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
//
app.use('/user',user);
app.use('/customer',customer);
//
mongoose.connect('mongodb://localhost:27017/pk');
mongoose.connection.on('connected',()=>
{
    console.log("DB is up")
});

app.listen(port,()=>{
    console.log("server started");
})
