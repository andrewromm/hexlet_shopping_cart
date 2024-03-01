import readlineSync from "readline-sync";

function addItem(cart) {
  const itemName = readlineSync.question("What item would you like to add? ");
  const price = parseFloat(readlineSync.questionFloat("What is the price? "));
  const quantity = parseInt(readlineSync.questionInt("How many? "));
  try {
    cart.addItem(itemName, price, quantity);
    console.log("Item added!");
  } catch (error) {
    console.error(error.message);
  }
}

function removeItem(cart) {
  const itemName = readlineSync.question(
    "What item would you like to remove? "
  );
  cart.removeItem(itemName);
  console.log("Item removed!");
}

function updateQuantity(cart) {
  const itemName = readlineSync.question(
    "What item would you like to update? "
  );
  const newQuantity = parseInt(readlineSync.questionInt("How many? "));
  try {
    cart.updateQuantity(itemName, newQuantity);
    console.log("Item updated!");
  } catch (error) {
    console.error(error.message);
  }
}

function applyDiscount(cart) {
  const discountCode = readlineSync.question("What is your discount code? ");
  cart.applyDiscount(discountCode);
  try {
    console.log("Discount applied!");
    console.log(`Total: ${cart.total}`);
  } catch (error) {
    console.error(error.message);
  }
}

function menu(cart) {
  console.log("Welcome to the shopping cart app!");
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log("Please choose an option:");
    console.log("1. Add item");
    console.log("2. Remove item");
    console.log("3. Update quantity");
    console.log("4. Apply discount");
    console.log("5. Show items");
    console.log("6. Show total");
    console.log("7. Clear cart");
    console.log("8. Exit");
    const choice = readlineSync.question("What would you like to do? ");
    switch (choice) {
      case "1":
        addItem(cart);
        break;
      case "2":
        removeItem(cart);
        break;
      case "3":
        updateQuantity(cart);
        break;
      case "4":
        applyDiscount(cart);
        break;
      case "5":
        console.log(cart.getItems());
        break;
      case "6":
        console.log(cart.total);
        break;
      case "7":
        cart.clear();
        console.log("Cart cleared!");
        break;
      case "8":
        console.log("Goodbye!");
        return;
      default:
        console.log("Invalid input");
    }
  }
}

export default menu;
