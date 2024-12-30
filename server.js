// Import required modules
const express = require('express');
const path = require('path');

// Initialize the Express app
const app = express();
const PORT = 3000;

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname)));

// Routes to serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/mystory', (req, res) => {
    res.sendFile(path.join(__dirname, 'mystory.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

// Handle form submissions from register.html
app.post('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'success.html')); // Serve the success.html file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
