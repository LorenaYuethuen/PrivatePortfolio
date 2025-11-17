# 阿卡西记录 - 生活系统矩阵 | 设计规范

## 🎨 视觉设计规范速查表

### 色彩系统

```css
/* 主背景色 */
--bg-primary: #0C0C0E        /* 页面主背景 */
--bg-secondary: #121214      /* 区块背景 */
--card-dark: #16171A         /* 卡片背景 */

/* 强调色 */
--neon-blue: #00C7FF         /* 主要强调色 */
--accent-gold: #BFA36F       /* 次要强调色 */

/* 文字颜色 */
--text-primary: #FFFFFFE6     /* 主文字（90% 不透明度）*/
--text-secondary: #FFFFFF99   /* 次文字（60% 不透明度）*/

/* 边框 */
--border-light: #FFFFFF14     /* 边框（8% 不透明度）*/
```

### 字体系统

| 层级 | 大小 | 字重 | 行高 | 用途 |
|------|------|------|------|------|
| H1 | 96px | 800 | 110% | 页面主标题 |
| H2 | 48px | 700 | 120% | 模块标题 |
| H3 | 32px | 600 | 130% | 子模块标题 |
| H4 | 24px | 600 | 130% | 卡片标题 |
| Body | 18px | 400 | 150% | 正文 |
| Small | 14px | 400 | 140% | 辅助文字 |

### 间距系统

| 用途 | 数值 | Tailwind Class |
|------|------|----------------|
| 页面左右内边距 | 120px | `px-[120px]` |
| 区块上下间距 | 120px | `py-[120px]` |
| 卡片内边距 | 24px | `p-6` |
| 卡片间距 | 24px | `gap-6` |
| 大卡片间距 | 32px | `gap-8` |
| 内容间距 | 16px | `gap-4` |

### 圆角系统

| 大小 | 数值 | Tailwind Class | 用途 |
|------|------|----------------|------|
| Small | 8px | `rounded-lg` | 小按钮、标签 |
| Medium | 12px | `rounded-xl` | 卡片、输入框 |
| Large | 16px | `rounded-2xl` | 大卡片 |
| XLarge | 24px | `rounded-3xl` | 容器、特殊卡片 |

---

## 📐 组件尺寸规范

### Hero Section

```
┌─────────────────────────────────────────────────┐
│  Padding: 120px (左右)                          │
│  ┌─────────────────────────────────────────┐   │
│  │  Badge: 32px 高                          │   │
│  │  H1: 96px                                │   │
│  │  Body: 18px, 2-3行                       │   │
│  │  Gap: 32px                               │   │
│  │  ┌───┐ ┌───┐ ┌───┐ ┌───┐                │   │
│  │  │卡片│ │卡片│ │卡片│ │卡片│                │   │
│  │  │等宽│ │等宽│ │等宽│ │等宽│                │   │
│  │  └───┘ └───┘ └───┘ └───┘                │   │
│  │  Gap: 24px                               │   │
│  │  GlowLine: 120px 宽                       │   │
│  └─────────────────────────────────────────┘   │
│  Padding: 80px (上下)                          │
└─────────────────────────────────────────────────┘
```

### 核心资源卡片

```
┌─────────────────┐
│  Icon: 32×32px  │  Gap: 16px
│  ┌───────────┐  │
│  │ H4: 24px  │  │
│  └───────────┘  │  Gap: 8px
│  ┌───────────┐  │
│  │Small:14px │  │
│  └───────────┘  │
│  Padding: 24px  │
└─────────────────┘
```

### Tabs 导航

```
┌──────────────────────────────────────────────┐
│  Container: 深色背景，边框                     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │Icon+ │ │Icon+ │ │Icon+ │ │Icon+ │       │
│  │文字  │ │文字  │ │文字  │ │文字  │       │
│  │36px高│ │36px高│ │36px高│ │36px高│       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
│  Gap: 4px                                    │
│  Padding: 3px                                │
└──────────────────────────────────────────────┘
```

### Accordion 组件

