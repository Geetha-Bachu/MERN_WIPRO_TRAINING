module.exports = (req,res,next) => {

   const { custname, items } = req.body;

   // check customer name
   if(!custname || custname.trim() === ""){
      return res.status(400).json({error:"Customer name required"});
   }

   // check items exist
   if(!items || !Array.isArray(items) || items.length === 0){
      return res.status(400).json({error:"Items are required"});
   }

   // validate each item
   for(const item of items){

      if(!item.product_id || item.product_id <= 0){
         return res.status(400).json({error:"Invalid product id"});
      }

      if(!item.quantity || item.quantity <= 0){
         return res.status(400).json({error:"Invalid quantity"});
      }
   }

   next();
};
