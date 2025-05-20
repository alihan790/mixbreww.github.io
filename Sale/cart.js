// Загружаем корзину из localStorage или создаём новую
let cart = JSON.parse(localStorage.getItem('cart')) || {};

function addToCart(productId, productData) {
  if (cart[productId]) {
    cart[productId].quantity += 1;
  } else {
    cart[productId] = { ...productData, quantity: 1 };
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`Добавлено в корзину: ${productData.name}`);
}

function setupBuyButtons() {
  const buttons = document.querySelectorAll('.buy-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;
      const productName = button.dataset.name;
      const productPrice = button.dataset.price;
 const productImage = button.dataset.image;

      addToCart(productId, {
        name: productName,
        price: parseFloat(productPrice),
        image: productImage
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', setupBuyButtons);