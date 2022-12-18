const number = 2700000
const f = new Intl.NumberFormat("en-in",{
    currency:'INR',
    style:'currency'
})
console.log(f.format(number))