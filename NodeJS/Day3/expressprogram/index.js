// server.js
        const express = require('express');
        // Create an HTTP server
        const server = http.createServer((req, res) => {
            const app=express();
});
        // Start the server on port 3000
        app.listen(3000, () => {
            console.log('Express Server running at http://localhost:3000');
        });