// Витягує масив з продуктами (корзину localStorage)
function getCartProducts(){
    let cart = JSON.parse (localStorage.getItem("cart") );

    if( cart === null){
        cart = [];
    }
    
    return cart

}

// Показує в меню скільки товарів в корзині
function showProdsInCart(){
    const prod_in_card = document.getElementById("prod_in_card");

    const prod_num = getCartProducts().length;

    prod_in_card.innerText = `( ${prod_num} )`
}

showProdsInCart();

function drawCards(){
    const cart_table = document.getElementById("cart_table");

    let cards_html = ``;
    let sum = 0;

    getCartProducts().map( function(phone, index){

        sum += phone.price;

        cards_html += 
        `
        <tr>
                        <th scope="row">${index +1}</th>
                        <td>
                            <img src="${phone.image}" class="cart-img">
                        </td>
                        <td>${phone.name}</td>
                        <td>${phone.price}₴</td>
                        <td class="text-center"><button class="btn btn-danger" onclick="removeProduct(${index})">x</button></td>
                      </tr>
        `
    })

    cart_table.innerHTML = cards_html;

    const total_price = document.getElementById("total_price");

    total_price.innerText = sum;

}

drawCards();

// Видаляє елемент з корзини по індексу
function removeProduct(index){
    const cart = getCartProducts();

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart) );

    drawCards();
    showProdsInCart();
}