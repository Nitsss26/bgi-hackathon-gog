import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// In-memory store for OTPs (for demo purposes)
const otpStore = new Map<string, string>();

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Generate a random 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// API Routes
app.post("/api/send-otp", async (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const otp = generateOTP();
  otpStore.set(email, otp);

  const mailOptions = {
    from: `"BGI Hackathon 2026" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Your OTP for BGI Hackathon Registration",
    html: `
      <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQl1nkLCpAH4iEQwrFnV1DxGgWe8jJsxvQiQ&s" alt="BGI Logo" style="height: 60px;" />
          <h2 style="color: #0f172a; margin-top: 10px;">BGI Hackathon 2026</h2>
        </div>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="color: #475569; font-size: 16px; margin-bottom: 10px;">Your One-Time Password (OTP) for registration is:</p>
          <h1 style="color: #eab308; font-size: 36px; letter-spacing: 5px; margin: 0;">${otp}</h1>
        </div>
        <p style="color: #64748b; font-size: 14px; text-align: center; margin-top: 20px;">
          This OTP is valid for 10 minutes. Please do not share it with anyone.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send OTP" });
  }
});

app.post("/api/verify-otp", (req, res) => {
  const { email, emailOtp, mobileOtp } = req.body;

  if (!email || !emailOtp || !mobileOtp) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const storedOtp = otpStore.get(email);

  if (storedOtp === emailOtp && mobileOtp === "123456") {
    otpStore.delete(email); // Clear OTP after successful verification
    res.json({ success: true, message: "OTP verified successfully" });
  } else {
    res.status(400).json({ error: "Invalid OTP" });
  }
});

app.post("/api/register", async (req, res) => {
  const { teamLeader, teamMembers, projectDetails } = req.body;

  // In a real app, save to database here

  const mailOptions = {
    from: `"BGI Hackathon 2026" <${process.env.SMTP_USER}>`,
    to: teamLeader.email,
    subject: "Registration Confirmed - BGI Hackathon 2026",
    html: `
      <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQl1nkLCpAH4iEQwrFnV1DxGgWe8jJsxvQiQ&s" alt="BGI Logo" style="height: 60px;" />
          <h2 style="color: #0f172a; margin-top: 10px;">Registration Successful!</h2>
        </div>
        <div style="color: #334155; line-height: 1.6;">
          <p>Dear <strong>${teamLeader.name}</strong>,</p>
          <p>Congratulations! Your team has successfully registered for the BGI Hackathon 2026.</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #0f172a;">Project Details</h3>
            <p style="margin: 5px 0;"><strong>Theme:</strong> ${projectDetails.theme}</p>
            <p style="margin: 5px 0;"><strong>Problem Statement:</strong> ${projectDetails.problemStatement}</p>
            <p style="margin: 5px 0;"><strong>Team Size:</strong> ${teamMembers.length + 1} members</p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <p style="margin-bottom: 15px; font-weight: bold;">Next Step: Submit your Ideation PPT</p>
            <a href="https://bgihackathon.com/submit-ppt" style="background-color: #eab308; color: #0f172a; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block;">
              Submit PPT Here
            </a>
          </div>
          
          <p>If you have any questions, feel free to reply to this email.</p>
          <p>Best regards,<br/>The BGI Hackathon Team</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    res.status(500).json({ error: "Registration successful but failed to send confirmation email" });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
