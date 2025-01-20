import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './navbar.css'; 

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-items">
          <div className="flex items-center">
          <Link to="/" className="flex items-center">
              <img
                src="https://i.ibb.co/DLRHj0X/logo.png"
                alt="NutriCore Logo"
                className="h-10 w-10 mr-2"
              />
              <span className="text-2xl font-bold text-White-600">
                NutriCore
              </span>
            </Link>
          </div>

          <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
            <Link to="/categories" className="text-gray-700 hover:text-green-600 transition-colors">Categories</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
          </div>

          <div className="navbar-cart">
            <Link to="/cart" className="flex items-center">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-green-600 transition-colors" />
              {cartItems.length > 0 && (
                <span className="ml-1 bg-green-600 text-white rounded-full px-2 py-1 text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          <button
            className="navbar-mobile-menu md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
