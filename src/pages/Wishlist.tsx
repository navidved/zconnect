import { useNavigate } from 'react-router';
import { ChevronLeft, Gift, Heart, Trash2 } from 'lucide-react';

export function Wishlist() {
  const navigate = useNavigate();

  const wishlistItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NzEzMzY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Nike Air Max 2024',
      price: '$129.99',
      reason: '🎂 Birthday',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc2OTc2ODI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'AirPods Pro Plus',
      price: '$249.99',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1543707751-e3e5a9359e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeSUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5NzM1ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Classic Chronograph Watch',
      price: '$89.99',
      reason: '🎓 Graduation',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1662928245746-6b4a1e90f8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5NzQ4ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Ray-Ban Aviators',
      price: '$159.99',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1760509684262-4501bacfdcc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMGZhc2hpb24lMjBwcm9kdWN0fGVufDF8fHx8MTc2OTc4OTAzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Travel Backpack Pro',
      price: '$79.99',
      reason: '✈️ Travel',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1667539512102-07dc97381b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGV2aWNlJTIwcHJvZHVjdHxlbnwxfHx8fDE3Njk3NDA4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'iPhone 15 Pro',
      price: '$999.99',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-neutral-200">
        <div className="max-w-md mx-auto flex items-center px-4 py-3">
          <button
            onClick={() => navigate('/profile')}
            className="p-2 -ml-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <ChevronLeft size={24} className="text-neutral-700" />
          </button>
          <h1 className="flex-1 text-center font-semibold text-neutral-900">My Wishlist</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="pt-16 pb-8 px-4 max-w-md mx-auto">
        <p className="text-sm text-neutral-500 mb-4">{wishlistItems.length} items</p>

        {/* Wishlist Items */}
        <div className="space-y-3">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="flex gap-3 p-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  {item.reason && (
                    <div className="absolute -top-1 -right-1 px-2 py-0.5 bg-white shadow-md rounded-lg text-xs">
                      {item.reason}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <h3 className="font-semibold text-neutral-900 text-sm mb-1 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="font-bold text-neutral-900 mb-2">{item.price}</p>
                  <div className="mt-auto flex gap-2">
                    <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white text-xs font-medium">
                      Add to Basket
                    </button>
                    <button className="w-9 h-9 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors">
                      <Trash2 size={16} className="text-neutral-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Gift size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 text-sm mb-1">Share Your Wishlist</h3>
              <p className="text-xs text-blue-700">
                Friends can see your wishlist and send you gifts for special occasions. Control your privacy in Settings.
              </p>
              <button className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors text-white text-xs font-medium">
                Share Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}