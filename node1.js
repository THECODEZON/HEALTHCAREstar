const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML file
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'appointment.html'));
});

// Handle form submission
app.post('/formprocess', (req, res) => {
    const { patientName, doctor, date } = req.body;
    res.send({
        PatientName: patientName,
        Doctor: doctor,
        Date: date
    });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
