const nodemailer = require('nodemailer');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * @desc    Handle incoming contact form submissions
 * @route   POST /api/contact
 * @access  Public
 */
const sendContactEmail = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate request body
    if (!name || !email || !subject || !message) {
      res.status(400);
      throw new Error('Please provide all required fields: name, email, subject, and message.');
    }

    if (!emailRegex.test(email)) {
      res.status(400);
      throw new Error('Please provide a valid email address.');
    }

    // Initialize Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === '465', // true for port 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection config
    await transporter.verify();

    // Construct the email template
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
        <div style="margin-top: 20px;">
          <p style="margin-bottom: 10px;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          <p style="margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</p>
          
          <div style="margin-top: 25px;">
            <p style="margin-bottom: 5px;"><strong>Message:</strong></p>
            <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 0 4px 4px 0; white-space: pre-wrap; color: #334155; line-height: 1.5;">${message}</div>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
          <p>This message was sent from your portfolio website contact form.</p>
        </div>
      </div>
    `;

    // Configure mail options
    const mailOptions = {
      from: `"${name} (Portfolio)" <${process.env.SMTP_USER}>`, // authenticated user address
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${subject}`,
      html: htmlTemplate,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    });
  } catch (error) {
    // Pass errors to the error handler middleware
    next(error);
  }
};

module.exports = {
  sendContactEmail,
};
