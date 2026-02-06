import { X, ShieldCheck, Check, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { OffersSheet } from './OffersSheet';

interface ProductSheetProps {
  onClose: () => void;
  product: {
    image: string;
    name: string;
    description: string;
    price: string;
    trustScore: number;
    features?: { key: string; value: string }[];
    offers?: { seller: string; price: string; trustScore: number }[];
  };
}

export function ProductSheet({ onClose, product }: ProductSheetProps) {
  const [showAllOffers, setShowAllOffers] = useState(false);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        
        {/* Bottom Sheet */}
        <div className="relative w-full max-w-md mx-auto bg-white rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200 flex-shrink-0">
            <h2 className="font-semibold text-neutral-900">Product Details</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X size={20} className="text-neutral-600" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Product Image */}
            <div className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>

            {/* Product Info */}
            <div className="px-4 pb-4">
              <h3 className="font-semibold text-neutral-900 mb-1">{product.name}</h3>
              <p className="text-sm text-neutral-500 mb-3">{product.description}</p>
              
              {/* Price */}
              <div className="mb-4">
                <p className="text-2xl font-bold text-neutral-900">{product.price}</p>
              </div>

              {/* Trust Explainer */}
              <div className="bg-blue-50 rounded-2xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm mb-1">Why this is trusted</h4>
                    <p className="text-xs text-neutral-600">
                      Verified by {product.trustScore}+ buyers. Seller has 98% positive ratings and fast shipping record.
                    </p>
                  </div>
                </div>
              </div>

              {/* Best Offer */}
              {product.offers && product.offers.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-neutral-900 text-sm">Best Offer</h4>
                    <button 
                      onClick={() => setShowAllOffers(true)}
                      className="text-xs text-blue-600 font-medium"
                    >
                      See all offers
                    </button>
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-neutral-900">{product.offers[0].seller}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <ShieldCheck size={14} className="text-green-600" />
                        <span className="text-xs text-neutral-500">{product.offers[0].trustScore}% Trust</span>
                      </div>
                    </div>
                    <p className="font-bold text-neutral-900">{product.offers[0].price}</p>
                  </div>
                </div>
              )}

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 text-sm mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
                        <span className="text-sm text-neutral-500">{feature.key}</span>
                        <span className="text-sm text-neutral-900 font-medium">{feature.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Actions */}
          <div className="flex-shrink-0 p-4 border-t border-neutral-200 bg-white">
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors font-medium text-neutral-900">
                Add to Basket
              </button>
              <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors font-medium text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {showAllOffers && product.offers && (
        <OffersSheet
          onClose={() => setShowAllOffers(false)}
          offers={product.offers}
          productName={product.name}
        />
      )}
    </>
  );
}