import { X, Search, TrendingUp, Clock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface SearchBarProps {
  onClose: () => void;
}

export function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const trendingSearches = [
    { text: 'Nike Air Max 2024', trending: true },
    { text: 'AirPods Pro Plus', trending: true },
    { text: 'Wireless headphones', trending: true },
    { text: 'Running shoes', trending: false },
  ];

  const recentSearches = [
    'Smartwatch under $200',
    'Premium backpack',
    'Minimalist wallet',
  ];

  const autocompleteSuggestions = [
    'Nike Air Max 2024',
    'Nike Air Force 1',
    'Nike running shoes',
    'Nike sneakers white',
    'AirPods Pro Plus',
    'AirPods 3rd generation',
    'Wireless headphones',
    'Wireless earbuds',
    'Running shoes for men',
    'Running shoes women',
  ];

  const filteredSuggestions = query.length > 0
    ? autocompleteSuggestions.filter(s => 
        s.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    console.log('Searching for:', searchQuery);
    // Here you would navigate to search results or trigger search
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="fixed top-20 left-0 right-0 max-w-md mx-auto px-4" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Box */}
        <div className="bg-neutral-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-neutral-700/50 overflow-hidden">
          {/* Input Area */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-700/50">
            <Search size={22} className="text-pink-500 flex-shrink-0" strokeWidth={2.5} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(query);
                }
              }}
              placeholder="Search for products..."
              className="flex-1 bg-transparent text-white placeholder-neutral-500 focus:outline-none text-base"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              >
                <X size={16} className="text-neutral-400" />
              </button>
            )}
          </div>

          {/* Suggestions Area */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.length > 0 && filteredSuggestions.length > 0 && showSuggestions ? (
              // Autocomplete Suggestions
              <div className="py-2">
                {filteredSuggestions.map((suggestion, i) => (
                  <button
                    key={i}
                    onClick={() => handleSearch(suggestion)}
                    className="w-full px-5 py-3 flex items-center gap-3 hover:bg-neutral-800/50 transition-colors text-left"
                  >
                    <Search size={18} className="text-neutral-500" />
                    <span className="text-white text-sm flex-1">
                      {suggestion.split(new RegExp(`(${query})`, 'gi')).map((part, idx) => (
                        <span
                          key={idx}
                          className={
                            part.toLowerCase() === query.toLowerCase()
                              ? 'text-pink-400 font-semibold'
                              : ''
                          }
                        >
                          {part}
                        </span>
                      ))}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              // Default: Trending & Recent
              <div className="py-3 space-y-4">
                {/* Trending Searches */}
                <div>
                  <div className="px-5 py-2">
                    <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Trending Now
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {trendingSearches.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleSearch(item.text)}
                        className="w-full px-5 py-3 flex items-center gap-3 hover:bg-neutral-800/50 transition-colors text-left group"
                      >
                        <TrendingUp 
                          size={18} 
                          className={item.trending ? 'text-pink-500' : 'text-neutral-600'} 
                        />
                        <span className="text-white text-sm flex-1 group-hover:text-pink-400 transition-colors">
                          {item.text}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="px-5 py-2">
                      <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        Recent
                      </h3>
                    </div>
                    <div className="space-y-1">
                      {recentSearches.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => handleSearch(item)}
                          className="w-full px-5 py-3 flex items-center gap-3 hover:bg-neutral-800/50 transition-colors text-left group"
                        >
                          <Clock size={18} className="text-neutral-600" />
                          <span className="text-neutral-300 text-sm flex-1 group-hover:text-white transition-colors">
                            {item}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Hint Text */}
        <div className="mt-3 text-center">
          <p className="text-xs text-neutral-400">
            Press <kbd className="px-2 py-1 bg-neutral-800 rounded text-neutral-300 font-mono">Enter</kbd> to search
          </p>
        </div>
      </div>
    </div>
  );
}
