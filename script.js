const looks = [
  {
    id: 'GF001',
    title: 'THE EVERYDAY UNIFORM',
    theme: 'Everyday neutrals',
    price: 'Curated from accessible everyday pieces',
    image: '',
    items: [
      {
        number: '01',
        name: 'Light Blue Striped Oxford Shirt',
        price: 'See current listing',
        affiliateUrl: null,
        note: 'Shopee source found; affiliate link still needs verification in the Shopee Affiliate dashboard.'
      },
      {
        number: '02',
        name: 'White Crew-Neck Tee',
        price: 'See current listing',
        affiliateUrl: null,
        note: 'Official-store candidates found; affiliate link still needs verification.'
      },
      {
        number: '03',
        name: 'Beige Wide-Leg / Chino Trousers',
        price: 'See current listing',
        affiliateUrl: null,
        note: 'Trusted official-store candidates found; affiliate link still needs verification.'
      },
      {
        number: '04',
        name: 'Clean White Low-Top Sneakers',
        price: 'See current listing',
        affiliateUrl: null,
        note: 'AEROSTREET Official Shop Mall product candidate found; affiliate link still needs verification.'
      },
      {
        number: '05',
        name: 'Black Canvas Tote',
        price: 'See current listing',
        affiliateUrl: null,
        note: 'Official/Mall candidates found; affiliate link still needs verification.'
      }
    ]
  }
];

const grid = document.querySelector('#lookGrid');
const count = document.querySelector('.section-count');

function renderLooks() {
  if (!looks.length) {
    if (count) count.textContent = '00 LOOKS';
    grid.innerHTML = `
      <div class="empty-state">
        <p class="eyebrow">COMING SOON</p>
        <h3>THE FIRST FIND<br><em>IS ALMOST HERE.</em></h3>
        <p>Our first GOODFIND look is being prepared. Check back soon.</p>
      </div>
    `;
    return;
  }

  if (count) count.textContent = `${String(looks.length).padStart(2, '0')} LOOKS`;

  grid.innerHTML = looks.map((look) => `
    <article class="look-card">
      <button class="look-trigger" type="button" aria-expanded="false">
        <div class="look-meta">
          <span class="look-id">${look.id}</span>
          <span class="look-theme">${look.theme}</span>
        </div>
        <div class="look-title-row">
          <h3>${look.title}</h3>
          <span class="look-arrow">↘</span>
        </div>
        <div class="look-line"></div>
      </button>

      <div class="breakdown" hidden>
        <div class="breakdown-head">
          <div>
            <p class="eyebrow">THE BREAKDOWN</p>
            <p class="breakdown-sub">Exact pieces behind ${look.id}.</p>
          </div>
          <span class="look-price">${look.price}</span>
        </div>

        <ol class="item-list">
          ${look.items.map((item) => `
            <li class="item-row">
              <span class="item-number">${item.number}</span>
              <div class="item-main">
                <strong>${item.name}</strong>
                <span>${item.price}</span>
              </div>
              ${item.affiliateUrl ? `
                <a class="shop-link" href="${item.affiliateUrl}" target="_blank" rel="noopener noreferrer">SHOP ↗</a>
              ` : `
                <span class="shop-link is-disabled" aria-label="Affiliate link not verified">LINK PENDING</span>
              `}
            </li>
          `).join('')}
        </ol>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.look-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      const breakdown = button.parentElement.querySelector('.breakdown');
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      breakdown.hidden = isOpen;
    });
  });
}

renderLooks();
