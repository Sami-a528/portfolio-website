const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: process.env.API_SENDGRID,
        },
    })
);


const sendEmailController = (req, res) => {
    try {
        const { name, email, msg } = req.body;
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message: "Please Provide All Fields",
            });
        }
        transporter.sendMail({
            to: "asamiullah084@gmail.com",
            from: "asamiullah084@gmail.com",
            subject: "Regarding Mern Portfolio App",
            html: `
                <h5>Details Information</h5>
                <ul>
                    <li><p>Name : ${name} </p></li>
                    <li><p>Email : ${email} </p></li>
                    <li><p>Message : ${msg} </p></li>
                </ul>
            `
        })
        
        return res.status(200).send({
            success: true,
            message: "Your Message Send Successfully",
        });
    } catch (error) {
        console.log("Error sending email", error);
        return res.status(500).send({
            success: false,
            message: "Send Email API Error",
            error: error.message,
        });
    };
};

module.exports = { sendEmailController };