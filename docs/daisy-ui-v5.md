# DaisyUI v5 ブログサイト開発完全ガイド

DaisyUI v5の最新情報と、ブログサイト構築に必要な全主要コンポーネントのクラス名一覧を公式ドキュメントから調査した包括的なリファレンスです。

## 公式リリース情報

**最新バージョン**: DaisyUI v5.0.50（安定版）

### v5の主要な新機能と改善点

DaisyUI v5は**ゼロ依存関係**を実現し、Tailwind CSS 4との完全互換性を提供。**モダンCSS入れ子**機能でファイルサイズを大幅削減し、**ESMサポート**で現代的な開発環境に対応している。

**新デザイン機能**：
- 全コンポーネントで`xl`サイズ対応
- `*-soft`と`*-dash`スタイル修飾子の追加
- レスポンシブ修飾子がデフォルト対応
- 新テーマ4種追加：`caramel`、`latte`、`abyss`、`silk`
- `--depth`と`--noise`エフェクト変数

**アーキテクチャ改善**：
- CSS変数名の可読性向上（例：`--color-primary` vs `--p`）
- 任意のカラーフォーマット対応
- アクセシビリティスコア向上

## Typography（文字組み）

DaisyUI v5では**Tailwind CSS Typography プラグイン**をサポートしています。

### 基本クラス
- **`prose`** - メインの文字組みクラス（Tailwind CSS Typography）
- ヘッダー、本文、引用、コードブロックは`prose`クラス内で自動スタイリング
- **`prose-lg`** - 大きなテキストサイズ
- **`prose-sm`** - 小さなテキストサイズ

### 使用例
```html
<div class="prose prose-lg max-w-none">
  <h1>ブログ記事タイトル</h1>
  <p><strong>太字</strong>と<em>斜体</em>を含む記事コンテンツ</p>
  <blockquote>重要な引用文</blockquote>
  <code>インラインコード</code>
</div>
```

## Navigation（ナビゲーション）

### Navbar コンポーネント
**基本クラス**: `navbar`

**レイアウトクラス**:
- **`navbar-start`** - 左セクション（50%幅）
- **`navbar-center`** - 中央セクション（中央揃え）
- **`navbar-end`** - 右セクション（残り50%幅）

### Breadcrumbs コンポーネント
**基本クラス**: `breadcrumbs`

### Menu コンポーネント
**基本クラス**: `menu`

**サイズバリエーション**:
- `menu-xs`, `menu-sm`, `menu-md`, `menu-lg`, `menu-xl`

**レイアウトバリエーション**:
- **`menu-vertical`** - 縦レイアウト（デフォルト）
- **`menu-horizontal`** - 横レイアウト

**状態クラス**:
- **`menu-title`** - タイトルスタイル
- **`menu-active`** - アクティブ状態
- **`menu-disabled`** - 無効状態
- **`menu-dropdown`** - ドロップダウンサブメニュー

### Pagination
**Join コンポーネント**を使用:
- **`join`** - グループ化コンテナ
- **`join-item`** - 個別アイテム
- **`join-vertical`** - 縦配置
- **`join-horizontal`** - 横配置（デフォルト）

## Cards（カード）

### 基本クラス
- **`card`** - メインコンテナ
- **`card-body`** - コンテンツエリア
- **`card-title`** - タイトルセクション
- **`card-actions`** - アクションボタンセクション

### サイズバリエーション
- `card-xs`, `card-sm`, `card-md`, `card-lg`, `card-xl`

### スタイルバリエーション
- **`card-border`** - ボーダー付き（v4の`card-bordered`から変更）
- **`card-dash`** - 破線ボーダー
- **`card-side`** - サイド画像レイアウト
- **`image-full`** - 背景画像として使用

### 記事カード例
```html
<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img src="article-image.jpg" alt="記事画像" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      記事タイトル
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>記事の抜粋がここに入ります...</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Technology</div>
      <div class="badge badge-outline">Tutorial</div>
    </div>
  </div>
</div>
```

## Forms（フォーム）

### Input フィールド
**基本クラス**: `input`

**カラーバリエーション**:
- `input-neutral`, `input-primary`, `input-secondary`, `input-accent`
- `input-info`, `input-success`, `input-warning`, `input-error`

**サイズバリエーション**:
- `input-xs`, `input-sm`, `input-md`, `input-lg`, `input-xl`

**スタイル**:
- **`input-ghost`** - 透明スタイル

### Textarea
**基本クラス**: `textarea`
- Input と同じカラー・サイズバリエーション対応

