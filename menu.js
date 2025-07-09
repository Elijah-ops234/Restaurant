const searchInput = document.getElementById('searchInput');
const menuItems = document.querySelectorAll('.menu-item');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalDisplay = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

let cart = [];

// Search Filter
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  menuItems.forEach(item => {
    const name = item.querySelector('.item-name').textContent.toLowerCase();
    const desc = item.querySelector('.item-description').textContent.toLowerCase();

    if (name.includes(query) || desc.includes(query)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
});

// Handle "Order" buttons
document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const menuItem = e.target.closest('.menu-item');
    const name = menuItem.getAttribute('data-name');
    const price = parseFloat(menuItem.getAttribute('data-price'));

    addToCart(name, price);
  });
});

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "No items yet.";
    cartTotalDisplay.textContent = "0";
    return;
  }

  let html = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    html += `
      <div class="cart-item">
        <span>${item.name} x${item.quantity}</span>
        <span>$${item.price * item.quantity}</span>
      </div>
    `;
  });

  cartItemsContainer.innerHTML = html;
  cartTotalDisplay.textContent = total.toFixed(2);
}

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Proceeding to checkout!\n\n(This would link to payment in real site)");
    cart = [];
    updateCart();
  }
});


const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('closeSidebar');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    body.classList.add('no-scroll');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
    body.classList.remove('no-scroll');
  });

  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });