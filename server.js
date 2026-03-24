
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
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
         host: "74.125.140.108",
    port: 587,
    secure: false,      // TLS
    requireTLS: true,
    tls: {
        family: 4
    },         
        auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
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
        res.status(500).send(err.message);
    }

});

app.listen(3000, () => {
    console.log("Server läuft auf https://business-webseite.onrender.com/send");
});

app.get("/", (req, res) => {
    res.send("Server läuft!");
});