### フォーム構造
- **`fieldset`** - 関連フォーム要素のグループ化
- **`fieldset-legend`** - フィールドセットのタイトル
- **`label`** - 入力フィールドの名前/タイトル
- **`validator`** - バリデーションスタイル

### 検索ボックス例
```html
<label class="input">
  <svg class="h-[1em] opacity-50">...</svg>
  <input type="search" class="grow" placeholder="記事を検索..." />
  <kbd class="kbd kbd-sm">⌘</kbd>
  <kbd class="kbd kbd-sm">K</kbd>
</label>
```

## Buttons（ボタン）

### 基本クラス
**`btn`** - メインボタンクラス

### サイズバリエーション
- `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`

### カラーバリエーション
- `btn-neutral`, `btn-primary`, `btn-secondary`, `btn-accent`
- `btn-info`, `btn-success`, `btn-warning`, `btn-error`

### スタイルバリエーション
- **`btn-outline`** - アウトラインスタイル
- **`btn-dash`** - 破線ボーダー（v5新機能）
- **`btn-soft`** - ソフト/微妙なスタイル（v5新機能）
- **`btn-ghost`** - ゴーストスタイル（透明背景）
- **`btn-link`** - リンク見た目

### 形状・レイアウト
- **`btn-wide`** - 横幅拡張
- **`btn-block`** - フル幅
- **`btn-square`** - 正方形（1:1比率）
- **`btn-circle`** - 円形

### 状態
- **`btn-active`** - アクティブ状態
- **`btn-disabled`** - 無効状態

## Badges/Tags（バッジ・タグ）

### 基本クラス
**`badge`** - メインバッジコンテナ

### スタイルバリエーション
- **`badge-outline`** - アウトライン/ボーダースタイル
- **`badge-dash`** - 破線アウトライン
- **`badge-soft`** - ソフト背景（v5新機能）
- **`badge-ghost`** - ゴースト/透明スタイル

### カラーバリエーション
- `badge-neutral`, `badge-primary`, `badge-secondary`, `badge-accent`
- `badge-info`, `badge-success`, `badge-warning`, `badge-error`

### サイズバリエーション
- `badge-xs`, `badge-sm`, `badge-md`, `badge-lg`, `badge-xl`（v5新機能）

### カテゴリタグ例
```html
<div class="badge badge-outline badge-primary">Technology</div>
<div class="badge badge-outline badge-secondary">Tutorial</div>
<div class="badge badge-soft badge-info">Featured</div>
```

## Alerts/Toasts（アラート・トースト）

### Alert コンポーネント
**基本クラス**: `alert`

**タイプ別クラス**:
- **`alert-info`** - 情報メッセージ（青）
- **`alert-success`** - 成功メッセージ（緑）
- **`alert-warning`** - 警告メッセージ（黄/橙）
- **`alert-error`** - エラーメッセージ（赤）

**スタイルバリエーション**:
- **`alert-outline`** - アウトラインスタイル
- **`alert-dash`** - 破線ボーダー
- **`alert-soft`** - ソフト背景

**レイアウト**:
- **`alert-vertical`** - 縦レイアウト（モバイル向け）
- **`alert-horizontal`** - 横レイアウト（デスクトップ向け）

### Toast コンポーネント
**基本クラス**: `toast`

**位置指定**:
- 水平位置：`toast-start`, `toast-center`, `toast-end`
- 垂直位置：`toast-top`, `toast-middle`, `toast-bottom`

### 成功アラート例
```html
<div role="alert" class="alert alert-success">
  <svg class="h-6 w-6 shrink-0 stroke-current">...</svg>
  <span>コメントが正常に投稿されました！</span>
</div>
```

## Avatar（アバター）

### 基本クラス
- **`avatar`** - メインアバターコンテナ
- **`avatar-group`** - 複数アバターのコンテナ

### 状態インジケータ（v5更新）
- **`avatar-online`** - オンライン状態（v4の`online`から変更）
- **`avatar-offline`** - オフライン状態（v4の`offline`から変更）
- **`avatar-placeholder`** - テキスト/文字アバター用

### サイズ設定
Tailwindの幅クラスを使用：
- `w-8`（32px）, `w-12`（48px）, `w-16`（64px）, `w-20`（80px）, `w-24`（96px）, `w-32`（128px）

### 形状オプション
- **`rounded`** - デフォルト角丸
- **`rounded-full`** - 円形
- **`mask mask-squircle`** - スクワークル形状

### 著者アバター例
```html
<div class="avatar avatar-online">
  <div class="w-24 rounded-full">
    <img src="author-photo.jpg" />
  </div>
</div>
```

