export function addToCart(item, amount) {
  return {
    type: '@cart/ADD',
    item,
    amount,
  }
}

export function removeFromCart(id, removeAll) {
  return {
    type: '@cart/REMOVE',
    id,
    removeAll,
  }
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  }
}