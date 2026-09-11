const looks = [];

const grid = document.querySelector('#lookGrid');

function renderLooks() {
  if (!looks.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <p class="eyebrow">COMING SOON</p>
        <h3>THE FIRST FIND<br><em>IS ALMOST HERE.</em></h3>
        <p>Our first GOODFIND look is being prepared. Check back soon.</p>
      </div>
    `;
    return;
  }
}

renderLooks();
