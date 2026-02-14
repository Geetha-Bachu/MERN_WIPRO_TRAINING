// middlewares/roleMiddleware.js

function roleMiddleware(role){

   return function(req,res,next){

      if(!req.session.user){
         return res.send("Please login first");
      }

      if(req.session.user.role !== role){
         return res.send("Access Denied");
      }

      next();
   }

}

module.exports = roleMiddleware;
