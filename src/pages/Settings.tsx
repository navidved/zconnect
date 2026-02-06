import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Eye, EyeOff, Brain } from 'lucide-react';

export function Settings() {
  const navigate = useNavigate();
  const [sharePurchases, setSharePurchases] = useState(true);
  const [shareGifts, setShareGifts] = useState(true);
  const [shareWishlist, setShareWishlist] = useState(false);
  const [aiMemory, setAiMemory] = useState(true);

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
          <h1 className="flex-1 text-center font-semibold text-neutral-900">Settings</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="pt-16 pb-8 px-4 max-w-md mx-auto">
        {/* Feed Privacy */}
        <div className="mb-6">
          <h2 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
            <Eye size={18} className="text-neutral-600" />
            Feed Privacy
          </h2>
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-neutral-100">
            {/* Share Purchases */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-neutral-900 text-sm mb-0.5">Share Purchases</h3>
                <p className="text-xs text-neutral-500">Show your purchases in friends' feed</p>
              </div>
              <button
                onClick={() => setSharePurchases(!sharePurchases)}
                className={`w-12 h-7 rounded-full transition-colors flex items-center ${
                  sharePurchases ? 'bg-blue-600' : 'bg-neutral-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    sharePurchases ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Share Received Gifts */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-neutral-900 text-sm mb-0.5">Share Received Gifts</h3>
                <p className="text-xs text-neutral-500">Show gifts you receive in social feed</p>
              </div>
              <button
                onClick={() => setShareGifts(!shareGifts)}
                className={`w-12 h-7 rounded-full transition-colors flex items-center ${
                  shareGifts ? 'bg-blue-600' : 'bg-neutral-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    shareGifts ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Share Wishlist */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-neutral-900 text-sm mb-0.5">Share Wishlist</h3>
                <p className="text-xs text-neutral-500">Let friends see your wishlist</p>
              </div>
              <button
                onClick={() => setShareWishlist(!shareWishlist)}
                className={`w-12 h-7 rounded-full transition-colors flex items-center ${
                  shareWishlist ? 'bg-blue-600' : 'bg-neutral-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    shareWishlist ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* AI Controls */}
        <div className="mb-6">
          <h2 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
            <Brain size={18} className="text-neutral-600" />
            AI Assistant
          </h2>
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-neutral-100">
            {/* AI Memory */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-neutral-900 text-sm mb-0.5">AI Memory</h3>
                <p className="text-xs text-neutral-500">Let AI remember your preferences</p>
              </div>
              <button
                onClick={() => setAiMemory(!aiMemory)}
                className={`w-12 h-7 rounded-full transition-colors flex items-center ${
                  aiMemory ? 'bg-blue-600' : 'bg-neutral-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    aiMemory ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Manage Data */}
            <button className="w-full p-4 text-left hover:bg-neutral-50 transition-colors">
              <h3 className="font-medium text-neutral-900 text-sm mb-0.5">Manage AI Data</h3>
              <p className="text-xs text-neutral-500">View and delete stored preferences</p>
            </button>
          </div>
        </div>

        {/* Account */}
        <div className="mb-6">
          <h2 className="font-semibold text-neutral-900 mb-3">Account</h2>
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-neutral-100">
            <button className="w-full p-4 text-left hover:bg-neutral-50 transition-colors">
              <h3 className="font-medium text-neutral-900 text-sm">Change Password</h3>
            </button>
            <button className="w-full p-4 text-left hover:bg-neutral-50 transition-colors">
              <h3 className="font-medium text-neutral-900 text-sm">Notification Settings</h3>
            </button>
            <button className="w-full p-4 text-left hover:bg-neutral-50 transition-colors">
              <h3 className="font-medium text-neutral-900 text-sm">Payment Methods</h3>
            </button>
            <button className="w-full p-4 text-left hover:bg-neutral-50 transition-colors">
              <h3 className="font-medium text-neutral-900 text-sm">Shipping Addresses</h3>
            </button>
          </div>
        </div>

        {/* About */}
        <div className="mb-6">
          <h2 className="font-semibold text-neutral-900 mb-3">About</h2>
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-neutral-100">
            <button className="w-full p-4 text-left hover:bg-neutral-50 transition-colors">
              <h3 className="font-medium text-neutral-900 text-sm">Terms of Service</h3>
            </button>
            <button className="w-full p-4 text-left hover:bg-neutral-50 transition-colors">
              <h3 className="font-medium text-neutral-900 text-sm">Privacy Policy</h3>
            </button>
            <button className="w-full p-4 text-left hover:bg-neutral-50 transition-colors">
              <h3 className="font-medium text-neutral-900 text-sm">Help Center</h3>
            </button>
          </div>
        </div>

        {/* Logout */}
        <button className="w-full py-3 bg-red-50 hover:bg-red-100 rounded-2xl transition-colors font-medium text-red-600">
          Log Out
        </button>
      </div>
    </div>
  );
}