const hexNumbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const bodyBkg = document.querySelector("body");
const hexBtn = document.querySelector(".hexBtn");
const spanHex = document.querySelector(".hex");


hexBtn.addEventListener("click", genHexcoce);



function genHexcoce(){
    let hexGen = "#";
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumbers.length);
        hexGen += hexNumbers[random];
    }
    bodyBkg.style.backgroundColor = hexGen;
    spanHex.innerHTML = hexGen;
}
