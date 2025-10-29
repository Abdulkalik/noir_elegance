import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { ShoppingBag, Heart, User } from 'lucide-react'

const products = [
  { id: 1, name: 'Noir Blazer', price: 899, category: 'Outerwear', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg' },
  { id: 2, name: 'Silk Dress', price: 799, category: 'Dresses', image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg' },
  { id: 3, name: 'Cashmere Coat', price: 1299, category: 'Outerwear', image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg' },
  { id: 4, name: 'Evening Gown', price: 1499, category: 'Dresses', image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg' },
  { id: 5, name: 'Leather Jacket', price: 999, category: 'Outerwear', image: 'https://images.pexels.com/photos/1131406/pexels-photo-1131406.jpeg' },
  { id: 6, name: 'Cocktail Dress', price: 699, category: 'Dresses', image: 'https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg' },
]

const ShopPage = () => {
  const [filter, setFilter] = useState('All')

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(p => p.category === filter)

  return (
    <>
      <MetaTags title="Shop - Noir Elegance" description="Browse our luxury collection" />

      <div className="min-h-screen bg-black text-white">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link to={routes.home()} className="text-2xl font-light tracking-widest">
              NOIR ELEGANCE
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to={routes.shop()} className="hover:text-gray-300 transition-colors">Shop</Link>
              <Link to={routes.collections()} className="hover:text-gray-300 transition-colors">Collections</Link>
              <Link to={routes.about()} className="hover:text-gray-300 transition-colors">About</Link>
            </nav>
            <div className="flex items-center space-x-6">
              <Heart className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
              <User className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
            </div>
          </div>
        </header>

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-light mb-12 tracking-wide">SHOP</h1>

            <div className="flex gap-4 mb-12">
              {['All', 'Outerwear', 'Dresses'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 border transition-all ${
                    filter === cat
                      ? 'bg-white text-black border-white'
                      : 'border-white/20 hover:border-white/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-zinc-900 mb-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg tracking-wide mb-2">{product.name}</h3>
                  <p className="text-gray-400">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="bg-black border-t border-white/10 py-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm tracking-widest">
              © 2025 NOIR ELEGANCE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default ShopPage
