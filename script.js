const nameInput = document.getElementById('menu-name');
const priceInput = document.getElementById('menu-price');
const descInput = document.getElementById('menu-desc');
const originInput = document.getElementById('menu-origin');
const bgColor = document.getElementById('bg-color');
const preview = document.getElementById('menu-preview');

const menus = [];

function renderMenus() {
  preview.innerHTML = '';
  if (menus.length === 0) {
    const msg = document.createElement('p');
    msg.className = 'empty-msg';
    msg.textContent = '메뉴를 입력해 주세요 🍽️';
    preview.appendChild(msg);
    return;
  }

  menus.forEach(menu => {
    const item = document.createElement('div');
    item.className = 'menu-item';
    item.innerHTML = `
      <strong>${menu.name} - ${menu.price}원</strong>
      ${menu.desc} (${menu.origin})
    `;
    preview.appendChild(item);
  });
}

function addMenuOnEnter(e) {
  if (e.key === 'Enter') {
    e.preventDefault();

    const name = nameInput.value.trim();
    const price = priceInput.value.trim();
    const desc = descInput.value.trim();
    const origin = originInput.value.trim();

    if (name && price) {
      menus.push({ name, price, desc, origin });
      nameInput.value = '';
      priceInput.value = '';
      descInput.value = '';
      originInput.value = '';
      renderMenus();
    }
  }
}

[nameInput, priceInput, descInput, originInput].forEach(input => {
  input.addEventListener('keydown', addMenuOnEnter);
});

bgColor.addEventListener('input', () => {
  preview.style.backgroundColor = bgColor.value;
});
