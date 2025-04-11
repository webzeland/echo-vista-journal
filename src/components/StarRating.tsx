
import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  return (
    <div className="rating">
      {[...Array(maxRating)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating) 
              ? 'fill-yellow-400 text-yellow-400' 
              : i < rating 
                ? 'text-yellow-400 fill-yellow-400 half-star' 
                : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
