---
pubDatetime: 2026-01-04T21:00:06.592+09:00
modDatetime: 2026-01-12T11:00:27.000+09:00
title: 2025年 個人的AIコーディングエージェント振り返り
featured: false
draft: false
sns_shared: true
tags:
  - tech
  - ai
description: "2025年のAIコーディングエージェント活用を振り返る。開発スタイルの変化、使用ツール、学びをまとめた。"
---

昨年（2025年）は個人的にAIコーディングエージェント（以下 AI Agent）の利用が進んだ一年だった。
ツールや参考にした記事、作ったものを振り返る。

開発のスタイルはガラッと変わった。
春ごろは「これ使えるのか？」と思いつつAI Agentを試していたが、秋頃には直接コードを書く機会は減り、コンテキストを整理してAI Agent に投げて結果を待ち、レビューして修正（指示）するスタイルが定着した。

## 現在主に利用しているツール

- Agent
  - Claude Code
  - Copilot CLI
- Model
  - Claude Opus 4.5: 難しいタスク向け
  - Claude Sonnet 4.5: 明確なタスク向け

## 感想

AIによって仕事に取っ掛かりやすくなった。
チャットベースでアイデアを壁打ちし、良さそうなら整形して AI Agent に投げる。
製品ではないコード（趣味のコード、プロトタイプ、社内用ツール、ちょっとしたスクリプト）であれば品質をあまり気にしないので楽に作れる。時短にもなる。

製品コードは品質を気にするので、AI Agentの出力結果が正しいのか確認するのに時間がかかる。
8割の完成度が一瞬で出来上がり、残りの2割を埋めるのに時間と神経を使う。

### 仕組み化

最終的に人間のレビューが必要だと思うが、なるべくレビューの負担を減らす以下のような仕組みを構築していきたい。

- AIがローカルで動作確認できる環境作り、カスタムコマンド化
- プロパティベーステスト
- レビューAIエージェントの活用

また、LLMの出力は信用できないところがあるので、定型作業はscript化するなどなるべくLLMが介入しない形・レビュー可能な形にしたい。

### 学習

新しいツールや技術、ノウハウが日々生まれて刺激的で楽しい反面、情報を追うのに疲れてしまった。
情報を追うのはほどほどにして、数カ月単位で残っているものを都度調べて使えばいいと思うようになった。

AIは使う人の能力以上のものは作れないと言われている。
自分の能力以上のコードを書いてくれるかもしれないが、コードが理解できなければ仕事では責任が取れない。
AI活用で空いた時間を学習・手を動かすことに当て、自分の能力の幅を広げ、伸ばしたい。

## 時系列メモ

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
  - Rsbuild や TanStack, Valibot などあまり使ったこと無いライブラリを試した
- System Prompt どうなってるか興味を持った
- 過集中で眠りが浅く体調悪くなった

### 4月

