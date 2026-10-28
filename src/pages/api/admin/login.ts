import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'utsav-cleaners-secret-key-2026';
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'utsav123';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      const token = jwt.sign({ role: 'admin', username }, JWT_SECRET, { expiresIn: '7d' });
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        token,
        user: { username, role: 'admin' }
      });
    }

    return res.status(401).json({
      success: false,
      message: 'Invalid username or password'
    });
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
