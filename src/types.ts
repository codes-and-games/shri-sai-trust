export interface EventType {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  description: string | string[]; // Allow both string and array of strings
  coverImage: string;
  gallery: string[];
  location: string;
  category: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface GalleryItemType {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video';
  url: string;
  eventId?: string;
}

export interface SocialLinkType {
  name: string;
  url: string;
  icon: string;
}