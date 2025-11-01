import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { formType, ...data } = formData;

    // Format email body based on form type
    let emailBody = `New ${formType} Form Submission\n\n`;
    
    Object.entries(data).forEach(([key, value]) => {
      const label = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
      emailBody += `${label}: ${value}\n`;
    });

    emailBody += `\n---\nSubmitted at: ${new Date().toISOString()}`;

    // In production, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    
    // For now, log the submission
    console.log('Form submission:', {
      to: 'dev@adsmarketfx.com',
      subject: `${formType} Form Submission`,
      body: emailBody,
      data
    });

    // Simulate email sending
    // TODO: Replace with actual email service integration
    // await sendEmail({
    //   to: 'dev@adsmarketfx.com',
    //   subject: `${formType} Form Submission`,
    //   text: emailBody,
    //   html: emailBody.replace(/\n/g, '<br>')
    // });

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully. We will contact you soon!'
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}