const menu=document.querySelector('#mobile-menu')
const menuLinks =document.querySelector('.navbar_menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

let openCart = document.querySelector('.navButton');
let closeCart = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let cartList = document.querySelector('.cartList');
let body = document.querySelector('body');
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

openCart.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeCart.addEventListener('click', ()=>{
    body.classList.remove('active')
})

let food = [
    {
        id: 1,
        title: 'Bumpy Munchy Burger',
        price: 8.99,
        Image: "1.png",
        description: 'Every bite is an adventure for your taste buds!'
    },
    {
        id: 2,
        title: 'Fabulous Fries',
        price: 2.99,
        Image: "2.png",
        description: 'Indulge in a plate of our fabulous fries, a crispy and golden delight'
    },
    {
        id: 3,
        title: 'Miraculous Milkshake',
        price: 5.99,
        Image: "3.png",
        description: 'Introducing our star creation – the miraculous milkshake. This isnt your ordinary milkshake'
    },
    {
        id: 4,
        title: 'Warping Wrap',
        price: 7.99,
        Image: "4.png",
        description: 'Indulge your taste buds in the delightful world of our Warpin Wrap, where every bite is a culinary journey that leaves you craving for more.'
    },
    {
        id: 5,
        title: 'Prettiest Pizza',
        price: 4.99,
        Image: "5.png",
        description: 'Experience the perfect blend of flavors and the artistry of our kitchen with our 7-inch "Prettiest Pizza" – a savory masterpiece thats not just delicious, but a feast for the eyes too!'
    },
    {
        id: 6,
        title: 'Immaculate Ice Cream',
        price: 2.99,
        Image: '6.webp', // Replace with the correct image URL
        description: 'Indulge in the ultimate dessert experience with our "Immaculate Ice Cream" – a heavenly delight that will transport your taste buds to a world of pure sweetness and perfection!'
    }
];


let cartList2 = [];
function initApp(){
    food.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="IMAGES/${value.Image}"/>
        <div class="title">${value.title}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <p class="description">${value.description}</p>
        <button onclick="addToCart(${key})">Add To Your Cart</button>
        `;
        list.appendChild(newDiv);
    })
}

initApp();

function addToCart(key){
    if(cartList2[key]== null){
        cartList2[key]= food[key];
        cartList2[key].quantity = 1;

    }
    reloadCart();
}

function reloadCart(){
    cartList.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    cartList2.forEach((value,key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value !=null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="IMAGES/${value.Image}"/></div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.title}</div>
            <div>${value.quantity}</div>
            <div>
            <button onclick="changeQuantity(${key}, ${value.quantity - 1})"><i class="fa-solid fa-trash"></i><button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+<button>
            </div>`;
            cartList.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete cartList2[key];
    }
    else{
        cartList2[key].quantity = quantity;
        cartList2[key].price = quantity*food[key].price;
    }
    reloadCart();
}