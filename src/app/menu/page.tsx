'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import BeerCard from '@/components/BeerCard';

const beerCategories = [
  {
    title: '精酿啤酒',
    description: '精选来自世界各地的优质精酿啤酒，每一款都经过严格筛选，只为带给您最纯正的口感体验。',
    beers: [
      {
        id: 'golden-ale',
        name: '金色艾尔',
        description: '清新爽口的比利时风格金色艾尔啤酒，带有淡淡的果香和麦芽香气。',
        abv: 6.5,
        price: 48,
        imageUrl: '/images/golden-ale.jpg'
      },
      {
        id: 'rye-stout',
        name: '黑麦世涛',
        description: '浓郁醇厚的俄罗斯帝国世涛，融合黑麦风味，口感丰富层次分明。',
        abv: 8.5,
        price: 58,
        imageUrl: '/images/rye-stout.jpg'
      },
      {
        id: 'citrus-ipa',
        name: '柑橘IPA',
        description: '充满热带水果香气的印度淡色艾尔，使用大量新世界啤酒花。',
        abv: 7.2,
        price: 52,
        imageUrl: '/images/citrus-ipa.jpg'
      }
    ]
  },
  {
    title: '季节限定',
    description: '随季节变化推出的特色精酿，限量供应，带来独特的味觉体验。',
    beers: [
      {
        id: 'christmas-stout',
        name: '圣诞世涛',
        description: '节日特酿，添加了肉桂、丁香等香料，温暖醇厚。',
        abv: 9.0,
        price: 68,
        imageUrl: '/images/christmas-stout.jpg'
      },
      {
        id: 'summer-wheat',
        name: '夏日小麦',
        description: '清爽的德式小麦啤酒，带有香蕉和丁香的典型风味。',
        abv: 5.2,
        price: 45,
        imageUrl: '/images/summer-wheat.jpg'
      }
    ]
  }
];

const snacks = {
  fried: [
    { name: '比利时薯条', price: 28, description: '外酥内软，搭配特制蒜香蛋黄酱' },
    { name: '炸鱼薯条', price: 48, description: '经典英式炸鱼，配以自制塔塔酱' },
    { name: '炸鸡翅', price: 42, description: '秘制腌料，外酥内嫩，风味十足' }
  ],
  snacks: [
    { name: '德式香肠拼盘', price: 68, description: '多种德国进口香肠，配以芥末酱' },
    { name: '芝士拼盘', price: 88, description: '精选多国特色芝士，搭配时令水果' },
    { name: '烤面包', price: 18, description: '现烤欧包，配以香草黄油' }
  ]
};

export default function Menu() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/menu-hero.jpg"
            alt="Menu Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-gray-900" />
          {/* Animated grain overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('/images/noise.jpg')] animate-grain" />
        </div>
        
        <AnimatedSection className="relative z-10 text-center text-white px-4">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-500/20">
            <span className="text-amber-400 font-medium tracking-wide">菜单</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300">
            精酿啤酒与美食
          </h1>
        </AnimatedSection>
      </section>

      {/* Menu Sections */}
      <div className="container mx-auto px-4">
        {/* Beer Categories */}
        {beerCategories.map(category => (
          <div key={category.title} className="space-y-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              <p className="mt-4 text-lg text-gray-600">{category.description}</p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.beers.map(beer => (
                <BeerCard
                  key={beer.id}
                  id={beer.id}
                  name={beer.name}
                  description={beer.description}
                  abv={beer.abv}
                  price={beer.price}
                  imageUrl={beer.imageUrl}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Snacks Section */}
        <section className="py-20">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-500/20 mb-6">
              <span className="text-amber-400 font-medium tracking-wide">小食推荐</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
              精选小食
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              精心搭配的美食，为您的啤酒体验锦上添花
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-amber-500/20 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-amber-400 transition-colors">炸物</h3>
              <div className="space-y-6">
                {snacks.fried.map((item) => (
                  <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-amber-500/10 rounded-full text-amber-400 font-medium">
                        ¥{item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-amber-500/20 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-amber-400 transition-colors">小食</h3>
              <div className="space-y-6">
                {snacks.snacks.map((item) => (
                  <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-amber-500/10 rounded-full text-amber-400 font-medium">
                        ¥{item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </main>
  );
} 