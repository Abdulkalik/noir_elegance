import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { ShoppingBag, Heart, User } from 'lucide-react'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Noir Elegance - Luxury Fashion" description="Discover timeless elegance" />

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

        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wide">
              TIMELESS ELEGANCE
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
              Where sophistication meets style
            </p>
            <Link
              to={routes.shop()}
              className="inline-block px-12 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 tracking-widest text-sm"
            >
              DISCOVER COLLECTION
            </Link>
          </div>
        </section>

        <section className="py-32 bg-zinc-950">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-white/20 flex items-center justify-center">
                  <span className="text-2xl">✦</span>
                </div>
                <h3 className="text-xl mb-4 tracking-wide">Premium Quality</h3>
                <p className="text-gray-400 font-light">Crafted with the finest materials</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-white/20 flex items-center justify-center">
                  <span className="text-2xl">✦</span>
                </div>
                <h3 className="text-xl mb-4 tracking-wide">Exclusive Designs</h3>
                <p className="text-gray-400 font-light">Limited edition collections</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-white/20 flex items-center justify-center">
                  <span className="text-2xl">✦</span>
                </div>
                <h3 className="text-xl mb-4 tracking-wide">Global Shipping</h3>
                <p className="text-gray-400 font-light">Worldwide delivery available</p>
              </div>
            </div>
          </div>
        </section>

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

export default HomePage
