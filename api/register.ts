import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { teamLeader, teamMembers, projectDetails } = req.body;

  if (!teamLeader || !projectDetails) {
    return res.status(400).json({ error: 'Missing registration details' });
  }

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
    res.status(200).json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    res.status(500).json({ error: "Registration successful but failed to send confirmation email" });
  }
}
