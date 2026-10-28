import fs from 'fs';
import path from 'path';
import { INITIAL_SERVICES, ServiceItem } from './seedData';

export interface Booking {
  id: string;
  name: string;
  phone: string;
  address: string;
  service: string;
  itemsCount: number;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'Pending' | 'Picked up' | 'In Process' | 'Delivered' | 'Cancelled';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
  status: 'New' | 'Read' | 'Replied';
  createdAt: string;
}

interface DBStructure {
  bookings: Booking[];
  contacts: ContactMessage[];
  services: ServiceItem[];
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

const INITIAL_DB: DBStructure = {
  bookings: [
    {
      id: 'UC-1001',
      name: 'Vikram Mehta',
      phone: '+91 98765 43210',
      address: 'Flat 402, Green Valley Heights, Sector 62, Noida',
      service: 'Executive Suit & Shirt Care',
      itemsCount: 3,
      preferredDate: '2026-09-05',
      preferredTime: '10:00 AM - 12:00 PM',
      notes: 'Please press suit jacket with extra care around lapels.',
      status: 'Pending',
      createdAt: new Date().toISOString()
    },
    {
      id: 'UC-1002',
      name: 'Suman Joshi',
      phone: '+91 91234 56789',
      address: 'House No 88, B-Block, Indirapuram',
      service: 'Saree & Ethnic Wear Care',
      itemsCount: 2,
      preferredDate: '2026-09-04',
      preferredTime: '02:00 PM - 04:00 PM',
      notes: 'Silk saree with heavy embroidery.',
      status: 'In Process',
      createdAt: new Date(Date.now() - 86400000).toISOString()
    }
  ],
  contacts: [
    {
      id: 'MSG-2001',
      name: 'Rohan Gupta',
      phone: '+91 99887 76655',
      email: 'rohan.g@gmail.com',
      subject: 'Bulk Commercial Cleaning Quote',
      message: 'Hello, we are a corporate office in Sector 63. Do you offer monthly billings for office curtain & chair dry cleaning?',
      status: 'New',
      createdAt: new Date().toISOString()
    }
  ],
  services: INITIAL_SERVICES
};

function ensureDB(): DBStructure {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_DB, null, 2), 'utf-8');
    return INITIAL_DB;
  }
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (!parsed.bookings) parsed.bookings = INITIAL_DB.bookings;
    if (!parsed.contacts) parsed.contacts = INITIAL_DB.contacts;
    if (!parsed.services) parsed.services = INITIAL_SERVICES;
    return parsed;
  } catch (err) {
    fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_DB, null, 2), 'utf-8');
    return INITIAL_DB;
  }
}

function saveDB(db: DBStructure) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
}

export const Storage = {
  // BOOKINGS
  getBookings: (): Booking[] => {
    const db = ensureDB();
    return db.bookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  getBookingById: (id: string): Booking | undefined => {
    const db = ensureDB();
    return db.bookings.find(b => b.id === id);
  },

  createBooking: (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking => {
    const db = ensureDB();
    const newId = `UC-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: Booking = {
      ...bookingData,
      id: newId,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    db.bookings.unshift(newBooking);
    saveDB(db);
    return newBooking;
  },

  updateBookingStatus: (id: string, status: Booking['status']): Booking | null => {
    const db = ensureDB();
    const index = db.bookings.findIndex(b => b.id === id);
    if (index === -1) return null;
    db.bookings[index].status = status;
    saveDB(db);
    return db.bookings[index];
  },

  // CONTACTS
  getContacts: (): ContactMessage[] => {
    const db = ensureDB();
    return db.contacts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  createContact: (contactData: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): ContactMessage => {
    const db = ensureDB();
    const newId = `MSG-${Math.floor(2000 + Math.random() * 9000)}`;
    const newContact: ContactMessage = {
      ...contactData,
      id: newId,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    db.contacts.unshift(newContact);
    saveDB(db);
    return newContact;
  },

  updateContactStatus: (id: string, status: ContactMessage['status']): ContactMessage | null => {
    const db = ensureDB();
    const index = db.contacts.findIndex(c => c.id === id);
    if (index === -1) return null;
    db.contacts[index].status = status;
    saveDB(db);
    return db.contacts[index];
  },

  // SERVICES
  getServices: (): ServiceItem[] => {
    const db = ensureDB();
    return db.services;
  }
};
