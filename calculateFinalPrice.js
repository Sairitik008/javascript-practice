const TAX_Rate = 0.18;
const DISCOUNT_RATE = 0.10

function calculateFinalPrice(baseprice) {
    if (typeof baseprice !== "number") {
        throw new Error(`baseprice must be number`)
    }

    const taxAmount = baseprice * TAX_Rate;
    const priceWithTax = baseprice * taxAmount;


    const discountAmount = priceWithTax * DISCOUNT_RATE;
    const finalPrice = priceWithTax - discountAmount;

    return finalPrice;
}

const baseprice = 1000;
const finalprice = calculateFinalPrice(baseprice)

console.log(`Base price ${baseprice}`)
console.log(`final price after tax & discount : ${finalprice}`)