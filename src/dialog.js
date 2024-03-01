import readlineSync from 'readline-sync';


function addItem(cart) {
    const itemName = readlineSync.question('What item would you like to add? ');
    const price = parseFloat(readlineSync.question('What is the price? '));
    const quantity = parseInt(readlineSync.question('How many? '));
    cart.addItem(itemName, price, quantity);
    console.log('Item added!');
}

function removeItem(cart) {
    const itemName = readlineSync.question('What item would you like to remove? ');
    cart.removeItem(itemName);
    console.log('Item removed!');
}

function updateQuantity(cart) {
    const itemName = readlineSync.question('What item would you like to update? ');
    const newQuantity = parseInt(readlineSync.question('How many? '));
    cart.updateQuantity(itemName, newQuantity);
    console.log('Item updated!');
}

function menu(cart) {
    console.log('Welcome to the shopping cart app!');
    // eslint-disable-next-line no-constant-condition
    while (true) {
        console.log('Please choose an option:');
        console.log('1. Add item');
        console.log('2. Remove item');
        console.log('3. Update quantity');
        console.log('4. Show items');
        console.log('5. Show total');
        console.log('6. Clear cart');
        console.log('7. Exit');
        const choice = readlineSync.question('What would you like to do? ');
        switch (choice) {
            case '1':
                addItem(cart);
                break;
            case '2':
                removeItem(cart);
                break;
            case '3':
                updateQuantity(cart);
                break;
            case '4':
                console.log(cart.getItems());
                break;
            case '5':
                console.log(cart.total());
                break;
            case '6':
                cart.clear();
                console.log('Cart cleared!');
                break;
            case '7':
                console.log('Goodbye!');
                return;
            default:
                console.log('Invalid input');
        }
    }
}

export default menu;