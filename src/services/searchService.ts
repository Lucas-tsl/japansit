import { searchData, SearchResult } from '@/data/searchData';

export class SearchService {
  private static instance: SearchService;
  private searchIndex: Map<string, SearchResult> = new Map();

  constructor() {
    this.buildIndex();
  }

  static getInstance(): SearchService {
    if (!SearchService.instance) {
      SearchService.instance = new SearchService();
    }
    return SearchService.instance;
  }

  private buildIndex() {
    searchData.forEach(item => {
      this.searchIndex.set(item.id, item);
    });
  }

  search(query: string, options: {
    category?: string;
    type?: string;
    limit?: number;
  } = {}): SearchResult[] {
    if (!query.trim()) return [];

    const { category, type, limit = 10 } = options;
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    
    const results = searchData
      .filter(item => {
        // Filtrer par catégorie
        if (category && category !== 'Toutes les catégories' && item.category !== category) {
          return false;
        }
        
        // Filtrer par type
        if (type && type !== 'Tous les types') {
          const typeMap: { [key: string]: string } = {
            'Pages': 'page',
            'Articles': 'article',
            'Guides': 'guide',
            'Ressources': 'resource'
          };
          if (item.type !== typeMap[type]) {
            return false;
          }
        }
        
        return true;
      })
      .map(item => {
        const score = this.calculateScore(item, searchTerms);
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return results;
  }

  private calculateScore(item: SearchResult, searchTerms: string[]): number {
    let score = 0;

    searchTerms.forEach(term => {
      // Score élevé si le terme est dans le titre
      if (item.title.toLowerCase().includes(term)) {
        score += 10;
      }
      
      // Score moyen si le terme est dans la description
      if (item.description.toLowerCase().includes(term)) {
        score += 5;
      }
      
      // Score moyen si le terme est dans les tags
      if (item.tags.some(tag => tag.toLowerCase().includes(term))) {
        score += 5;
      }
      
      // Score faible si le terme est dans le contenu
      if (item.content.toLowerCase().includes(term)) {
        score += 2;
      }
      
      // Score faible si le terme est dans la catégorie
      if (item.category.toLowerCase().includes(term)) {
        score += 3;
      }
    });

    return score;
  }

  getSuggestions(query: string, limit: number = 5): string[] {
    if (!query.trim()) return [];

    const suggestions = new Set<string>();
    const queryLower = query.toLowerCase();

    searchData.forEach(item => {
      // Suggestions basées sur les titres
      if (item.title.toLowerCase().includes(queryLower)) {
        suggestions.add(item.title);
      }
      
      // Suggestions basées sur les tags
      item.tags.forEach(tag => {
        if (tag.toLowerCase().includes(queryLower)) {
          suggestions.add(tag);
        }
      });
      
      // Suggestions basées sur les catégories
      if (item.category.toLowerCase().includes(queryLower)) {
        suggestions.add(item.category);
      }
    });

    return Array.from(suggestions).slice(0, limit);
  }

  getPopularSearches(): string[] {
    return [
      'visa étudiant',
      'apprendre japonais',
      'voyage Tokyo',
      'culture japonaise',
      'emploi Japon',
      'logement Tokyo',
      'transport Japon',
      'cuisine japonaise'
    ];
  }

  getRelatedSearches(query: string): string[] {
    const results = this.search(query, { limit: 5 });
    const relatedTerms = new Set<string>();

    results.forEach(result => {
      result.tags.forEach(tag => {
        if (tag.toLowerCase() !== query.toLowerCase()) {
          relatedTerms.add(tag);
        }
      });
    });

    return Array.from(relatedTerms).slice(0, 5);
  }
}
