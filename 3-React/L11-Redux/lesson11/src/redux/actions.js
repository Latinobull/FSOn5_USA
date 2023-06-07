export function changeFilter(category) {
  return {
    type: 'category/filter',
    payload: category,
  };
}

export function addToCart(item) {
  return {
    type: 'cart/add',
    payload: item,
  };
}

export function removeFromCart(id) {
  return {
    type: 'cart/remove',
    payload: id,
  };
}
