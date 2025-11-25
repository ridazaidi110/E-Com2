import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === parseInt(id))
        setProduct(foundProduct)
      })
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Products
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-full flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-md aspect-square rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: imageLoaded ? 1 : 1.2 }}
                transition={{ duration: 0.5 }}
                onLoad={() => setImageLoaded(true)}
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 w-full"
          >
            <div className="w-full">
              <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                {product.name}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-6"
              >
                ₹{product.price.toFixed(2)}
              </motion.p>
            </div>

            <div className="w-full">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Description
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

