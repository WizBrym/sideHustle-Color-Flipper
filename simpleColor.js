const colors = ["green", "red", "rgba(133,122,200)", "blue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    console.log(document.body);
// get random number between 0 - 3
    const randomNumber= getRandomNumber();
    console.log (randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber(){
    //using Math.floor to rouund up the decimal results of Math.random 
    return Math.floor( Math.random() * colors.length);
};