export interface ContactCard {
  title: string;
  value: string;
  description: string;
  href: string;
}

export interface Department {
  title: string;
  description: string;
  contact: string;
  email: string;
}

export interface BusinessHour {
  day: string;
  hours: string;
}

export interface OfficeLocation {
  title: string;
  address: string;
  phone: string;
  email: string;
}