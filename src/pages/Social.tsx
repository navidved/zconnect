import { useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import { UnifiedAssistant } from '../components/UnifiedAssistant';
import { CreateContent } from '../components/CreateContent';
import { ProductSheet } from '../components/ProductSheet';
import { SearchBar } from '../components/SearchBar';
import { ShieldCheck, Heart, MessageCircle, Gift, TrendingUp } from 'lucide-react';

export function Social() {
  const [showSearch, setShowSearch] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const activities = [
    {
      id: 1,
      type: 'purchase',
      user: {
        name: 'Maryam',
        avatar: 'https://images.unsplash.com/photo-1618590067690-2db34a87750a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBzZWxmaWV8ZW58MXx8fHwxNzY5NzI0MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      product: {
        name: 'Nike Air Max 2024',
        image: 'https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NzEzMzY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        price: '$129.99',
        description: 'Premium running sneakers',
        trustScore: 1250,
        features: [
          { key: 'Size', value: 'US 8-12' },
          { key: 'Color', value: 'White/Blue' },
        ],
        offers: [
          { seller: 'Nike Official Store', price: '$129.99', trustScore: 99 },
        ],
      },
      time: '2h ago',
      likes: 24,
      comments: 3,
    },
    {
      id: 2,
      type: 'gift',
      user: {
        name: 'Navid',
        avatar: 'https://images.unsplash.com/photo-1583238618187-c0d944bb99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0JTIwc2VsZmllfGVufDF8fHx8MTc2OTc4OTAzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      recipient: {
        name: 'Sadaf',
        avatar: 'https://images.unsplash.com/photo-1618590067690-2db34a87750a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBzZWxmaWV8ZW58MXx8fHwxNzY5NzI0MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      product: {
        name: 'AirPods Pro Plus',
        image: 'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc2OTc2ODI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
        price: '$249.99',
        description: 'Wireless earbuds with noise cancellation',
        trustScore: 1450,
        features: [
          { key: 'Battery Life', value: '6 hours' },
          { key: 'Connectivity', value: 'Bluetooth 5.3' },
        ],
        offers: [
          { seller: 'Apple Authorized', price: '$249.99', trustScore: 100 },
        ],
      },
      time: '5h ago',
      likes: 42,
      comments: 8,
    },
    {
      id: 3,
      type: 'purchase',
      user: {
        name: 'Sarah',
        avatar: 'https://images.unsplash.com/photo-1618590067690-2db34a87750a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBzZWxmaWV8ZW58MXx8fHwxNzY5NzI0MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      product: {
        name: 'Classic Chronograph Watch',
        image: 'https://images.unsplash.com/photo-1543707751-e3e5a9359e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeSUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5NzM1ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        price: '$89.99',
        description: 'Elegant timepiece with leather strap',
        trustScore: 980,
        features: [
          { key: 'Movement', value: 'Quartz' },
          { key: 'Water Resistance', value: '50m' },
        ],
        offers: [
          { seller: 'WatchHub', price: '$89.99', trustScore: 95 },
        ],
      },
      time: '1d ago',
      likes: 18,
      comments: 2,
    },
  ];

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setShowProduct(true);
  };

  return (
    <MainLayout
      onSearch={() => setShowSearch(true)}
      onAssistant={() => setShowAssistant(true)}
      onCreate={() => setShowCreate(true)}
    >
      <div className="max-w-3xl mx-auto pb-6">
        {/* Header */}
        <div className="py-4">
          <h1 className="font-bold text-neutral-900 text-2xl mb-1">Social</h1>
          <p className="text-neutral-500 text-sm">See what your friends are buying</p>
        </div>

        {/* Activity Feed */}
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* User Info */}
              <div className="p-4 pb-3">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={activity.user.avatar}
                    alt={activity.user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-neutral-900">
                      <span className="font-semibold">{activity.user.name}</span>
                      {activity.type === 'purchase' ? (
                        ' bought this item'
                      ) : (
                        <>
                          {' gifted this item to '}
                          <span className="font-semibold">{activity.recipient?.name}</span>
                        </>
                      )}
                    </p>
                    <p className="text-xs text-neutral-500">{activity.time}</p>
                  </div>
                  {activity.type === 'gift' && (
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                      <Gift size={16} className="text-pink-600" />
                    </div>
                  )}
                </div>

                {/* Product Card */}
                <div
                  onClick={() => handleProductClick(activity.product)}
                  className="bg-neutral-50 rounded-xl p-3 flex gap-3 cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  <img
                    src={activity.product.image}
                    alt={activity.product.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 text-sm mb-1 truncate">
                      {activity.product.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mb-2">{activity.product.description}</p>
                    <p className="font-bold text-neutral-900">{activity.product.price}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="px-4 py-3 border-t border-neutral-100 flex items-center gap-6">
                <button className="flex items-center gap-2 text-neutral-600 hover:text-red-600 transition-colors">
                  <Heart size={18} />
                  <span className="text-sm font-medium">{activity.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-neutral-600 hover:text-blue-600 transition-colors">
                  <MessageCircle size={18} />
                  <span className="text-sm font-medium">{activity.comments}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
      {showAssistant && <UnifiedAssistant onClose={() => setShowAssistant(false)} />}
      {showCreate && <CreateContent onClose={() => setShowCreate(false)} />}
      {showProduct && selectedProduct && (
        <ProductSheet
          onClose={() => setShowProduct(false)}
          product={selectedProduct}
        />
      )}
    </MainLayout>
  );
}