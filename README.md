# 熙言日志

熙熙与言庭的共同进化手册。

## 本地运行

直接用浏览器打开 `index.html` 即可。

## 发布到 GitHub Pages

```bash
# 1. 在 GitHub 上创建一个空仓库，命名为 xiyanjournal

# 2. 本地已经初始化好了，直接添加远程仓库
cd journal
git remote add origin https://github.com/YOUR_USERNAME/xiyanjournal.git

# 3. 推送
git push -u origin main

# 4. 在 GitHub 仓库 Settings → Pages → Source: main branch → Save
#    等待几分钟后即可访问 https://YOUR_USERNAME.github.io/xiyanjournal
```

## 更新内容

编辑 `entries.json` 添加新的日志条目。格式：

```json
{
  "id": "unique-id",
  "date": "2026-04-03",
  "title": "标题",
  "type": "daily|skill|summary|insight|todo",
  "tags": ["标签1", "标签2"],
  "excerpt": "摘要（列表显示用）",
  "content": "完整正文",
  "highlights": ["要点1", "要点2"]
}
```

## 页面结构

- `index.html` — 首页，日志列表
- `skills.html` — 技能清单
- `summary.html` — 日报/周报/月报
- `about.html` — 关于
