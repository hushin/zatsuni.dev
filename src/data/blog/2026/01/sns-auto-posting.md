---
pubDatetime: 2026-01-28T22:30:00.000+09:00
modDatetime: 2026-01-29T08:44:13.000+09:00
title: ブログを書いたらSNSに自動投稿されるようにした
featured: false
draft: false
tags:
  - tech
  - github-actions
description: "GitHub Actionsでブログ記事をX（Twitter）とBlueskyに自動投稿する仕組みを設定した記録"
sns_shared: true
---

ブログ記事を書いたあと、手動でX（Twitter）とBlueskyに投稿するのが面倒だった。

記事を公開すると自動的にSNSにシェアされるようにしたいと思い、GitHub Actionsで自動投稿の仕組みを作った。

初回設定したコミットは[こちら](https://github.com/hushin/zatsuni.dev/commit/9643efc)

その後細かく改良している ([src](https://github.com/hushin/zatsuni.dev/tree/main/.github))

main ブランチに記事をpushすると、X と Bluesky に自動投稿される。
両方のプラットフォームへの投稿が成功したら、記事のfrontmatterに `sns_shared: true` を追記してコミットする。

ライブラリ選定が面倒だったので標準の Node.js で動くように Vibe Coding で作った。

## セットアップ備忘録

### X (Twitter) API キーの取得方法

1. [X Developer Console](https://console.x.com/) にアクセス
2. X アカウントでログイン
3. 「Apps」→「+ Create App」
4. 各種シークレットを取得 （OAuth 1.0 Keys のものを使用）
5. 「Credits」→「Purchase credits」で最低 $5 チャージしておく

### Bluesky アプリパスワードの取得方法

1. [Bluesky](https://bsky.app/) にアクセス
2. 自分のアカウントでログイン
3. 設定を開く
4. プライバシーとセキュリティを選択
5. アプリパスワードを選択
6. アプリパスワードを追加をクリック

### GitHub Secrets への登録

1. GitHub リポジトリページを開く
2. 「Settings」タブをクリック
3. 左メニューの「Secrets and variables」→「Actions」を選択
4. 「New repository secret」をクリック
5. 各 Secret を登録：

| Secret名               | 説明                                         |
| ---------------------- | -------------------------------------------- |
| `X_API_KEY`            | X API Key (Consumer Key)                     |
| `X_API_SECRET`         | X API Secret (Consumer Secret)               |
| `X_ACCESS_TOKEN`       | X Access Token                               |
| `X_ACCESS_SECRET`      | X Access Token Secret                        |
| `BLUESKY_IDENTIFIER`   | Blueskyハンドル (例: `username.bsky.social`) |
| `BLUESKY_APP_PASSWORD` | Bluesky App Password                         |

## 学んだこと

- X の投稿には $0.01 かかる
  - 最初試したら `402 Payment Required` が返ってきた
  - https://docs.x.com/x-api/getting-started/pricing
  - 無料枠がなくなって完全に従量課金制になったっぽい？
  - [【2026年1月最新版】X APIでPOST投稿する方法｜新規アカウントは$5課金が必須](https://zenn.dev/acntechjp/articles/4de3d142aaa05e)
- Bluesky の URLやハッシュタグを有効にするにはリッチテキストで扱う必要がある
  - https://docs.bsky.app/docs/advanced-guides/post-richtext

## まとめ

この記事を作って試して、実際に動いていることを確認した。

これで記事を書くことに集中でき、投稿し忘れもなくなった。
