import nodemailer from 'nodemailer';
import crypto from 'crypto';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const OTP_SECRET = process.env.OTP_SECRET || 'bgi-hackathon-2026-secret-key';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Create a signed token (Hashed OTP + Secret)
  const hash = crypto.createHmac('sha256', OTP_SECRET)
    .update(`${email}:${otp}`)
    .digest('hex');
  
  // The token is email:hash
  const verificationToken = Buffer.from(`${email}:${hash}`).toString('base64');

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
    res.status(200).json({ 
      success: true, 
      message: "OTP sent successfully",
      token: verificationToken
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send OTP" });
  }
}
