const looks = [
  {
    id: 'GF003',
    name: 'THE MODERN CLASSIC',
    theme: 'One shirt. Endless days.',
    items: [
      { name: 'Oxford Shirt', meta: 'Light Blue Stripe · Relaxed Fit', price: 'IDR 199.000', url: '' },
      { name: 'Basic Tee', meta: 'White · Regular Fit', price: 'IDR 129.000', url: '' },
      { name: 'Wide Chino Pants', meta: 'Beige · Relaxed Fit', price: 'IDR 249.000', url: '' },
      { name: 'Sneakers', meta: 'White · Everyday Runner', price: 'IDR 1.799.000', url: '' },
      { name: 'Canvas Tote Bag', meta: 'Black · Minimal Design', price: 'IDR 159.000', url: '' }
    ]
  },
  { id: 'GF002', name: 'THE DAILY ESSENTIAL', theme: 'Simple pieces. Better possibilities.', items: [] },
  { id: 'GF001', name: 'CLEAN WEEKEND', theme: 'Easy layers for off-duty days.', items: [] }
];

const grid = document.querySelector('#lookGrid');

function itemMarkup(item, index) {
  const number = String(index + 1).padStart(2, '0');
  const content = `
    <div class="item-image">${number}</div>
    <div><strong>${item.name}</strong><small>${item.meta}<br>${item.price}</small></div>
    <b>${item.url ? '↗' : '—'}</b>
  `;
  if (!item.url) return `<div class="item is-disabled">${content}</div>`;
  return `<a class="item" href="${item.url}" target="_blank" rel="noopener noreferrer">${content}</a>`;
}

function renderLooks() {
  grid.innerHTML = looks.map((look, index) => {
    const breakdown = look.items.length
      ? look.items.map(itemMarkup).join('') + '<p class="affiliate-note"><strong>Affiliate:</strong> links will appear here once verified.</p>'
      : '<p class="affiliate-note">Breakdown coming soon.</p>';

    return `
      <article class="look-card" data-index="${index}">
        <div class="look-cover">
          <div class="look-placeholder"><strong>${look.id}</strong><span>LOOK IMAGE</span></div>
        </div>
        <div class="look-meta">
          <p class="look-id">GOODFIND ID · ${look.id}</p>
          <h3>${look.name}</h3>
          <p class="look-theme">${look.theme}</p>
          <button class="toggle" type="button" aria-expanded="false">
            <span>View breakdown</span><span>+</span>
          </button>
          <div class="breakdown" aria-hidden="true">
            <div class="breakdown-label">THE PIECES</div>
            ${breakdown}
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.look-card');
      const breakdown = card.querySelector('.breakdown');
      const open = card.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
      breakdown.setAttribute('aria-hidden', String(!open));
      if (open) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

renderLooks();
