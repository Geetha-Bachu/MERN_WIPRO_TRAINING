const mongoose = require("mongoose");

module.exports = function connectDB() {

  mongoose.connect("mongodb://127.0.0.1:27017/inventory_jwt")
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

};
