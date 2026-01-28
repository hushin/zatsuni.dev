#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.dirname(__dirname);

function getCurrentDateTime() {
  const now = new Date();
  return now.toISOString().replace('Z', '+09:00');
}

async function createBlogPost() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('使用方法: pnpm new-post <slug>');
    console.error('例: pnpm new-post "new-blog-post"');
    process.exit(1);
  }

  const slug = args[0];
  const title = slug; // タイトルは後で編集
  const tags = ['tech']; // デフォルトタグ
  const now = new Date();
  const currentYear = now.getFullYear().toString();
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0');
  const currentDateTime = getCurrentDateTime();

  const postDir = path.join(rootDir, 'src', 'data', 'blog', currentYear, currentMonth);
  const postPath = path.join(postDir, `${slug}.md`);

  // ディレクトリを作成
  await fs.mkdir(postDir, { recursive: true });

  // ファイルが既に存在するかチェック
  try {
    await fs.access(postPath);
    console.error(`エラー: ファイル ${postPath} は既に存在します`);
    process.exit(1);
  } catch {
    // ファイルが存在しない場合は続行
  }

  const frontmatter = `---
pubDatetime: ${currentDateTime}
modDatetime:
title: ${title}
featured: false
draft: false
tags:
${tags.map(tag => `  - ${tag}`).join('\n')}
description: ''
sns_shared: false
---

書き出し...

## 見出し

`;

  await fs.writeFile(postPath, frontmatter, 'utf8');

  console.log(`✅ ブログ記事を作成しました: ${postPath}`);
  console.log(`🔗 スラッグ: ${slug}`);
  console.log(`🏷️  タグ: ${tags.join(', ')}`);
  console.log(`📁 パス: src/data/blog/${currentYear}/${currentMonth}/${slug}.md`);
}

createBlogPost().catch(console.error);
