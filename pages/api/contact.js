import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  console.log('🔷 Contact form API handler called');
  
  if (req.method !== 'POST') {
    console.log('❌ Method not allowed:', req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;
  console.log('📝 Form data received:', { name, email, subject, messageLength: message?.length });

  // Basic validation
  if (!name || !email || !subject || !message) {
    console.log('❌ Missing required fields');
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    console.log('🔷 Starting email sending process with SendGrid');
    
    // Set SendGrid API Key
    const apiKey = process.env.SENDGRID_API_KEY || '';
    if (!apiKey) {
      console.error('❌ SendGrid API key is missing');
      return res.status(500).json({ 
        success: false, 
        message: 'Server configuration error',
        error: 'SendGrid API key is missing'
      });
    }
    
    sgMail.setApiKey(apiKey);
    console.log('🔷 SendGrid API key configured, length:', apiKey.length);

    // Create email
    const emailContent = {
      to: 'info@lucidcodelabs.com', // Recipient
      from: 'aline@lucidcodelabs.com', // Verified sender
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
    
    console.log('📧 Email prepared:', {
      to: emailContent.to,
      from: emailContent.from,
      subject: emailContent.subject
    });

    try {
      console.log('🔷 Sending email via SendGrid...');
      
      // Use SendGrid to send the email
      await sgMail.send(emailContent);
      
      console.log('✅ Email sent successfully!');
      
      return res.status(200).json({ 
        success: true, 
        message: 'Email sent successfully'
      });
    } catch (error) {
      console.error('❌ SendGrid Error:', error);
      
      if (error.response) {
        console.error('❌ SendGrid Response Error:');
        console.error('  Status code:', error.response.status);
        console.error('  Headers:', error.response.headers);
        console.error('  Body:', error.response.body);
      }
      
      // Return detailed error for debugging
      return res.status(500).json({ 
        success: false, 
        message: 'Error sending email',
        error: error.message,
        details: error.response ? error.response.body : null
      });
    }
  } catch (error) {
    console.error('❌ General error in contact API:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error processing request', 
      error: error.message 
    });
  }
} 