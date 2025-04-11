
import React from 'react';
import { cn } from '@/lib/utils';

type CategoryType = 'travel' | 'books' | 'movies' | 'lifestyle' | 'writing';

interface CategoryBadgeProps {
  category: CategoryType;
  className?: string;
}

const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  return (
    <span className={cn(`category-badge category-${category}`, className)}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </span>
  );
};

export default CategoryBadge;
