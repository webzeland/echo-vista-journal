
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, Clock, Heart, MessageSquare, Share2, Bookmark } from 'lucide-react';
import Layout from '@/components/Layout';
import CategoryBadge from '@/components/CategoryBadge';
import StarRating from '@/components/StarRating';
import { getArticleById, getArticlesByCategory } from '@/data/blogData';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import ArticleCard from '@/components/ArticleCard';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(id || '');
  
  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  // Get related articles from the same category
  const relatedArticles = getArticlesByCategory(article.category)
    .filter(a => a.id !== article.id)
    .slice(0, 3);
  
  // Estimated reading time (very rough estimate: 200 words per minute)
  const readingTime = Math.max(1, Math.ceil(article.content.split(' ').length / 200));
  
  return (
    <Layout>
      {/* Article Header */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CategoryBadge category={article.category} />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{format(new Date(article.date), "MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{readingTime} min read</span>
              </div>
              <div className="flex items-center">
                <StarRating rating={article.rating} />
                <span className="ml-2">({article.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{article.author.name}</div>
                <div className="text-sm text-gray-500">{article.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="max-w-4xl mx-auto">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Social Sharing Sidebar */}
          <div className="md:w-16">
            <div className="md:sticky md:top-24 flex md:flex-col gap-4 mb-6 md:mb-0">
              <Button variant="outline" size="icon" className="rounded-full">
                <Heart className="h-5 w-5 text-gray-600" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <MessageSquare className="h-5 w-5 text-gray-600" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="h-5 w-5 text-gray-600" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bookmark className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div 
              className="prose max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Tags */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <Link 
                    key={tag} 
                    to={`/tag/${tag}`} 
                    className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 bg-gray-50 rounded-xl p-6">
              <div className="flex items-start">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{article.author.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{article.author.role}</p>
                  <p className="text-gray-600">{article.author.bio || 'Writer and contributor at Echo Vista Journal.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Articles */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;
