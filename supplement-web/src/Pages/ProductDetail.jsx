import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../Store/CartSlice'

const ProductDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const products = [
    {
      id: 1,
      name: 'Multivitamin',
      price: 1500,
      currency: '₹',
      image: 'https://images.pexels.com/photos/14029292/pexels-photo-14029292.jpeg',
      description: 'Complete daily nutrition in one tablet',
      details: ['30 day supply', 'Scientifically formulated', '100% natural ingredients']
    },
    {
      id: 2,
      name: 'Protein',
      price: 2399.2,
      currency: '₹',
      image: 'https://images.pexels.com/photos/6475115/pexels-photo-6475115.jpeg',
      description: 'Chocolate Flavour Whey isolate',
      details: ['High protein content', 'Supports muscle recovery', 'Delicious taste']
    },
    {
        id: 3,
        name: 'Testosterone Booster',
        price: 2999.99,
        currency: '₹',
        image: 'https://images.pexels.com/photos/6475115/pexels-photo-6475115.jpeg',
        description: 'Boost your testosterone levels naturally',
        details: ['Improves stamina', 'Promotes muscle growth', 'Enhances mood and energy']
      },
      
    {
      id: 4,
      name: 'Pre-Workout Supplement',
      price: 1800.5,
      currency: '₹',
      image: 'https://images.pexels.com/photos/6475115/pexels-photo-6475115.jpeg',
      description: 'Increase your energy and focus for workouts',
      details: ['Pre-workout energy boost', 'Improves endurance', 'Supports mental focus']
    },
    {
      id: 5,
      name: 'Creatine Monohydrate',
      price: 1200,
      currency: '₹',
      image: 'https://images.pexels.com/photos/6475115/pexels-photo-6475115.jpeg',
      description: 'Increase strength and performance',
      details: ['Supports muscle growth', 'Increases strength', 'Ideal for explosive workouts']
    },
    {
      id: 6,
      name: 'BCAA Amino Acids',
      price: 899.99,
      currency: '₹',
      image: 'https://images.pexels.com/photos/6475115/pexels-photo-6475115.jpeg',
      description: 'Supports muscle recovery and growth',
      details: ['Promotes muscle repair', 'Reduces soreness', 'Improves endurance']
    }
  ]

  const product = products.find((prod) => prod.id === parseInt(id))

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          product: {
            id: product.id,
            name: product.name,
            price: parseFloat(product.price),
            image: product.image
          },
          quantity
        })
      )
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {product ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-2xl font-bold text-green-600 mt-4">
              {product.currency} {parseFloat(product.price).toFixed(2)}
            </p>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900">Key Benefits</h2>
              <ul className="mt-2 space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex items-center">
              <label htmlFor="quantity" className="mr-4">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 px-3 py-2 border rounded-md"
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  )
}

export default ProductDetail
