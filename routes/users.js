const express=require("Express");
const router=express.Router();
const user=require("../models/user");

router.get('/',(req,res)=>{

    user.getUsers((err,users)=>{

        if(err){
            console.log("error at get user");
            res.send("error at get user");
        }
        console.log("users");
        res.send(users);

    })
})

router.get('/:id',(req,res)=>{
let id=req.params.id;
console.log('requested Id ='+id);
user.getUserById(id,(err,test)=>{

    if(err)
    {
        console.log("error at get user by id ");
        res.send("error at get uer by id");

    }
  
    res.json(test);

})

})

//add user

router.post('/add',(req,res)=>{
let obj=req.body.User;
console.log(req.body.User);
user.addUser(obj,(err,test)=>{
    if(err)
    {
        console.log("erroe at add user");
        res.send("error add at user");
    }
    console.log(user);
    res.json(test);


})

})
router.put('/:id',(req,res)=>{
    let id=req.params.id;
    let edit=req.body.User;
    user.editUser(id,edit,{},(err,user)=>{
        if(err){
            console.log("error at edit user");

        }
        console.log("no error"+test);
    })
})

router.delete('/id:',(req,res)=>{

    let id=req.params.id;
    user.removeUser(id,(err,test)=>{
        if(err)
        {
         
           console.log("error at delet user");
    
        }
        console.log("no error"+test);
    })
    res.send("deleted");
})
module.exports=router;