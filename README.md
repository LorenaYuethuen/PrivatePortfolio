# Design Global Styles

This is a complete design system project built with React, TypeScript, Vite, and Tailwind CSS v4. The original design is available at [Figma](https://www.figma.com/design/9YtlCekinUBhgM4VREb3ms/Design-Global-Styles).

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Vite
- **Design System**: Complete UI component library with Radix UI
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Components**: 40+ pre-built UI components
- **Routing**: React Router for navigation
- **Type Safety**: Full TypeScript support

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run lint
```

The development server will start at `http://localhost:3001`

## 📁 Project Structure

```
Design Global Styles/
├── src/
│   ├── components/      # UI components
│   │   ├── ui/         # Radix UI components
│   │   └── ...         # Custom components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json       # Dependencies
```

## 🎨 Design System

The design system includes:

- **Color Palette**: Custom color variables (--bg-primary, --neon-blue, --accent-gold, etc.)
- **Typography**: Predefined font sizes and weights
- **Components**: Buttons, Cards, Forms, Navigation, and more
- **Utilities**: Glow effects, shadows, gradients

## 📚 Components

All components are located in `src/components/ui/` and include:

- Accordion, Alert, Avatar, Badge
- Button, Card, Checkbox, Dialog
- Dropdown, Form, Input, Label
- Navigation, Popover, Select, Tabs
- And many more...

## 🔧 Technologies

- **React** ^18.3.1
- **TypeScript** ^5.3.3
- **Vite** ^6.3.5
- **Tailwind CSS** v4
- **Radix UI** - Accessible component primitives
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📝 License

This project is private and for personal use.
