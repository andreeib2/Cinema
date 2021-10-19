const schmeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton =  document.querySelector(".m-menu");
const menu =  document.querySelector(".menu");

let cost = 500;
let totalPrice = 0;
schmeSvg.addEventListener("click",(event) => {
    if (!event.target.classlist.contains("booked")) {
        event.target.classlist.toggle("active");
        let totalSeats = schemeSvg.querySelectorAll(".active").length;
        totalPrice = totalSeats * cost
        totalPriceTag.textContent = totalPrice;
    }
});
menuButton.addEventListener('click', () => {
    menu.classList.toggle("is-open");
});

