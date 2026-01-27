// Student data storage
let students = JSON.parse(localStorage.getItem("students")) || [];

// Monthly activities array (as per instruction)
let activities = [
    { id: 1, activity: "Create project file which contains tables between 12 to 19", subject: "Maths" },
    { id: 2, activity: "Solve 20 algebra problems", subject: "Maths" },
    { id: 3, activity: "Write a science experiment report", subject: "Science" },
    { id: 4, activity: "Read chapter 3 and summarize", subject: "English" },
    { id: 5, activity: "Prepare chart on planets", subject: "Science" },
    { id: 6, activity: "Write essay on environment", subject: "English" }
];

// Register function
function register() {
    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if (username === "" || password === "") {
        document.getElementById("registerMsg").textContent = "Please enter all fields!";
        return;
    }

    let userExists = students.find(user => user.username === username);
    if (userExists) {
        document.getElementById("registerMsg").textContent = "User already exists!";
        return;
    }

    students.push({ username, password });
    localStorage.setItem("students", JSON.stringify(students));
    document.getElementById("registerMsg").textContent = "Registration successful!";
}

// Login function
function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let validUser = students.find(user => user.username === username && user.password === password);

    if (validUser) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMsg").textContent = "Invalid username or password!";
    }
}

// Dashboard functions
function goToMonthly() {
    window.location.href = "monthly.html";
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}

// Show username on dashboard
if (window.location.pathname.includes("dashboard.html")) {
    let user = localStorage.getItem("loggedInUser");
    if (!user) {
        window.location.href = "index.html";
    } else {
        document.getElementById("studentName").textContent = user;
    }
}

// Monthly activities filtering
function filterActivities() {
    let subject = document.getElementById("subjectSelect").value;
    let activityList = document.getElementById("activityList");
    activityList.innerHTML = "";

    let filtered = activities.filter(act => act.subject === subject);

    if (filtered.length === 0) {
        activityList.innerHTML = "<p>No activities found.</p>";
        return;
    }

    filtered.forEach(act => {
        let div = document.createElement("div");
        div.className = "activity";
        div.innerHTML = `<strong>${act.subject}</strong>: ${act.activity}`;
        activityList.appendChild(div);
    });
}

function goBack() {
    window.location.href = "dashboard.html";
}