class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.discountCodes = ["ABCD", "EFGH", "IJKL"];
  }
  addItem(itemName, price, quantity) {
    // Basic validation to check if the input is a string and the price is a number
    if (!price || price <= 0) {
      throw Error("Invalid input");
    }
    if (!quantity || quantity < 1) {
      throw Error("Invalid input");
    }

    // Check if the item is already in the cart, if so, update the quantity
    const itemIndex = this.items.findIndex((item) => item.name === itemName);
    if (itemIndex > -1) {
      this.items[itemIndex].quantity += quantity;
      return;
    }

    // Add item to cart
    this.items.push({
      name: itemName,
      price: price,
      quantity: quantity,
    });

    // update total
    this.total += price * quantity;
  }
  removeItem(itemName) {
    // get total price of item to remove
    const itemToRemove = this.items.find((item) => item.name === itemName);
    const totalItemPrice = itemToRemove.price * itemToRemove.quantity;
    // remove item from cart
    this.items = this.items.filter((item) => item.name !== itemName);
    // update total
    this.total -= totalItemPrice;
  }
  updateQuantity(itemName, newQuantity) {
    // Validate quantity
    if (!newQuantity || newQuantity < 1) {
      throw Error("Invalid input");
    }

    // Update quantity
    this.items = this.items.map((item) => {
      if (item.name === itemName) {
        item.quantity = newQuantity;
      }
      return item;
    });

    // Update total
    this.total = this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
  getItems() {
    return this.items;
  }
  applyDiscount(code) {
    // Apply 10% discount if the code is valid
    if (this.discountCodes.includes(code)) {
      this.total *= 0.9;
    } else {
      throw Error("Invalid discount code");
    }
  }
  clear() {
    this.items = [];
  }
}

export default ShoppingCart;
