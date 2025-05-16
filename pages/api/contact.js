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
    
    // Create a test account at ethereal.email
    console.log('Creating test account for email sending...');
    let testAccount;
    try {
      testAccount = await nodemailer.createTestAccount();
      console.log('Test account created:', testAccount.user);
    } catch (err) {
      console.error('Error creating test account:', err);
      // Fallback to a mock success response for development
      return res.status(200).json({ 
        success: true, 
        message: 'Development mode: Email would be sent in production',
        mockSuccess: true
      });
    }

    // Create a transporter using the test account
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Email content
    const mailOptions = {
      from: '"Contact Form" <contact@lucidcodelabs.com>',
      to: 'aline@lucidcodelabs.com',
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

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Return the preview URL so you can view the email in a browser
      return res.status(200).json({ 
        success: true, 
        message: 'Email sent successfully',
        previewUrl: nodemailer.getTestMessageUrl(info)
      });
    } catch (error) {
      console.error('Error sending mail:', error);
      // Fallback to a mock success response for development
      return res.status(200).json({ 
        success: true, 
        message: 'Development mode: Email would be sent in production',
        mockSuccess: true
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