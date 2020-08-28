let n1 = Math.floor((Math.random()*6)+1);
let dice1 = `/images/dice${n1}.png`;
let n2 = Math.floor((Math.random()*6)+1);
let dice2 = `/images/dice${n2}.png`;
let docArr = document.querySelectorAll("img");
let result = document.querySelector("h1");

docArr[0].setAttribute("src", dice1);
docArr[1].setAttribute("src", dice2);

if (n1 > n2) {
    result.innerHTML = '🚩Winner Player1';
} else if ( n1 < n2) {
    result.innerHTML = 'Winner Player2🚩';
} else {
    result.innerHTML = 'Draw';
};