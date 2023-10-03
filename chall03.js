let num = [];
let ranNum = [];

for (let i=1; i<=20; i++) {
    num.push(i);
}

for (i =1; i<=3; i++) {
    const random = Math.floor(Math.random() *num.length)
    ranNum.push(random);
}

console.table(num);
console.table(ranNum);