```
┌──────────────────────────────────────────────┐
│  ┌────────────────────────────────────────┐  │
│  │ [Icon 24×24] 标题文字    [Chevron]   │  │
│  │ Padding: 24px                         │  │
│  └────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────┐  │
│  │ 内容区域                                │  │
│  │ Padding: 16px (上), 24px (下)         │  │
│  │ Grid: 2列或3列                        │  │
│  └────────────────────────────────────────┘  │
│  Border: 1px                                │
│  Border-radius: 16px                        │
└──────────────────────────────────────────────┘
```

### Card 组件

```
┌─────────────────────────────┐
│  ┌───────────────────────┐  │
│  │ Icon 32×32  +  H3      │  │
│  └───────────────────────┘  │  Gap: 16px
│  ┌───────────────────────┐  │
│  │ 内容区域                │  │
│  │ - 子标题                │  │
│  │ - 描述文字              │  │
│  │ - 列表项                │  │
│  └───────────────────────┘  │
│  Padding: 24px              │
│  Border-radius: 16px         │
└─────────────────────────────┘
```

---

## 🎯 交互状态规范

### Tab 状态

| 状态 | 背景 | 文字颜色 | 边框 |
|------|------|----------|------|
| 默认 | 透明 | `--text-secondary` | 无 |
| Hover | 透明 | `--neon-blue` | 无 |
| Active | `--neon-blue` | 黑色 | 无 |

### Card 状态

| 状态 | 边框颜色 | 阴影 |
|------|----------|------|
| 默认 | `--border-light` | `card-shadow` |
| Hover | `--neon-blue` | `glow-neon-blue` |

### Button 状态

| 状态 | 背景 | 文字 | 阴影 |
|------|------|------|------|
| 默认 | `--neon-blue` | 黑色 | 无 |
| Hover | `--neon-blue` | 黑色 | `0_0_48px rgba(0,199,255,0.4)` |

---

## 📱 响应式断点

### Desktop (≥ 1440px)
- 最大宽度：1440px，居中
- Grid：3-4列
- Padding：120px

### Tablet (768px - 1439px)
- 最大宽度：保持1440px
- Grid：2-3列
- Padding：80px

### Mobile (< 768px)
- 全宽布局
- Grid：1列
- Padding：24px

---

## 🎨 视觉元素规范

### GlowLine（发光线条）

```css
/* 尺寸 */
width: 120px
height: 2px

/* 渐变 */
background: linear-gradient(
  to right,
  var(--neon-blue),
  var(--accent-gold)
)

/* 使用 */
<GlowLine width="120px" className="mx-auto" />
```

### 渐变文字

```css
/* 霓虹蓝 → 金色渐变 */
background: linear-gradient(
  to right,
  var(--neon-blue),
  var(--accent-gold)
);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
color: transparent;
```

### 卡片阴影

```css
/* 标准阴影 */
box-shadow: 
  0 8px 32px rgba(0, 0, 0, 0.56),
  0 -4px 0 rgba(0, 0, 0, 0.1);

/* 霓虹蓝发光 */
box-shadow: 0 0 32px rgba(0, 199, 255, 0.2);

/* 强发光 */
box-shadow: 0 0 48px rgba(0, 199, 255, 0.4);
```

### 背景装饰

```css
/* Noise Overlay */
.noise-overlay::before {
  background-image: url("data:image/svg+xml,...");
  opacity: 0.4;
  mix-blend-mode: overlay;
}

/* 模糊圆形 */
.blur-circle {
  width: 384px;
  height: 384px;
  background: var(--neon-blue);
  opacity: 0.1;
  filter: blur(100px);
  border-radius: 50%;
}
```

---

## 📊 内容布局模板

### 两列布局（Tab 2: 心智体验）

```
┌──────────────────┐ ┌──────────────────┐
│  听觉系统卡片     │ │  视觉系统卡片     │
│  - Icon + Title  │ │  - Icon + Title  │
│  - Content       │ │  - Content       │
└──────────────────┘ └──────────────────┘
┌──────────────────┐ ┌──────────────────┐
│  书写/阅读卡片     │ │  嗅觉系统卡片     │
│  - Icon + Title  │ │  - Icon + Title  │
│  - Content       │ │  - Content       │
└──────────────────┘ └──────────────────┘
Gap: 24px
```

### 三列布局（Tab 3: 居住环境）

