import type { NextApiRequest, NextApiResponse } from 'next';
import { Storage } from '@/lib/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const bookings = Storage.getBookings();
      return res.status(200).json({ success: true, data: bookings });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to fetch bookings' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { name, phone, address, service, itemsCount, preferredDate, preferredTime, notes } = req.body;

      if (!name || !phone || !address || !service || !preferredDate || !preferredTime) {
        return res.status(400).json({ success: false, message: 'Please provide all required fields' });
      }

      const booking = Storage.createBooking({
        name,
        phone,
        address,
        service,
        itemsCount: Number(itemsCount) || 1,
        preferredDate,
        preferredTime,
        notes: notes || ''
      });

      return res.status(201).json({
        success: true,
        message: 'Booking created successfully!',
        data: booking
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to create booking' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