## Divider（区切り線）

### 基本クラス
**`divider`** - 要素間の区切り線

### カラーバリエーション
- `divider-neutral`, `divider-primary`, `divider-secondary`, `divider-accent`
- `divider-success`, `divider-warning`, `divider-info`, `divider-error`

### レイアウト方向
- **`divider-vertical`** - 垂直要素の分割（デフォルト）
- **`divider-horizontal`** - 水平要素の分割

### テキスト位置
- **`divider-start`** - 開始位置にテキスト
- **`divider-end`** - 終了位置にテキスト

## Footer（フッター）

### 基本クラス
- **`footer`** - メインフッターコンテナ
- **`footer-title`** - フッター列のタイトル
- **`footer-center`** - コンテンツを中央揃え

### レイアウトバリエーション
- **`footer-horizontal`** - 水平レイアウト
- **`footer-vertical`** - 垂直レイアウト（デフォルト）

### レスポンシブ対応例
```html
<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 class="footer-title">サービス</h6>
    <a class="link link-hover">ブランディング</a>
    <a class="link link-hover">デザイン</a>
  </nav>
</footer>
```

## Hero/Header sections（ヒーロー・ヘッダー）

### 基本クラス
- **`hero`** - ヒーローコンテナ
- **`hero-content`** - コンテンツ部分
- **`hero-overlay`** - 背景画像用オーバーレイ

### ヒーローセクション例
```html
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">ようこそ</h1>
      <p class="py-6">私のブログへようこそ</p>
      <button class="btn btn-primary">開始する</button>
    </div>
  </div>
</div>
```

## Stats（統計表示）

### 基本クラス
- **`stats`** - 複数統計アイテムのコンテナ
- **`stat`** - 個別統計ブロック
- **`stat-title`** - 統計のタイトル
- **`stat-value`** - 統計の値
- **`stat-desc`** - 統計の説明
- **`stat-figure`** - アイコン等の図表部分

### レイアウト
- **`stats-horizontal`** - 水平レイアウト（デフォルト）
- **`stats-vertical`** - 垂直レイアウト

## Timeline（タイムライン）

### 基本クラス
- **`timeline`** - タイムラインコンテナ（ul要素）
- **`timeline-start`** - 開始方向のコンテンツ
- **`timeline-middle`** - 中央位置のコンテンツ
- **`timeline-end`** - 終了方向のコンテンツ
- **`timeline-box`** - ボックススタイル適用

### レイアウト
- **`timeline-horizontal`** - 水平レイアウト（デフォルト）
- **`timeline-vertical`** - 垂直レイアウト
- **`timeline-compact`** - 全アイテムを片側に強制

## Tailwind CSSとの統合

### v5の新しいインストール方法
```bash
npm i -D daisyui@latest
```

```css
/* app.css */
@import "tailwindcss";
@plugin "daisyui";
```

### テーマ設定
```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake;
}
```

### よく使用するユーティリティクラス組み合わせ

**コンテンツレイアウト**:
```html
<main class="container mx-auto px-4 py-8 max-w-4xl">
  <div class="grid gap-6 md:gap-8">
    <!-- コンテンツ -->
  </div>
</main>
```

**レスポンシブカード**:
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="card bg-base-100 shadow-xl">
    <!-- カードコンテンツ -->
  </div>
</div>
```

**レスポンシブナビゲーション**:
```html
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown lg:hidden">
      <!-- モバイルメニュー -->
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <!-- デスクトップメニュー -->
  </div>
</div>
```

## 重要な変更点とマイグレーション

### v4からv5への主な変更
- **インストール方法**: `tailwind.config.js`からCSSファイルでの設定に変更
- **クラス名変更**: `online` → `avatar-online`, `card-bordered` → `card-border`
- **削除されたクラス**: `artboard`、`phone-*`、`bottom-nav`（`dock`を使用）
- **新機能**: XLサイズ修飾子、改善されたレスポンシブサポート

### v5の新CSS変数システム
```css
:root {
  --color-primary: oklch(55% 0.3 240);
  --color-primary-content: oklch(98% 0.01 240);
  --radius-box: 1rem;
  --radius-field: 0.5rem;
}
```

DaisyUI v5は、ゼロ依存関係、大幅なファイルサイズ削減、Tailwind CSS 4との完全互換性を実現し、現代的なブログサイト開発に最適なコンポーネントライブラリです。この包括的なクラス名リファレンスにより、効率的で一貫性のあるブログUIを構築できます。
