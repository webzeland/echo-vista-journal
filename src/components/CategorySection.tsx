
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ArticleCard from './ArticleCard';
import { Article } from '@/types/blog';

interface CategorySectionProps {
  title: string;
  category: 'travel' | 'books' | 'movies' | 'lifestyle' | 'writing';
  articles: Article[];
}

const CategorySection = ({ title, category, articles }: CategorySectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <Link 
            to={`/category/${category}`}
            className="flex items-center text-primary font-medium hover:underline"
          >
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
