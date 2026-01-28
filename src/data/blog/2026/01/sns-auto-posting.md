---
pubDatetime: 2026-01-28T23:30:00.000+09:00
modDatetime:
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

設定したコミット

- [9643efc](https://github.com/hushin/zatsuni.dev/commit/9643efc)
- [cc17672](https://github.com/hushin/zatsuni.dev/commit/cc17672)
- [4cfd0b0](https://github.com/hushin/zatsuni.dev/commit/4cfd0b0)

main ブランチに記事をpushすると、X と Bluesky に自動投稿される。
両方のプラットフォームへの投稿が成功したら、記事のfrontmatterに `sns_shared: true` を追記してコミットする。

ライブラリ選定が面倒だったので標準の Node.js で動くように Vibe Coding で作った。

---

これで記事を書くことに集中でき、投稿し忘れもなくなった。

…と、この記事を作って実際に投稿できているか試している。
