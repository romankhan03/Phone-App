// Retrieve and parse cart items from localStorage
const getData = localStorage.getItem("cartItem");
const cartItem = JSON.parse(getData) || [];  // Initialize as empty array if null
console.log("Initial cart items:", cartItem);

const div = document.querySelector("#phones");
const totalAmountDiv = document.querySelector("#total-amount");

function renderItems() {
    let totalAmount = 0;
    div.innerHTML = "";
    totalAmountDiv.innerHTML = ""; 
    if (cartItem.length === 0) {
        console.log("No items found");
        div.innerHTML = "No items found";
        return;
    }

    for (let i = 0; i < cartItem.length; i++) {
        const item = cartItem[i];
        item.quantity = item.quantity || 1;
        totalAmount += item.price * item.quantity;
        console.log("Rendering item:", item);
        div.innerHTML += `
        <div class="card bg-dark text-light border-light" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${item.brand} ${item.model}</h5>
                <h5> Quantity: 
                    <button onclick="addQuantity(${i})">+</button> 
                    ${item.quantity} 
                    <button onclick="lessQuantity(${i})">-</button>
                    <button onclick="deleteItem(${i})">Delete</button>
                </h5>
                <h5 class="card-title h6">Rs: ${item.price}</h5>
            </div>
        </div>
        `;
    }

    totalAmountDiv.innerHTML = `Total Amount: Rs ${totalAmount}`;
    console.log("Total Amount:", totalAmount);
}

renderItems();

function addQuantity(index) {
    console.log("Adding quantity at index", index);
    cartItem[index].quantity = (cartItem[index].quantity || 1) + 1;
    localStorage.setItem("cartItem", JSON.stringify(cartItem));  
    renderItems();
}

function lessQuantity(index) {
    console.log("Reducing quantity at index", index);
    if (cartItem[index].quantity > 1) {
        cartItem[index].quantity -= 1;
    }
    localStorage.setItem("cartItem", JSON.stringify(cartItem)); 
    renderItems();
}

function deleteItem(index) {
    console.log("Deleting item at index", index);
    cartItem.splice(index, 1); 
    localStorage.setItem("cartItem", JSON.stringify(cartItem));  
    renderItems(); 
}
