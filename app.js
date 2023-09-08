const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        console.log(data);
        if (!data ) {
            return res.status(400).json({ is_success: false, error: 'Data Incomplete' });
        }

        let numbers = [];
        let alphabets = [];

        data.forEach(item => {
            if(!isNaN(item)) {
                numbers.push(item);
            } else if(item.length === 1 && isNaN(item)) {
                alphabets.push(item.toUpperCase());
            }
        });

        const highestAlphabet = alphabets.sort((a, b) => b.localeCompare(a))[0];

        const response = {
            is_success: true,
            user_id: "jayesh_talreja_20102001",email : "jt6049@srmist.edu.in",
            roll_number:"RA2011033010021",
            numbers,
            alphabets,
            highest_alphabet: highestAlphabet ? [highestAlphabet] : []
        };
        
        res.json(response);
        console.log(response);
    } catch (error) {
        res.status(500).json({ is_success: false, error: 'server error' });
    }
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});