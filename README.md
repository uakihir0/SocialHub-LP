# SocialHub Landing Page

SocialHub のランディングページです。複数の SNS を統合して閲覧・投稿できる iOS アプリと、その基盤となる Kotlin Multiplatform OSS「PlanetLink」を紹介しています。

## 概要

このプロジェクトは、Next.js と TypeScript で構築された多言語対応（日本語・英語）のランディングページです。

### 主な特徴

- **多言語対応**: next-intl による日本語・英語の切り替え
- **3D アニメーション**: React Three Fiber による視覚的なバックグラウンド効果
- **モダンなUI**: Tailwind CSS と Framer Motion によるアニメーション
- **レスポンシブデザイン**: モバイルからデスクトップまで対応

### 技術スタック

- **Framework**: Next.js 16.1.1 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **国際化**: next-intl
- **3D Graphics**: React Three Fiber, Three.js
- **アニメーション**: Framer Motion
- **UI Components**: カスタムコンポーネント

## セットアップ

### 必要な環境

- Node.js 20 以上
- npm / yarn / pnpm / bun

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### 本番環境の起動

```bash
npm start
```

## プロジェクト構成

```
src/
├── app/
│   ├── [locale]/          # 多言語対応のルーティング
│   ├── globals.css        # グローバルスタイル
│   └── page.tsx           # ルートページ
├── components/
│   ├── sections/          # ページセクション
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── PlatformsSection.tsx
│   │   ├── ScreenshotsSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── three/             # Three.js コンポーネント
│   └── ui/                # UIコンポーネント
├── i18n/
│   ├── config.ts          # 国際化設定
│   ├── messages/          # 翻訳ファイル
│   │   ├── ja.json
│   │   └── en.json
│   ├── request.ts
│   └── routing.ts
└── lib/
    ├── constants.ts       # 定数定義
    └── utils.ts           # ユーティリティ関数
```

## 翻訳の編集

翻訳ファイルは [src/i18n/messages/](src/i18n/messages/) ディレクトリにあります。

- [ja.json](src/i18n/messages/ja.json) - 日本語
- [en.json](src/i18n/messages/en.json) - 英語

## デプロイ

### Vercel

Next.js アプリケーションのデプロイには [Vercel Platform](https://vercel.com) が推奨されます。

詳細は [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) をご覧ください。

## ライセンス

このプロジェクトはプライベートリポジトリです。
