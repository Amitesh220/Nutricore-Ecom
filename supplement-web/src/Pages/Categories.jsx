import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 1,
    name: "Vitamins",
    products: [
      {
        id: 1,
        name: 'VitalForce Multivitamin',
        price: 1500,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/14029292/pexels-photo-14029292.jpeg',
        description: 'Complete daily nutrition in one tablet',
        details: ['30 day supply', 'Scientifically formulated', '100% natural ingredients']
      },
      {
        id: 2,
        name: 'VitaGlow Multivitamin',
        price: 999,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/1393245/pexels-photo-1393245.jpeg',
        description: 'A daily essential for better health',
        details: ['Immune system support', 'Helps with energy levels', 'Promotes skin health']
      },
      {
        id: 3,
        name: 'BioVibe Multivitamin',
        price: 1299,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/1671007/pexels-photo-1671007.jpeg',
        description: 'Feel the difference with every dose',
        details: ['Antioxidants', 'Boosts metabolism', 'Rich in vitamins A, C, and E']
      },
      {
        id: 4,
        name: 'PureVital Multivitamin',
        price: 1199,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/3984697/pexels-photo-3984697.jpeg',
        description: 'All-around health support',
        details: ['Supports immunity', 'Provides essential nutrients', 'Perfect for daily intake']
      },
    ]
  },
  {
    id: 2,
    name: "Proteins",
    products: [
      {
        id: 1,
        name: 'ProteinX',
        price: 2399.20,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/6475115/pexels-photo-6475115.jpeg',
        description: 'Chocolate Flavour Whey isolate',
        details: ['High protein content', 'Supports muscle recovery', 'Delicious taste']
      },
      {
        id: 2,
        name: 'ProPure Protein',
        price: 1499,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/1704128/pexels-photo-1704128.jpeg',
        description: 'Pure protein for maximum muscle gain',
        details: ['Rich in protein', 'Great taste', 'Ideal for post-workout']
      },
      {
        id: 3,
        name: 'MaxMuscle Protein',
        price: 1799.50,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/3661778/pexels-photo-3661778.jpeg',
        description: 'Supports muscle recovery and growth',
        details: ['Enhanced with amino acids', 'Supports lean muscle gain', 'Best for athletes']
      },
      {
        id: 4,
        name: 'PowerFlex Protein',
        price: 1999,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/3661775/pexels-photo-3661775.jpeg',
        description: 'Muscle-building protein with added BCAAs',
        details: ['Boosts strength', 'Helps in muscle repair', 'Fast-digesting protein']
      },
    ]
  },
  {
    id: 3,
    name: "Supplements",
    products: [
      {
        id: 5,
        name: 'TestoBoost',
        price: 2999.99,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/6611011/pexels-photo-6611011.jpeg',
        description: 'Boost your testosterone levels naturally',
        details: ['Improves stamina', 'Promotes muscle growth', 'Enhances mood and energy']
      },
      {
        id: 6,
        name: 'PreCharge Pre-Workout',
        price: 1800.50,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/6749231/pexels-photo-6749231.jpeg',
        description: 'Increase your energy and focus for workouts',
        details: ['Pre-workout energy boost', 'Improves endurance', 'Supports mental focus']
      },
      {
        id: 7,
        name: 'Creatine Surge',
        price: 1200,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/4634395/pexels-photo-4634395.jpeg',
        description: 'Maximize your strength and muscle power',
        details: ['Increases strength', 'Promotes muscle growth', 'Helps in recovery']
      },
      {
        id: 8,
        name: 'BCAA Amino Acids',
        price: 899.99,
        currency: 'INR',
        image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
        description: 'Supports muscle recovery and growth',
        details: ['Promotes muscle repair', 'Reduces soreness', 'Improves endurance']
      }
    ]
  }
]

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {categories.map(category => (
        <section key={category.id} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {category.products.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-green-600 font-bold mt-2">{product.currency} {product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Categories
