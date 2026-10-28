import type { NextApiRequest, NextApiResponse } from 'next';
import { Storage } from '@/lib/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PATCH') {
    try {
      const { status } = req.body;
      if (!status) {
        return res.status(400).json({ success: false, message: 'Status is required' });
      }

      const updated = Storage.updateBookingStatus(id as string, status);
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Booking not found' });
      }

      return res.status(200).json({ success: true, data: updated });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to update booking status' });
    }
  }

  res.setHeader('Allow', ['PATCH']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
