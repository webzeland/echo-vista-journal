
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import NewsletterSection from '@/components/NewsletterSection';
import { getFeaturedArticle, getArticlesByCategory } from '@/data/blogData';

const Index = () => {
  const featuredArticle = getFeaturedArticle();
  const travelArticles = getArticlesByCategory('travel').slice(0, 3);
  const booksArticles = getArticlesByCategory('books').slice(0, 3);
  const moviesArticles = getArticlesByCategory('movies').slice(0, 3);
  const lifestyleArticles = getArticlesByCategory('lifestyle').slice(0, 3);
  const writingArticles = getArticlesByCategory('writing').slice(0, 3);

  return (
    <Layout>
      <HeroSection featuredArticle={featuredArticle} />
      
      <CategorySection
        title="Travel Adventures"
        category="travel"
        articles={travelArticles}
      />
      
      <CategorySection
        title="Books & Literature"
        category="books"
        articles={booksArticles}
      />
      
      <CategorySection
        title="Movies & Cinema"
        category="movies"
        articles={moviesArticles}
      />
      
      <CategorySection
        title="Lifestyle & Wellness"
        category="lifestyle"
        articles={lifestyleArticles}
      />
      
      <CategorySection
        title="Writing & Creativity"
        category="writing"
        articles={writingArticles}
      />
      
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
