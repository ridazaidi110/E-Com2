import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import AnimatedButton from '../components/AnimatedButton'
import { CheckCircle, ShoppingBag } from 'lucide-react'

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const handlePlaceOrder = () => {
    // Simulate order placement
    clearCart()
    alert('Order placed successfully! (This is a demo - no actual payment processed)')
    navigate('/')
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <ShoppingBag size={64} className="mx-auto mb-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              No items to checkout
            </h2>
            <AnimatedButton onClick={() => navigate('/products')}>
              Browse Products
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200"
        >
          Checkout
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Order Items
              </h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold text-primary-600 dark:text-primary-400">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24"
            >
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle size={24} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Order Summary
                </h2>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t border-gray-300 dark:border-gray-600 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-800 dark:text-gray-200">
                    <span>Total</span>
                    <span className="text-primary-600 dark:text-primary-400">
                      ${getCartTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <AnimatedButton onClick={handlePlaceOrder} className="w-full">
                Place Order
              </AnimatedButton>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                This is a demo. No actual payment will be processed.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

