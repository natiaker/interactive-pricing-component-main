const price = document.querySelector('input[type="range"]');
const views = document.getElementById("views");
const period = document.getElementById("period");
const priceLabel = document.getElementById("priceLabel");
const pricingSlider = document.querySelector(".container__pricing--slider");
const checkbox = document.querySelector('input[type=checkbox]');
let isyearlyBilling = false;


checkbox.addEventListener("input", checkBillingPeriod)
pricingSlider.addEventListener("input", priceRange)

function checkBillingPeriod() {
    let priceValue = price.value;

    if(checkbox.checked) {
        isyearlyBilling = true;
        period.innerHTML = "/year";
        priceValue = priceValue*12*0.75;
    } else {
        isyearlyBilling = false;
        period.innerHTML = "/month";
    }

    priceLabel.innerHTML = ` $ ${priceValue}.00`;
}

function priceRange() {
    let priceValue = price.value;
    priceLabel.innerHTML = ` $ ${priceValue}.00`; 

    if(isyearlyBilling) { yearlyPriceValue(priceValue) }
    monthlyPriceValue(priceValue);

    fillLower() 
}

function monthlyPriceValue(priceValue) {
    switch (priceValue) {
        case "8":
            views.innerHTML = 10;
            break;
        case "12":
            views.innerHTML = 50;
            break;
        case "16":
            views.innerHTML = 100;
            break;
        case "20":
            views.innerHTML = 200;
            break;
        case "24":
            views.innerHTML = 500;
            break;
    }
}

function yearlyPriceValue(priceValue) {
    priceValue = priceValue*12*0.75;
    priceLabel.innerHTML = ` $ ${priceValue}.00`;
}

function fillLower() {
    let fillLower = (price.value - price.min) / (price.max - price.min) * 100;

    price.style.background = `linear-gradient(to right, 
        hsl(174, 77%, 80%) 0%, 
        hsl(174, 77%, 80%) ${fillLower}%, 
        hsl(224, 65%, 95%) ${fillLower}%, 
        hsl(224, 65%, 95%) 100%)`;
}


