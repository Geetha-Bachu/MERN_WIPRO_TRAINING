const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login success");
            resolve();
        }, 2000);
    });
};

const fetchProfile = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Profile fetched");
            resolve();
        }, 2000);
    });
};

const fetchOrders = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Orders fetched");
            resolve();
        }, 2000);
    });
};
  
login()//returns promise
    .then(() => fetchProfile())// .then() wait for login to resolve 
    .then(() => fetchOrders())
    .then(() => {
        console.log("All done");
    })
    .catch(err => {
        console.log("Error:", err);
    });

    //  Each function returns the promise and 
    // .then() chains them so the next function runs after the previous one resolved