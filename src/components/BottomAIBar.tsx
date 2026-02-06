import { Search, Sparkles, Plus } from 'lucide-react';

interface BottomAIBarProps {
  onSearch: () => void;
  onAssistant: () => void;
  onCreate: () => void;
}

export function BottomAIBar({ onSearch, onAssistant, onCreate }: BottomAIBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-900 border-t border-neutral-700/50">
      <div className="px-6 py-3">
        <div className="flex items-center justify-around gap-4">
          {/* Search Button */}
          <button
            onClick={onSearch}
            className="group relative flex flex-col items-center gap-1"
          >
            <div className="w-12 h-12 rounded-xl bg-neutral-800 group-hover:bg-neutral-750 transition-all flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-fuchsia-600 opacity-0 group-hover:opacity-20 transition-opacity" />
              <Search 
                size={20} 
                className="text-pink-500 group-hover:scale-110 transition-transform relative z-10" 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-[10px] font-medium text-neutral-400 group-hover:text-pink-500 transition-colors">Search</span>
          </button>

          {/* Create Content Button */}
          <button
            onClick={onCreate}
            className="group relative flex flex-col items-center gap-1"
          >
            <div className="w-12 h-12 rounded-xl bg-neutral-800 group-hover:bg-neutral-750 transition-all flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity" />
              <Plus 
                size={22} 
                className="text-purple-500 group-hover:scale-110 transition-transform relative z-10" 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-[10px] font-medium text-neutral-400 group-hover:text-purple-500 transition-colors">Create</span>
          </button>

          {/* AI Assistant Button */}
          <button
            onClick={onAssistant}
            className="group relative flex flex-col items-center gap-1"
          >
            <div className="w-12 h-12 rounded-xl bg-neutral-800 group-hover:bg-neutral-750 transition-all flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity" />
              <Sparkles 
                size={20} 
                className="text-cyan-400 group-hover:scale-110 transition-transform relative z-10" 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-[10px] font-medium text-neutral-400 group-hover:text-cyan-400 transition-colors">Assistant</span>
          </button>
        </div>
      </div>
    </div>
  );
}