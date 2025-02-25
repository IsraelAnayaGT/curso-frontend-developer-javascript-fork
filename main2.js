const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarroIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const ProductDetailContainer = document.querySelector('#productDetail');
const cardContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toogleDesktopMenu);
burguerMenu.addEventListener('click', toogleDeskMobileMenu);
menuCarroIcon.addEventListener('click', toogleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toogleDesktopMenu (){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
     shoppingCartContainer.classList.add('inactive');  
    }
    desktopMenu.classList.toggle('inactive');
}

function toogleDeskMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
     shoppingCartContainer.classList.add('inactive');  
    }
    
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed || !isDesktopMenuClosed){
     mobileMenu.classList.add('inactive');
     desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = ProductDetailContainer.classList.contains('inactive');
     
     if(!isProductDetailClosed ){
      ProductDetailContainer.classList.add('inactive');
      
     }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside () {
   shoppingCartContainer.classList.add('inactive');
    ProductDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside () {
    ProductDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Pantalla',
    price: 220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Computádora',
    price: 620,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

function renderProducts(arr,){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product= {name,price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);{}
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}
renderProducts(productList);