```
┌──────────┐ ┌──────────┐ ┌──────────┐
│ 阶段一   │ │ 阶段二   │ │ 阶段三   │
│ - Title  │ │ - Title  │ │ - Title  │
│ - List   │ │ - List   │ │ - List   │
└──────────┘ └──────────┘ └──────────┘
Gap: 24px
```

### 四列布局（Hero 核心资源）

```
┌────┐ ┌────┐ ┌────┐ ┌────┐
│时间│ │金钱│ │精力│ │关联│
└────┘ └────┘ └────┘ └────┘
Gap: 24px
```

---

## 🎭 动画规范

### 过渡时间

| 元素 | 时间 | Easing |
|------|------|--------|
| 颜色变化 | 200ms | ease |
| 边框变化 | 300ms | ease |
| 阴影变化 | 300ms | ease |
| Accordion 展开 | 300ms | ease-in-out |
| Tab 切换 | 200ms | ease |

### 动画示例

```css
/* Hover 效果 */
.hover-effect {
  transition: all 300ms ease;
}

.hover-effect:hover {
  border-color: var(--neon-blue);
  box-shadow: 0 0 24px rgba(0, 199, 255, 0.2);
}

/* Accordion 展开 */
@keyframes accordion-down {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
}
```

---

## 🔤 文字内容规范

### 标题层级示例

```tsx
// H1 - 页面主标题
<h1 className="text-[var(--text-primary)]">
  阿卡西记录 V2.0
  <br />
  <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
    生活系统矩阵
  </span>
</h1>

// H2 - 模块标题
<h2 className="text-[var(--text-primary)] mb-4">
  第一层：身体仪器 - 习惯与维护
</h2>

// H3 - 卡片标题
<h3 className="text-[var(--text-primary)] mb-3">
  听觉系统 - 滋养频率
</h3>

// H4 - 子标题
<h4 className="text-[var(--text-primary)] mb-2">
  音乐欣赏
</h4>
```

### 文字颜色使用

```tsx
// 主文字 - 标题和重要信息
<span className="text-[var(--text-primary)]">标题文字</span>

// 次文字 - 描述和辅助信息
<p className="text-[var(--text-secondary)]">描述文字</p>

// 强调文字 - 使用霓虹蓝
<span className="text-[var(--neon-blue)]">重要信息</span>
```

---

## ✅ 设计检查清单

### 视觉一致性
- [ ] 所有卡片使用相同的圆角和阴影
- [ ] 图标尺寸统一（32px/24px/16px）
- [ ] 间距系统一致
- [ ] 颜色使用符合规范

### 交互反馈
- [ ] 所有可交互元素有 Hover 状态
- [ ] 状态变化有平滑过渡
- [ ] 激活状态明显可见
- [ ] 加载状态有反馈

### 内容组织
- [ ] 信息层级清晰
- [ ] 文字大小合适
- [ ] 内容完整准确
- [ ] 布局合理有序

### 响应式
- [ ] Desktop 布局正常
- [ ] Tablet 布局适配
- [ ] Mobile 布局可用
- [ ] 文字大小适配

---

## 📝 使用示例

### 创建标准卡片

```tsx
<Card className="bg-[var(--card-dark)] border-[var(--border-light)] p-6">
  <div className="flex items-center gap-4 mb-4">
    <Music className="w-8 h-8 text-[var(--neon-blue)]" />
    <h3 className="text-[var(--text-primary)]">标题</h3>
  </div>
  <div className="space-y-4 text-[var(--text-secondary)]">
    <p className="text-sm">内容...</p>
  </div>
</Card>
```

### 创建 Accordion 项

```tsx
<AccordionItem 
  value="item" 
  className="bg-[var(--card-dark)] border border-[var(--border-light)] rounded-2xl p-6"
>
  <AccordionTrigger className="text-[var(--text-primary)] hover:no-underline">
    <div className="flex items-center gap-4">
      <Icon className="w-6 h-6 text-[var(--neon-blue)]" />
      <span className="text-xl font-semibold">标题</span>
    </div>
  </AccordionTrigger>
  <AccordionContent className="pt-4">
    {/* 内容 */}
  </AccordionContent>
</AccordionItem>
```

---

**文档版本**: 1.0  
**最后更新**: 2024年

