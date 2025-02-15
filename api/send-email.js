import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();


export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://indianspringskatahdins.com/contact');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end(); // Handle CORS preflight
    }

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed." });
    }

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD, // Ensure this is set in .env
            },
        });

        const adminMailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: 'New Contact Form Submission',
            text: `You have a new message from ${name} (${email}):\n\n${message}`,
        };

        const userMailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Confirmation of Your Message',
            text: `Dear ${name},\n\nThank you for reaching out! We have received your message:\n\n${message}\n\nBest regards,\nIndian Springs Katahdins`,
        };

        try {
            await transporter.sendMail(adminMailOptions);
            await transporter.sendMail(userMailOptions);
            return res.status(200).json({ message: 'Emails sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email.', error: error.toString() });
        }
        
    
}
