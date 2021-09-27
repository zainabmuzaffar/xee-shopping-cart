document.addEventListener('DOMContentLoaded', function initial() {

  cart = document.querySelector('#cart').addEventListener('click', () => { });

  items = document.querySelectorAll('.item');

  itemsList = [];

  cartEventListeners();

})

function cartEventListeners() {
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", () => buyItem(items[i]));
  }
}

function buyItem(item) {
  console.log(" ITEM BOUGHT!!!");
  itemsList.push(item);
  showCartItems(itemsList);
  itemsBought = itemsList.length;
  console.log("There are currently",itemsBought," items in your cart",);
}

function showCartItems(itemList) {
  for (let i = 0; i < itemList.length; i++) {
   // console.log(itemList[i])
   // document.querySelector('#cart-items').insertAdjacentHTML('afterbegin', item[i].outerHTML);
  }
}