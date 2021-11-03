//Sort Button
const sortBtns = document.querySelectorAll('.js-sort-btn');

for (const sortBtn of sortBtns) {
    sortBtn.addEventListener('click', function() {
        for (const sortBtn_a of sortBtns) {
            if (sortBtn_a.classList.contains('sortbar-item--active')) {
                sortBtn_a.classList.remove('sortbar-item--active');
            }
        }
        sortBtn.classList.add('sortbar-item--active');
    })
}

//Favorite Button
const FavBtns = document.querySelectorAll('.status-favorite__btn-list');
const FavBtnNonRate = document.querySelectorAll('.js-status-favorite__btn-nonrate');
const FavBtnRateUp = document.querySelectorAll('.js-status-favorite__btn-rateup');

for (const FavBtn of FavBtns) {
    FavBtn.addEventListener('click', function(even) {
        if (FavBtn.classList.contains('up')) {
            FavBtn.classList.remove('up');
        } else {
            FavBtn.classList.add('up');
        }
        even.preventDefault();
    })
}

//Change Noti

function change_mes() {
    const boxNoti = document.getElementById('box-noti');
    if (boxNoti.classList.contains('popout-box--empty')) {
        boxNoti.classList.remove('popout-box--empty');
        boxNoti.classList.add('popout-box--ful');
    } else {
        boxNoti.classList.remove('popout-box--ful');
        boxNoti.classList.add('popout-box--empty');
    }
}

//Change Search
const searchArea = document.getElementById('search-area');
const this_shopCheck = document.getElementById('this-shop');
const shopeeCheck = document.getElementById('shopee');

function this_shop() {
    searchArea.innerText = "Trong Shop này";
    this_shopCheck.style.display = "unset";
    shopeeCheck.style.display = "none";
}

function shopee() {
    searchArea.innerText = "Trong Shopee";
    shopeeCheck.style.display = "unset";
    this_shopCheck.style.display = "none";
}

//Change Price Sort
const sortPriceOpts = document.querySelectorAll('.select__option');
const sortPriceBtn = document.getElementById('sort-price');

for (const sortPriceOpt of sortPriceOpts) {
    sortPriceOpt.addEventListener('click', function() {
        var text = sortPriceOpt.innerText;
        sortPriceBtn.innerText = text;
    })
}


//Logout


function logout() {
    const notLoginEs = document.querySelectorAll('.not-login');
    const loggedE = document.querySelector('.logged');
    const logoutBtn = document.querySelector('.user-info__option--logout a');
    loggedE.style.display = "none";
    for (const notLoginE of notLoginEs) {
        notLoginE.style.display = "flex";
    }
    change_mes();
    logoutBtn.preventDefault();
}

//More Product Item

function addProduct(item) {
    var listProducts = document.querySelector('.js-list-products');
    listProducts.innerHTML += item;
}

for (let i = 0; i < 29; i++) {
    addProduct(document.querySelector('.product-item').outerHTML);
}