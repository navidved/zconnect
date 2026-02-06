import { useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import { UnifiedAssistant } from '../components/UnifiedAssistant';
import { CreateContent } from '../components/CreateContent';
import { ProductSheet } from '../components/ProductSheet';
import { SearchBar } from '../components/SearchBar';
import { SlidersHorizontal, ShieldCheck } from 'lucide-react';

export function Explore() {
  const [showSearch, setShowSearch] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filters = ['All', 'Under $100', 'High Trust', 'Fast Delivery', 'BNPL Available'];
  const [activeFilter, setActiveFilter] = useState('All');

  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NzEzMzY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Nike Air Max 2024',
      price: '$129.99',
      trustScore: 4.8,
      description: 'Premium running sneakers with advanced cushioning',
      features: [
        { key: 'Size', value: 'US 8-12' },
        { key: 'Color', value: 'White/Blue' },
      ],
      offers: [
        { seller: 'Nike Official Store', price: '$129.99', trustScore: 99 },
      ],
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc2OTc2ODI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'AirPods Pro Plus',
      price: '$249.99',
      trustScore: 4.9,
      description: 'Wireless earbuds with active noise cancellation',
      features: [
        { key: 'Battery Life', value: '6 hours' },
        { key: 'Connectivity', value: 'Bluetooth 5.3' },
      ],
      offers: [
        { seller: 'Apple Authorized', price: '$249.99', trustScore: 100 },
      ],
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1667539512102-07dc97381b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGV2aWNlJTIwcHJvZHVjdHxlbnwxfHx8fDE3Njk3NDA4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'iPhone 15 Pro',
      price: '$999.99',
      trustScore: 4.9,
      description: 'Latest flagship smartphone with A17 chip',
      features: [
        { key: 'Storage', value: '256GB' },
        { key: 'Display', value: '6.1 inch' },
      ],
      offers: [
        { seller: 'Apple Store', price: '$999.99', trustScore: 100 },
      ],
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1662928245746-6b4a1e90f8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5NzQ4ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Ray-Ban Aviators',
      price: '$159.99',
      trustScore: 4.7,
      description: 'Classic sunglasses with UV protection',
      features: [
        { key: 'Frame', value: 'Metal' },
        { key: 'Lens', value: 'Polarized' },
      ],
      offers: [
        { seller: 'Ray-Ban Official', price: '$159.99', trustScore: 98 },
      ],
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1760509684262-4501bacfdcc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMGZhc2hpb24lMjBwcm9kdWN0fGVufDF8fHx8MTc2OTc4OTAzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Travel Backpack Pro',
      price: '$79.99',
      trustScore: 4.6,
      description: 'Spacious backpack with laptop compartment',
      features: [
        { key: 'Capacity', value: '30L' },
        { key: 'Material', value: 'Water-resistant' },
      ],
      offers: [
        { seller: 'TravelGear', price: '$79.99', trustScore: 95 },
      ],
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1543707751-e3e5a9359e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeSUyMHByb2R1Y3R8ZW58MXx8fHwxNzY5NzM1ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Classic Chronograph',
      price: '$89.99',
      trustScore: 4.7,
      description: 'Elegant timepiece with leather strap',
      features: [
        { key: 'Movement', value: 'Quartz' },
        { key: 'Water Resistance', value: '50m' },
      ],
      offers: [
        { seller: 'WatchHub', price: '$89.99', trustScore: 95 },
      ],
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
      <div className="max-w-7xl mx-auto pb-[0px] p-[0px] pt-[0px] pr-[15px] pl-[0px]">
        {/* Header */}
        <div className="p-[0px]">
          <h1 className="font-bold text-neutral-900 text-2xl mb-1">Explore</h1>
          <p className="text-neutral-500 text-sm">Discover trusted products</p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 mb-[20px] overflow-x-auto pb-[7px] scrollbar-hide pt-[0px] pr-[0px] pl-[0px] mt-[0px] mr-[0px] ml-[0px] px-[0px] py-[7px]">
          <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center gap-2 flex-shrink-0 transition-colors">
            <SlidersHorizontal size={16} className="text-neutral-700" />
            <span className="text-sm font-medium text-neutral-700">Filters</span>
          </button>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full flex-shrink-0 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 p-[0px] pb-[15px] pt-[0px] pr-[0px] pl-[0px]">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-neutral-900 text-sm mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <ShieldCheck size={12} className="text-green-600" />
                  <span className="text-xs text-neutral-500">{product.trustScore}</span>
                </div>
                <p className="font-bold text-neutral-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
        {showAssistant && <UnifiedAssistant onClose={() => setShowAssistant(false)} />}
        {showCreate && <CreateContent onClose={() => setShowCreate(false)} />}
        {showProduct && selectedProduct && (
          <ProductSheet
            onClose={() => setShowProduct(false)}
            product={{
              image: selectedProduct.image,
              name: selectedProduct.name,
              description: selectedProduct.description,
              price: selectedProduct.price,
              trustScore: 1250,
              features: selectedProduct.features,
              offers: selectedProduct.offers,
            }}
          />
        )}
      </div>
    </MainLayout>
  );
}