import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { beersData } from '@/data/beers';

type BeerKeys = keyof typeof beersData;

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// 生成动态元数据
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
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

export default async function BeerDetail({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const beer = beersData[resolvedParams.id as BeerKeys];

  if (!beer) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">啤酒未找到</h1>
            <p className="text-lg text-gray-600 mb-8">抱歉，您查找的啤酒不存在。</p>
            <Link
              href="/menu"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors"
            >
              返回菜单
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Link
          href="/menu"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-amber-600 bg-amber-100 hover:bg-amber-200 mb-8 transition-colors"
        >
          ← 返回菜单
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 图片部分 */}
          <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src={beer.imageUrl}
              alt={beer.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* 详情部分 */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{beer.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  ABV {beer.abv}%
                </span>
                <span className="text-2xl font-bold text-amber-600">¥{beer.price}</span>
              </div>
              <p className="text-gray-600 text-lg mb-6">{beer.description}</p>
              <p className="text-gray-700">{beer.longDescription}</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">规格参数</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900">苦度 (IBU)</h3>
                  <p className="text-gray-600">{beer.specs.ibu}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">最佳饮用温度</h3>
                  <p className="text-gray-600">{beer.specs.temperature}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">产地</h3>
                  <p className="text-gray-600">{beer.specs.origin}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">原料</h3>
                  <p className="text-gray-600">{beer.specs.ingredients}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">推荐搭配</h2>
              <div className="grid gap-6">
                {beer.foodPairings.map((pairing, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-2">{pairing.name}</h3>
                    <p className="text-gray-600">{pairing.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 