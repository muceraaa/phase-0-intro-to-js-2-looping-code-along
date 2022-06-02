// Code your solutions in this file
let namesArray=["Guadalupe", "Ollie", "Aki"];
let event = "surprise";
function writeCards(namesArray, event) {
    let thankYou = [];
for (let i = 0; i < namesArray.length; i++){
    thankYou.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
}
return thankYou;
}
function countDown(countDown){
    while (countDown > 0){
        console.log (countDown);
        countDown -=1
    }
    console.log(countDown)
}
