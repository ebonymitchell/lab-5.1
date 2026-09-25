// Grab the HTML elements we need and store them in variables
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

// Keep track of the cart's total price
let totalPrice = 0;

// Store all products added to the cart
let shoppingList = [];


// FUNCTION: Update the total price
function updateTotalPrice(amount) {

    // Add the amount passed into the function to the current total
    totalPrice += amount;

    // Display the updated total with 2 decimal places
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}


// EVENT LISTENER: Run when the Add Product button is clicked
addProductButton.addEventListener("click", function () {

    // Create an object with the product name and price from the inputs
    let item = {
        name: productNameInput.value,
        price: productPriceInput.value
    };

    // Check if the product name is empty
    if (item.name === "") {
        alert("Please enter an item.");

        // Stop the function here
        return;
    }

     // Check if the product price is empty
    if (item.price === "" || parseFloat(item.price) <=0) {
        alert("Please ente a valid price.");

        // Stop the function here
        return;
    }

    // Create a new <li> for the product
    let listItem = document.createElement("li");

    // Display the product name and price inside the <li>
    listItem.innerText = `${item.name} - $${item.price}`;

    // Add the new <li> to the cart <ul>
    cart.appendChild(listItem);

    // Add the product object to the shoppingList array
    shoppingList.push(item);

    // Convert the item's price from a string into a number using parseFloat
    // and add it to the cart's total price
    updateTotalPrice(parseFloat(item.price));

    // Clear the product name input
    productNameInput.value = "";

    // Clear the product price input
    productPriceInput.value = "";
});


// FUNCTION: Remove an item from the cart
// Starter code provided by the assignment
function removeItem(event) {

    // Find the <li> connected to the button that was clicked
    const item = event.target.closest('li');

    // Get the item's stored price and convert it from text into a number
    const price = parseFloat(item.price);

    // Subtract the removed item's price from the total
    updateTotalPrice(-price);

    // Remove the <li> from the page
    item.remove();
};

