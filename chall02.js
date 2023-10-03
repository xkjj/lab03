
let list = " ";
let evenCount = 0;
let oddCount = 0;

for(let i=0; i < 10; i++) {
    let ranInt = Math.random() * (50-10) + 1;
    ranNum = Math.floor(ranInt);
    list += `${ranNum} `;

    if(ranNum % 2 == 0){
        list += `{even}, `;
        evenCount++;
    } else {
        list += `{odd}, `;
        oddCount++;
    }
}

console.log(` ${list}`);
console.log(`Even count: ${evenCount}`);
console.log(`Odd count: ${oddCount}`);