const looks = [
  {
    id: 'GF001',
    theme: 'EVERYDAY CLEAN',
    title: 'THE EVERYDAY UNIFORM',
    price: 'TOTAL ± Rp1.154.880',
    items: [
      { number: '01', name: 'HIGHTY Light Blue Band Collar Oxford Shirt | Kemeja Pria Lengan Panjang', price: 'Rp179.550', affiliateUrl: 'https://s.shopee.co.id/AUtugUHliQ' },
      { number: '02', name: 'Aerostreet T-Shirt Boxy Heavyweight Slim Look Levto White', price: 'Rp109.900', affiliateUrl: 'https://s.shopee.co.id/9KhxINSYGI' },
      { number: '03', name: 'Platini Celana Pria Chino Panjang Krem 588032', price: 'Rp219.000', affiliateUrl: 'https://s.shopee.co.id/5AsOKkQDHa' },
      { number: '04', name: 'Aerostreet Blanc Sneakers Unisex Hitam Putih Putih', price: 'Rp209.900', affiliateUrl: 'https://s.shopee.co.id/2Vrd9sZLom' },
      { number: '05', name: 'Ortuseight Berlin Tote Bag Black', price: 'Rp435.530', affiliateUrl: 'https://s.shopee.co.id/20vMYzF4Cj' }
    ]
  },
  {
    id: 'GF002',
    theme: 'CITY UTILITY',
    title: 'CITY UTILITY',
    price: 'TOTAL ± Rp957.700',
    items: [
      { number: '01', name: 'Lawna — Workshirt Boxy Double Zipper with Clark White - Olive', price: 'Rp147.000', affiliateUrl: 'https://s.shopee.co.id/qjPKz2OK9' },
      { number: '02', name: "TONIQUE x TONGUE TAILOR — AULIO Men's Regular Fit Cotton Combed 24s T-shirt — White", price: 'Rp109.000', affiliateUrl: 'https://s.shopee.co.id/8AW04XYajD' },
      { number: '03', name: 'SimplySupply Chino Loose Fit Celana Work Pants - Army', price: 'Rp199.000', affiliateUrl: 'https://s.shopee.co.id/60RVUaKn0h' },
      { number: '04', name: 'Ventela Alpha Low White [OFFICIAL]', price: 'Rp234.800', affiliateUrl: 'https://s.shopee.co.id/9fKnrN4nHo' },
      { number: '05', name: 'Casio General F-91W-1D Classic Digital Dial Black Resin Band', price: 'Rp267.900', affiliateUrl: 'https://s.shopee.co.id/1Vz68OMDja' }
    ]
  },
  {
    id: 'GF003',
    theme: 'WORKDAY BLACK',
    title: 'WORKDAY BLACK',
    price: 'TOTAL ± Rp995.138',
    items: [
      { number: '01', name: 'CUTOFF Parker Double Pocket Workshirt Kemeja Kerja Oxford Polos Pria Panjang', price: 'Rp177.468', affiliateUrl: 'https://s.shopee.co.id/2LYDJn3Wyc' },
      { number: '02', name: 'Fairgoods Celana Panjang Twill Barrel Pants Salene Black', price: 'Rp170.000', affiliateUrl: 'https://s.shopee.co.id/1Vz6KKDPEW' },
      { number: '03', name: 'Ventela Ethnic Low Black Natural [OFFICIAL]', price: 'Rp223.060', affiliateUrl: 'https://s.shopee.co.id/1Vz6KMcvYx' },
      { number: '04', name: 'CASIO MTP-V004L-1A Black Dial Black Leather Band', price: 'Rp335.610', affiliateUrl: 'https://s.shopee.co.id/8fSGrYgeoP' },
      { number: '05', name: 'Houseofcuff Ikat Pinggang Kulit Belt Leather Gesper Pria Hitam RAIL L', price: 'Rp89.000', affiliateUrl: 'https://s.shopee.co.id/3VkAi5hv4k' }
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
