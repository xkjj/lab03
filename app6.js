function welcome(data){
    console.log(`Welcome to my site ${data}.`);
}

welcome("James");

function calVAT(cost){
    let newcost = cost * .2;
    return newcost;
}

let newprice = calVAT(69.99);
console.log(newprice);

var calvat1 = function(para1, para2){
    let vat = para1 * para2;
    let res = Math.floor(vat + para1);
    return res;
}

console.log("New price with VAT added: £" + calvat1(12.99, .2));

var calvat2 = (para1, para2) => {
    let vat = para1 * para2;
    let res = Math.floor(vat + para1);
    return res;
}

console.log(`New prive with VAT added: £${calvat2(109, .2)}`);