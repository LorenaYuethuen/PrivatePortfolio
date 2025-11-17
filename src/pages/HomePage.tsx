import { ArrowRight, Sparkles, Users, Dumbbell, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlowLine } from '../components/GlowLine';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[900px] flex items-center justify-center gradient-radial noise-overlay overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--neon-blue)] opacity-10 blur-[100px] rounded-full" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--accent-gold)] opacity-10 blur-[100px] rounded-full" />
        
        <div className="relative z-10 flex flex-col items-center text-center gap-8 px-12 max-w-6xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-dark)] border border-[var(--border-light)]">
            <Sparkles className="w-4 h-4 text-[var(--neon-blue)]" />
            <span className="text-sm text-[var(--text-secondary)]">Available for new projects</span>
          </div>
          
          <h1 className="text-[var(--text-primary)]">
            阿卡西记录
            <br />
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
              生活系统矩阵
            </span>
          </h1>
          
          <p className="text-2xl text-[var(--text-secondary)] max-w-2xl">
            从"驾驶员"向"总设计师"的进阶，构建能容纳所有雄心壮志的系统矩阵
          </p>
          
          <div className="flex items-center gap-6 mt-4">
            <Link 
              to="/life-system"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--neon-blue)] text-black hover:shadow-[0_0_48px_rgba(0,199,255,0.4)] transition-all"
            >
              探索生活系统
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/about"
              className="px-8 py-4 rounded-xl bg-[#1A1A1A] border border-[var(--border-light)] text-[var(--text-primary)] hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
            >
              了解更多
            </Link>
          </div>
          
          <GlowLine width="120px" className="mt-8" />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] py-[120px]">
        <div className="flex items-center gap-20">
          {/* Left Text */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-[var(--text-primary)]">
              整合身体层、心智层
              <br />
              和知识层的系统矩阵
            </h2>
            <p className="text-[var(--text-secondary)]">
              通过精细化的时间管理（15*4时间片）、分层投入的资金策略（生存层→基石层→成长层→体验层），
              以及三维度的精力管理（体能/脑力/社交），构建一个能够自我产生能量、创造价值的生活系统。
            </p>
            <p className="text-[var(--text-secondary)]">
              核心公式：精力 × (时间/爱好) × 金钱 = 体验。最终目标是通过可再生的精力、
              自由支配的时间，以及通过爱好产生的金钱，去购买和创造极致的体验，实现"体验宇宙"的终极目的。
            </p>
          </div>
          
          {/* Right Card */}
          <div className="flex-1">
            <div className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-8 card-shadow">
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--neon-blue)]/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[var(--neon-blue)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2">身体仪器维护</h4>
                    <p className="text-[var(--text-secondary)] text-base">
                      通过运动习惯、饮食习惯、作息routine和爱服美役，维持精妙仪器的高效运作
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-gold)]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[var(--accent-gold)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] mb-2">心智体验创造</h4>
                    <p className="text-[var(--text-secondary)] text-base">
                      通过听觉、视觉、书写/阅读和嗅觉系统，构建知识体系，进入心流状态
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--border-light)]">
                  <div>
                    <div className="text-4xl mb-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">15×4</div>
                    <div className="text-sm text-[var(--text-secondary)]">时间片</div>
                  </div>
                  <div>
                    <div className="text-4xl mb-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">3层</div>
                    <div className="text-sm text-[var(--text-secondary)]">收入来源</div>
                  </div>
                  <div>
                    <div className="text-4xl mb-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">P/M/S</div>
                    <div className="text-sm text-[var(--text-secondary)]">精力维度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Systems Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] pb-[120px]">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-[var(--text-primary)] mb-4">核心系统模块</h2>
            <GlowLine width="120px" className="mx-auto" />
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-8 hover:border-[var(--neon-blue)] transition-colors">
              <Dumbbell className="w-12 h-12 text-[var(--neon-blue)] mb-4" />
              <h3 className="text-[var(--text-primary)] mb-3">身体仪器</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                运动习惯、饮食习惯、作息routine和爱服美役，维持精妙仪器的高效运作
              </p>
              <ul className="text-sm text-[var(--text-secondary)] space-y-2">
                <li>• 力量训练、攀岩、游泳</li>
                <li>• 营养学应用</li>
                <li>• 作息与大脑训练</li>
              </ul>
            </div>
            
            <div className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-8 hover:border-[var(--neon-blue)] transition-colors">
              <Sparkles className="w-12 h-12 text-[var(--accent-gold)] mb-4" />
              <h3 className="text-[var(--text-primary)] mb-3">心智体验</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                通过听觉、视觉、书写/阅读和嗅觉系统，构建知识体系，进入心流状态
              </p>
              <ul className="text-sm text-[var(--text-secondary)] space-y-2">
                <li>• 音乐欣赏与乐器</li>
                <li>• 摄影与观影</li>
                <li>• 阅读与创作</li>
              </ul>
            </div>
            
            <div className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-8 hover:border-[var(--neon-blue)] transition-colors">
              <Home className="w-12 h-12 text-[var(--neon-blue)] mb-4" />
              <h3 className="text-[var(--text-primary)] mb-3">居住环境</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                WABI-SABI风格的庇护所，分阶段实现理想的生活居住环境
              </p>
              <ul className="text-sm text-[var(--text-secondary)] space-y-2">
                <li>• 音乐区、读书角</li>
                <li>• 高品质卧室</li>
                <li>• 居家运动区</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/life-system"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[var(--border-light)] text-[var(--text-primary)] hover:border-[var(--neon-blue)] hover:shadow-[0_0_24px_rgba(0,199,255,0.2)] transition-all"
            >
              查看完整系统矩阵
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="max-w-[1440px] mx-auto px-[120px] pb-[120px]">
        <div className="relative bg-gradient-to-br from-[var(--card-dark)] to-[var(--bg-secondary)] border border-[var(--border-light)] rounded-3xl p-16 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--neon-blue)] opacity-5 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-gold)] opacity-5 blur-[80px] rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-[var(--text-primary)] mb-6">开始构建你的生活系统</h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              通过精细化的资源管理和系统化的习惯建立，实现从"驾驶员"向"总设计师"的进阶，
              构建能容纳所有雄心壮志的系统矩阵。
            </p>
            <Link 
              to="/life-system"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--neon-blue)] text-black hover:shadow-[0_0_48px_rgba(0,199,255,0.4)] transition-all"
            >
              探索完整系统
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
