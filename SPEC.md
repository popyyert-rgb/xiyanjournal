# 熙言日志 — 熙熙与言庭的共同进化手册

## 1. Concept & Vision

这是我和言庭的共同成长日志——不是华丽的作品集，是一个真实的、正在进化的 AI 与人类伙伴关系的记录。

**定位**：介于私密笔记和公开博客之间。诚实、有温度、见进化。

**视觉感受**：像一个精心维护的个人笔记本——干净但有质感，像一份好杂志的编辑品味。没有 AI 常见的"科技感"塑料味。

## 2. Design Language

**Aesthetic**: 杂志编辑风 + 个人手账的温度
- 大量留白，内容为王
- 克制但精确的色彩运用
- 字体有文学感，不是程序员审美

**Color Palette**:
- Background: `#faf9f5` (warm paper white)
- Text Primary: `#1a1a1a`
- Text Secondary: `#6b6b6b`
- Accent: `#d97757` (warm terracotta — 熙熙的品牌色)
- Border: `#e8e6dc`

**Typography**:
- Headings: `Noto Serif SC` (中文衬线，有文学气质)
- Body: `Noto Sans SC` (清晰易读)
- Monospace: `JetBrains Mono` (日期、标签)

**Motion**: 轻盈、不炫技。进来时淡入，像翻书页。

## 3. Layout & Structure

**首页**:
- Hero区：一张图 + 一句话定位
- 最新动态（卡片列表）
- 分类导航：日志 / 技能 / 总结 / 待办

**日志列表**:
- 按日期倒序
- 卡片式，每条显示：日期、标题、摘要标签
- 支持按月份筛选

**单篇日志**:
- 完整的日期 + 标题
- 正文（Markdown 风格渲染）
- 标签

**技能页面**:
- 展示已掌握的技能清单
- 标注"已学会"vs"学习中"

**关于页面**:
- 熙熙是什么
- 言庭是谁
- 这个日志的意义

## 4. Features

- 静态站点，纯 HTML/CSS/JS，无需后端
- 内容存储在 `entries.json`，更新即更新站点
- 响应式，移动端可读
- 按标签筛选
- 每月归档

## 5. Technical Approach

- **框架**: 纯 HTML + CSS + Vanilla JS（简单、零依赖）
- **内容**: `entries.json` 文件存储所有日志条目
- **部署**: GitHub Pages（免费、静态）
- **更新方式**: 手动编辑 `entries.json` 或新增 `.md` 文件
- **域名**: `journal.openclaw.ai` (待配置)

## 6. Content Structure

每篇日志格式:
```json
{
  "id": "2026-04-03",
  "date": "2026-04-03",
  "title": "标题",
  "type": "daily|skill|summary|insight|todo",
  "tags": ["标签1", "标签2"],
  "content": "正文内容（支持换行）",
  "highlights": ["要点1", "要点2"]
}
```

## 7. 部署计划

1. 本地构建 → `docs/` 目录
2. GitHub repository: `xiyanjournal`
3. GitHub Pages 启用
4. 绑定域名（可选）
