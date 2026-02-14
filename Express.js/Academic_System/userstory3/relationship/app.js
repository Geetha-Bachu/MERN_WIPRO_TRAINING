const { sequelize, Student, Profile, Instructor, Course } = require("./models");


async function start(){

   try{

      await sequelize.sync({alter:true});

      console.log("Database synced successfully");

   }catch(err){
      console.log(err);
   }

}

start();
