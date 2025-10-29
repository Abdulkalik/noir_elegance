import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { ShoppingBag, Heart, User } from 'lucide-react'

const collections = [
  {
    id: 1,
    name: 'Winter 2025',
    description: 'Embrace the cold with sophisticated warmth',
    image: 'https://images.pexels.com/photos/3785627/pexels-photo-3785627.jpeg',
  },
  {
    id: 2,
    name: 'Evening Luxe',
    description: 'Timeless pieces for unforgettable nights',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
  },
  {
    id: 3,
    name: 'Urban Noir',
    description: 'Modern elegance for city life',
    image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
  },
]

const CollectionsPage = () => {
  return (
    <>
      <MetaTags title="Collections - Noir Elegance" description="Explore our curated collections" />

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
            <h1 className="text-5xl font-light mb-6 tracking-wide">COLLECTIONS</h1>
            <p className="text-xl text-gray-400 mb-16 font-light max-w-2xl">
              Discover our carefully curated collections, each telling a unique story of elegance and refinement
            </p>

            <div className="space-y-16">
              {collections.map(collection => (
                <div key={collection.id} className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="aspect-[4/3] bg-zinc-900 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-light mb-4 tracking-wide">{collection.name}</h2>
                    <p className="text-gray-400 mb-8 text-lg">{collection.description}</p>
                    <Link
                      to={routes.shop()}
                      className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm"
                    >
                      VIEW COLLECTION
                    </Link>
                  </div>
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

export default CollectionsPage
