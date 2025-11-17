// 物品数据库类型定义
export interface Item {
  id: string;
  name: string;
  category: ItemCategory;
  status: ItemStatus;
  priority: 'high' | 'medium' | 'low';
  notes?: string;
  link?: string;
  tags?: string[];
}

export type ItemCategory = 
  | 'personal-care'      // 个人护理
  | 'skincare'           // 护肤
  | 'makeup'             // 彩妆
  | 'hygiene'            // 卫生用品
  | 'household'          // 家居用品
  | 'tech-accessories'   // 科技配件
  | 'supplements'        // 营养补充
  | 'clothing'           // 服装
  | 'other';             // 其他

export type ItemStatus = 
  | 'in-stock'           // 有库存
  | 'low-stock'          // 库存不足
  | 'out-of-stock'       // 缺货
  | 'need-to-buy'        // 需要购买
  | 'researching';       // 研究中

// 物品数据库
export const itemsDatabase: Item[] = [
  // 个人护理
  {
    id: 'mouthwash',
    name: '漱口水',
    category: 'personal-care',
    status: 'need-to-buy',
    priority: 'medium',
    tags: ['口腔护理', '日常用品'],
  },
  {
    id: 'hand-soap',
    name: '洗手液',
    category: 'personal-care',
    status: 'in-stock',
    priority: 'high',
    tags: ['卫生', '日常用品'],
  },
  {
    id: 'toothpaste',
    name: '牙膏',
    category: 'personal-care',
    status: 'in-stock',
    priority: 'high',
    tags: ['口腔护理', '日常用品'],
    link: 'https://www.notion.so/26a2923c624280d4ae9afcfac0c52172',
  },
  {
    id: 'toothbrush-head',
    name: '牙刷头',
    category: 'personal-care',
    status: 'need-to-buy',
    priority: 'high',
    tags: ['口腔护理', '日常用品'],
    link: 'https://www.notion.so/2ad2923c62428054978cd3c7b521cd69',
  },
  {
    id: 'facial-cleanser',
    name: '洗面奶',
    category: 'skincare',
    status: 'low-stock',
    priority: 'high',
    tags: ['护肤', '清洁'],
  },
  {
    id: 'shampoo',
    name: '洗发水',
    category: 'personal-care',
    status: 'in-stock',
    priority: 'high',
    tags: ['头发护理', '日常用品'],
  },
  {
    id: 'body-wash',
    name: '沐浴露',
    category: 'personal-care',
    status: 'in-stock',
    priority: 'medium',
    tags: ['身体护理', '日常用品'],
  },
  {
    id: 'scrub',
    name: '磨砂膏',
    category: 'skincare',
    status: 'need-to-buy',
    priority: 'low',
    tags: ['护肤', '去角质'],
  },
  {
    id: 'facial-towel',
    name: '洗脸巾',
    category: 'hygiene',
    status: 'in-stock',
    priority: 'high',
    tags: ['卫生', '日常用品'],
    link: 'https://www.notion.so/2412923c6242806fac52e311ff62e1c1',
  },
  {
    id: 'bath-towel',
    name: '浴巾',
    category: 'household',
    status: 'in-stock',
    priority: 'medium',
    tags: ['家居', '日常用品'],
  },
  {
    id: 'disposable-bath-towel',
    name: '一次性浴巾',
    category: 'hygiene',
    status: 'need-to-buy',
    priority: 'low',
    tags: ['旅行', '卫生'],
    link: 'https://www.notion.so/26a2923c624280b4964ceeab920c5480',
  },
  {
    id: 'disposable-underwear',
    name: '一次性内裤',
    category: 'hygiene',
    status: 'need-to-buy',
    priority: 'low',
    tags: ['旅行', '卫生'],
    link: 'https://www.notion.so/26a2923c62428014a464c7eb42137f19',
  },
  {
    id: 'wet-wipes',
    name: '湿厕纸',
    category: 'hygiene',
    status: 'in-stock',
    priority: 'medium',
    tags: ['卫生', '日常用品'],
    link: 'https://www.notion.so/29b2923c624280dbb6d2fd40fdb1886b',
  },
  {
    id: 'alcohol-wipes',
    name: '酒精湿巾',
    category: 'hygiene',
    status: 'in-stock',
    priority: 'high',
    tags: ['卫生', '消毒'],
  },
  {
    id: 'tissue',
    name: '纸巾',
    category: 'hygiene',
    status: 'in-stock',
    priority: 'high',
    tags: ['卫生', '日常用品'],
    link: 'https://www.notion.so/28c2923c624280cd865bdea963cd7f73',
  },
  {
    id: 'office-tissue',
    name: '办公室纸巾',
    category: 'hygiene',
    status: 'in-stock',
    priority: 'medium',
    tags: ['办公', '卫生'],
  },
  {
    id: 'sanitary-pad',
    name: '卫生巾日用',
    category: 'hygiene',
    status: 'in-stock',
    priority: 'high',
    tags: ['女性护理', '卫生'],
  },
  {
    id: 'period-pants',
    name: '安心裤',
    category: 'hygiene',
    status: 'in-stock',
    priority: 'medium',
    tags: ['女性护理', '卫生'],
    link: 'https://www.notion.so/2412923c6242800da9e1f80e9cf35e00',
  },
  {
    id: 'laundry-disinfectant',
    name: '衣物除菌液',
    category: 'household',
    status: 'in-stock',
    priority: 'medium',
    tags: ['清洁', '家居'],
  },
  {
    id: 'shower-filter',
    name: '淋浴过滤器',
    category: 'household',
    status: 'need-to-buy',
    priority: 'low',
    tags: ['家居', '水质'],
  },
  {
    id: 'summer-quilt',
    name: '夏凉被',
    category: 'household',
    status: 'in-stock',
    priority: 'low',
    tags: ['家居', '床上用品'],
    link: 'https://www.notion.so/2112923c624280c3ad9af92aedd09c7c',
  },
  
  // 护肤
  {
    id: 'makeup-remover',
    name: '卸妆膏',
    category: 'skincare',
    status: 'low-stock',
    priority: 'high',
    tags: ['护肤', '清洁'],
  },
  {
    id: 'sheet-mask',
    name: '楔子号补水面膜',
    category: 'skincare',
    status: 'in-stock',
    priority: 'medium',
    tags: ['护肤', '面膜'],
    link: 'https://www.notion.so/2462923c624280b6ba3cd1151ec5e193',
  },
  {
    id: 'mask',
    name: '涂抹面膜',
    category: 'skincare',
    status: 'in-stock',
    priority: 'low',
    tags: ['护肤', '面膜'],
    link: 'https://www.notion.so/2462923c6242805d9904edf26b1f6cbd',
  },
  {
    id: 'nail-buffer',
    name: '美甲打磨头',
    category: 'personal-care',
    status: 'in-stock',
    priority: 'low',
    tags: ['美甲', '工具'],
  },
  
  // 彩妆
  {
    id: 'contact-lenses',
    name: '美瞳日抛',
    category: 'makeup',
    status: 'low-stock',
    priority: 'high',
    tags: ['彩妆', '隐形眼镜'],
  },
  {
    id: 'setting-spray',
    name: '定妆喷雾',
    category: 'makeup',
    status: 'in-stock',
    priority: 'medium',
    tags: ['彩妆', '定妆'],
    link: 'https://www.notion.so/2462923c624280669a36d57fefcd1293',
  },
  {
    id: 'setting-spray-travel',
    name: '定妆喷雾旅行版',
    category: 'makeup',
    status: 'need-to-buy',
    priority: 'low',
    tags: ['彩妆', '定妆', '旅行'],
    link: 'https://www.notion.so/2a32923c62428095b4b5fd7505b11e6f',
  },
  
  // 科技配件
  {
    id: 'phone-screen-protector',
    name: '手机膜',
    category: 'tech-accessories',
    status: 'need-to-buy',
    priority: 'high',
    tags: ['手机', '保护'],
  },
  {
    id: 'ipencil-tip',
    name: 'Ipencil 笔头',
    category: 'tech-accessories',
    status: 'need-to-buy',
    priority: 'medium',
    tags: ['iPad', '配件'],
    link: 'https://www.notion.so/Ipencil-28c2923c624280e1bcc1e5288f709678',
  },
  
  // 营养补充
  {
    id: 'vitamin-c',
    name: '维生素C',
    category: 'supplements',
    status: 'low-stock',
    priority: 'high',
    tags: ['营养', '健康'],
  },
  
  // 服装
  {
    id: 'leggings',
    name: '运动leggings',
    category: 'clothing',
    status: 'in-stock',
    priority: 'medium',
    tags: ['运动', '服装'],
    link: 'https://www.notion.so/leggings-28c2923c624280cabe63cf812169b6f0',
  },
  
  // 营养补充 - 新增
  {
    id: 'dhc-fish-oil',
    name: 'DHC鱼油',
    category: 'supplements',
    status: 'need-to-buy',
    priority: 'medium',
    tags: ['营养', '健康', 'Omega-3'],
    link: 'https://www.notion.so/DHC-29b2923c6242806a80cfe966ae157df3',
  },
  {
    id: 'vitamin-b',
    name: '维生素B',
    category: 'supplements',
    status: 'need-to-buy',
    priority: 'medium',
    tags: ['营养', '健康'],
    link: 'https://www.notion.so/B-29b2923c62428065af9dd7a6d9819101',
  },
  
  // 家居用品 - 新增
  {
    id: 'bedding-set-autumn-winter',
    name: '四件套-秋冬',
    category: 'household',
    status: 'need-to-buy',
    priority: 'medium',
    tags: ['家居', '床上用品', '秋冬'],
    link: 'https://www.notion.so/29b2923c624280fbb59eec11f66b879f',
  },
  {
    id: 'bedding-set-spring-summer',
    name: '四件套-春夏',
    category: 'household',
    status: 'need-to-buy',
    priority: 'medium',
    tags: ['家居', '床上用品', '春夏'],
    link: 'https://www.notion.so/29b2923c624280a09c24e41d4b835c40',
  },
  {
    id: 'pillow',
    name: '枕头',
    category: 'household',
    status: 'need-to-buy',
    priority: 'high',
    tags: ['家居', '床上用品', '睡眠'],
    link: 'https://www.notion.so/29b2923c6242805289a5f11cfb0f27ca',
  },
  {
    id: 'sleep-system',
    name: '睡眠系统',
    category: 'household',
    status: 'researching',
    priority: 'high',
    tags: ['家居', '床上用品', '系统'],
    link: 'https://www.notion.so/2ad2923c624280bdbcb9ca0f2d5cd275',
    notes: '系统性睡眠用品集合',
  },
  
  // 个人护理 - 新增
  {
    id: 'alcohol-cotton',
    name: '酒精棉片',
    category: 'hygiene',
    status: 'in-stock',
    priority: 'high',
    tags: ['卫生', '消毒', '清洁'],
    link: 'https://www.notion.so/2ad2923c62428053b2e9dc41dc4183a4',
  },
  
  // 服装 - 新增
  {
    id: 'pajamas-winter',
    name: '睡衣冬',
    category: 'clothing',
    status: 'need-to-buy',
    priority: 'medium',
    tags: ['服装', '睡衣', '秋冬'],
    link: 'https://www.notion.so/2ad2923c62428010b10ded3c94bee7f1',
  },
  {
    id: 'pajamas-summer',
    name: '睡衣夏',
    category: 'clothing',
    status: 'need-to-buy',
    priority: 'medium',
    tags: ['服装', '睡衣', '春夏'],
    link: 'https://www.notion.so/2ad2923c6242803dbcc7cca5fffeb123',
  },
  
  // 彩妆 - 新增
  {
    id: 'powder',
    name: '粉饼',
    category: 'makeup',
    status: 'need-to-buy',
    priority: 'medium',
    tags: ['彩妆', '底妆'],
    link: 'https://www.notion.so/2ad2923c624280849321d507ddbb2b87',
  },
  
  // 家居用品 - 新增
  {
    id: 'fabric-freshener',
    name: '衣物香片',
    category: 'household',
    status: 'need-to-buy',
    priority: 'low',
    tags: ['家居', '香氛', '衣物护理'],
    link: 'https://www.notion.so/2a32923c624280949d97e0741d373e0b',
  },
  
  // 其他 - 新增
  {
    id: 'trekking-pole',
    name: '登山杖',
    category: 'other',
    status: 'need-to-buy',
    priority: 'low',
    tags: ['运动', '户外', '装备'],
    link: 'https://www.notion.so/2ad2923c624280768370dcb616291b59',
  },
  {
    id: 'supplement-system',
    name: '补给系统',
    category: 'supplements',
    status: 'researching',
    priority: 'high',
    tags: ['营养', '健康', '系统'],
    link: 'https://www.notion.so/29b2923c6242803d92cbc11cc64580c7',
    notes: '系统性营养补充品集合',
  },
];

// 分类标签映射
export const categoryLabels: Record<ItemCategory, string> = {
  'personal-care': '个人护理',
  'skincare': '护肤',
  'makeup': '彩妆',
  'hygiene': '卫生用品',
  'household': '家居用品',
  'tech-accessories': '科技配件',
  'supplements': '营养补充',
  'clothing': '服装',
  'other': '其他',
};

// 状态标签映射
export const statusLabels: Record<ItemStatus, string> = {
  'in-stock': '有库存',
  'low-stock': '库存不足',
  'out-of-stock': '缺货',
  'need-to-buy': '需要购买',
  'researching': '研究中',
};

// 优先级颜色映射
export const priorityColors: Record<'high' | 'medium' | 'low', string> = {
  'high': 'var(--neon-blue)',
  'medium': 'var(--accent-gold)',
  'low': 'var(--text-secondary)',
};

