// Module Pattern
const FetchApp = (function () {

    // API URLs
    const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
    const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

    // DOM Elements
    const postsContainer = document.getElementById("postsContainer");
    const todosContainer = document.getElementById("todosContainer");
    const errorMessage = document.getElementById("errorMessage");

    // Clear previous content
    function clearUI() {
        postsContainer.innerHTML = "";
        todosContainer.innerHTML = "";
        errorMessage.textContent = "";
    }

    // Show error message
    function showError(message) {
        errorMessage.textContent = message;
    }

    // Fetch and display posts
    async function fetchPosts() {
        clearUI();
        try {
            const response = await fetch(POSTS_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }

            const posts = await response.json();

            posts.slice(0, 10).forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.className = "post";
                postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
                postsContainer.appendChild(postDiv);
            });

        } catch (error) {
            showError("Error loading posts: " + error.message);
        }
    }

    // Fetch and display todos
    async function fetchTodos() {
        clearUI();
        try {
            const response = await fetch(TODOS_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch todos");
            }

            const todos = await response.json();

            todos.slice(0, 10).forEach(todo => {
                const todoDiv = document.createElement("div");
                todoDiv.className = "todo";
                todoDiv.innerHTML = `
                    <p>
                        <strong>${todo.title}</strong> - 
                        ${todo.completed ? "✅ Completed" : "❌ Not Completed"}
                    </p>
                `;
                todosContainer.appendChild(todoDiv);
            });

        } catch (error) {
            showError("Error loading todos: " + error.message);
        }
    }

    // Public methods (Revealing Module Pattern)
    return {
        fetchPosts: fetchPosts,
        fetchTodos: fetchTodos
    };

})();

// Button Events
document.getElementById("loadPostsBtn").addEventListener("click", function () {
    FetchApp.fetchPosts();
});

document.getElementById("loadTodosBtn").addEventListener("click", function () {
    FetchApp.fetchTodos();
});
