const EventEmitter = require("events");

const emitter = new EventEmitter();

//listeners 
emitter.on("userLogin", (name) => {
 
});

// event Emitter
emitter.on("dataFetched", () => {

});

module.exports = emitter;
