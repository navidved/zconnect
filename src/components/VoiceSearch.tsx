import { X, Mic } from 'lucide-react';

interface VoiceSearchProps {
  onClose: () => void;
}

export function VoiceSearch({ onClose }: VoiceSearchProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      
      {/* Bottom Sheet */}
      <div className="relative w-full max-w-md mx-auto bg-white rounded-t-3xl shadow-2xl h-[50vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <div>
            <h2 className="font-semibold text-neutral-900">Voice Search</h2>
            <p className="text-sm text-neutral-500">Speak to search</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X size={20} className="text-neutral-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="relative">
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full bg-blue-600/20 animate-ping" />
            <div className="absolute inset-0 rounded-full bg-blue-600/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            <button className="relative w-24 h-24 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors shadow-lg">
              <Mic size={36} className="text-white" />
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-neutral-900 font-medium mb-1">Listening...</p>
            <p className="text-sm text-neutral-500">Say something like "Show me wireless headphones"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
