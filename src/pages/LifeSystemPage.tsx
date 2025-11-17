import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { Card } from '../components/ui/card';
import { GlowLine } from '../components/GlowLine';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Home, 
  Clock, 
  DollarSign, 
  Zap, 
  Dumbbell, 
  Music, 
  BookOpen,
  Camera,
  Palette,
  Target,
  TrendingUp,
  CheckCircle2,
  Package,
  ArrowRight,
  ExternalLink,
  Calendar,
  UtensilsCrossed,
  Moon,
  Sun,
  Bike,
  Film,
  Plane,
  RefreshCw,
  Activity,
  Inbox,
  FolderKanban,
  Play,
  GraduationCap,
  RotateCcw,
  Wallet,
  FileText,
  User,
  Briefcase,
  Sparkles,
  CheckSquare,
  FolderOpen,
  Star,
  Book,
  Droplet,
  Brain,
  Layers,
  ArrowRightCircle,
  Link2,
  Workflow,
  Lightbulb,
  Settings,
  PlayCircle
} from 'lucide-react';
import { useState } from 'react';

export function LifeSystemPage() {
  const [activeTab, setActiveTab] = useState('core');
  
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="text-center mb-16">
          <h1 className="text-[var(--text-primary)] mb-6">
            阿卡西记录 V2.0
            <br />
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
              生活系统矩阵
            </span>
          </h1>
          <GlowLine width="120px" className="mx-auto mb-8" />
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            从"驾驶员"向"总设计师"的进阶，构建能容纳所有雄心壮志的系统矩阵，
            整合身体层（习惯）、心智层（爱好）和知识层（学习）
          </p>
        </div>

        {/* Core Resources Overview */}
        <div className="grid grid-cols-4 gap-6 mb-16">
          <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
            <Clock className="w-8 h-8 text-[var(--neon-blue)] mb-4" />
            <h4 className="text-[var(--text-primary)] mb-2">时间 (Time)</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              15*4时间片概念：每小时分为4个15分钟单元，精细规划
            </p>
          </Card>
          <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
            <DollarSign className="w-8 h-8 text-[var(--accent-gold)] mb-4" />
            <h4 className="text-[var(--text-primary)] mb-2">金钱 (Money)</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              分层投入：生存层 → 基石层 → 成长层 → 体验层
            </p>
          </Card>
          <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
            <Zap className="w-8 h-8 text-[var(--neon-blue)] mb-4" />
            <h4 className="text-[var(--text-primary)] mb-2">精力 (Energy)</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              三维度：体能(P) / 脑力(M) / 社交(S) + 产出/消耗评估
            </p>
          </Card>
          <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
            <Target className="w-8 h-8 text-[var(--accent-gold)] mb-4" />
            <h4 className="text-[var(--text-primary)] mb-2">核心关联</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              构建"消耗-补充"闭环，让精力循环往复高效运作
            </p>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-[var(--bg-secondary)] border border-[var(--border-light)] mb-12">
            <TabsTrigger value="core" className="data-[state=active]:bg-[var(--neon-blue)] data-[state=active]:text-black">
              <Layers className="w-4 h-4 mr-2" />
              核心系统
            </TabsTrigger>
            <TabsTrigger value="habits" className="data-[state=active]:bg-[var(--neon-blue)] data-[state=active]:text-black">
              <Dumbbell className="w-4 h-4 mr-2" />
              身体仪器
            </TabsTrigger>
            <TabsTrigger value="hobbies" className="data-[state=active]:bg-[var(--neon-blue)] data-[state=active]:text-black">
              <Palette className="w-4 h-4 mr-2" />
              心智体验
            </TabsTrigger>
            <TabsTrigger value="environment" className="data-[state=active]:bg-[var(--neon-blue)] data-[state=active]:text-black">
              <Home className="w-4 h-4 mr-2" />
              居住环境
            </TabsTrigger>
            <TabsTrigger value="matrix" className="data-[state=active]:bg-[var(--neon-blue)] data-[state=active]:text-black">
              <TrendingUp className="w-4 h-4 mr-2" />
              系统矩阵
            </TabsTrigger>
            <TabsTrigger value="mvp" className="data-[state=active]:bg-[var(--neon-blue)] data-[state=active]:text-black">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              MVP协议
            </TabsTrigger>
          </TabsList>

          {/* Core System Tab */}
          <TabsContent value="core" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-[var(--text-primary)] mb-4">
                <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
                  核心系统架构
                </span>
              </h2>
              <GlowLine width="120px" className="mx-auto" />
              <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto mt-4">
                从"驾驶员"向"总设计师"的进阶，构建能容纳所有雄心壮志的系统矩阵
              </p>
            </div>

            {/* System Layers - Interactive */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <button
                onClick={() => setActiveTab('habits')}
                className="group bg-[var(--bg-primary)]/50 border border-[var(--border-light)] rounded-2xl p-6 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--neon-blue)]/20 flex items-center justify-center group-hover:bg-[var(--neon-blue)]/30 transition-colors">
                      <Target className="w-6 h-6 text-[var(--neon-blue)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">身体层</h3>
                  </div>
                  <ArrowRightCircle className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">习惯与维护</p>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)] mb-4">
                  <li>• 爱服美役 - 好心情系统</li>
                  <li>• 运动习惯 - 正反馈内啡肽激素系统</li>
                  <li>• 饮食习惯 - 精妙仪器燃料系统</li>
                  <li>• 作息Routine - 精妙仪器地基系统</li>
                </ul>
                <div className="flex items-center gap-2 text-xs text-[var(--neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>查看详情</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>

              <button
                onClick={() => setActiveTab('hobbies')}
                className="group bg-[var(--bg-primary)]/50 border border-[var(--border-light)] rounded-2xl p-6 hover:border-[var(--accent-gold)] hover:shadow-[0_0_24px_rgba(191,163,111,0.2)] transition-all text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-gold)]/20 flex items-center justify-center group-hover:bg-[var(--accent-gold)]/30 transition-colors">
                      <Brain className="w-6 h-6 text-[var(--accent-gold)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">心智层</h3>
                  </div>
                  <ArrowRightCircle className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)] transition-colors" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">爱好与创造</p>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)] mb-4">
                  <li>• 听觉系统 - 滋养频率</li>
                  <li>• 视觉系统 - 美学感知</li>
                  <li>• 书写/阅读系统 - 知识构建</li>
                  <li>• 嗅觉系统 - 感官探索</li>
                </ul>
                <div className="flex items-center gap-2 text-xs text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>查看详情</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>

              <div className="bg-[var(--bg-primary)]/50 border border-[var(--border-light)] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--neon-blue)]/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[var(--neon-blue)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">知识层</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">学习与成长</p>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  <li>• 营养学</li>
                  <li>• 神经科学</li>
                  <li>• 历史人文</li>
                  <li>• 系统化学习</li>
                </ul>
              </div>
            </div>

            {/* System Operation Mechanism - Enhanced */}
            <Card className="bg-gradient-to-br from-[var(--card-dark)] via-[var(--bg-secondary)] to-[var(--card-dark)] border-[var(--border-light)] p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--neon-blue)] opacity-5 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-gold)] opacity-5 blur-[100px] rounded-full" />
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2 flex items-center justify-center gap-2">
                    <Workflow className="w-6 h-6 text-[var(--neon-blue)]" />
                    系统运行机制
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">四个核心要素的动态配置与循环</p>
                </div>

                <div className="grid grid-cols-4 gap-6 mb-8">
                  <div className="bg-[var(--bg-primary)]/30 border border-[var(--border-light)] rounded-xl p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-blue)]/5 border border-[var(--neon-blue)]/30 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-[var(--neon-blue)]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">精力</h4>
                    <p className="text-xs text-[var(--text-secondary)] mb-3">可再生资源</p>
                    <div className="bg-[var(--bg-primary)]/50 rounded-lg p-3 text-left">
                      <p className="text-xs text-[var(--text-secondary)] mb-1">三维度评估：</p>
                      <ul className="text-xs text-[var(--text-secondary)] space-y-1">
                        <li>• 体能 (P)</li>
                        <li>• 脑力 (M)</li>
                        <li>• 社交 (S)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[var(--bg-primary)]/30 border border-[var(--border-light)] rounded-xl p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold)]/5 border border-[var(--accent-gold)]/30 flex items-center justify-center">
                      <Clock className="w-8 h-8 text-[var(--accent-gold)]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">时间</h4>
                    <p className="text-xs text-[var(--text-secondary)] mb-3">15*4时间片</p>
                    <div className="bg-[var(--bg-primary)]/50 rounded-lg p-3 text-left">
                      <p className="text-xs text-[var(--text-secondary)] mb-1">分配策略：</p>
                      <ul className="text-xs text-[var(--text-secondary)] space-y-1">
                        <li>• 高精力 20%</li>
                        <li>• 中精力 40%</li>
                        <li>• 低精力 40%</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[var(--bg-primary)]/30 border border-[var(--border-light)] rounded-xl p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold)]/5 border border-[var(--accent-gold)]/30 flex items-center justify-center">
                      <DollarSign className="w-8 h-8 text-[var(--accent-gold)]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">金钱</h4>
                    <p className="text-xs text-[var(--text-secondary)] mb-3">分层投入</p>
                    <div className="bg-[var(--bg-primary)]/50 rounded-lg p-3 text-left">
                      <p className="text-xs text-[var(--text-secondary)] mb-1">投入层级：</p>
                      <ul className="text-xs text-[var(--text-secondary)] space-y-1">
                        <li>• 基石层</li>
                        <li>• 桥梁层</li>
                        <li>• 未来种子层</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[var(--bg-primary)]/30 border border-[var(--border-light)] rounded-xl p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--accent-gold)]/20 border border-[var(--neon-blue)]/30 flex items-center justify-center">
                      <Target className="w-8 h-8 text-[var(--neon-blue)]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">体验</h4>
                    <p className="text-xs text-[var(--text-secondary)] mb-3">终极目标</p>
                    <div className="bg-[var(--bg-primary)]/50 rounded-lg p-3 text-left">
                      <p className="text-xs text-[var(--text-secondary)] mb-1">实现路径：</p>
                      <ul className="text-xs text-[var(--text-secondary)] space-y-1">
                        <li>• 购买体验</li>
                        <li>• 创造体验</li>
                        <li>• 体验宇宙</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* System Flow */}
                <div className="bg-[var(--bg-primary)]/20 border border-[var(--border-light)] rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-[var(--neon-blue)]" />
                    系统循环流程
                  </h4>
                  <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[var(--neon-blue)]" />
                      <span>精力投入</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[var(--accent-gold)]" />
                      <span>时间分配</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[var(--accent-gold)]" />
                      <span>金钱投入</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-[var(--neon-blue)]" />
                      <span>体验产出</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[var(--neon-blue)]" />
                      <span>精力补充</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Core Formula with Explanation */}
            <Card className="bg-gradient-to-br from-[var(--card-dark)] to-[var(--bg-secondary)] border-[var(--border-light)] p-8 mb-8">
              <h3 className="text-[var(--text-primary)] mb-6 text-center flex items-center justify-center gap-2">
                <Lightbulb className="w-6 h-6 text-[var(--accent-gold)]" />
                核心公式
              </h3>
              <div className="text-center mb-6">
                <p className="text-3xl font-mono text-[var(--neon-blue)] mb-4">
                  精力 × (时间/爱好) × 金钱 = 体验
                </p>
                <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                  最终，用可再生的精力，自由支配的时间，通过爱好产生的金钱，
                  去购买和创造想要的极致体验，从而实现"体验宇宙"的终极目的。
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-[var(--bg-primary)]/30 border border-[var(--border-light)] rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">公式解读</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    精力是基础，时间通过爱好分配，金钱作为催化剂，三者相乘产生体验价值
                  </p>
                </div>
                <div className="bg-[var(--bg-primary)]/30 border border-[var(--border-light)] rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">优化方向</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    提升任一要素都能放大结果，但系统化配置能实现最大协同效应
                  </p>
                </div>
                <div className="bg-[var(--bg-primary)]/30 border border-[var(--border-light)] rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">执行原则</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    根据精力状态动态调整时间和金钱分配，让系统持续高效运转
                  </p>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
              <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <PlayCircle className="w-6 h-6 text-[var(--neon-blue)]" />
                快速操作
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <button
                  onClick={() => setActiveTab('matrix')}
                  className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all text-left"
                >
                  <TrendingUp className="w-5 h-5 text-[var(--neon-blue)] mb-2" />
                  <h5 className="text-sm font-semibold text-[var(--text-primary)] mb-1">查看系统矩阵</h5>
                  <p className="text-xs text-[var(--text-secondary)]">资源配置详情</p>
                </button>

                <button
                  onClick={() => setActiveTab('mvp')}
                  className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all text-left"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--neon-blue)] mb-2" />
                  <h5 className="text-sm font-semibold text-[var(--text-primary)] mb-1">查看MVP协议</h5>
                  <p className="text-xs text-[var(--text-secondary)]">执行流程</p>
                </button>

                <Link
                  to="/items"
                  className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all text-left"
                >
                  <Package className="w-5 h-5 text-[var(--neon-blue)] mb-2" />
                  <h5 className="text-sm font-semibold text-[var(--text-primary)] mb-1">物品管理</h5>
                  <p className="text-xs text-[var(--text-secondary)]">资源追踪</p>
                </Link>

                <div className="bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4">
                  <Settings className="w-5 h-5 text-[var(--accent-gold)] mb-2" />
                  <h5 className="text-sm font-semibold text-[var(--text-primary)] mb-1">系统设置</h5>
                  <p className="text-xs text-[var(--text-secondary)]">配置管理</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Habits Tab */}
          <TabsContent value="habits" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-[var(--text-primary)] mb-4">第一层：身体仪器 - 习惯与维护</h2>
              <GlowLine width="120px" className="mx-auto" />
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {/* 爱服美役 */}
              <AccordionItem value="beauty" className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-6">
                <AccordionTrigger className="text-[var(--text-primary)] hover:no-underline">
                  <div className="flex items-center gap-4">
                    <Heart className="w-6 h-6 text-[var(--accent-gold)]" />
                    <span className="text-xl font-semibold">爱服美役 - 好心情系统</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-4 text-[var(--text-secondary)]">
                    <p className="text-lg mb-4">目标/产出：好心情, 精致感 | 时间投入：~10小时/月 | 金钱投入：~¥1100/月</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[var(--bg-secondary)] p-4 rounded-xl">
                        <h4 className="text-[var(--text-primary)] mb-2">美甲</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 手部：每月300元</li>
                          <li>• 脚部自理：每月100元</li>
                          <li>• 用品更新：半年200元</li>
                        </ul>
                      </div>
                      <div className="bg-[var(--bg-secondary)] p-4 rounded-xl">
                        <h4 className="text-[var(--text-primary)] mb-2">护肤</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 面膜（傅尔佳）：每月200元</li>
                          <li>• 液体冻膜（德美乐嘉）：半年200元</li>
                          <li>• 做脸：每月300-500元</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm italic mt-4">核心关联：作为高强度训练后的放松奖励 (Reward System)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* 运动习惯 */}
              <AccordionItem value="exercise" className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-6">
                <AccordionTrigger className="text-[var(--text-primary)] hover:no-underline">
                  <div className="flex items-center gap-4">
                    <Dumbbell className="w-6 h-6 text-[var(--neon-blue)]" />
                    <span className="text-xl font-semibold">运动习惯 - 正反馈内啡肽激素系统</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-6 text-[var(--text-secondary)]">
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-[var(--bg-secondary)] border-[var(--border-light)] p-4">
                        <h4 className="text-[var(--text-primary)] mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[var(--neon-blue)]"></span>
                          力量训练
                        </h4>
                        <p className="text-sm mb-2">核心基石：身材, 力量, 正反馈</p>
                        <p className="text-xs">1.5h/次, 3-4次/周 | 年卡¥3-5k + 教练课</p>
                        <p className="text-xs mt-2 italic">一切运动的基础，提升所有活动表现</p>
                      </Card>
                      <Card className="bg-[var(--bg-secondary)] border-[var(--border-light)] p-4">
                        <h4 className="text-[var(--text-primary)] mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[var(--neon-blue)]"></span>
                          攀岩
                        </h4>
                        <p className="text-sm mb-2">核心心理：专注, 解决问题</p>
                        <p className="text-xs">2-3h/次, 1-2次/周 | 次卡~¥110 + 装备</p>
                        <p className="text-xs mt-2 italic">减脂目标直接服务于此；心流练习场</p>
                      </Card>
                      <Card className="bg-[var(--bg-secondary)] border-[var(--border-light)] p-4">
                        <h4 className="text-[var(--text-primary)] mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]"></span>
                          游泳
                        </h4>
                        <p className="text-sm mb-2">恢复, 心肺, 体态</p>
                        <p className="text-xs">1h/次 | 次卡~¥80</p>
                        <p className="text-xs mt-2 italic">绝佳的交叉训练和主动恢复手段</p>
                      </Card>
                      <Card className="bg-[var(--bg-secondary)] border-[var(--border-light)] p-4">
                        <h4 className="text-[var(--text-primary)] mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]"></span>
                          日常有氧
                        </h4>
                        <p className="text-sm mb-2">减脂, 情绪释放</p>
                        <p className="text-xs">40-60m/次, 3-5次/周 | 免费</p>
                        <p className="text-xs mt-2 italic">减脂主力，为高阶运动打基础</p>
                      </Card>
                    </div>
                    <div className="bg-[var(--bg-secondary)] p-4 rounded-xl">
                      <h4 className="text-[var(--text-primary)] mb-3">运动装备需求</h4>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>• 运动服3-5套</div>
                        <div>• 攀岩鞋、自保护具</div>
                        <div>• 专业泳帽、泳衣、泳镜</div>
                        <div>• 网球球衣、进阶球拍</div>
                        <div>• 骑行装备</div>
                        <div>• 徒步装备、冲锋衣</div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* 饮食习惯 */}
              <AccordionItem value="diet" className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-6">
                <AccordionTrigger className="text-[var(--text-primary)] hover:no-underline">
                  <div className="flex items-center gap-4">
                    <Target className="w-6 h-6 text-[var(--accent-gold)]" />
                    <span className="text-xl font-semibold">饮食习惯 - 精妙仪器燃料系统</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-4 text-[var(--text-secondary)]">
                    <p className="text-lg mb-4">目标/产出：仪器燃料，高效运作 | 时间投入：1-2h/天 (规划/备餐)</p>
                    <div className="bg-[var(--bg-secondary)] p-4 rounded-xl">
                      <h4 className="text-[var(--text-primary)] mb-3">营养学知识需求</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• 宏量营养素（碳水、蛋白质、脂肪）配比</li>
                        <li>• 微量营养素（维生素、矿物质）重要性</li>
                        <li>• 食物血糖指数（GI）</li>
                        <li>• 热量缺口原理</li>
                        <li>• 《中国居民膳食指南》学习</li>
                      </ul>
                    </div>
                    
                    {/* 工具与资源 */}
                    <div className="bg-[var(--bg-secondary)] p-4 rounded-xl mt-6">
                      <h4 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                        <UtensilsCrossed className="w-5 h-5 text-[var(--neon-blue)]" />
                        工具与资源
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <a
                          href="https://www.notion.so/155ee4e006dc470f8e83a1b7d1625648"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group bg-[var(--card-dark)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <Calendar className="w-5 h-5 text-[var(--neon-blue)]" />
                            <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                          </div>
                          <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors">
                            习惯追踪器
                          </h5>
                          <p className="text-xs text-[var(--text-secondary)]">
                            追踪和管理日常习惯
                          </p>
                        </a>
                        
                        <a
                          href="https://www.notion.so/8d9f3f441d0c433db69d4aec9a872427"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group bg-[var(--card-dark)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <Target className="w-5 h-5 text-[var(--accent-gold)]" />
                            <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                          </div>
                          <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors">
                            营养与健康
                          </h5>
                          <p className="text-xs text-[var(--text-secondary)]">
                            营养学知识和健康管理
                          </p>
                        </a>
                        
                        <a
                          href="https://www.notion.so/5f7c0024482c4140b73a14189d4cc162"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group bg-[var(--card-dark)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <UtensilsCrossed className="w-5 h-5 text-[var(--neon-blue)]" />
                            <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                          </div>
                          <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors">
                            饮食计划器
                          </h5>
                          <p className="text-xs text-[var(--text-secondary)]">
                            制定和管理饮食计划
                          </p>
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-sm italic mt-4">核心关联：直接影响所有精力和恢复</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* 作息Routine */}
              <AccordionItem value="routine" className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-6">
                <AccordionTrigger className="text-[var(--text-primary)] hover:no-underline">
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-[var(--neon-blue)]" />
                    <span className="text-xl font-semibold">作息Routine - 精妙仪器地基系统</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-4 text-[var(--text-secondary)]">
                    <p className="text-lg mb-4">目标/产出：仪器地基，激素平衡 | 时间投入：8-9h/天</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[var(--bg-secondary)] p-4 rounded-xl">
                        <h4 className="text-[var(--text-primary)] mb-3">作息安排</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• 早5:00-6:00起床晨训</li>
                          <li>• 晚21:00-22:00躺床准备入眠</li>
                          <li>• 提前一小时放掉手机</li>
                        </ul>
                      </div>
                      <div className="bg-[var(--bg-secondary)] p-4 rounded-xl">
                        <h4 className="text-[var(--text-primary)] mb-3">大脑训练</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• 冥想</li>
                          <li>• 脑科学知识应用</li>
                          <li>• 神经可塑性训练</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm italic mt-4">核心关联：所有精力的来源</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Hobbies Tab */}
          <TabsContent value="hobbies" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-[var(--text-primary)] mb-4">第二层：心智体验 - 爱好与创造</h2>
              <GlowLine width="120px" className="mx-auto" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Music className="w-8 h-8 text-[var(--neon-blue)]" />
                  <h3 className="text-[var(--text-primary)]">听觉系统 - 滋养频率</h3>
                </div>
                <div className="space-y-4 text-[var(--text-secondary)]">
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2">音乐欣赏</h4>
                    <p className="text-sm">滋养频率, 获取能量 | 音响系统¥5w</p>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2">乐器</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 手碟/架子鼓：~¥2w/件 | 呼吸, 节奏, 心流</li>
                      <li>• 钢琴：已有基础 | 进入心流, 技巧精进</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Camera className="w-8 h-8 text-[var(--accent-gold)]" />
                  <h3 className="text-[var(--text-primary)]">视觉系统 - 美学感知</h3>
                </div>
                <div className="space-y-4 text-[var(--text-secondary)]">
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2">观影</h4>
                    <p className="text-sm">增强视觉感知体系 | 美学知识输入</p>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2">摄影</h4>
                    <p className="text-sm">构图, 光影, 留存瞬间 | 相机¥5-20w</p>
                    <p className="text-xs italic mt-1">训练"发现美"的眼睛，与徒步、旅行完美结合</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="w-8 h-8 text-[var(--neon-blue)]" />
                  <h3 className="text-[var(--text-primary)]">书写/阅读系统 - 知识构建</h3>
                </div>
                <div className="space-y-4 text-[var(--text-secondary)]">
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2">练字</h4>
                    <p className="text-sm">进入心流 | 静态冥想，培养耐心和专注</p>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2">系统学习</h4>
                    <p className="text-sm mb-2">构建知识体系</p>
                    <ul className="text-xs space-y-1">
                      <li>• 哲学、心理学、神经科学</li>
                      <li>• 营养学、运动学、美学</li>
                      <li>• 艺术、文学</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Palette className="w-8 h-8 text-[var(--accent-gold)]" />
                  <h3 className="text-[var(--text-primary)]">嗅觉系统 - 感官探索</h3>
                </div>
                <div className="space-y-4 text-[var(--text-secondary)]">
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2">制香/香水</h4>
                    <p className="text-sm">探索, 创造, 愉悦 | 丰富感官体验的维度</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Environment Tab */}
          <TabsContent value="environment" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-[var(--text-primary)] mb-4">生活居住环境 - WABI-SABI庇护所</h2>
              <GlowLine width="120px" className="mx-auto" />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <h3 className="text-[var(--text-primary)] mb-4">阶段一：生存与安抚</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">由"基石层"收入驱动</p>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>• 舒适的床垫</li>
                  <li>• 核心运动装备</li>
                  <li>• 读书角/音乐角</li>
                </ul>
              </Card>

              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <h3 className="text-[var(--text-primary)] mb-4">阶段二：品质提升</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">由"桥梁层"收入驱动</p>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>• 升级音响系统</li>
                  <li>• 私教指导</li>
                  <li>• 摄影设备升级</li>
                </ul>
              </Card>

              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <h3 className="text-[var(--text-primary)] mb-4">阶段三：梦想实现</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">由"未来种子层"收入驱动</p>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>• 黑胶系统升级</li>
                  <li>• 徕卡/哈苏相机</li>
                  <li>• 旅居计划</li>
                </ul>
              </Card>
            </div>

            <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
              <h3 className="text-[var(--text-primary)] mb-4">理想环境构成</h3>
              <div className="grid grid-cols-2 gap-6 text-[var(--text-secondary)]">
                <div>
                  <h4 className="text-[var(--text-primary)] mb-3">音乐区</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 黑胶机：入门级已有，升级1.0-15800，升级2.0-35800，升级3.0-68000</li>
                    <li>• 音响：入门级已有，升级哈曼卡顿5.0水晶-5000</li>
                    <li>• CD机：入门级1200</li>
                    <li>• 乐器：钢琴（电钢）、架子鼓（电鼓）、手鼓</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[var(--text-primary)] mb-3">其他区域</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 咖啡角/调酒区</li>
                    <li>• 读书角（阅读、练字、创作）</li>
                    <li>• 高品质卧室（舒适床垫）</li>
                    <li>• 居家运动区（跑步机）</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Matrix Tab */}
          <TabsContent value="matrix" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-[var(--text-primary)] mb-4">核心矩阵：时间、金钱、精力的动态配置系统</h2>
              <GlowLine width="120px" className="mx-auto" />
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <DollarSign className="w-8 h-8 text-[var(--accent-gold)] mb-4" />
                <h3 className="text-[var(--text-primary)] mb-4">【金钱】模块</h3>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-1">收入来源1 (基石层)</h4>
                    <p>零工、符合审美的兼职 | 覆盖每月固定开销</p>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-1">收入来源2 (桥梁层)</h4>
                    <p>运动技能指导、摄影接单等 | 提升生活品质</p>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-1">收入来源3 (未来种子层)</h4>
                    <p>内容创作、个人品牌 | 实现财务自由</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <Clock className="w-8 h-8 text-[var(--neon-blue)] mb-4" />
                <h3 className="text-[var(--text-primary)] mb-4">【时间 & 精力】模块</h3>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-1">高精力时段 (20%)</h4>
                    <p>只做"未来种子层"的事：创作、练字、弹琴</p>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-1">中精力时段 (40%)</h4>
                    <p>主要做"桥梁层"的事：指导、学习</p>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-1">低精力时段 (40%)</h4>
                    <p>只做"基石层"的事：零工、感官输入</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <Palette className="w-8 h-8 text-[var(--neon-blue)] mb-4" />
                <h3 className="text-[var(--text-primary)] mb-4">【爱好】模块</h3>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <p>所有价值的"原材料仓库"</p>
                  <ul className="space-y-1 mt-2">
                    <li>• 听觉 + 大脑训练 → 引导性冥想音乐</li>
                    <li>• 视觉 + 运动 → 户外美学博主</li>
                    <li>• 文字 + 所有爱好 → 个人博客</li>
                    <li>• 嗅觉 → 特定香气影响训练状态</li>
                  </ul>
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-[var(--card-dark)] to-[var(--bg-secondary)] border-[var(--border-light)] p-8">
              <h3 className="text-[var(--text-primary)] mb-4 text-center">核心公式</h3>
              <div className="text-center">
                <p className="text-2xl font-mono text-[var(--neon-blue)] mb-2">
                  精力 × (时间/爱好) × 金钱 = 体验
                </p>
                <p className="text-[var(--text-secondary)] mt-4">
                  最终，用可再生的精力，自由支配的时间，通过爱好产生的金钱，
                  去购买和创造想要的极致体验，从而实现"体验宇宙"的终极目的。
                </p>
              </div>
            </Card>

            {/* Management Tools Section */}
            <div className="mt-12">
              <div className="text-center mb-8">
                <h2 className="text-[var(--text-primary)] mb-4">系统管理工具</h2>
                <GlowLine width="120px" className="mx-auto" />
              </div>

              {/* Operation Steps */}
              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6 mb-8">
                <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[var(--neon-blue)]" />
                  操作步骤
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  <a
                    href="https://www.notion.so/b4e1735b320b4a72ba9632d1eca8e582"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Package className="w-5 h-5 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      收集分类
                    </h5>
                  </a>
                  
                  <a
                    href="https://www.notion.so/2ae679ddb47947e19e34c8e079bfdb3b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Play className="w-5 h-5 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      事务执行
                    </h5>
                  </a>
                  
                  <a
                    href="https://www.notion.so/0908fc130f874ad4ab0527665ff644ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <GraduationCap className="w-5 h-5 text-[var(--accent-gold)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      知识管理
                    </h5>
                  </a>
                  
                  <a
                    href="https://www.notion.so/c50951468c80445194d837c0cf453426"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <RotateCcw className="w-5 h-5 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      回顾纠偏
                    </h5>
                  </a>
                </div>
              </Card>

              {/* Core Management Tools */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <a
                  href="https://www.notion.so/20a2923c624280638bafd6db7435170f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6 h-full hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <Wallet className="w-8 h-8 text-[var(--accent-gold)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h3 className="text-[var(--text-primary)] mb-2 group-hover:text-[var(--neon-blue)] transition-colors">
                      收支管理
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      财务追踪与预算管理
                    </p>
                  </Card>
                </a>

                <a
                  href="https://www.notion.so/80a3c04e69514937a17174fe5f17b082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6 h-full hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <Inbox className="w-8 h-8 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h3 className="text-[var(--text-primary)] mb-2 group-hover:text-[var(--neon-blue)] transition-colors">
                      收集箱
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      信息收集与临时存储
                    </p>
                  </Card>
                </a>

                <a
                  href="https://www.notion.so/OKR-e0d08d9afeb34ee280779a624b7e29ea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6 h-full hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <FolderKanban className="w-8 h-8 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h3 className="text-[var(--text-primary)] mb-2 group-hover:text-[var(--neon-blue)] transition-colors">
                      OKR及项目管理
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      目标设定与项目追踪
                    </p>
                  </Card>
                </a>
              </div>

              {/* Personal Growth */}
              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6 mb-6">
                <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <User className="w-6 h-6 text-[var(--neon-blue)]" />
                  Personal 个人成长
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  <a
                    href="https://www.notion.so/Health-31aab31e4ec24cd69fc55b8a452fa26b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Heart className="w-5 h-5 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      Health
                    </h5>
                  </a>
                  
                  <a
                    href="https://www.notion.so/Goals-f371ee078241487b82f7cab2cfc96487"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <CheckSquare className="w-5 h-5 text-[var(--accent-gold)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      Goals
                    </h5>
                  </a>
                  
                  <a
                    href="https://www.notion.so/Workout-cc8ad7952c1c400a9b9b7cc7e1ba9728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Dumbbell className="w-5 h-5 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      Workout
                    </h5>
                  </a>
                  
                  <a
                    href="https://www.notion.so/2-0-b7b20db8ee434815a56babe70809231e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Activity className="w-5 h-5 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      健身运动管理 2.0
                    </h5>
                  </a>
                </div>
              </Card>

              {/* Professional Development */}
              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6 mb-6">
                <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-[var(--accent-gold)]" />
                  Professional 专业提升
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://www.notion.so/Finance-88395afe58354ed99b9c932ce2105ce8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <DollarSign className="w-5 h-5 text-[var(--accent-gold)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      Finance
                    </h5>
                  </a>
                  
                  <a
                    href="https://www.notion.so/Projects-7298177fd3394e10bffd84e986fb724e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <FolderOpen className="w-5 h-5 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      Projects
                    </h5>
                  </a>
                  
                  <a
                    href="https://www.notion.so/Learn-0030de9af4d24923b83c1c694df0ffaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="w-5 h-5 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      Learn
                    </h5>
                  </a>
                </div>
              </Card>

              {/* Lifestyle */}
              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-[var(--accent-gold)]" />
                  Lifestyle 生活方式
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  <a
                    href="https://www.notion.so/Wishlist-e1b3c6bbe337400e892f44f56001a35c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Star className="w-5 h-5 text-[var(--accent-gold)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      Wishlist
                    </h5>
                  </a>
                  
                  <a
                    href="https://www.notion.so/Watchlist-9db0818c84b04b7a9a92692fe0602b14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Film className="w-5 h-5 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      Watchlist
                    </h5>
                  </a>
                  
                  <a
                    href="https://www.notion.so/Books-d158a0a1e55f470a92f5f4ba011b9c3e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Book className="w-5 h-5 text-[var(--neon-blue)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      Books
                    </h5>
                  </a>
                  
                  <a
                    href="https://www.notion.so/Skincare-e3f0551e65d747829ca5c662e4f2bd94"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Droplet className="w-5 h-5 text-[var(--accent-gold)]" />
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    </div>
                    <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors text-sm">
                      Skincare
                    </h5>
                  </a>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* MVP Tab */}
          <TabsContent value="mvp" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-[var(--text-primary)] mb-4">LIFEMATRICES MVP - Flex-Integration Protocol V1.0</h2>
              <GlowLine width="120px" className="mx-auto" />
            </div>

            {/* Daily Routine - Evening & Morning */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Moon className="w-6 h-6 text-[var(--neon-blue)]" />
                  晚上睡前
                </h3>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--neon-blue)] mt-1">•</span>
                    <span>冥想</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--neon-blue)] mt-1">•</span>
                    <span>看书</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--neon-blue)] mt-1">•</span>
                    <span>准备好第二天出行的装备</span>
                  </div>
                  <div className="ml-4 space-y-1 text-xs">
                    <div>— 衣服</div>
                    <div>— 骑行/运动装备</div>
                    <div>— 第二天的食物</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--neon-blue)] mt-1">•</span>
                    <span>泡豆子、洗玉米/红薯</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Moon className="w-6 h-6 text-[var(--accent-gold)]" />
                  晚上
                </h3>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] mt-1">•</span>
                    <span>洗澡 - 护肤 - 身体乳【听音乐】</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] mt-1">•</span>
                    <span>阅读 - 听佛乐 - 心流</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] mt-1">•</span>
                    <span>冥想 - 入眠</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Morning Routine */}
            <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6 mb-8">
              <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Sun className="w-6 h-6 text-[var(--accent-gold)]" />
                早上自然醒了
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4 text-sm text-[var(--text-secondary)]">
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <UtensilsCrossed className="w-4 h-4 text-[var(--neon-blue)]" />
                      早饭
                    </h4>
                    <ul className="space-y-1 ml-6">
                      <li>• 打豆浆</li>
                      <li>• 蒸玉米/红薯</li>
                      <li>• 煮鸡蛋</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[var(--neon-blue)]" />
                      八段锦/拉伸 + 瑜伽
                    </h4>
                  </div>
                  </div>
                <div className="space-y-4 text-sm text-[var(--text-secondary)]">
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[var(--neon-blue)]" />
                      学一小时
                    </h4>
                    <p className="text-xs mb-2 ml-6">看自己感兴趣的专业知识，并整理成内容</p>
                    <ul className="space-y-1 ml-6">
                      <li>• 营养学</li>
                      <li>• 神经科学</li>
                      <li>• 历史人文</li>
                    </ul>
                  </div>
                  </div>
                </div>
              </Card>

            {/* Workday & Weekend */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Bike className="w-6 h-6 text-[var(--neon-blue)]" />
                  工作日
                </h3>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--neon-blue)] mt-1">•</span>
                    <span>骑车来上班，自然下汗换一身衣服</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--neon-blue)] mt-1">•</span>
                    <span>下班骑车回家 并做无氧</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--neon-blue)] mt-1">•</span>
                    <span>复盘15分钟无氧动作提升方式</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--neon-blue)] mt-1">•</span>
                    <span>周五晚 - 游泳/网球</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-[var(--accent-gold)]" />
                  周末
                </h3>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] mt-1">•</span>
                    <span>骑行 + 咖啡馆/饭店 + 阅读</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] mt-1">•</span>
                    <span>攀岩 + 阅读</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] mt-1">•</span>
                    <span>观影 - 输出 - 准备下周粮食</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] mt-1">•</span>
                    <span>营养学 - 更新食谱</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Cycles & Activity Planning */}
            <div className="grid grid-cols-3 gap-6 mb-8">
            <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-[var(--neon-blue)]" />
                  每月一循环
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">复盘</p>
              </Card>

              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-[var(--accent-gold)]" />
                  一季度一次旅行
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">定期探索与体验</p>
              </Card>

              <Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
                <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-[var(--neon-blue)]" />
                  一年一次大旅行
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">深度探索与成长</p>
              </Card>
                </div>

            {/* Activity Planning Links */}
            <Card className="bg-gradient-to-br from-[var(--card-dark)] to-[var(--bg-secondary)] border-[var(--border-light)] p-6">
              <h3 className="text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-[var(--neon-blue)]" />
                活动计划
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">活动和旅行安排</p>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.notion.so/20a2923c62428003b562fd2d23f5df85"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[var(--bg-primary)]/50 border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Calendar className="w-5 h-5 text-[var(--neon-blue)]" />
                    <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                </div>
                  <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors">
                    活动与旅行计划
                  </h5>
                  <p className="text-xs text-[var(--text-secondary)]">
                    查看详细的活动和旅行安排
                  </p>
                </a>
                
                <a
                  href="https://www.notion.so/20a2923c624280099751d3fa039c0ee5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[var(--bg-primary)]/50 border border-[var(--border-light)] rounded-xl p-4 hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Package className="w-5 h-5 text-[var(--accent-gold)]" />
                    <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-blue)] transition-colors" />
                </div>
                  <h5 className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--neon-blue)] transition-colors">
                    行前准备清单
                  </h5>
                  <p className="text-xs text-[var(--text-secondary)]">
                    旅行前的准备事项清单
                  </p>
                </a>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Quick Access Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] pb-[120px]">
        <div className="relative bg-gradient-to-br from-[var(--card-dark)] to-[var(--bg-secondary)] border border-[var(--border-light)] rounded-3xl p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--neon-blue)] opacity-5 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-gold)] opacity-5 blur-[80px] rounded-full" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-8">
              <Package className="w-12 h-12 text-[var(--neon-blue)]" />
              <div>
                <h2 className="text-[var(--text-primary)] mb-2">物品管理数据库</h2>
                <p className="text-[var(--text-secondary)]">
                  追踪日常用品库存，优化资源分配，支持生活系统高效运作
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <Card className="bg-[var(--bg-primary)]/50 border-[var(--border-light)] p-6">
                <h4 className="text-[var(--text-primary)] mb-2">库存管理</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  实时追踪物品库存状态，及时补充所需用品
                </p>
              </Card>
              <Card className="bg-[var(--bg-primary)]/50 border-[var(--border-light)] p-6">
                <h4 className="text-[var(--text-primary)] mb-2">分类筛选</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  按分类、状态、优先级快速查找和管理物品
                </p>
              </Card>
              <Card className="bg-[var(--bg-primary)]/50 border-[var(--border-light)] p-6">
                <h4 className="text-[var(--text-primary)] mb-2">资源优化</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  与生活系统矩阵整合，优化资金和时间分配
                </p>
              </Card>
            </div>
            
            <Link 
              to="/items"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--neon-blue)] text-black hover:shadow-[0_0_48px_rgba(0,199,255,0.4)] transition-all"
            >
              进入物品管理
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

