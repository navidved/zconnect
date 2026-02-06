import { X, ShieldCheck, TrendingUp } from 'lucide-react';

interface OffersSheetProps {
  onClose: () => void;
  offers: { seller: string; price: string; trustScore: number }[];
  productName: string;
}

export function OffersSheet({ onClose, offers, productName }: OffersSheetProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      
      {/* Bottom Sheet */}
      <div className="relative w-full max-w-md mx-auto bg-white rounded-t-3xl shadow-2xl max-h-[70vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 flex-shrink-0">
          <div>
            <h2 className="font-semibold text-neutral-900">All Offers</h2>
            <p className="text-sm text-neutral-500">{productName}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X size={20} className="text-neutral-600" />
          </button>
        </div>

        {/* Offers List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer hover:border-blue-600 ${
                index === 0
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-neutral-200 bg-white'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-neutral-900">{offer.seller}</h3>
                    {index === 0 && (
                      <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center gap-1">
                        <TrendingUp size={10} />
                        Best
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-green-600" />
                    <span className="text-sm text-neutral-600">{offer.trustScore}% Trust Score</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-neutral-900 text-lg">{offer.price}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span>⚡ Fast shipping</span>
                <span>•</span>
                <span>✓ Verified seller</span>
              </div>
            </div>
          ))}
        </div>

        {/* Select Button */}
        <div className="flex-shrink-0 p-4 border-t border-neutral-200 bg-white">
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors font-medium text-white">
            Select This Offer
          </button>
        </div>
      </div>
    </div>
  );
}
