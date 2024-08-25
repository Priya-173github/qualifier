const express = require('express');
const app = express();
app.use(express.json());

// Sample API Endpoint for POST
app.post('/bfhl', async (req, res) => {
    const data = req.body.data;
    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (/^[0-9]+$/.test(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]+$/.test(item)) {
            alphabets.push(item);
            if (item.toLowerCase() > highestLowercase) {
                highestLowercase = item.toLowerCase();
            }
        }
    });

    const response = {
        is_success: true,
        user_id: "PriyadarshaniShewale_123",
        email: "priyadarshani@example.com",
        roll_number: "21BCE2211",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
    };

    res.json(response);
});

// Sample API Endpoint for GET
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

module.exports = app;
