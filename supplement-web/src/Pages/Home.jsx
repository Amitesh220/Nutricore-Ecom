import { Link } from 'react-router-dom'

const topProducts = [
  {
    
        id: 1,
        name: "Multivitamin",
        price: 1500,  
        currency: "₹",
        image: "https://images.pexels.com/photos/14029292/pexels-photo-14029292.jpeg",  
        description: "Complete daily nutrition in one tablet",
     
      
  },
  {
    
        id: 2,
        name: "Protein",
        price: 2399.20,  
        currency: "₹",
        image: "https://images.pexels.com/photos/6475115/pexels-photo-6475115.jpeg",  
        description: "Chocolate Flavour Whey isolate",
  },
  {
    id: 3,
        name: 'Testosterone Booster',
        price: 2999.99,
        currency: '₹',
        image: 'https://images.pexels.com/photos/6475115/pexels-photo-6475115.jpeg',
        description: 'Boost your testosterone levels naturally',
  },
  {
    id: 4,
      name: 'Pre-Workout Supplement',
      price: 1800.50,
      currency: '₹',
      image: 'https://images.pexels.com/photos/6475115/pexels-photo-6475115.jpeg',
      description: 'Increase your energy and focus for workouts',
  },
  {
    id: 5,
      name: 'Creatine Monohydrate',
      price: 1200,
      currency: '₹',
      image: 'https://images.pexels.com/photos/6475115/pexels-photo-6475115.jpeg',
      description: 'Increase strength and performance',
  },
  {
    id: 6,
      name: 'BCAA Amino Acids',
      price: 899.99,
      currency: '₹',
      image: 'https://images.pexels.com/photos/6475115/pexels-photo-6475115.jpeg',
      description: 'Supports muscle recovery and growth',
  },
  
]

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Destination to optimal nutrition 
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover All brands at a single place
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topProducts.map(product => (
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
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
