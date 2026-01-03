---
pubDatetime: 2026-01-03T01:52:06.592+09:00
modDatetime:
title: 個人的2025年AIコーディングエージェント振り返り
featured: false
draft: false
tags:
  - tech
  - ai
description: ""
---

個人的に昨年（2025年）はAIコーディングエージェント（以下 AI Agent）の利用が進んだ一年だった。
ツールや参考にした記事、作ったものを振り返る。

## 時系列

### 以前

- VS Code Copilot の 自動補完を利用
- ChatGPTやClaudeに課金してコーディングの相談

### 2月

- AI Agent を利用し始める
- [VS Code Copilot Edits が GA になる](https://github.blog/jp/2025-02-07-github-copilot-the-agent-awakens/)
  - 仕事でUI実装、単体テスト記述に活用。AIに渡す参考用コードやコンテキストが重要なことがわかった
- 印象に残った記事
  - [CLINEに全部賭けろ](https://zenn.dev/mizchi/articles/all-in-on-cline)

### 3月

- Cline + VS Code LM API, Roo Code を試した
  - Memory Bank とか試してた。今はもう使ってない
- ツールを作ってzenn 記事を書いた
  - [Web ページを Markdown に変換する CLI を GitHub Copilot と Bun で作ってみた](https://zenn.dev/hush_in/articles/github-copilot-edits-webpage-to-md-with-bun)
    - 今は `#fetch` tool があるので不要だが、勉強にはなった
  - [Copilot Edits の機能を補うscript, promptを試している](https://zenn.dev/bm_sms/articles/enhancing-copilot-edits-with-scripts-and-prompts)
    - git clone して ドキュメント参照させるのは今でも使っている。 context7 MCP などあるがなんやかんや手元にドキュメントあると安心感がある
- Roo Code でWeb FEスタック試した
  - https://github.com/hushin-sandbox/try-rsbuild-tanstack
  - Valibot とか TanStack など ドキュメント参照させつつ
- 過集中で眠りが浅く体調悪くなった

### 4月

- AIルールテンプレート作った
  - https://github.com/hushin-sandbox/ai-rules-template
  - 参考記事
    - [Project Rules や .clinerules や CLAUDE.md をまとめて管理する - yaakai.to](https://yaakai.to/blog/2025/rule-files-unified-management)
    - https://github.com/mizchi/ailab
- Cursor を試した
- MCPを理解するため、MCPサーバをDenoで作って試した
  - https://github.com/hushin-sandbox/try-mcp

### 6月

- Claude Code が盛り上がっていたので個人で Claude Pro を年間契約した
- 当時 [Claude 4](https://www.anthropic.com/news/claude-4) が良かった気がする
- Vibe Coding でいろいろ作り始める
  - https://github.com/hushin-sandbox/geoguessr-study-app
    - https://hushin-sandbox.github.io/geoguessr-study-app/
    - 当時GeoGuessr にハマってて学習用アプリを作ろうとした
  - https://github.com/hushin-sandbox/template-fuse-fs
    - golang 全くわからず動くところまで確認したがその後使ってない
- [FRENZ](https://frenz.jp/) のサイトや応募フォームのリファクタリングや作成に活用
  - 素朴なHTMLなフォームからReact, React Hook Form 導入してバリデーション強化
  - 95%くらい自動で移行できたが、変な誤字を発見してLLMの不確実さを実感する

### 7月

- 仕事でもClaude Codeを使い始める
- dotfiles で ちょっとしたScriptを作成するのに活用
  - bash shell script と同様のコードを PowerShell で作ったり

### 8月

- Claude Code 性能低下
  - そこまで使っていなかったこともあり、あまり感じなかった
  - 9月にバグだったことが発表される
    - [A postmortem of three recent issues \ Anthropic](https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues)
- ポモドーロタイマー
  - https://github.com/hushin-sandbox/pomodoro-timer-browser-extension
  - 動作が微妙なので作り直したい

### 10月

- worktree

### 11月

- Codex
- Chrome DevTools MCP
- Antigravity org-閲覧アプリ
- Copilot
  - Opus 4.5 いいぞ

### 12月

- whisper app

## 用語

- Agentic Coding
- ブレーキ
- コンテキストエンジニアリング

## わかったこと

- AIによって取っ掛かりはやりやすくなったものの production ready な品質まで持っていくのは時間がかかり、中途半端な状態で残ってしまう
- いかにAIが確認できる環境を作るか
  - まずは再現手順
- MCP にこだわりすぎない。CLIでも良い
