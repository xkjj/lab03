//generate a random number between 1-7

let ranfloor = (Math.random() * 6) + 1;
ranfloor = Math.floor(ranfloor);

switch(ranfloor) {
    case 0: ranfloor = "Sunday - It's the weekend!";
    break;
    case 1: ranfloor = "Monday";
    break;
    case 2: ranfloor = "Tuesday";
    break;
    case 3: ranfloor = "Wednesday";
    break;
    case 4: ranfloor = "Thursday";
    break;
    case 5: ranfloor = "Friday";
    break;
    case 6: ranfloor = "Saturday - It's the weekend!";
    break;

    
}

console.log(ranfloor);

/*if (ranfloor == 6 || ranfloor == 0) {
    console.log(` ${ranfloor} - It's the weekend!`);
    } else {
        console.log(` ${ranfloor} `);
    }*/