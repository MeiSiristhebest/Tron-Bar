export const beersData = {
  'golden-ale': {
    id: 'golden-ale',
    name: '金色艾尔',
    description: '清新爽口的比利时风格金色艾尔啤酒，带有淡淡的果香和麦芽香气。',
    longDescription: `这款精心酿造的金色艾尔啤酒采用优质的比利时麦芽和酵母，经过传统工艺精心酿造。

口感层次丰富，入口时能感受到清新的果香，随后是温和的麦芽甜味，最后以清爽的啤酒花香结尾。

特点：
- 外观：清澈金黄，细腻持久的白色泡沫
- 香气：热带水果、柑橘和清新的草本香气
- 口感：均衡，带有适中的碳酸度
- 余味：干净利落，略带甜味`,
    abv: 6.5,
    price: 48,
    imageUrl: '/images/golden-ale.jpg',
    specs: {
      ibu: 25,
      temperature: '6-8°C',
      origin: '比利时工艺',
      ingredients: '啤酒花、麦芽、酵母'
    },
    foodPairings: [
      {
        name: '海鲜',
        description: '清蒸鱼、虾仁等清淡海鲜'
      },
      {
        name: '沙拉',
        description: '新鲜蔬菜沙拉，柑橘调味汁'
      },
      {
        name: '芝士',
        description: '温和的山羊奶酪、布里芝士'
      }
    ]
  },
  'rye-stout': {
    id: 'rye-stout',
    name: '黑麦世涛',
    description: '浓郁醇厚的俄罗斯帝国世涛，融合黑麦风味，口感丰富层次分明。',
    longDescription: `这款黑麦世涛融合了传统俄罗斯帝国世涛的浓郁与黑麦的独特风味，是一款层次丰富的精酿啤酒。

经过精心调配的配方和长期发酵，带来令人难忘的饮用体验。浓郁的烘烤麦芽香与黑麦的辛香完美融合，创造出独特的口感层次。

特点：
- 外观：深褐色至黑色，浓密的褐色泡沫
- 香气：烘烤麦芽、咖啡、黑巧克力和黑麦香气
- 口感：丝滑醇厚，层次分明
- 余味：温暖持久，带有烤面包般的香甜`,
    abv: 8.5,
    price: 58,
    imageUrl: '/images/rye-stout.jpg',
    specs: {
      ibu: 45,
      temperature: '10-12°C',
      origin: '俄罗斯工艺',
      ingredients: '黑麦芽、烘烤大麦芽、啤酒花、酵母'
    },
    foodPairings: [
      {
        name: '烤肉',
        description: '烤牛排、烤羊排等红肉'
      },
      {
        name: '甜点',
        description: '巧克力蛋糕、提拉米苏'
      },
      {
        name: '烟熏食品',
        description: '烟熏培根、烟熏三文鱼'
      }
    ]
  },
  'citrus-ipa': {
    id: 'citrus-ipa',
    name: '柑橘IPA',
    description: '充满热带水果香气的印度淡色艾尔，使用大量新世界啤酒花。',
    longDescription: `这款柑橘IPA采用精选的新世界啤酒花，带来令人振奋的热带水果和柑橘风味。

特别选用来自美国和新西兰的啤酒花，在传统IPA的基础上添加新鲜柑橘皮，创造出独特的风味组合。每一口都能感受到清新的柑橘香气和适中的啤酒花苦度。

特点：
- 外观：金黄色，白色绵密泡沫
- 香气：热带水果、柑橘、松木和草本香气
- 口感：清爽顺滑，带有明显的柑橘风味
- 余味：清新持久，平衡的苦度`,
    abv: 7.2,
    price: 52,
    imageUrl: '/images/citrus-ipa.jpg',
    specs: {
      ibu: 65,
      temperature: '8-10°C',
      origin: '美式工艺',
      ingredients: '啤酒花、麦芽、酵母、柑橘皮'
    },
    foodPairings: [
      {
        name: '辛辣食物',
        description: '咖喱、墨西哥玉米卷'
      },
      {
        name: '炸物',
        description: '炸鸡、薯条、天妇罗'
      },
      {
        name: '亚洲菜',
        description: '泰国菜、越南河粉'
      }
    ]
  },
  'christmas-stout': {
    id: 'christmas-stout',
    name: '圣诞世涛',
    description: '节日特酿，添加了肉桂、丁香等香料，温暖醇厚。',
    longDescription: `这款圣诞特酿世涛是我们为节日季节特别打造的温暖美酒。融合了传统帝国世涛的浓郁基底，搭配精心挑选的节日香料。

每一口都能感受到节日的温暖与喜悦。浓郁的麦芽香气中交织着肉桂、丁香、豆蔻等香料的芬芳，让人联想起温暖的壁炉和节日的欢聚。

特点：
- 外观：深邃的黑褐色，细腻持久的褐色泡沫
- 香气：烘烤麦芽、咖啡、巧克力，以及节日香料的层次
- 口感：丝滑醇厚，香料风味与麦芽完美融合
- 余味：温暖持久，带有节日香料的余韵`,
    abv: 9.0,
    price: 68,
    imageUrl: '/images/christmas-stout.jpg',
    specs: {
      ibu: 35,
      temperature: '12-14°C',
      origin: '比利时工艺',
      ingredients: '特级麦芽、啤酒花、酵母、肉桂、丁香、豆蔻'
    },
    foodPairings: [
      {
        name: '甜点',
        description: '圣诞布丁、姜饼、巧克力蛋糕'
      },
      {
        name: '烤肉',
        description: '烤火鸡、烤鸭、烤羊排'
      },
      {
        name: '奶酪',
        description: '成熟的切达奶酪、蓝纹奶酪'
      }
    ]
  },
  'summer-wheat': {
    id: 'summer-wheat',
    name: '夏日小麦',
    description: '清爽的德式小麦啤酒，带有香蕉和丁香的典型风味。',
    longDescription: `这款夏日小麦啤酒采用传统的德国酿造工艺，使用优质的小麦芽和特殊的酵母，带来清爽怡人的饮用体验。

独特的发酵过程赋予了啤酒典型的香蕉和丁香风味，是炎炎夏日的理想选择。清新的小麦香气配合细腻的气泡，每一口都充满活力。

特点：
- 外观：浑浊的金黄色，丰富绵密的白色泡沫
- 香气：香蕉、丁香、小麦麦芽的清新香气
- 口感：清爽顺滑，带有适中的气泡感
- 余味：清新自然，回味怡人`,
    abv: 5.2,
    price: 45,
    imageUrl: '/images/summer-wheat.jpg',
    specs: {
      ibu: 15,
      temperature: '4-6°C',
      origin: '德国工艺',
      ingredients: '小麦芽、大麦芽、啤酒花、德式酵母'
    },
    foodPairings: [
      {
        name: '海鲜',
        description: '烤虾、清蒸贝类、生蚝'
      },
      {
        name: '沙拉',
        description: '水果沙拉、凯撒沙拉'
      },
      {
        name: '小食',
        description: '德式香肠、椒盐脆饼'
      }
    ]
  }
};

export const featuredBeers = Object.values(beersData).map(({ id, name, description, abv, price, imageUrl }) => ({
  id,
  name,
  description,
  abv,
  price,
  imageUrl
})); 