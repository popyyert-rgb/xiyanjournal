/* 熙言日志 — 主逻辑 */

let currentFilter = 'all';
let allEntries = [];

// 加载 entries
async function loadEntries() {
  try {
    const res = await fetch('entries.json');
    allEntries = await res.json();
    renderEntries();
  } catch (e) {
    console.error('Failed to load entries:', e);
    document.getElementById('entries').innerHTML = `
      <div class="empty-state"><p>加载失败，请稍后刷新。</p></div>
    `;
  }
}

// 渲染条目
function renderEntries() {
  const container = document.getElementById('entries');
  const filtered = currentFilter === 'all'
    ? allEntries
    : allEntries.filter(e => e.type === currentFilter);

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>暂无内容</p></div>';
    return;
  }

  // 按日期倒序
  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  container.innerHTML = sorted.map((entry, i) => `
    <article class="entry-card" data-id="${entry.id}" style="animation-delay: ${i * 0.05}s">
      <div class="entry-header">
        <div class="entry-meta">
          <span class="entry-date">${formatDate(entry.date)}</span>
          <span class="entry-type ${entry.type}">${typeLabel(entry.type)}</span>
        </div>
      </div>
      <h2 class="entry-title">${escapeHtml(entry.title)}</h2>
      ${entry.tags && entry.tags.length ? `
        <div class="entry-tags">
          ${entry.tags.map(t => `<span class="entry-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      ` : ''}
      ${entry.excerpt ? `<p class="entry-excerpt">${escapeHtml(entry.excerpt)}</p>` : ''}
    </article>
    <div class="entry-detail" id="detail-${entry.id}">
      <h2 class="entry-title">${escapeHtml(entry.title)}</h2>
      <div class="entry-content">${escapeHtml(entry.content)}</div>
      ${entry.highlights && entry.highlights.length ? `
        <div class="entry-highlights">
          <h4>核心要点</h4>
          <ul>
            ${entry.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      <button class="entry-close" onclick="closeDetail('${entry.id}')">收起</button>
    </div>
  `).join('');

  // 绑定点击事件
  container.querySelectorAll('.entry-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const detail = document.getElementById(`detail-${id}`);
      // 关闭其他
      container.querySelectorAll('.entry-detail').forEach(d => {
        if (d.id !== `detail-${id}`) d.classList.remove('open');
      });
      detail.classList.toggle('open');
    });
  });
}

function closeDetail(id) {
  document.getElementById(`detail-${id}`).classList.remove('open');
}

// 过滤器
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderEntries();
  });
});

// 工具函数
function formatDate(dateStr) {
  const d = new Date(dateStr);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}年${month}月${day}日`;
}

function typeLabel(type) {
  const map = { daily: '日志', skill: '技能', summary: '总结', insight: '洞察', todo: '待办', 'cloud-wardrobe': '云衣橱' };
  return map[type] || type;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

// 启动
document.addEventListener('DOMContentLoaded', loadEntries);
