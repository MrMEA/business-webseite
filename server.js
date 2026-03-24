require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
    console.log("Request angekommen:", req.body);
    const { name, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_USER
}
    });

    let mailOptions = {
        from:process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Neue Anfrage",
        text: `Name: ${name} \nNachricht: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send("Email gesendet");
    } catch (err) {
        res.status(500).send("Fehler");
    }

});

app.listen(3000, () => {
    console.log("Server läuft auf https://business-webseite.onrender.com/send");
});

app.get("/", (req, res) => {
    res.send("Server läuft!");
});


