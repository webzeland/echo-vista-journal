
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CategoryBadge from './CategoryBadge';
import { Article } from '@/types/blog';
import { format } from 'date-fns';

interface HeroSectionProps {
  featuredArticle: Article;
}

const HeroSection = ({ featuredArticle }: HeroSectionProps) => {
  const { id, title, excerpt, image, category, date, author } = featuredArticle;

  return (
    <section className="relative bg-gray-100 pt-12 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Echo Vista Journal
          </h1>
          <p className="text-lg text-gray-600">
            Explore the world through stories, adventures, and creativity
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <CategoryBadge category={category} />
                <span className="text-sm text-gray-500">
                  {format(new Date(date), "MMMM d, yyyy")}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                {title}
              </h2>
              <p className="text-gray-600 mb-6">
                {excerpt}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center mb-4 sm:mb-0">
                <img 
                  src={author.avatar} 
                  alt={author.name} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium text-gray-900">{author.name}</div>
                  <div className="text-sm text-gray-500">{author.role}</div>
                </div>
              </div>
              <Button asChild className="flex items-center">
                <Link to={`/article/${id}`}>
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
