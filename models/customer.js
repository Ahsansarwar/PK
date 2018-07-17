const mongoose=require("Mongoose");

//declaring schema
const customerSchema=mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    name:{
        type:String,
        require:true

    },
    phone:{
        type:Number,
        require:true,
        trim:true,
    },
    address:{
        type:String,
        require:true,
    }

});

let customer=module.exports=mongoose.model('customer',customerSchema);

//handling Request

module.exports.getCustomer=(callback,limit)=>{
    customer.find(callback),limit(limit);
}

module.exports.getCustomerById=(id,callback)=>{
    customer.find(id,callback);
}

module.exports.addCustomer=(data,callback)=>
{
   
    let add={
        userId:data.userId,
        name:data.name,
        phone:data.phone,
        address:data.address,
    }
    customer.create(add,callback);
}

module.exports.removeCustomer=(id,callback)=>{
    let query={
        _id:id
    };
    customer.findOneAndRemove(query,callback);

}

module.exports.editCustomer=(id,data,option,callback)=>{

    let query={_id:id};
    let update={
        name:data.name,
        phone:data.phone,
        address:data.address,

     }
     customer.findOneAndUpdate(id,update,option,callback);
}







