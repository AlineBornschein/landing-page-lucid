import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    // Log form data for debugging
    console.log('Form submission received:', { name, email, subject });
    
    // Create a transporter using Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'aline@lucidcodelabs.com',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: '"Contact Form" <aline@lucidcodelabs.com>',
      to: 'info@lucidcodelabs.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      // Send email
      console.log('Attempting to send email via Zoho...');
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      
      return res.status(200).json({ 
        success: true, 
        message: 'Email sent successfully'
      });
    } catch (error) {
      console.error('Error sending mail:', error);
      
      // Return detailed error for debugging
      return res.status(500).json({ 
        success: false, 
        message: 'Error sending email',
        error: error.message,
        stack: error.stack
      });
    }
  } catch (error) {
    console.error('General error in contact API:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error processing request', 
      error: error.message 
    });
  }
} 