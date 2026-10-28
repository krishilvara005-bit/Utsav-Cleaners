import type { NextApiRequest, NextApiResponse } from 'next';
import { Storage } from '@/lib/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const services = Storage.getServices();
      return res.status(200).json({ success: true, data: services });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to fetch services' });
    }
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
