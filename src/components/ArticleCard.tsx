
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import CategoryBadge from './CategoryBadge';
import StarRating from './StarRating';
import { Article } from '@/types/blog';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const {
    id,
    title,
    excerpt,
    image,
    category,
    date,
    likes,
    comments,
    rating,
    reviewCount,
  } = article;

  return (
    <div className={cn(
      "rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300",
      featured ? "md:flex" : "flex flex-col h-full"
    )}>
      <div className={cn(
        "relative overflow-hidden",
        featured ? "md:w-1/2" : "h-48"
      )}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <CategoryBadge category={category} />
        </div>
      </div>
      
      <div className={cn(
        "p-5 flex flex-col",
        featured ? "md:w-1/2" : "flex-grow"
      )}>
        <div className="mb-2 text-sm text-gray-500">
          {format(new Date(date), "MMMM d, yyyy")}
        </div>
        
        <h3 className={cn(
          "font-bold mb-3 text-gray-800",
          featured ? "text-2xl" : "text-xl"
        )}>
          <Link to={`/article/${id}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        
        <div className="mb-4 flex items-center gap-2">
          <StarRating rating={rating} />
          <span className="text-sm text-gray-500">{reviewCount} reviews</span>
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-500">
              <Heart className="w-4 h-4 mr-1" />
              <span className="text-sm">{likes}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <MessageSquare className="w-4 h-4 mr-1" />
              <span className="text-sm">{comments}</span>
            </div>
          </div>
          <Link 
            to={`/article/${id}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';

export default ArticleCard;
