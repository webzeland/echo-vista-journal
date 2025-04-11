
export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export type CategoryType = 'travel' | 'books' | 'movies' | 'lifestyle' | 'writing';

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: CategoryType;
  date: string;
  author: Author;
  tags: string[];
  likes: number;
  comments: number;
  rating: number;
  reviewCount: number;
}
