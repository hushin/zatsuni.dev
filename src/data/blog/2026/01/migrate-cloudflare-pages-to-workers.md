---
pubDatetime: 2026-01-27T00:04:51.662+09:00
modDatetime: 2026-02-19T21:40:00.000+09:00
title: Cloudflare Pages から Cloudflare Workers に移行した
featured: false
draft: false
sns_shared: true
tags:
  - tech
  - cloudflare
  - astro
description: ""
---

このサイトを Cloudflare Pagesから Cloudflare Workers に移行したのでメモ。

背景：今後[Astroのアップデート](https://astro.build/blog/astro-6-beta/)でCloudflare Workers対応があるので乗り換えようと思った。

## 移行手順

1.  設定追加
    - Wrangler v4を追加 `pnpm add -D wrangler`
    - [wrangler.jsonc](https://github.com/hushin/zatsuni.dev/blob/main/wrangler.jsonc) 設定ファイルを作成
      - compatibility_date は現在の日付
2.  Cloudflare ダッシュボードの Workers & Pages から 「アプリケーションを作成する」をクリックし、GitHub リポジトリを設定
    - 名前は Pages のものと重複しても問題なし
    - 詳細設定から 変数名 `TZ` 変数値 `Asia/Tokyo` を追加
      - これを設定しないと静的ビルド時の時間がずれる
3.  Workers で deploy したサイトの動作確認
4.  Pages の アプリケーション を削除
5.  Workersの設定の「ドメインとルート」からカスタムドメインを設定
6.  Web Analytics からサイトを追加し設定

## 迷ったこと

### `@astrojs/cloudflare` adapterは必要か

[Astro · Cloudflare Workers docs](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/) のテンプレートを試したところ、 `@astrojs/cloudflare` adapter を使ってオンデマンドレンダリングするためリクエストの枠を消費することを確認した。

試したリポジトリ: [hushin-sandbox/astro-cloudflare-workers](https://github.com/hushin-sandbox/astro-cloudflare-workers)

このサイトは現状静的なため adapter は不要。静的アセットのみで、Workers の無料枠内で運用できる。

### ドメイン切り替え

シームレスに切り替えたいと思い、最初DNS のCNAMEをworkersのドメインに変更したが動かなかった。
最終的に移行手順に書いたようにしたら動いた。

## 参考

- [Migrate from Pages to Workers · Cloudflare Workers docs](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/)
- [Deploy your Astro Site to Cloudflare | Docs](https://docs.astro.build/ja/guides/deploy/cloudflare/)
- [フロントエンド、バックエンド、データベースが1つのCloudflare Workerに](https://blog.cloudflare.com/ja-jp/full-stack-development-on-cloudflare-workers/)
