const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/signin', (req, res) => {
    // Handle sign-in logic here
    const { signInUsername, signInPassword } = req.body;
    // Authenticate user
    // Example: Check username and password against database
    // Dummy authentication logic for demonstration
    if (signInUsername === 'demo' && signInPassword === 'demo') {
        res.status(200).json({ message: 'Sign-in successful' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.post('/signup', (req, res) => {
    // Handle sign-up logic here
    const { signUpUsername, signUpPassword } = req.body;
    // Example: Save user to database
    // Dummy logic for demonstration
    res.status(201).json({ message: 'Sign-up successful' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
