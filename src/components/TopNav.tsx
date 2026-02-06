import { useNavigate, useLocation } from 'react-router';
import { Play, ShoppingBasket, Compass, Users, User, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCitySelector, setShowCitySelector] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Tehran');

  const cities = ['Tehran', 'Isfahan', 'Shiraz', 'Kerman', 'Mashhad'];

  const navItems = [
    { path: '/', icon: Play, label: 'Reels' },
    { path: '/basket', icon: ShoppingBasket, label: 'Basket' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/social', icon: Users, label: 'Social' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setShowCitySelector(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 border-b border-neutral-700/50">
        {/* Tab Navigation */}
        <div className="flex items-center justify-around px-2 py-3">
          {/* Location Selector - First Item */}
          <button
            onClick={() => setShowCitySelector(true)}
            className="group relative flex flex-col items-center gap-1 min-w-[60px]"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-transparent">
              <MapPin
                size={20}
                className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
                strokeWidth={2.5}
              />
            </div>
            <span className="text-xs font-medium text-neutral-400 group-hover:text-cyan-400 transition-colors">
              {selectedCity}
            </span>
          </button>

          {/* Navigation Items */}
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="group relative flex flex-col items-center gap-1 min-w-[60px]"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all relative overflow-hidden ${
                  isActive ? 'bg-neutral-800' : 'bg-transparent'
                }`}>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20" />
                  )}
                  <Icon
                    size={20}
                    className={`transition-all relative z-10 ${
                      isActive 
                        ? 'text-cyan-400' 
                        : 'text-neutral-500 group-hover:text-neutral-300'
                    }`}
                    strokeWidth={2.5}
                  />
                </div>
                <span className={`text-xs font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-400'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* City Selector Modal */}
      {showCitySelector && (
        <div 
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => setShowCitySelector(false)}
        >
          <div 
            className="fixed inset-x-0 bottom-0 max-w-md mx-auto bg-neutral-900 rounded-t-3xl shadow-2xl border-t border-neutral-700/50 max-h-[50vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-neutral-800">
              <div className="w-12 h-1 bg-neutral-700 rounded-full mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white text-center">Select City</h2>
              <p className="text-sm text-neutral-400 text-center mt-1">Choose your location</p>
            </div>

            {/* City List */}
            <div className="overflow-y-auto max-h-[calc(50vh-100px)]">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className={`w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-800 transition-colors ${
                    selectedCity === city ? 'bg-neutral-800/50' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-cyan-400" />
                    <span className="text-white font-medium">{city}</span>
                  </div>
                  {selectedCity === city && (
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}