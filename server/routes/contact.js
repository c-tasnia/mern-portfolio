import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import validator from "validator";
dotenv.config();

const router = express.Router();

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message, website } = req.body;

    // honeypot — bots fill this, real users never see it
    if (website) {
      return res.status(201).json({ success: true });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are all required." });
    }
    if (name.length > 100 || message.length > 2000 || email.length > 150) {
      return res.status(400).json({ error: "One of the fields is too long." });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    const safeName = validator.escape(validator.trim(name));
    const safeMessage = validator.escape(validator.trim(message));

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${safeName}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${validator.escape(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br>")}</p>
      `,
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err.message);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});

export default router;