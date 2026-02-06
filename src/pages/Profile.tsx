import { useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import { UnifiedAssistant } from '../components/UnifiedAssistant';
import { CreateContent } from '../components/CreateContent';
import { SearchBar } from '../components/SearchBar';
import { Settings, ShieldCheck, Package, Heart, History, Bell, HelpCircle, LogOut, Play, Gift } from 'lucide-react';

export function Profile() {
  const [showSearch, setShowSearch] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [activeTab, setActiveTab] = useState('content');

  const userVideos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NzEzMzY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      views: '12.5K',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc2OTc2ODI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      views: '8.2K',
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1543707751-e3e5a9359e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeSUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5NzM1ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      views: '15.1K',
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1662928245746-6b4a1e90f8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5NzQ4ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      views: '6.4K',
    },
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1760509684262-4501bacfdcc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMGZhc2hpb24lMjBwcm9kdWN0fGVufDF8fHx8MTc2OTc4OTAzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      views: '9.8K',
    },
    {
      id: 6,
      thumbnail: 'https://images.unsplash.com/photo-1667539512102-07dc97381b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGV2aWNlJTIwcHJvZHVjdHxlbnwxfHx8fDE3Njk3NDA4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      views: '18.3K',
    },
  ];

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
      name: 'Classic Chronograph',
      price: '$89.99',
      reason: '🎓 Graduation',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1662928245746-6b4a1e90f8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5NzQ4ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Ray-Ban Aviators',
      price: '$159.99',
    },
  ];

  return (
    <MainLayout
      onSearch={() => setShowSearch(true)}
      onAssistant={() => setShowAssistant(true)}
      onCreate={() => setShowCreate(true)}
    >
      <div className="max-w-2xl mx-auto pb-6">
        {/* Profile Header */}
        <div className="px-4 py-6 bg-white border-b border-neutral-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618590067690-2db34a87750a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBzZWxmaWV8ZW58MXx8fHwxNzY5NzI0MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h1 className="font-bold text-neutral-900 text-xl mb-1">@jessica_m</h1>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-blue-600" />
                  <span className="text-sm text-neutral-600">Verified Buyer</span>
                </div>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <Settings size={20} className="text-neutral-600" />
            </button>
          </div>

          <p className="text-sm text-neutral-600 mb-4">
            Gen Z shopping enthusiast 🛍️ | Product reviews & finds ✨
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <p className="font-bold text-neutral-900 text-lg">24</p>
              <p className="text-xs text-neutral-500">Content</p>
            </div>
            <div
              className="text-center cursor-pointer"
              onClick={() => {
                setActiveTab('wishlist');
              }}
            >
              <p className="font-bold text-neutral-900 text-lg">12</p>
              <p className="text-xs text-neutral-500">Wishlist</p>
            </div>
            <div className="text-center cursor-pointer">
              <p className="font-bold text-neutral-900 text-lg">48</p>
              <p className="text-xs text-neutral-500">Orders</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            <button className="flex-1 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors font-medium text-neutral-900 text-sm">
              Edit Profile
            </button>
            <button className="flex-1 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors font-medium text-neutral-900 text-sm">
              View Wishlist
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neutral-200 bg-white">
          <button
            onClick={() => setActiveTab('content')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'content'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-neutral-500'
            }`}
          >
            <Play size={18} />
            <span className="font-medium text-sm">Content</span>
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'wishlist'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-neutral-500'
            }`}
          >
            <Heart size={18} />
            <span className="font-medium text-sm">Wishlist</span>
          </button>
        </div>

        {/* Content Grid */}
        {activeTab === 'content' && (
          <div className="grid grid-cols-3 gap-1 bg-white">
            {userVideos.map((video) => (
              <div key={video.id} className="aspect-[3/4] relative group cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-2">
                  <div className="flex items-center gap-1 text-white text-xs font-medium">
                    <Play size={14} fill="white" />
                    {video.views}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Wishlist Grid */}
        {activeTab === 'wishlist' && (
          <div className="grid grid-cols-2 gap-4 p-[15px] px-[0px] py-[15px]">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-square relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.reason && (
                    <div className="absolute top-2 left-2 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-medium">
                      {item.reason}
                    </div>
                  )}
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Gift size={16} className="text-pink-600" />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-neutral-900 text-sm mb-1 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="font-bold text-neutral-900 text-sm">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
      {showAssistant && <UnifiedAssistant onClose={() => setShowAssistant(false)} />}
      {showCreate && <CreateContent onClose={() => setShowCreate(false)} />}
    </MainLayout>
  );
}