const express = require("express");
const router = express.Router();
const cors =  require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

router.get("/", (req, res) => {
    res.send("Hello, Server is running!"); // Send a simple response
  });

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:"Summ3rlinh@gmail.com",
        pass: "fazcstlxngkjvkek"
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);

    } else {
        console.log("Ready to Send");
    }
});

router.post('/contact', (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "Summ3rlinh@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
                <p>Name: ${email}</p>
                <p>Name: ${phone}</p>
                <p>Name: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent"});
        }
    });
});