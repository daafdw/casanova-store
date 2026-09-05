const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });
}

const bagButton = document.getElementById('bagButton');
const cartPanel = document.getElementById('cartPanel');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const bagCount = document.getElementById('bagCount');
const checkoutButton = document.getElementById('checkoutButton');
const checkoutOverlay = document.getElementById('checkoutOverlay');
const checkoutClose = document.getElementById('checkoutClose');
const checkoutForm = document.getElementById('checkoutForm');
let itemCount = 0;

const setCartOpenState = (open) => {
  if (!cartPanel || !cartOverlay) return;

  cartPanel.classList.toggle('open', open);
  cartOverlay.classList.toggle('open', open);
  cartPanel.setAttribute('aria-hidden', String(!open));
  cartOverlay.setAttribute('aria-hidden', String(!open));
};

const toggleCart = () => {
  if (!cartPanel || !cartOverlay) return;

  const isOpen = !cartPanel.classList.contains('open');
  setCartOpenState(isOpen);
};

setCartOpenState(true);

if (bagButton) {
  bagButton.addEventListener('click', toggleCart);
}

if (cartClose) {
  cartClose.addEventListener('click', toggleCart);
}

if (cartOverlay) {
  cartOverlay.addEventListener('click', toggleCart);
}

const setCheckoutOpenState = (open) => {
  if (!checkoutOverlay) return;

  checkoutOverlay.classList.toggle('open', open);
  checkoutOverlay.setAttribute('aria-hidden', String(!open));
};

if (checkoutButton) {
  checkoutButton.addEventListener('click', () => setCheckoutOpenState(true));
}

if (checkoutClose) {
  checkoutClose.addEventListener('click', () => setCheckoutOpenState(false));
}

if (checkoutOverlay) {
  checkoutOverlay.addEventListener('click', (event) => {
    if (event.target === checkoutOverlay) setCheckoutOpenState(false);
  });
}

if (checkoutForm) {
  checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(checkoutForm);
    const orderMessage = [
      'Hello Casanova, I would like to place an order.',
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Address: ${formData.get('address')}`,
      `Payment method: ${formData.get('payment')}`,
      'Subtotal: $317'
    ].join('\n');

    window.open(`https://wa.me/201202700449?text=${encodeURIComponent(orderMessage)}`, '_blank', 'noopener');
  });
}

const cartButtons = document.querySelectorAll('.cart-btn');
cartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const originalText = button.textContent;
    button.textContent = 'Added';
    button.disabled = true;
    button.style.opacity = '0.8';

    itemCount += 1;
    if (bagCount) {
      bagCount.textContent = String(itemCount);
    }

    if (bagButton) {
      bagButton.classList.add('active');
    }

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      button.style.opacity = '1';
      if (bagButton) {
        bagButton.classList.remove('active');
      }
      cartPanel?.classList.add('open');
      cartOverlay?.classList.add('open');
    }, 1000);
  });
});
