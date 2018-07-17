const express=require("Express");
const router=express.Router();
const customer=require("../models/customer")

//add Customer

router.post('/add',(req,res)=>{
    let obj=req.body.Customer;
    customer.addCustomer(obj,(err,customer)=>{

        if(err){
            console.log("Error in Customer");
            res.send(err);
        }
        console.log("new user in db");
        res.send(customer);


    })
})

//get all customer:
router.get('/',(req,res)=>{

    customer.getCustomer((err,customers)=>{
        if(err)

        {
            console.log("error at get customer");
        res.send(err);
        }
        cosole.log("retrived all customer");
        res.send(customers)
    })


})

//get specific customer

router.get('/',(req,res)=>{

    let id=req.params.id;
    customer.getCustomerById(id,(err,customer)=>{

        if(err)
        {
            console.log("error get customer by id");
            res.send(err);
        }
        console.log("retrived specific character");
        res.send(customer);
        
    })
})

//edit customer

router.put('/:id',(req,res)=>{
    let id=req.params.id;
    let edit=req.body.Customer;
    customer.editCustomer(id,edit,{},(err,customer)=>{
        if(err){
            console.log("error at edit Customer");
            res.send(err);
        }
        console.log("no error");
        res.send(customer);
    })
})

//delet customer
router.delete('/id:',(req,res)=>{

    let id=req.params.id;
    customer.removeCustomer(id,(err,customer)=>{
        if(err)
        {
            console.log("error at delet Customer");
            res.send(err);
        }
        console.log("no error");
        res.send(customer);
    })
})

module.exports=router;