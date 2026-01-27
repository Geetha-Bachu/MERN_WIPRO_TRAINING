
class User {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = prompt("Enter username: ") || "";
        this.password = prompt("Enter password: ") || "";
    }

    display(): void {
        console.log("Username: " + this.username + "<br>");
        console.log("Password: " + this.password);
    }
}
const user = new User("", "");
user.display();