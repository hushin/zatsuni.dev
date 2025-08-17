# DaisyUI 5 スタイルガイド

このドキュメントは、ブログサイトでDaisyUI 5コンポーネントを統一的に使用するためのスタイルガイドです。

## デザインシステム基本方針

### カラーパレット
- **Primary**: ブランドカラー、メインアクション用
- **Secondary**: サブアクション、補完的な要素用
- **Accent**: 強調表示、特別な注意を引く要素用
- **Neutral**: 基本文字色、ボーダー、背景用
- **Base**: ページ背景、カードなどの基本色

### 状態色
- **Info**: 情報表示（青系）
- **Success**: 成功状態（緑系）
- **Warning**: 注意喚起（黄・橙系）
- **Error**: エラー状態（赤系）

## コンポーネント別ガイドライン

### 1. ボタン（Button）

#### 基本クラス構成
```html
<button class="btn [size] [variant] [modifier]">
```

#### サイズバリエーション
- `btn-xs`: 小さなアクション
- `btn-sm`: コンパクトなボタン
- `btn-md`: 標準サイズ（デフォルト）
- `btn-lg`: 主要アクション
- `btn-xl`: ヒーローセクション用

#### バリエーション
- `btn-primary`: メインアクション（記事を読む、投稿など）
- `btn-secondary`: サブアクション
- `btn-outline`: アウトライン版（控えめなアクション）
- `btn-soft`: ソフトな見た目（v5新機能）
- `btn-ghost`: 透明背景
- `btn-link`: リンク見た目

### 2. カード（Card）

#### 基本構造
```html
<div class="card bg-base-100 shadow-sm">
  <figure><!-- 画像エリア --></figure>
  <div class="card-body">
    <h2 class="card-title">タイトル</h2>
    <p>コンテンツ</p>
    <div class="card-actions justify-end">
      <!-- アクションボタン -->
    </div>
  </div>
</div>
```

#### ブログ記事カード推奨クラス
- **コンテナ**: `card bg-base-100 shadow-sm hover:shadow-md transition-shadow`
- **タイトル**: `card-title text-lg font-semibold`
- **メタ情報**: `text-sm text-base-content/70`
- **タグエリア**: `card-actions justify-end gap-2`

### 3. バッジ・タグ（Badge）

#### カテゴリタグ
```html
<div class="badge badge-outline badge-primary">Technology</div>
<div class="badge badge-soft badge-secondary">Tutorial</div>
```

#### 状態表示
- `badge-outline`: 基本的なカテゴリタグ
- `badge-soft`: 目立たせたいタグ（v5新機能）
- `badge-ghost`: 控えめなタグ

### 4. ナビゲーション（Navigation）

#### メインナビゲーション
```html
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <!-- ロゴ・ブランド -->
  </div>
  <div class="navbar-center hidden lg:flex">
    <!-- デスクトップメニュー -->
  </div>
  <div class="navbar-end">
    <!-- 検索・ユーザーメニュー -->
  </div>
</div>
```

#### メニューコンポーネント
```html
<ul class="menu menu-horizontal">
  <li><a>ホーム</a></li>
  <li><a>記事一覧</a></li>
  <li><a>について</a></li>
</ul>
```

### 5. アバター（Avatar）

#### プロフィール表示
```html
<div class="avatar">
  <div class="w-20 rounded-full">
    <img src="profile.jpg" alt="プロフィール画像" />
  </div>
</div>
```

#### サイズガイドライン
- **w-8**: 小さなコメント表示
- **w-12**: リスト内表示
- **w-20**: プロフィールエリア
- **w-24**: 著者紹介

### 6. 区切り線（Divider）

#### セクション間区切り
```html
<div class="divider">関連記事</div>
```

#### バリエーション
- テキストなし: `<div class="divider"></div>`
- テキスト付き: `<div class="divider">セクション名</div>`
- カラー指定: `divider-primary`, `divider-neutral`

### 7. アラート（Alert）

#### 通知表示
```html
<div role="alert" class="alert alert-info">
  <svg class="h-6 w-6 shrink-0 stroke-current">...</svg>
  <span>情報メッセージ</span>
</div>
```

#### 用途別クラス
- `alert-info`: 一般的な情報
- `alert-success`: 成功通知
- `alert-warning`: 注意喚起
- `alert-error`: エラー表示

## レイアウトパターン

### 1. ページレイアウト

#### コンテナ
```html
<main class="container mx-auto px-4 py-8 max-w-4xl">
  <!-- コンテンツ -->
</main>
```

#### セクション
```html
<section class="py-12">
  <h2 class="text-2xl font-semibold mb-6">セクションタイトル</h2>
  <!-- セクションコンテンツ -->
</section>
```

### 2. グリッドレイアウト

#### レスポンシブカードグリッド
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- カード要素 -->
</div>
```

#### 記事リスト
```html
<div class="space-y-6">
  <!-- 記事カード要素 -->
</div>
```

## レスポンシブ対応指針

### ブレークポイント活用
- **mobile-first**: 基本スタイルはモバイル向け
- **sm: (640px+)**: 小さなタブレット
- **md: (768px+)**: タブレット
- **lg: (1024px+)**: デスクトップ
- **xl: (1280px+)**: 大画面

### モバイル対応
- タッチターゲットサイズ: 最小44px
- ナビゲーション: ハンバーガーメニュー
- カード: 単列レイアウト

## アクセシビリティガイドライン

### セマンティックHTML
- 適切なheading階層（h1→h2→h3）
- `role="alert"`でアラート表示
- `aria-label`でボタンの説明

### フォーカス管理
- キーボードナビゲーション対応
- フォーカス表示の確保
- タブ順序の論理性

## パフォーマンス最適化

### クラス命名原則
- DaisyUIコンポーネントクラスを基本とする
- Tailwindユーティリティで微調整
- カスタムCSSは最小限に抑制

### バンドルサイズ最適化
- 未使用コンポーネントクラスの排除
- 必要最小限のテーマ設定
- CSS変数活用でランタイム変更対応

## テーマカスタマイズ

### CSS変数設定例
```css
:root {
  --color-primary: oklch(55% 0.3 240);
  --color-primary-content: oklch(98% 0.01 240);
  --radius-box: 1rem;
  --radius-field: 0.5rem;
}
```

### ダークモード対応
```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
```

このスタイルガイドに従うことで、統一感のある高品質なユーザーインターフェースを構築できます。