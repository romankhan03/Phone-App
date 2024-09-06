
const array = [{
    brand: 'Samsung',
    model: 'S20',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Xiomi',
    model: 'note10',
    ram: 4,
    rom: 64,
    camera: '10 megapixel',
    price: 15000
},
{
    brand: 'Infinix',
    model: 'z10',
    ram: 2,
    rom: 16,
    camera: '5 megapixel',
    price: 15000
},
{
    brand: 'Tecno',
    model: 'spark10',
    ram: 12,
    rom: 512,
    camera: '25 megapixel',
    price: 15000
},
{
    brand: 'Iphone',
    model: '14',
    ram: 4,
    rom: 1024,
    camera: '30 megapixel',
    price: 15000
},
{
    brand: 'Oppo',
    model: 'F11',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Vivo',
    model: 'y20',
    ram: 4,
    rom: 64,
    camera: '8 megapixel',
    price: 15000
},
{
    brand: 'Samsung',
    model: 's50',
    ram: 50,
    rom: 1024,
    camera: '60 megapixel',
    price: 300000
}]

const getDatafromLocalstorage = JSON.parse(localStorage.getItem("cartItem"))
console.log("Localstorage Data" ,getDatafromLocalstorage);

let cartItems = []
if(getDatafromLocalstorage != null){
    cartItems = getDatafromLocalstorage;
}



const div = document.querySelector("#phones")
for (let i = 0;i < array.length;i++) {
    div.innerHTML += 
    ` <div class="card bg-dark text-light border-light" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${array[i].brand} ${array[i].model}</h5>
        <h5 class="card-title h6">Rs: ${array[i].price}</h5>
        <button class="btn btn-primary mt-2" onclick="addToCart(${i})">Add to cart</button>
    </div>
</div>
`
}


function addToCart(index){
    if (cartItems.includes(array[index])){
        array[index].quantiy += 1
    }else{
        array[index].quantiy = 1
        cartItems.push(array[index])
    }
    
    console.log(cartItems)
}

const checkoutBtn = document.querySelector("#checkout-btn")
checkoutBtn.addEventListener("click", function(){
 localStorage.setItem("cartItem" , JSON.stringify(cartItems))
  window.location = "checkout.html"
    
})