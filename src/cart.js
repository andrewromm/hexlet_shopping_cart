class ShoppingCart {
  constructor() {
    this.items = [];
  }
  addItem(itemName, price, quantity) {
    // Basic validation to check if the input is a string and the price is a number
    if (typeof itemName !== 'string') {
      throw new Error('Invalid input');
    }
    if (typeof price !== 'number' || price <= 0) {
      throw new Error('Invalid input');
    }
    if (typeof quantity !== 'number' || quantity < 1) {
      throw new Error('Invalid input');
    }

    // Check if the item is already in the cart, if so, update the quantity
    const itemIndex = this.items.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
      this.items[itemIndex].quantity += quantity;
      return;
    }

    this.items.push({
      name: itemName,
      price: price,
      quantity: quantity
    });
  }
  removeItem(itemName) {
    this.items = this.items.filter(item => item.name !== itemName);
  }
  updateQuantity(itemName, newQuantity) {
    // Validate quantity
    if (typeof newQuantity !== 'number' || newQuantity < 1) {
      throw new Error('Invalid input');
    }

    this.items = this.items.map(item => {
      if (item.name === itemName) {
        item.quantity = newQuantity;
      }
      return item;
    });
  }
  getItems() {
    return this.items;
  }
  clear() {
    this.items = [];
  }
  total () {
    return this.items.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
  }
}

export default ShoppingCart;
