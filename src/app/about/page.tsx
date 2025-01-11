'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Us Hero"
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
            <span className="text-amber-400 font-medium tracking-wide">关于我们</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300">
            探索精酿啤酒的世界
          </h1>
        </AnimatedSection>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-500/20 mb-6">
                <span className="text-amber-400 font-medium tracking-wide">我们的故事</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
                传承与创新的融合
              </h2>
              <div className="space-y-6 text-lg">
                <p className="text-gray-300">
                  创啤社成立于2020年，源于一群对精酿啤酒充满热情的爱好者。我们相信，每一款精酿啤酒都是一个独特的故事，
                  承载着酿酒师的匠心与创意。
                </p>
                <p className="text-gray-400">
                  在这里，我们不仅提供优质的精酿啤酒，更致力于传播精酿文化，让更多人了解和热爱这门古老而现代的酿造艺术。
                </p>
              </div>
            </AnimatedSection>
            <div className="relative order-1 lg:order-2">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-white/10">
                <Image
                  src="/images/about-story.jpg"
                  alt="Our Story"
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

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-500/20 mb-6">
              <span className="text-amber-400 font-medium tracking-wide">我们的理念</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
              坚持品质 追求卓越
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              我们始终坚持以最高标准要求自己，只为给您带来最纯正的精酿体验
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-amber-500/20 transition-all duration-500">
              <div className="text-amber-400 text-4xl mb-6">🌟</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">品质至上</h3>
              <p className="text-gray-400 leading-relaxed">
                精选全球优质原料，严格把控每一个酿造环节，只为呈现最佳口感。
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-amber-500/20 transition-all duration-500">
              <div className="text-amber-400 text-4xl mb-6">🎨</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">创新精神</h3>
              <p className="text-gray-400 leading-relaxed">
                不断探索新的酿造方法和风味组合，为顾客带来独特的味觉体验。
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-amber-500/20 transition-all duration-500">
              <div className="text-amber-400 text-4xl mb-6">🤝</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">文化传承</h3>
              <p className="text-gray-400 leading-relaxed">
                致力于推广精酿文化，举办品鉴活动，分享精酿啤酒的魅力。
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-500/20 mb-6">
              <span className="text-amber-400 font-medium tracking-wide">我们的团队</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
              匠心团队
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              每一位团队成员都怀着对精酿啤酒的热爱，为您提供最专业的服务
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="group">
              <div className="relative">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/team-1.jpg"
                    alt="Head Brewer"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute inset-x-4 bottom-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">张大师</h3>
                  <p className="text-gray-400">首席酿酒师</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="group">
              <div className="relative">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/team-2.jpg"
                    alt="Bar Manager"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute inset-x-4 bottom-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">李经理</h3>
                  <p className="text-gray-400">酒吧经理</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="group">
              <div className="relative">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/team-3.jpg"
                    alt="Chef"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute inset-x-4 bottom-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">王厨师</h3>
                  <p className="text-gray-400">主厨</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
} 