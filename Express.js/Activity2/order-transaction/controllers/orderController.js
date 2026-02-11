const pool = require("../db/connection");

exports.createOrder = async (req,res,next) => {

   const connection = await pool.getConnection();

   try {

      const { custname, items } = req.body;
      await connection.beginTransaction();
      let totalAmount = 0;
      // check stock + calculate total
      for(const item of items){

         const [product] = await connection.query(
            "SELECT * FROM products WHERE id=?",
            [item.product_id]
         );

         if(product.length === 0){
            throw new Error("Product not found");
         }

         if(product[0].stock < item.quantity){
            throw new Error("Not enough stock");
         }

         totalAmount += product[0].price * item.quantity;

         // reduce stock
         await connection.query(
            "UPDATE products SET stock = stock - ? WHERE id=?",
            [item.quantity, item.product_id]
         );
      }

      // insert order
      const [orderResult] = await connection.query(
         "INSERT INTO orders (custname,totalamount) VALUES (?,?)",
         [custname, totalAmount]
      );

      const orderId = orderResult.insertId;
      // insert order items
      for(const item of items){

         await connection.query(
            "INSERT INTO order_items (order_id,product_id,quantity) VALUES (?,?,?)",
            [orderId, item.product_id, item.quantity]
         );
      }
      await connection.commit();
      res.status(201).json({message:"Order placed successfully"});
   }
   catch(error){
      await connection.rollback();
      next(error);
   }
   finally{
      connection.release();
   }
};
