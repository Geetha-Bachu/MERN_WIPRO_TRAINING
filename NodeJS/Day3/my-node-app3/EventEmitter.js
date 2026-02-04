const EventEmitter=require("events");
const emitter=new EventEmitter();

//listener
// emitter.on("Order Placed",(orderId)=>{
//     console.log(`order ${orderId} processed`)
// });

//Emit event
// emitter.emit("Order Placed",101);

//Listener
emitter.on("userRegistered",(user)=>{
     console.log(`Welcome email sent to ${user}`)
});

emitter.on("paymentSuccess",(amount)=>{
     console.log(`Payment of RS. ${amount}is done`)
});

emitter.on("Order Placed",(orderId)=>{
    console.log(`order ${orderId} processed`)
 });




//emit Event 
emitter.emit("userRegistered","Geetha");
emitter.emit("paymentSuccess",25000);
emitter.emit("Order Placed",101);