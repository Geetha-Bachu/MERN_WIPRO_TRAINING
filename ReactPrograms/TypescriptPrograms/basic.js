"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = prompt("Enter username: ") || "";
        this.password = prompt("Enter password: ") || "";
    }
    User.prototype.display = function () {
        console.log("Username: " + this.username + "<br>");
        console.log("Password: " + this.password);
    };
    return User;
}());
var user = new User("", "");
user.display();
