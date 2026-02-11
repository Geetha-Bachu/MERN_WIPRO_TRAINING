let messageCount = 0;
let lastReset = Date.now();

module.exports = function(){
  const now = Date.now();

  // reset every 1 minute
  if(now - lastReset > 60000){
    messageCount = 0;
    lastReset = now;
  }
  messageCount++;
  if(messageCount > 100){
    console.log("Rate limit exceeded");
    return false;
  }
  return true;
};
