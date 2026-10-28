import type { NextApiRequest, NextApiResponse } from 'next';
import { Storage } from '@/lib/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const contacts = Storage.getContacts();
      return res.status(200).json({ success: true, data: contacts });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to fetch contact messages' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { name, phone, email, subject, message } = req.body;
      if (!name || !phone || !message) {
        return res.status(400).json({ success: false, message: 'Name, phone, and message are required' });
      }

      const newContact = Storage.createContact({
        name,
        phone,
        email: email || '',
        subject: subject || 'General Inquiry',
        message
      });

      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been received.',
        data: newContact
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to submit contact message' });
    }
  }

  if (req.method === 'PATCH') {
    try {
      const { id, status } = req.body;
      if (!id || !status) {
        return res.status(400).json({ success: false, message: 'ID and status are required' });
      }
      const updated = Storage.updateContactStatus(id, status);
      return res.status(200).json({ success: true, data: updated });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to update contact status' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST', 'PATCH']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
