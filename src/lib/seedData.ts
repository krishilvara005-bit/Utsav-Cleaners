export interface ServiceItem {
  id: string;
  title: string;
  category: 'dry-cleaning' | 'laundry' | 'pressing' | 'specialty' | 'ethnic';
  description: string;
  price: number;
  unit: string;
  turnaround: string;
  iconName: string;
  popular?: boolean;
  features: string[];
}

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'dc-shirt-suit',
    title: 'Executive Suit & Shirt Care',
    category: 'dry-cleaning',
    description: 'Expert dry cleaning for 2-piece suits, blazers, dress shirts, and trousers with crisp crease finishing.',
    price: 350,
    unit: 'per suit set',
    turnaround: '24-48 hours',
    iconName: 'Shirt',
    popular: true,
    features: ['Stain removal treatment', 'Hand finish & custom hanger', 'Fabric softness guarantee']
  },
  {
    id: 'ethnic-saree-lehenga',
    title: 'Saree & Ethnic Wear Care',
    category: 'ethnic',
    description: 'Delicate hand care & eco-solvent cleaning for silk sarees, embroidered lehengas, sherwanis, and dupattas.',
    price: 450,
    unit: 'per heavy garment',
    turnaround: '48 hours',
    iconName: 'Sparkles',
    popular: true,
    features: ['Zero color bleed protection', 'Zari & bead protection', 'Tissue wrap preservation']
  },
  {
    id: 'laundry-wash-fold',
    title: 'Daily Wash & Fold Laundry',
    category: 'laundry',
    description: 'Hygienic machine wash with hypoallergenic detergents, tumble dried, neatly folded, and packed in fresh bags.',
    price: 99,
    unit: 'per kg (min 3kg)',
    turnaround: '24 hours',
    iconName: 'Package',
    popular: true,
    features: ['Sanitized wash cycle', 'Color separation', 'Neat moisture-free fold']
  },
  {
    id: 'steam-pressing-ironing',
    title: 'Precision Steam Pressing',
    category: 'pressing',
    description: 'Vacuum steam ironing to remove tough wrinkles without damaging fabric fibers or leaving shine marks.',
    price: 35,
    unit: 'per shirt/trouser',
    turnaround: '12-24 hours',
    iconName: 'Flame',
    popular: false,
    features: ['Shine-free steam technology', 'Crisp collars & cuffs', 'Hanger or folded packing']
  },
  {
    id: 'shoe-leather-care',
    title: 'Shoe & Leather Restoration',
    category: 'specialty',
    description: 'Deep cleaning, odor elimination, sole whitening, and leather conditioning for sneakers, formal shoes & bags.',
    price: 599,
    unit: 'per pair/bag',
    turnaround: '48-72 hours',
    iconName: 'Footprints',
    popular: true,
    features: ['Anti-bacterial treatment', 'Leather nourishment', 'Sole stain extraction']
  },
  {
    id: 'curtain-carpet-care',
    title: 'Curtains & Carpet Deep Clean',
    category: 'specialty',
    description: 'Heavy fabric dust extraction, stain removal, and steam sanitization for curtains, drapes, and living room rugs.',
    price: 120,
    unit: 'per sq ft / panel',
    turnaround: '48 hours',
    iconName: 'Home',
    popular: false,
    features: ['Dust mite elimination', 'Doorstep removal & re-hanging', 'Odour neutralizing']
  }
];

export const INITIAL_TESTIMONIALS = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Sector 62, Noida',
    rating: 5,
    comment: 'Utsav Cleaners handled my designer bridal lehenga with extreme care. The stain from the reception was completely gone without any color fading!',
    service: 'Saree & Ethnic Care',
    date: '3 days ago'
  },
  {
    id: '2',
    name: 'Rajesh Malhotra',
    location: 'Indirapuram, Ghaziabad',
    rating: 5,
    comment: 'Their doorstep pickup and 24-hour turnaround for executive suit dry cleaning saved me before an international business conference. Highly recommended!',
    service: 'Executive Suit Care',
    date: '1 week ago'
  },
  {
    id: '3',
    name: 'Ananya Verma',
    location: 'Vashundhara',
    rating: 5,
    comment: 'Very professional staff and transparent pricing! I use their weekly wash & fold subscription. Garments arrive smelling fresh and folded so neatly.',
    service: 'Wash & Fold Laundry',
    date: '2 weeks ago'
  }
];
