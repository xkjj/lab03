const reverse = (str) =>{

    let num = str.length-1;
    let nstr="";
 
    for (num; num >=0; num-- ){
        nstr += str[num];
    }
    return nstr;

};

let reversestring = reverse("this is me");
console.log(reversestring);