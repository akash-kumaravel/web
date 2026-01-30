import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}
