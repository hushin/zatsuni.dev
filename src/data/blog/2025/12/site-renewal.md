---
pubDatetime: 2025-12-07T01:22:31.238+09:00
modDatetime:
title: Claude Codeを使って Astro v5, daisyUI v5 でサイトをリニューアル
featured: false
draft: false
sns_shared: true
tags:
  - tech
  - astro
description: ""
---

## 背景

8月末にサイトをリニューアルしたので備忘録として残す。（ブログ書くのが面倒で数カ月空いてしまった）

もともと [AstroPaper](https://github.com/satnaing/astro-paper) というAstro blogテーマをベースにサイトを作っていた。
Astro v4 から v5 へのアップデートを手作業で行うのが億劫に感じていたので、Claude Codeを使って再構築した。

## 作業の流れ

```sh
# 既存mainブランチのtagを作ってバックアップ
git tag -a backup-20250816 -m '20250816 リニューアル前'
git push origin backup-20250816

# orphan ブランチを切る
git checkout --orphan renewal
git rm -rf .

# astro セットアップ、 blog テンプレート選択
pnpm create astro@latest

# 作業してcommit

# renewal ブランチを main に置き換える
git branch -D main
git branch -m main
```

## 変更点

### Astro Content Loader API 対応

Astro v5 に上げたのでコンテンツ管理を [Content Loader API](https://docs.astro.build/en/reference/content-loader-reference/) に対応させた。

ついでに記事をフラットに管理していたのを年・月 ディレクトリを導入した。これで記事が増えても管理しやすくなった。
せめて月イチくらいでは書いていきたい。

### Tailwind CSS v4, daisyUI v5

スタイリングにあまり関心ないので、[daisyUI](https://daisyui.com/)のコンポーネントを使ってUI構築できて便利だった。ボタンやバッジ、モーダルなど揃っている。

不満があるとすれば primary color と リンク色がデフォルトだと一緒なのでprimaryが紫色だとリンク訪問済みに見えてしまうところくらい。

## Claude Code を活用

AI コーディングエージェントとして普段使っていたClaude Codeを使った。

- Astro Content Loader API 対応などドキュメント参照させてやらせた
- Agent などあまり使えていなかった機能も使ってみた
  - Tailwind CSS v4, daisyUI v5 は 古いバージョンで書いてしまうのでチートシート作って参照させた
- git worktree の並列開発も試してみたが、フロントエンドはUI触っての細かいフィードバックが多く、すぐに実装されるので2並列くらいが限界に感じた

---

ソースコードはここ
https://github.com/hushin/zatsuni.dev

以前のテンプレートを使っていたときはどこに何があるのかわからずあまりカスタマイズできていなかったが、
今回再構築したことで全体像が把握できたので今後カスタマイズしやすくなった。
