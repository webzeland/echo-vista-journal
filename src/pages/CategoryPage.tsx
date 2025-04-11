
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import ArticleCard from '@/components/ArticleCard';
import { getArticlesByCategory } from '@/data/blogData';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // Use the category from params, defaulting to 'travel' if not available
  const currentCategory = category || 'travel';
  
  // Get articles for the current category
  const articles = getArticlesByCategory(currentCategory);
  
  // Filter articles by search term
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate the page title based on the category
  const getCategoryTitle = () => {
    switch (currentCategory) {
      case 'travel':
        return 'Travel Adventures';
      case 'books':
        return 'Books & Literature';
      case 'movies':
        return 'Movies & Cinema';
      case 'lifestyle':
        return 'Lifestyle & Wellness';
      case 'writing':
        return 'Writing & Creativity';
      default:
        return 'Articles';
    }
  };

  return (
    <Layout>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {getCategoryTitle()}
          </h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Explore our collection of articles about {currentCategory} topics, from expert insights to practical guides.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder={`Search ${currentCategory} articles...`}
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <Tabs defaultValue="latest">
                <TabsList>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="rated">Top Rated</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or browse all articles.</p>
              <Button onClick={() => setSearchTerm('')}>
                Show All Articles
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
