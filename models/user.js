const mongoose=require("Mongoose");
const userSchema=mongoose.Schema({

    userName:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    },
    type:{
        type:String,
        require:true
    }

});

let user=module.exports=mongoose.model('User',userSchema);

//Request

module.exports.getUser=(callback,limit)=>{
    user.find(callback),limit(limit);
}

module.exports.getUserById=(id,callback)=>{
    user.find(id,callback);
}

module.exports.addUser=(data,callback)=>
{
    console.log(data);
    let add={
        userName:data.userName,
        email:data.email,
        password:data.password,
        type:data.type,
    }
    console.log(data);
    user.create(add,callback);
}

module.exports.removeUser=(id,callback)=>{
    let query={
        _id:id
    };
    user.findOneAndRemove(query,callback);

}

module.exports.editUser=(id,data,option,callback)=>{

    let query={_id:id};
    let update={
        userName:data.userName,
        email:data.email,
        password:data.password,
        type:data.type
     }
     user.findOneAndUpdate(id,update,option,callback);
}







