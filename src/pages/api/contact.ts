import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// This is a placeholder for a serverless function
// For GitHub Pages, you'll need to use a third-party service like Formspree, Netlify Forms, or a serverless function

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // In a real implementation, you would send an email here
    // For example, using a service like SendGrid, Mailgun, or Nodemailer with a SMTP service
    
    // This is just a simulation - in a real app, you would actually send an email
    console.log('Form submission received:', { name, email, subject, message });
    
    // Return success response
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ message: 'Error sending message' });
  }
}
