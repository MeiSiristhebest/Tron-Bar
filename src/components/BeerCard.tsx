'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

interface BeerCardProps {
  id: string;
  name: string;
  description: string;
  abv: number;
  price: number;
  imageUrl: string;
}

export default function BeerCard({ id, name, description, abv, price, imageUrl }: BeerCardProps) {
  return (
    <AnimatedSection className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-white/5 hover:border-amber-500/20">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
      
      <div className="relative">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 bg-amber-500 rounded-full text-black text-sm font-semibold shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              ¥{price}
            </div>
          </div>
        </div>
        
        <div className="relative p-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-2 bg-amber-500/10 px-3 py-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-amber-400 text-sm font-medium">{abv}% ABV</span>
            </div>
            
            <Link 
              href={`/beers/${id}`}
              className="group/btn flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors duration-300 relative"
            >
              <span className="relative">
                了解详情
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover/btn:w-full transition-all duration-300" />
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 