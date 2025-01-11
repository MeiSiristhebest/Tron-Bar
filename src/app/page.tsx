import Image from 'next/image';
import Link from 'next/link';
import { featuredBeers } from '@/data/beers';
import BeerCard from '@/components/BeerCard';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Craft Beer Bar Ambiance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-gray-900" />
          {/* Animated grain overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('/images/noise.jpg')] animate-grain" />
        </div>

        <AnimatedSection className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-500/20 shadow-lg shadow-amber-500/5">
            <span className="text-amber-400 font-medium tracking-wide">精酿啤酒爱好者的天堂</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300">
            创啤社的艺术殿堂
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            探索独特的啤酒文化，品味精心酿造的佳酿，感受不一样的啤酒艺术
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/menu" className="group bg-amber-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                浏览菜单
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link href="/about" className="group border border-white/20 backdrop-blur-md bg-white/10 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                了解更多
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-500/20 mb-6">
              <span className="text-amber-400 font-medium tracking-wide">特别推荐</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
              特色精酿
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              精选来自世界各地的优质精酿啤酒，每一款都经过严格筛选，只为带给您最纯正的口感体验
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {featuredBeers.map((beer) => (
              <BeerCard key={beer.name} {...beer} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-500/20 mb-6">
                <span className="text-amber-400 font-medium tracking-wide">关于我们</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
                探索精酿啤酒的无限可能
              </h2>
              <div className="space-y-6 text-lg">
                <p className="text-gray-300">
                  创啤社成立于2020年，是一家专注于为啤酒爱好者提供优质精酿啤酒体验的特色酒吧。
                </p>
                <p className="text-gray-400">
                  我们与世界各地的精酿啤酒厂合作，为您带来独特的啤酒品鉴体验。每一款啤酒都经过精心挑选，
                  确保能为您带来最纯正的口感和最愉悦的享受。
                </p>
              </div>
              <Link href="/about" className="group inline-flex items-center gap-2 bg-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 mt-8">
                了解更多
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </AnimatedSection>
            <div className="relative order-1 lg:order-2">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-white/10">
                <Image
                  src="/images/about-bg.jpg"
                  alt="Our Bar"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
