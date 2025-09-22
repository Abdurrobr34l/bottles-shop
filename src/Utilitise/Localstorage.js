//* Getting Cart details from LS(Local Storage)
const getCartFromLS = () => {
  const storedCartString = localStorage.getItem('cart');

  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
}

//* Add id to stored cart(Which you got from LS)
const addItemToCartLS = (id) => {
  const cart = getCartFromLS();
  const newCart = [...cart, id];

  saveCartToLS(newCart);
}

//* Save Cart to local storage
const saveCartToLS = (newCart) => {
  const cartStingify = JSON.stringify(newCart);
  localStorage.setItem('cart', cartStingify);
}

export {
  getCartFromLS as getStoredCart,
  addItemToCartLS as addIdToStoredCart
};