import { BlogPost, BlogCategory, BlogComment, BlogTag, blogPosts, blogCategories, blogComments, blogTags } from '@/data/blogData';

export class BlogService {
  private static instance: BlogService;

  static getInstance(): BlogService {
    if (!BlogService.instance) {
      BlogService.instance = new BlogService();
    }
    return BlogService.instance;
  }

  // Posts
  getAllPosts(options: {
    category?: string;
    tag?: string;
    featured?: boolean;
    limit?: number;
    offset?: number;
  } = {}): BlogPost[] {
    const { category, tag, featured, limit, offset = 0 } = options;
    
    let posts = blogPosts.filter(post => post.status === 'published');

    // Filtrer par catégorie
    if (category) {
      posts = posts.filter(post => post.category === category);
    }

    // Filtrer par tag
    if (tag) {
      posts = posts.filter(post => post.tags.includes(tag));
    }

    // Filtrer par featured
    if (featured !== undefined) {
      posts = posts.filter(post => post.featured === featured);
    }

    // Trier par date (plus récent en premier)
    posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    // Pagination
    if (limit) {
      posts = posts.slice(offset, offset + limit);
    }

    return posts;
  }

  getPostBySlug(slug: string): BlogPost | null {
    return blogPosts.find(post => post.slug === slug && post.status === 'published') || null;
  }

  getFeaturedPosts(limit: number = 3): BlogPost[] {
    return this.getAllPosts({ featured: true, limit });
  }

  getRecentPosts(limit: number = 5): BlogPost[] {
    return this.getAllPosts({ limit });
  }

  getRelatedPosts(postId: string, limit: number = 3): BlogPost[] {
    const currentPost = blogPosts.find(post => post.id === postId);
    if (!currentPost) return [];

    const relatedPosts = blogPosts
      .filter(post => 
        post.id !== postId && 
        post.status === 'published' && 
        (post.category === currentPost.category || 
         post.tags.some(tag => currentPost.tags.includes(tag)))
      )
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit);

    return relatedPosts;
  }

  searchPosts(query: string, limit: number = 10): BlogPost[] {
    if (!query.trim()) return [];

    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    
    const posts = blogPosts
      .filter(post => post.status === 'published')
      .map(post => {
        const score = this.calculatePostScore(post, searchTerms);
        return { ...post, score };
      })
      .filter(post => post.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return posts;
  }

  private calculatePostScore(post: BlogPost, searchTerms: string[]): number {
    let score = 0;

    searchTerms.forEach(term => {
      if (post.title.toLowerCase().includes(term)) {
        score += 10;
      }
      if (post.excerpt.toLowerCase().includes(term)) {
        score += 5;
      }
      if (post.tags.some(tag => tag.toLowerCase().includes(term))) {
        score += 5;
      }
      if (post.content.toLowerCase().includes(term)) {
        score += 2;
      }
    });

    return score;
  }

  // Categories
  getAllCategories(): BlogCategory[] {
    return blogCategories;
  }

  getCategoryBySlug(slug: string): BlogCategory | null {
    return blogCategories.find(category => category.slug === slug) || null;
  }

  getPostsByCategory(categorySlug: string, limit?: number): BlogPost[] {
    const category = this.getCategoryBySlug(categorySlug);
    if (!category) return [];

    return this.getAllPosts({ category: category.id, limit });
  }

  // Tags
  getAllTags(): BlogTag[] {
    return blogTags;
  }

  getTagBySlug(slug: string): BlogTag | null {
    return blogTags.find(tag => tag.slug === slug) || null;
  }

  getPostsByTag(tagSlug: string, limit?: number): BlogPost[] {
    const tag = this.getTagBySlug(tagSlug);
    if (!tag) return [];

    return this.getAllPosts({ tag: tag.name, limit });
  }

  getPopularTags(limit: number = 10): BlogTag[] {
    return blogTags
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  }

  // Comments
  getCommentsByPost(postId: string): BlogComment[] {
    return blogComments
      .filter(comment => comment.postId === postId && comment.approved)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }

  addComment(comment: Omit<BlogComment, 'id' | 'createdAt' | 'approved'>): BlogComment {
    const newComment: BlogComment = {
      ...comment,
      id: `comment-${Date.now()}`,
      createdAt: new Date().toISOString(),
      approved: false // Les commentaires doivent être approuvés
    };

    blogComments.push(newComment);
    return newComment;
  }

  // Statistics
  getPostStats(): {
    totalPosts: number;
    publishedPosts: number;
    featuredPosts: number;
    categoriesCount: number;
    tagsCount: number;
  } {
    const publishedPosts = blogPosts.filter(post => post.status === 'published');
    const featuredPosts = publishedPosts.filter(post => post.featured);

    return {
      totalPosts: blogPosts.length,
      publishedPosts: publishedPosts.length,
      featuredPosts: featuredPosts.length,
      categoriesCount: blogCategories.length,
      tagsCount: blogTags.length
    };
  }

  // Suggestions
  getSuggestedPosts(limit: number = 6): BlogPost[] {
    // Mélange de posts populaires et récents
    const recentPosts = this.getRecentPosts(3);
    const featuredPosts = this.getFeaturedPosts(3);
    
    const allSuggested = [...recentPosts, ...featuredPosts];
    const uniquePosts = allSuggested.filter((post, index, self) => 
      index === self.findIndex(p => p.id === post.id)
    );

    return uniquePosts.slice(0, limit);
  }

  // Pagination
  getPaginatedPosts(options: {
    page?: number;
    limit?: number;
    category?: string;
    tag?: string;
    featured?: boolean;
  } = {}): {
    posts: BlogPost[];
    totalPosts: number;
    totalPages: number;
    currentPage: number;
    hasNext: boolean;
    hasPrevious: boolean;
  } {
    const { page = 1, limit = 6, category, tag, featured } = options;
    
    // Obtenir tous les posts filtrés
    const allPosts = this.getAllPosts({ category, tag, featured });
    
    // Calculer la pagination
    const totalPosts = allPosts.length;
    const totalPages = Math.ceil(totalPosts / limit);
    const currentPage = Math.max(1, Math.min(page, totalPages));
    const offset = (currentPage - 1) * limit;
    
    // Obtenir les posts pour la page actuelle
    const posts = allPosts.slice(offset, offset + limit);
    
    return {
      posts,
      totalPosts,
      totalPages,
      currentPage,
      hasNext: currentPage < totalPages,
      hasPrevious: currentPage > 1
    };
  }
}
