import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { beersData } from '@/data/beers';

type BeerKeys = keyof typeof beersData;

interface PageProps {
  params: Promise<{ id: string }>;
}

// 生成动态元数据
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const beer = beersData[resolvedParams.id as BeerKeys];
  if (!beer) {
    return {
      title: '啤酒未找到 | 创啤社',
      description: '抱歉，您查找的啤酒不存在。'
    };
  }
  return {
    title: `${beer.name} | 创啤社`,
    description: beer.description
  };
}

export default async function BeerDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const beer = beersData[resolvedParams.id as BeerKeys];

  if (!beer) {
    return (
      <div className="min-h-screen bg-gray-900/95 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <svg className="mx-auto h-24 w-24 text-amber-500/80 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 21a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <h1 className="text-4xl font-bold text-white mb-4">啤酒未找到</h1>
            <p className="text-xl text-gray-300 mb-8">抱歉，您查找的啤酒不存在。</p>
            <Link
              href="/menu"
              className="inline-flex items-center px-8 py-4 border border-amber-500/20 text-lg font-medium rounded-full text-amber-500 bg-amber-500/10 hover:bg-amber-500/20 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回菜单
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900/95 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Link
          href="/menu"
          className="inline-flex items-center px-6 py-3 border border-amber-500/20 text-base font-medium rounded-full text-amber-500 bg-amber-500/10 hover:bg-amber-500/20 mb-12 transition-all transform hover:scale-105 group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回菜单
        </Link>

        {/* 主要内容区域 */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-amber-500/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* 图片部分 - 占据左侧4列 */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent z-10" />
                <Image
                  src={beer.imageUrl}
                  alt={beer.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* 详情部分 - 占据右侧8列 */}
            <div className="lg:col-span-7 p-8 lg:p-12 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">{beer.name}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-6 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full text-sm font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    ABV {beer.abv}%
                  </span>
                  <span className="text-3xl font-bold text-amber-500 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ¥{beer.price}
                  </span>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{beer.description}</p>
                <p className="text-gray-400 leading-relaxed">{beer.longDescription}</p>
              </div>

              {/* 规格参数 */}
              <div className="border-t border-amber-500/10 pt-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  规格参数
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <h3 className="font-medium text-amber-500 flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      苦度 (IBU)
                    </h3>
                    <p className="text-gray-300">{beer.specs.ibu}</p>
                  </div>
                  <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <h3 className="font-medium text-amber-500 flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      最佳饮用温度
                    </h3>
                    <p className="text-gray-300">{beer.specs.temperature}</p>
                  </div>
                  <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <h3 className="font-medium text-amber-500 flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                      产地
                    </h3>
                    <p className="text-gray-300">{beer.specs.origin}</p>
                  </div>
                  <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <h3 className="font-medium text-amber-500 flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      原料
                    </h3>
                    <p className="text-gray-300">{beer.specs.ingredients}</p>
                  </div>
                </div>
              </div>

              {/* 推荐搭配 */}
              <div className="border-t border-amber-500/10 pt-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                  推荐搭配
                </h2>
                <div className="grid gap-4">
                  {beer.foodPairings.map((pairing, index) => (
                    <div key={index} className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-6 transform hover:scale-[1.02] transition-transform">
                      <h3 className="font-medium text-amber-500 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        {pairing.name}
                      </h3>
                      <p className="text-gray-300 pl-7">{pairing.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 