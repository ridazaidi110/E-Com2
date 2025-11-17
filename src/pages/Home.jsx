import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import AnimatedButton from '../components/AnimatedButton'
import { ShoppingBag, TrendingUp, Sparkles, ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react'

const Home = () => {
  const [products, setProducts] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setFeaturedProducts(data.slice(0, 6))
      })
  }, [])

  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800',
      description: 'Latest tech gadgets'
    },
    {
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      description: 'Trendy styles'
    },
    {
      name: 'Home',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      description: 'Home essentials'
    },
    {
      name: 'Sports',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      description: 'Fitness & sports'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const features = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders over ₹4,000' },
    { icon: Shield, title: 'Secure Payment', description: '100% secure checkout' },
    { icon: Headphones, title: '24/7 Support', description: 'Dedicated support' },
    { icon: Star, title: 'Top Quality', description: 'Premium products' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-primary-900/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block mb-6"
              >
                <Sparkles size={48} className="text-yellow-400" />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Discover Your
                <span className="block bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                  Perfect Style
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Shop the latest trends and premium products. Quality guaranteed, style unlimited.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <AnimatedButton className="bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 flex items-center gap-2">
                    <ShoppingBag size={24} />
                    Shop Now
                    <ArrowRight size={20} />
                  </AnimatedButton>
                </Link>
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Explore
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl blur-2xl opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                  alt="Fashion showcase"
                  className="relative rounded-3xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              >
                <div className="inline-flex p-4 rounded-full bg-primary-100 dark:bg-primary-900 mb-4">
                  <feature.icon size={32} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section with Images */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore our curated collections
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category, index) => (
              <Link key={category.name} to={`/products?category=${category.name}`}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-200">{category.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <ArrowRight className="text-white" size={20} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp size={40} className="text-primary-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
                Featured Products
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Handpicked favorites just for you
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <AnimatedButton className="text-lg px-8 py-4">
                View All Products
                <ArrowRight className="inline ml-2" size={20} />
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

