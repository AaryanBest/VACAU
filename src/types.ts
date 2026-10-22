export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  sealingSpec: string; // Course details or culinary specification
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ReservationData {
  experienceId: string;
  experienceName: string;
  guests: number;
  time: string;
  date: string;
  winePairing: boolean;
  specialRequests?: string;
}
