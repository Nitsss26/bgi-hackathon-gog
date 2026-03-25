import crypto from 'crypto';

const OTP_SECRET = process.env.OTP_SECRET || 'bgi-hackathon-2026-secret-key';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, emailOtp, mobileOtp, token } = req.body;

  if (!email || !emailOtp || !mobileOtp || !token) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Decode token
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [tokenEmail, tokenHash] = decoded.split(':');

    if (tokenEmail !== email) {
      return res.status(400).json({ error: 'Invalid token for this email' });
    }

    // Verify OTP hash
    const expectedHash = crypto.createHmac('sha256', OTP_SECRET)
      .update(`${email}:${emailOtp}`)
      .digest('hex');

    if (expectedHash === tokenHash && mobileOtp === "123456") {
      res.status(200).json({ success: true, message: "OTP verified successfully" });
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid verification token" });
  }
}
