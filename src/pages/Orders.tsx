import { useNavigate } from 'react-router';
import { ChevronLeft, Package, Truck, CheckCircle, Clock } from 'lucide-react';

export function Orders() {
  const navigate = useNavigate();

  const orders = [
    {
      id: '#12345',
      date: 'Jan 28, 2026',
      status: 'delivered',
      statusLabel: 'Delivered',
      items: [
        {
          name: 'Nike Air Max 2024',
          image: 'https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NzEzMzY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
          quantity: 1,
        },
      ],
      total: '$129.99',
    },
    {
      id: '#12344',
      date: 'Jan 26, 2026',
      status: 'shipping',
      statusLabel: 'In Transit',
      items: [
        {
          name: 'AirPods Pro Plus',
          image: 'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc2OTc2ODI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
          quantity: 1,
        },
        {
          name: 'Classic Chronograph Watch',
          image: 'https://images.unsplash.com/photo-1543707751-e3e5a9359e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeSUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5NzM1ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
          quantity: 1,
        },
      ],
      total: '$339.98',
    },
    {
      id: '#12343',
      date: 'Jan 24, 2026',
      status: 'processing',
      statusLabel: 'Processing',
      items: [
        {
          name: 'Travel Backpack Pro',
          image: 'https://images.unsplash.com/photo-1760509684262-4501bacfdcc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMGZhc2hpb24lMjBwcm9kdWN0fGVufDF8fHx8MTc2OTc4OTAzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
          quantity: 1,
        },
      ],
      total: '$79.99',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle size={20} className="text-green-600" />;
      case 'shipping':
        return <Truck size={20} className="text-blue-600" />;
      case 'processing':
        return <Clock size={20} className="text-orange-600" />;
      default:
        return <Package size={20} className="text-neutral-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-50 text-green-700';
      case 'shipping':
        return 'bg-blue-50 text-blue-700';
      case 'processing':
        return 'bg-orange-50 text-orange-700';
      default:
        return 'bg-neutral-50 text-neutral-700';
    }
  };

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
          <h1 className="flex-1 text-center font-semibold text-neutral-900">My Orders</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="pt-16 pb-8 px-4 max-w-md mx-auto">
        <p className="text-sm text-neutral-500 mb-4">{orders.length} orders</p>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Order Header */}
              <div className="p-4 border-b border-neutral-100">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">Order {order.id}</p>
                    <p className="text-xs text-neutral-500">{order.date}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full flex items-center gap-1.5 ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="text-xs font-medium">{order.statusLabel}</span>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-4 space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-neutral-900 text-sm line-clamp-2">
                        {item.name}
                      </h4>
                      <p className="text-xs text-neutral-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-sm text-neutral-600">Total</span>
                <span className="font-bold text-neutral-900">{order.total}</span>
              </div>

              {/* Actions */}
              <div className="p-4 pt-0 flex gap-2">
                <button className="flex-1 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors text-neutral-900 text-sm font-medium">
                  View Details
                </button>
                {order.status === 'delivered' && (
                  <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white text-sm font-medium">
                    Buy Again
                  </button>
                )}
                {order.status === 'shipping' && (
                  <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white text-sm font-medium">
                    Track Order
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}