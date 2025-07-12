const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'samjo2034csat@gmail.com',
        pass: 'YOUR_GOOGLE_APP_PASSWORD' 
    }
});

app.post('/submit-form', (req, res) => {
    console.log('Form data recieved:', req.body);
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'samjo2034csat@gmail.com',
        subject: `New message from ${name}`,
        html: `<p>You have a new message from your website contact form:</p>
               <ul>
                   <li><strong>Name:</strong> ${name}</li>
                   <li><strong>Email:</strong> ${email}</li>
                   <li><strong>Message:</strong> ${message}</li>
               </ul>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.send('Error sending message.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send(`Thank you for your message, ${name}!`);
        }
    });
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});