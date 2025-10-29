import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { ShoppingBag, Heart, User } from 'lucide-react'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About - Noir Elegance" description="Learn about our story" />

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
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl font-light mb-12 tracking-wide">ABOUT NOIR ELEGANCE</h1>

            <div className="space-y-12 text-lg text-gray-300 font-light leading-relaxed">
              <div className="aspect-video bg-zinc-900 mb-12 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg"
                  alt="Noir Elegance Atelier"
                  className="w-full h-full object-cover"
                />
              </div>

              <p>
                Founded in 2020, Noir Elegance emerged from a singular vision: to create fashion that transcends trends and embraces timeless sophistication. Our name reflects our philosophy—Noir, representing the depth and mystery of true elegance, and Elegance, embodying the grace we weave into every piece.
              </p>

              <p>
                Each garment in our collection is meticulously crafted by master artisans who share our commitment to perfection. We source only the finest materials—Italian cashmere, French silk, and premium wool—ensuring that every piece not only looks exquisite but feels extraordinary.
              </p>

              <p>
                Our design philosophy centers on minimalism and quality. We believe that true luxury lies not in excess, but in the perfect cut, the finest fabric, and the attention to detail that makes each piece a work of art. Every collection tells a story of refinement, designed for those who understand that style is eternal.
              </p>

              <div className="border-t border-white/20 pt-12 mt-16">
                <h2 className="text-3xl font-light mb-8 tracking-wide">OUR COMMITMENT</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl mb-4 tracking-wide">Sustainability</h3>
                    <p className="text-gray-400">
                      We are committed to ethical production and sustainable practices in every aspect of our business.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 tracking-wide">Craftsmanship</h3>
                    <p className="text-gray-400">
                      Every piece is handcrafted by skilled artisans who bring decades of expertise to their work.
                    </p>
                  </div>
                </div>
              </div>
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

export default AboutPage
