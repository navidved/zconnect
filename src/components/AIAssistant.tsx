import { X, Send } from 'lucide-react';
import { useState } from 'react';

interface AIAssistantProps {
  onClose: () => void;
}

export function AIAssistant({ onClose }: AIAssistantProps) {
  const [message, setMessage] = useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      
      {/* Bottom Sheet */}
      <div className="relative w-full max-w-md mx-auto bg-white rounded-t-3xl shadow-2xl h-[65vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <div>
            <h2 className="font-semibold text-neutral-900">AI Assistant</h2>
            <p className="text-sm text-neutral-500">Ask me anything</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X size={20} className="text-neutral-600" />
          </button>
        </div>

        {/* Chat Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* AI Message */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-semibold">AI</span>
            </div>
            <div className="flex-1 bg-neutral-100 rounded-2xl rounded-tl-none p-3">
              <p className="text-neutral-900">Hi! I can help you find products, filter results, or navigate the app. What are you looking for today?</p>
            </div>
          </div>

          {/* Example Prompts */}
          <div className="space-y-2">
            <p className="text-xs text-neutral-500 px-1">Try asking:</p>
            <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors">
              <p className="text-blue-700 text-sm">Show me sneakers under $100 with fast delivery</p>
            </button>
            <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors">
              <p className="text-blue-700 text-sm">Find highly trusted tech sellers</p>
            </button>
            <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors">
              <p className="text-blue-700 text-sm">What did my friends buy recently?</p>
            </button>
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-neutral-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-neutral-100 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors">
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
