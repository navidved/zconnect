import { X, Video, Star } from 'lucide-react';

interface CreateContentProps {
  onClose: () => void;
}

export function CreateContent({ onClose }: CreateContentProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      
      {/* Bottom Sheet */}
      <div className="relative w-full max-w-md mx-auto bg-white rounded-t-3xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <h2 className="font-semibold text-neutral-900">Create Content</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X size={20} className="text-neutral-600" />
          </button>
        </div>

        {/* Content Types */}
        <div className="p-4 space-y-3 pb-6">
          <button className="w-full p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Star size={24} className="text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-neutral-900">Verified Buyer Review</h3>
              <p className="text-sm text-neutral-500">Share your honest opinion</p>
            </div>
          </button>

          <button className="w-full p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Video size={24} className="text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-neutral-900">Product Intro</h3>
              <p className="text-sm text-neutral-500">Showcase a product you love</p>
            </div>
          </button>

          <div className="pt-2">
            <p className="text-xs text-neutral-400 text-center">Select a product after choosing content type</p>
          </div>
        </div>
      </div>
    </div>
  );
}
