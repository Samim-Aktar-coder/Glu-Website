//!============== SHOW PRICING SECTION ===========
let pricingBtns = document.querySelectorAll('.pricing__btn');
let pricingItems = document.querySelectorAll('.pricing__items');

function removeAllActive() {
    pricingBtns.forEach(btn => {
        btn.classList.remove('active');
    });
}
function removeAllShow() {
    pricingItems.forEach(item => {
        item.classList.remove('show');
    });
}


pricingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        removeAllActive();
        removeAllShow();
        let id = btn.getAttribute('id');
        let currentPricingItems = document.querySelector(`#${id}-content`);
        btn.classList.add('active');
        currentPricingItems.classList.add('show');
    });
});