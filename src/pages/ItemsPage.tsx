import { useState, useMemo, useRef } from 'react';
import { Card } from '../components/ui/card';
import { GlowLine } from '../components/GlowLine';
import { FilterPill } from '../components/FilterPill';
import { 
  itemsDatabase, 
  categoryLabels, 
  statusLabels, 
  priorityColors,
  type Item,
  type ItemCategory,
  type ItemStatus 
} from '../data/items';
import { 
  Search, 
  Package, 
  ShoppingCart, 
  AlertCircle,
  CheckCircle2,
  Clock,
  Filter,
  Tag
} from 'lucide-react';

export function ItemsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ItemCategory | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<ItemStatus | 'all'>('all');
  const [selectedPriority, setSelectedPriority] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const itemsListRef = useRef<HTMLDivElement>(null);

  // 获取所有分类
  const categories = useMemo(() => {
    const cats = Array.from(new Set(itemsDatabase.map(item => item.category)));
    return ['all', ...cats] as (ItemCategory | 'all')[];
  }, []);

  // 获取所有状态
  const statuses = useMemo(() => {
    const sts = Array.from(new Set(itemsDatabase.map(item => item.status)));
    return ['all', ...sts] as (ItemStatus | 'all')[];
  }, []);

  // 筛选物品
  const filteredItems = useMemo(() => {
    return itemsDatabase.filter(item => {
      // 搜索筛选
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // 分类筛选
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      // 状态筛选
      const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
      
      // 优先级筛选
      const matchesPriority = selectedPriority === 'all' || item.priority === selectedPriority;
      
      return matchesSearch && matchesCategory && matchesStatus && matchesPriority;
    });
  }, [searchQuery, selectedCategory, selectedStatus, selectedPriority]);

  // 统计信息
  const stats = useMemo(() => {
    const total = itemsDatabase.length;
    const needToBuy = itemsDatabase.filter(item => item.status === 'need-to-buy').length;
    const lowStock = itemsDatabase.filter(item => item.status === 'low-stock').length;
    const inStock = itemsDatabase.filter(item => item.status === 'in-stock').length;
    
    return { total, needToBuy, lowStock, inStock };
  }, []);

  // 获取状态图标
  const getStatusIcon = (status: ItemStatus) => {
    switch (status) {
      case 'in-stock':
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'low-stock':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'out-of-stock':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'need-to-buy':
        return <ShoppingCart className="w-4 h-4 text-[var(--neon-blue)]" />;
      case 'researching':
        return <Clock className="w-4 h-4 text-[var(--accent-gold)]" />;
    }
  };

  // 处理统计卡片点击
  const handleStatCardClick = (status: ItemStatus | 'all') => {
    // 如果点击的是当前已选中的状态，则重置为全部
    if (selectedStatus === status) {
      setSelectedStatus('all');
    } else {
      setSelectedStatus(status);
      // 清空其他筛选条件，只保留状态筛选
      setSelectedCategory('all');
      setSelectedPriority('all');
      setSearchQuery('');
    }
    
    // 滚动到物品列表
    setTimeout(() => {
      itemsListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="text-center mb-12">
          <h1 className="text-[var(--text-primary)] mb-6">
            物品管理
            <br />
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
              数据库
            </span>
          </h1>
          <GlowLine width="120px" className="mx-auto mb-8" />
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            管理日常用品库存，追踪购买需求，优化生活系统资源分配
          </p>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <Card 
            className={`bg-[var(--card-dark)] border-[var(--border-light)] p-6 transition-all cursor-pointer ${
              selectedStatus === 'all' 
                ? 'border-[var(--neon-blue)] shadow-[0_0_24px_rgba(0,199,255,0.2)]' 
                : 'hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.1)]'
            }`}
            onClick={() => handleStatCardClick('all')}
          >
            <Package className="w-8 h-8 text-[var(--neon-blue)] mb-4" />
            <div className="text-4xl mb-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
              {stats.total}
            </div>
            <div className="text-sm text-[var(--text-secondary)]">总物品数</div>
          </Card>
          <Card 
            className={`bg-[var(--card-dark)] border-[var(--border-light)] p-6 transition-all cursor-pointer ${
              selectedStatus === 'need-to-buy' 
                ? 'border-[var(--neon-blue)] shadow-[0_0_24px_rgba(0,199,255,0.2)]' 
                : 'hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.1)]'
            }`}
            onClick={() => handleStatCardClick('need-to-buy')}
          >
            <ShoppingCart className="w-8 h-8 text-[var(--neon-blue)] mb-4" />
            <div className="text-4xl mb-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
              {stats.needToBuy}
            </div>
            <div className="text-sm text-[var(--text-secondary)]">需要购买</div>
          </Card>
          <Card 
            className={`bg-[var(--card-dark)] border-[var(--border-light)] p-6 transition-all cursor-pointer ${
              selectedStatus === 'low-stock' 
                ? 'border-yellow-500 shadow-[0_0_24px_rgba(234,179,8,0.2)]' 
                : 'hover:border-yellow-500 hover:shadow-[0_0_24px_rgba(234,179,8,0.1)]'
            }`}
            onClick={() => handleStatCardClick('low-stock')}
          >
            <AlertCircle className="w-8 h-8 text-yellow-500 mb-4" />
            <div className="text-4xl mb-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
              {stats.lowStock}
            </div>
            <div className="text-sm text-[var(--text-secondary)]">库存不足</div>
          </Card>
          <Card 
            className={`bg-[var(--card-dark)] border-[var(--border-light)] p-6 transition-all cursor-pointer ${
              selectedStatus === 'in-stock' 
                ? 'border-green-500 shadow-[0_0_24px_rgba(34,197,94,0.2)]' 
                : 'hover:border-green-500 hover:shadow-[0_0_24px_rgba(34,197,94,0.1)]'
            }`}
            onClick={() => handleStatCardClick('in-stock')}
          >
            <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
            <div className="text-4xl mb-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
              {stats.inStock}
            </div>
            <div className="text-sm text-[var(--text-secondary)]">有库存</div>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="space-y-6 mb-12">
          {/* 搜索框 */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="搜索物品名称或标签..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-[var(--card-dark)] border border-[var(--border-light)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-blue)] focus:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
            />
          </div>

          {/* 筛选器 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[var(--text-secondary)]" />
              <span className="text-sm text-[var(--text-secondary)]">筛选：</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <span className="text-sm text-[var(--text-secondary)] mr-2">分类：</span>
                <div className="inline-flex gap-2">
                  {categories.map((category) => (
                    <FilterPill
                      key={category}
                      label={category === 'all' ? '全部' : categoryLabels[category]}
                      active={selectedCategory === category}
                      onClick={() => setSelectedCategory(category)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <span className="text-sm text-[var(--text-secondary)] mr-2">状态：</span>
                <div className="inline-flex gap-2">
                  {statuses.map((status) => (
                    <FilterPill
                      key={status}
                      label={status === 'all' ? '全部' : statusLabels[status]}
                      active={selectedStatus === status}
                      onClick={() => setSelectedStatus(status)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <span className="text-sm text-[var(--text-secondary)] mr-2">优先级：</span>
                <div className="inline-flex gap-2">
                  {(['all', 'high', 'medium', 'low'] as const).map((priority) => (
                    <FilterPill
                      key={priority}
                      label={priority === 'all' ? '全部' : priority === 'high' ? '高' : priority === 'medium' ? '中' : '低'}
                      active={selectedPriority === priority}
                      onClick={() => setSelectedPriority(priority)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 物品列表 */}
        <div ref={itemsListRef} className="grid grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="bg-[var(--card-dark)] border-[var(--border-light)] p-6 hover:border-[var(--neon-blue)] transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-[var(--text-primary)] mb-2 group-hover:text-[var(--neon-blue)] transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                      {categoryLabels[item.category]}
                    </span>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(item.status)}
                      <span className="text-xs text-[var(--text-secondary)]">
                        {statusLabels[item.status]}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: priorityColors[item.priority] }}
                  title={`优先级: ${item.priority === 'high' ? '高' : item.priority === 'medium' ? '中' : '低'}`}
                />
              </div>

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-secondary)] flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {item.notes && (
                <p className="text-sm text-[var(--text-secondary)] mb-4">{item.notes}</p>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--neon-blue)] hover:underline flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  查看详情 →
                </a>
              )}
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Package className="w-16 h-16 text-[var(--text-secondary)] mx-auto mb-4 opacity-50" />
            <p className="text-[var(--text-secondary)] text-xl">
              没有找到匹配的物品
            </p>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              尝试调整筛选条件或搜索关键词
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

