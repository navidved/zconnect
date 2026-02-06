import { useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import { UnifiedAssistant } from '../components/UnifiedAssistant';
import { CreateContent } from '../components/CreateContent';
import { SearchBar } from '../components/SearchBar';
import { Trash2, Plus, Minus, ShieldCheck, Tag, CreditCard, Lock } from 'lucide-react';

export function Basket() {
  const [showSearch, setShowSearch] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NzEzMzY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Nike Air Max 2024',
      seller: 'Nike Official Store',
      trustScore: 99,
      price: 129.99,
      quantity: 1,
      badges: ['20% OFF', 'BNPL'],
      delivery: '2-3 days',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc2OTc2ODI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'AirPods Pro Plus',
      seller: 'Apple Authorized',
      trustScore: 100,
      price: 249.99,
      quantity: 1,
      badges: ['Escrow', 'BNPL'],
      delivery: 'Same day',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1543707751-e3e5a9359e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeSUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5NzM1ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Classic Chronograph',
      seller: 'Apple Authorized',
      trustScore: 100,
      price: 89.99,
      quantity: 1,
      badges: ['10% OFF'],
      delivery: 'Same day',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  // Group items by seller
  const groupedItems = cartItems.reduce((acc, item) => {
    if (!acc[item.seller]) {
      acc[item.seller] = [];
    }
    acc[item.seller].push(item);
    return acc;
  }, {} as Record<string, typeof cartItems>);

  return (
    <MainLayout
      onSearch={() => setShowSearch(true)}
      onAssistant={() => setShowAssistant(true)}
      onCreate={() => setShowCreate(true)}
    >
      <div className="max-w-md mx-auto">
        <div className="pb-[0px] p-[0px] pt-[0px] pr-[15px] pl-[0px]">
          {/* Header */}
          <div className="py-4">
            <h1 className="font-bold text-neutral-900 text-2xl mb-1">Basket</h1>
            <p className="text-neutral-500 text-sm">{cartItems.length} items</p>
          </div>

          {/* Grouped by Seller */}
          <div className="space-y-6 mb-6">
            {Object.entries(groupedItems).map(([seller, items]) => (
              <div key={seller} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Seller Header */}
                <div className="px-4 py-3 bg-neutral-50 border-b border-neutral-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-neutral-900 text-sm">{seller}</h3>
                      <div className="flex items-center gap-1">
                        <ShieldCheck size={14} className="text-green-600" />
                        <span className="text-xs text-neutral-500">{items[0].trustScore}%</span>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500">Est. {items[0].delivery}</span>
                  </div>
                </div>

                {/* Items */}
                <div className="divide-y divide-neutral-100">
                  {items.map((item) => (
                    <div key={item.id} className="p-4">
                      <div className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-neutral-900 text-sm mb-1 truncate">
                            {item.name}
                          </h4>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {item.badges.map((badge, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-lg flex items-center gap-1"
                              >
                                {badge.includes('OFF') ? (
                                  <Tag size={10} />
                                ) : badge === 'BNPL' ? (
                                  <CreditCard size={10} />
                                ) : (
                                  <Lock size={10} />
                                )}
                                {badge}
                              </span>
                            ))}
                          </div>
                          <p className="font-bold text-neutral-900">${item.price}</p>
                        </div>
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
                          >
                            <Minus size={16} className="text-neutral-700" />
                          </button>
                          <span className="w-8 text-center font-medium text-neutral-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
                          >
                            <Plus size={16} className="text-neutral-700" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <Trash2 size={18} className="text-red-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Bottom Summary */}
        <div className="fixed bottom-[74px] left-0 right-0 bg-white border-t border-neutral-200 shadow-lg z-30 mx-[0px] my-[10px]">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500">Subtotal</span>
                <span className="text-neutral-900 font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500">Shipping</span>
                <span className="text-neutral-900 font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-neutral-200">
                <span className="font-semibold text-neutral-900">Total</span>
                <span className="font-bold text-neutral-900 text-lg">${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors font-medium text-white"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
      {showAssistant && <UnifiedAssistant onClose={() => setShowAssistant(false)} />}
      {showCreate && <CreateContent onClose={() => setShowCreate(false)} />}
    </MainLayout>
  );
}