import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import AnimatedButton from '../components/AnimatedButton'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart()
  const navigate = useNavigate()

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout')
    }
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
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Add some products to get started!
            </p>
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
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200"
        >
          Shopping Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  layout
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-6"
                >
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-4">
                      ₹{item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          <Minus size={18} />
                        </motion.button>
                        <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 w-8 text-center">
                          {item.quantity}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          <Plus size={18} />
                        </motion.button>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                      >
                        <Trash2 size={20} />
                      </motion.button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                      Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span>Free</span>
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
              <AnimatedButton onClick={handleCheckout} className="w-full">
                Proceed to Checkout
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

