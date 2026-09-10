const looks = [
  {
    id: 'GF003',
    name: 'THE MODERN CLASSIC',
    theme: 'One shirt. Endless days.',
    items: [
      { name: 'Oxford Shirt', meta: 'Light Blue Stripe · Relaxed Fit', price: 'IDR 199.000', url: 'YOUR_AFFILIATE_LINK_01' },
      { name: 'Basic Tee', meta: 'White · Regular Fit', price: 'IDR 129.000', url: 'YOUR_AFFILIATE_LINK_02' },
      { name: 'Wide Chino Pants', meta: 'Beige · Relaxed Fit', price: 'IDR 249.000', url: 'YOUR_AFFILIATE_LINK_03' },
      { name: 'Sneakers', meta: 'White · Everyday Runner', price: 'IDR 1.799.000', url: 'YOUR_AFFILIATE_LINK_04' },
      { name: 'Canvas Tote Bag', meta: 'Black · Minimal Design', price: 'IDR 159.000', url: 'YOUR_AFFILIATE_LINK_05' }
    ]
  },
  { id: 'GF002', name: 'THE DAILY ESSENTIAL', theme: 'Simple pieces. Better possibilities.', items: [] },
  { id: 'GF001', name: 'CLEAN WEEKEND', theme: 'Easy layers for off-duty days.', items: [] }
];

const grid = document.querySelector('#lookGrid');
const modal = document.querySelector('#breakdownModal');
const modalId = document.querySelector('#modalId');
const modalTitle = document.querySelector('#modalTitle');
const modalTheme = document.querySelector('#modalTheme');
const modalItems = document.querySelector('#modalItems');

function renderLooks() {
  grid.innerHTML = looks.map((look, index) => `
    <article class="look-card" data-index="${index}">
      <div class="look-image image-placeholder">LOOK IMAGE<br><small>${look.id}</small></div>
      <p class="look-id">GOODFIND ID · ${look.id}</p>
      <h2>${look.name}</h2>
      <p>${look.theme}</p>
      <span class="view">View breakdown →</span>
    </article>
  `).join('');
  document.querySelectorAll('.look-card').forEach(card => card.addEventListener('click', () => openLook(Number(card.dataset.index))));
}

function openLook(index) {
  const look = looks[index];
  modalId.textContent = `GOODFIND ID · ${look.id}`;
  modalTitle.textContent = look.name;
  modalTheme.textContent = look.theme;
  modalItems.innerHTML = look.items.length
    ? look.items.map((item, i) => `
      <a class="item" href="${item.url}" target="_blank" rel="noopener noreferrer">
        <div class="item-image image-placeholder">0${i + 1}</div>
        <div><strong>${item.name}</strong><small>${item.meta}<br>${item.price}</small></div>
        <b>↗</b>
      </a>
    `).join('')
    : '<p class="modal-theme">Breakdown coming soon.</p>';
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });
renderLooks();
