import { X, MessageSquare, Mic, Camera, Send, Sparkles, Image as ImageIcon, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface UnifiedAssistantProps {
  onClose: () => void;
}

type AssistantMode = 'text' | 'voice' | 'image';

export function UnifiedAssistant({ onClose }: UnifiedAssistantProps) {
  const [mode, setMode] = useState<AssistantMode>('text');
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageContext, setImageContext] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'assistant', text: 'Hi! I\'m your ZConnect AI assistant. How can I help you find products today?' },
  ]);

  const suggestions = [
    'Find me running shoes under $150',
    'Show me trending tech gadgets',
    'What are my friends buying?',
    'Compare AirPods prices',
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { type: 'user', text: input }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'assistant',
        text: `I found several great options for "${input}". Let me show you the best deals from trusted sellers!`
      }]);
    }, 1000);
    
    setInput('');
  };

  const handleVoice = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setMessages([...messages, 
          { type: 'user', text: 'Show me wireless headphones' },
          { type: 'assistant', text: 'Great! I found 15 wireless headphones with excellent reviews. Here are the top rated ones...' }
        ]);
      }, 2000);
    }
  };

  const handleImageUpload = (source: 'camera' | 'gallery') => {
    // Simulate image upload
    const sampleImages = [
      'https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1543707751-e3e5a9359e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    ];
    setUploadedImage(sampleImages[Math.floor(Math.random() * sampleImages.length)]);
  };

  const handleImageSearch = () => {
    if (!uploadedImage) return;
    
    setIsSearching(true);
    
    setTimeout(() => {
      setIsSearching(false);
      setMessages([
        { type: 'assistant', text: 'Hi! I\'m your ZConnect AI assistant. How can I help you find products today?' },
        { type: 'user', text: imageContext || '📷 Searching by image' },
        { 
          type: 'assistant', 
          text: imageContext 
            ? `Found 18 products matching your image ${imageContext}! Here are the best matches from verified sellers.`
            : 'I found 23 similar products! The closest match is the Nike Air Max 2024 from 3 verified sellers with prices starting at $129.99.'
        }
      ]);
      // Reset for next search
      setUploadedImage(null);
      setImageContext('');
    }, 1500);
  };

  const removeImage = () => {
    setUploadedImage(null);
    setImageContext('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-x-0 bottom-0 max-w-md mx-auto bg-white rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="relative flex items-center justify-between p-4 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-neutral-900">AI Assistant</h2>
              <p className="text-xs text-neutral-500">Powered by ZConnect</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
          >
            <X size={18} className="text-neutral-700" />
          </button>
        </div>

        {/* Mode Tabs */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-100">
          <button
            onClick={() => setMode('text')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              mode === 'text' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <MessageSquare size={16} />
            <span className="text-sm">Text</span>
          </button>
          <button
            onClick={() => setMode('voice')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              mode === 'voice' 
                ? 'bg-purple-100 text-purple-700 font-medium' 
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <Mic size={16} />
            <span className="text-sm">Voice</span>
          </button>
          <button
            onClick={() => setMode('image')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              mode === 'image' 
                ? 'bg-pink-100 text-pink-700 font-medium' 
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <Camera size={16} />
            <span className="text-sm">Image</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mode === 'text' && (
            <>
              {/* Messages */}
              <div className="space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-sm' 
                        : 'bg-neutral-100 text-neutral-900 rounded-bl-sm'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggestions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-neutral-500 font-medium">Suggested searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => setInput(sug)}
                        className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-sm rounded-lg transition-colors"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {mode === 'voice' && (
            <div className="flex flex-col items-center justify-center py-12 space-y-6">
              <button
                onClick={handleVoice}
                className={`w-32 h-32 rounded-full flex items-center justify-center transition-all transform ${
                  isListening 
                    ? 'bg-purple-600 scale-110 animate-pulse shadow-2xl' 
                    : 'bg-gradient-to-br from-purple-500 to-purple-600 hover:scale-105 shadow-lg'
                }`}
              >
                <Mic size={48} className="text-white" strokeWidth={2} />
              </button>
              <div className="text-center">
                <p className="font-semibold text-neutral-900 mb-1">
                  {isListening ? 'Listening...' : 'Tap to speak'}
                </p>
                <p className="text-sm text-neutral-500">
                  {isListening ? 'Say something like "Show me sneakers"' : 'Ask me anything about products'}
                </p>
              </div>
              {isListening && (
                <div className="flex gap-1">
                  <div className="w-1 h-8 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1 h-12 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1 h-6 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                  <div className="w-1 h-10 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '450ms' }}></div>
                </div>
              )}
            </div>
          )}

          {mode === 'image' && (
            <div className="flex flex-col space-y-4">
              {!uploadedImage ? (
                <>
                  {/* Upload Options */}
                  <div className="space-y-3 py-8">
                    <div className="text-center mb-6">
                      <h3 className="font-bold text-neutral-900 text-lg mb-2">Search by Image</h3>
                      <p className="text-sm text-neutral-600">
                        Upload a product photo to find similar items
                      </p>
                    </div>

                    {/* Camera Option */}
                    <button
                      onClick={() => handleImageUpload('camera')}
                      className="w-full p-6 border-2 border-dashed border-neutral-300 rounded-2xl hover:border-pink-400 hover:bg-pink-50 transition-all group"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Camera size={32} className="text-white" />
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-neutral-900 mb-1">Take Photo</p>
                          <p className="text-sm text-neutral-500">Use your camera</p>
                        </div>
                      </div>
                    </button>

                    {/* Gallery Option */}
                    <button
                      onClick={() => handleImageUpload('gallery')}
                      className="w-full p-6 border-2 border-dashed border-neutral-300 rounded-2xl hover:border-pink-400 hover:bg-pink-50 transition-all group"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ImageIcon size={32} className="text-white" />
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-neutral-900 mb-1">Choose from Gallery</p>
                          <p className="text-sm text-neutral-500">Select existing photo</p>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Example Text */}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-sm text-blue-900">
                      <span className="font-semibold">💡 Tip:</span> After uploading, you can add details like color, size, or price range to refine your search!
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Uploaded Image Preview */}
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={uploadedImage}
                        alt="Uploaded product"
                        className="w-full h-64 object-cover rounded-2xl"
                      />
                      <button
                        onClick={removeImage}
                        className="absolute top-3 right-3 w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-colors"
                      >
                        <Trash2 size={20} className="text-white" />
                      </button>
                    </div>

                    {/* Optional Context Input */}
                    <div className="space-y-2">
                      <label className="block">
                        <span className="text-sm font-medium text-neutral-700 mb-1 block">
                          Add details (optional)
                        </span>
                        <textarea
                          value={imageContext}
                          onChange={(e) => setImageContext(e.target.value)}
                          placeholder="e.g., 'in blue color under $100' or 'similar style but cheaper'"
                          rows={3}
                          className="w-full px-4 py-3 bg-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm resize-none"
                        />
                      </label>
                      <p className="text-xs text-neutral-500">
                        Leave empty to find exact matches, or add preferences to refine results
                      </p>
                    </div>

                    {/* Search Button */}
                    <button
                      onClick={handleImageSearch}
                      disabled={isSearching}
                      className="w-full py-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 disabled:from-neutral-300 disabled:to-neutral-400 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      {isSearching ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Searching...
                        </>
                      ) : (
                        <>
                          <Sparkles size={20} />
                          Find Similar Products
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Input Area (Text Mode Only) */}
        {mode === 'text' && (
          <div className="p-4 border-t border-neutral-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-3 bg-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-12 h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-300 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
