import { beersData } from '@/data/beers';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// 生成动态元数据
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const beer = beersData[params.id];
  if (!beer) {
    return {
      title: '啤酒未找到 | 创啤社',
    };
  }
  return {
    title: `${beer.name} | 创啤社`,
    description: beer.description,
  };
}

export default function BeerDetail({ params }: { params: { id: string } }) {
  const beer = beersData[params.id];

  if (!beer) {
    return (
      <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">啤酒未找到</h1>
          <p className="mb-8">抱歉，我们找不到您要查看的啤酒。</p>
          <Link 
            href="/menu"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 transition-colors text-gray-900 font-medium"
          >
            返回菜单
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        {/* 返回按钮 */}
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          返回菜单
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 左侧图片区域 */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800">
            <Image
              src={beer.imageUrl}
              alt={beer.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* 右侧详情区域 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-4xl font-bold">{beer.name}</h1>
                <div className="px-4 py-2 rounded-full bg-amber-500 text-gray-900 font-bold">
                  ¥{beer.price}
                </div>
              </div>
              <div className="prose prose-invert max-w-none">
                {beer.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* 规格参数 */}
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700">
              <h2 className="text-xl font-bold mb-4">规格参数</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-gray-400 mb-1">酒精度</div>
                  <div className="text-2xl font-bold text-amber-400">{beer.abv}% ABV</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">苦度</div>
                  <div className="text-2xl font-bold text-amber-400">{beer.specs.ibu} IBU</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">适饮温度</div>
                  <div className="text-2xl font-bold text-amber-400">{beer.specs.temperature}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">工艺来源</div>
                  <div className="text-2xl font-bold text-amber-400">{beer.specs.origin}</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-gray-400 mb-1">原料</div>
                <div className="text-lg text-amber-400">{beer.specs.ingredients}</div>
              </div>
            </div>

            {/* 推荐搭配 */}
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700">
              <h2 className="text-xl font-bold mb-4">推荐搭配</h2>
              <div className="grid gap-4">
                {beer.foodPairings.map((pairing, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-amber-400">{pairing.name}</h3>
                      <p className="text-gray-300">{pairing.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 