import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, CreditCard, Wallet, Lock, ShieldCheck } from 'lucide-react';

export function Checkout() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('card');

  const paymentMethods = [
    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
    { id: 'bnpl', label: 'Buy Now, Pay Later', icon: Wallet },
    { id: 'escrow', label: 'Escrow Payment', icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-neutral-200">
        <div className="max-w-md mx-auto flex items-center px-4 py-3">
          <button
            onClick={() => navigate('/basket')}
            className="p-2 -ml-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <ChevronLeft size={24} className="text-neutral-700" />
          </button>
          <h1 className="flex-1 text-center font-semibold text-neutral-900">Checkout</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="pt-16 pb-8 px-4 max-w-md mx-auto">
        {/* Delivery Address */}
        <div className="mb-6">
          <h2 className="font-semibold text-neutral-900 mb-3">Delivery Address</h2>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="font-medium text-neutral-900 mb-1">Home</p>
            <p className="text-sm text-neutral-600">123 Main Street, Apt 4B</p>
            <p className="text-sm text-neutral-600">San Francisco, CA 94102</p>
            <button className="mt-3 text-sm text-blue-600 font-medium">Change</button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h2 className="font-semibold text-neutral-900 mb-3">Payment Method</h2>
          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`w-full p-4 rounded-2xl transition-all flex items-center gap-3 ${
                    selectedPayment === method.id
                      ? 'bg-blue-50 border-2 border-blue-600'
                      : 'bg-white border-2 border-transparent shadow-sm'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      selectedPayment === method.id ? 'bg-blue-600' : 'bg-neutral-100'
                    }`}
                  >
                    <Icon
                      size={20}
                      className={selectedPayment === method.id ? 'text-white' : 'text-neutral-700'}
                    />
                  </div>
                  <span
                    className={`font-medium ${
                      selectedPayment === method.id ? 'text-blue-900' : 'text-neutral-900'
                    }`}
                  >
                    {method.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Escrow Notice */}
        {selectedPayment === 'escrow' && (
          <div className="mb-6 bg-blue-50 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <ShieldCheck size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 text-sm mb-1">Secure Payment</h3>
                <p className="text-xs text-blue-700">
                  Your payment is held in escrow until delivery is confirmed. Funds are only released to the seller after you approve.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* BNPL Notice */}
        {selectedPayment === 'bnpl' && (
          <div className="mb-6 bg-blue-50 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <Wallet size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 text-sm mb-1">Pay in 4 Installments</h3>
                <p className="text-xs text-blue-700">
                  Split your payment into 4 interest-free installments. First payment due today.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Order Summary */}
        <div className="mb-6">
          <h2 className="font-semibold text-neutral-900 mb-3">Order Summary</h2>
          <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-500">Subtotal (3 items)</span>
              <span className="text-neutral-900 font-medium">$469.97</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-500">Shipping</span>
              <span className="text-neutral-900 font-medium">$5.99</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-500">Tax</span>
              <span className="text-neutral-900 font-medium">$38.00</span>
            </div>
            <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
              <span className="font-semibold text-neutral-900">Total</span>
              <span className="font-bold text-neutral-900 text-lg">$513.96</span>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors font-medium text-white shadow-lg">
          Place Order
        </button>

        <p className="text-xs text-neutral-400 text-center mt-4">
          By placing an order, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </div>
  );
}