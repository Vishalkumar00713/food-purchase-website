const mongoose = require('mongoose');

const mongoDB=async ()=>{
 await mongoose.connect("mongodb://localhost:27017/foodaap",(err)=>{
if(!err){
    console.log( "connected");
    const fetched_data=  mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(async function(err,data){

      const food_category= await mongoose.connection.db.collection("food_category");
      food_category.find({}).toArray(function(err,catdata){

   if(err)
    {
      console.log(err);
    }
    else{
     global.food_items=data;
     global.food_cat=catdata;
 
  }

      })

     
    })
}
else{
    console.log("err"+err);




}
 
});

}

module.exports=mongoDB;