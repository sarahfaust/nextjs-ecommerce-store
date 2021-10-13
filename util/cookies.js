import Cookies from 'js-cookie';

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

// returns updated cart (list)
export function increaseAmount(cart, id) {
  return cart.map((cartItem) => {
    if (cartItem.id === id) {
      return { ...cartItem, amount: (cartItem.amount += 1) };
    }
    return cartItem;
  });
}

// returns updated cart (list)
export function decreaseAmount(cart, id) {
  return cart
    .filter((cartItem) => cartItem.amount !== 1)
    .map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, amount: (cartItem.amount -= 1) };
      }
      return cartItem;
    });
}

export function addItem(cart, id, amount) {
  const isInCart = cart.some((product) => product.id === id);
  if (isInCart) {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          amount: product.amount + amount,
        };
      }
      return product;
    });
    return newCart;
  } else {
    return [...cart, { id: id, amount: amount }];
  }
}

export function deleteItem(cart, id) {
  return cart.filter((cartItem) => cartItem.id !== id);
}
