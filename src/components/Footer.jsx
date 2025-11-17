import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-8 mt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ShopHub</h3>
            <p className="text-gray-400">
              Your one-stop shop for modern products. Quality guaranteed.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-primary-400 transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p className="text-gray-400">Email: support@shophub.com</p>
            <p className="text-gray-400">Phone: 8941972261</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ShopHub. All rights reserved .</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