- AIルールテンプレート作った
  - https://github.com/hushin-sandbox/ai-rules-template
  - 参考記事
    - [Project Rules や .clinerules や CLAUDE.md をまとめて管理する - yaakai.to](https://yaakai.to/blog/2025/rule-files-unified-management)
    - https://github.com/mizchi/ailab
- 1ヶ月程 Cursor を試した
  - VS Code の機能追加が多く追いついてきたこともあり、Cursor独自のメリットをあまり感じなかった
- MCPを理解するため、MCPサーバをDenoで作って試した
  - https://github.com/hushin-sandbox/try-mcp

### 6月

- Claude Code が盛り上がっていたので個人で Claude Pro を年間契約した
- 当時 [Claude 4](https://www.anthropic.com/news/claude-4) が良かった気がする
- Vibe Coding でいろいろ作り始める
  - https://github.com/hushin-sandbox/geoguessr-study-app
  - https://github.com/hushin-sandbox/template-fuse-fs
- [FRENZ](https://frenz.jp/) のサイトや応募フォームのリファクタリングや作成に活用
  - 素朴なHTMLなフォームからReact, React Hook Form 導入してバリデーション強化
  - 95%くらい自動で移行できたが、変な誤字を発見してLLMの不確実さを実感する

### 7月

- 仕事でもClaude Codeを使い始める
  - 実装、リファクタリング、テスト
  - 既存コードの調査、ドキュメント化、mermaidのシーケンス図作成
- dotfiles で ちょっとしたScriptを作成するのに活用
  - bash shell script と同様のコードを PowerShell で作ったり
- 世間でホームディレクトリが消された人が出てきたり、セキュリティを気にするようになった

### 8月

- Claude Code 性能低下
  - そこまで使っていなかったこともあり、あまり感じなかった
  - 9月にバグだったことが発表される
    - [A postmortem of three recent issues \ Anthropic](https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues)
- [このサイト](https://github.com/hushin/zatsuni.dev/) のリニューアルに利用
  - カスタムサブエージェントでFE UIコーダー定義
- ポモドーロタイマー作った
  - https://github.com/hushin-sandbox/pomodoro-timer-browser-extension
  - 動作が微妙なのであまり使っていない

### 10月

- Git worktree を使った並行開発を試す
  - コンテキストの切り替えが疲れるのであまり並行にはできていない
- Copilot CLI
  - GitHub Copilot Business の Premium requests を余らせていたので実験がてら触った
  - jira-cli を設定しておき、 Jira URL を渡してバグ修正やリファクタリングに利用
  - 機能は少ないが、コスト安く使えるのが良い
- 印象に残った記事
  - [AI駆動開発大阪支部で「詳しくない分野でのVibe Codingで困ったことと学び」を発表してきました - $shibayu36->blog;](https://blog.shibayu36.org/entry/2025/10/01/180000)
    - > 基礎知識だけは学ぶしかないが、AIを使って高速に学べる

### 11月

- Antigravity + Gemini 3 Pro で Dropbox にある orgファイルを閲覧するWebアプリを作った
  - https://github.com/hushin/orgdrop
  - org-mode パーサーは既存のライブラリ使わずに独自実装
  - Cloudflare Workers に deploy してたまに使っている
    - Cloudflare Workers の開発環境についてあまりわからず作ったのでごちゃっとしている。ちゃんと作り込むならチュートリアルとかで触ったあとに指示したい
- 個人でChatGPT Plus に1ヶ月入って Codex を少し試したが、あまり使えず評価できていない
- Chrome DevTools MCP 使ってWeb FEのデバッグをしたり、ちょっとした userscript を書かせた
- Claude Opus 4.5 が出てきた
  - 難しめのタスクを依頼しても結構やってくれる
- Web版 の Claude Code,Codex Cloud, Copilot Agentを使って Jekyll to Astro の移行を試した
  - PR作ったきり動作確認できておらず放置中…
- 印象に残った記事
  - [【t-wadaさん, 一休CTO, LayerX】AI時代の開発スピードと品質 / 本当の意味で開発生産性を上げるために必要なこと - YouTube](https://www.youtube.com/watch?v=MhPAZW-oMKs)
    - 業務システムだと人間・チームがモデル設計、理解するのが大事で、そこのAI活用は限定的
  - [コーディングAIエージェントよりも強いソフトウェアエンジニアになる方法｜ゆいせき](https://note.com/yuiseki/n/nddb2ed720862)
    - > 1.1. 「どのリポジトリのどのファイルのどの行でどのような処理が行われているか」を、意図まで含めて、すべて把握する
  - [Writing a good CLAUDE.md | HumanLayer Blog](https://www.humanlayer.dev/blog/writing-a-good-claude-md)

### 12月

- Claude Code + Claude Opus 4.5 で Whisper を使った ローカル音声入力アプリを作成
  - [Whisperを使った無料のローカル音声入力アプリを作った | 雑にdev](/posts/2026/01/local-whisper-voice-input/)
- Copilot CLI で Claude Opus 4.5 が 3 Premium requests で使えるのがコスパ良い
  - 自律的に進められる難しいタスクを任せられるとお得
- 印象に残った記事
  - [たかが特別な時間の終わり / It's Only the End of Special Time - Speaker Deck](https://speakerdeck.com/watany/its-only-the-end-of-special-time)
