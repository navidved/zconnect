import { X, Upload, Camera } from 'lucide-react';

interface ImageSearchProps {
  onClose: () => void;
}

export function ImageSearch({ onClose }: ImageSearchProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      
      {/* Bottom Sheet */}
      <div className="relative w-full max-w-md mx-auto bg-white rounded-t-3xl shadow-2xl h-[60vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <div>
            <h2 className="font-semibold text-neutral-900">Image Search</h2>
            <p className="text-sm text-neutral-500">Find products by photo</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X size={20} className="text-neutral-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
          <div className="w-32 h-32 rounded-3xl bg-blue-50 flex items-center justify-center">
            <Camera size={48} className="text-blue-600" />
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-neutral-900 mb-2">Search by Image</h3>
            <p className="text-sm text-neutral-500">Upload a photo or take a picture to find similar products</p>
          </div>

          <div className="w-full space-y-3">
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl transition-colors flex items-center justify-center gap-2">
              <Camera size={20} className="text-white" />
              <span className="text-white font-medium">Take Photo</span>
            </button>
            <button className="w-full py-4 bg-neutral-100 hover:bg-neutral-200 rounded-2xl transition-colors flex items-center justify-center gap-2">
              <Upload size={20} className="text-neutral-700" />
              <span className="text-neutral-700 font-medium">Upload from Gallery</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
