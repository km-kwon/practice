const randomInput = document.querySelector("#random");
const randomNum = randomInput.querySelector("#randomNum");
const yourNum = randomInput.querySelector("#yourNum");
const result = document.querySelector(".result");
const h4 = result.querySelector("h4");
const h2 = result.querySelector("h2");


function startGame(event){
    event.preventDefault();

    if((parseInt(yourNum.value) < 0) || (parseInt(randomNum.value) < 0)){
        printWrongNum();
    }
    else{
        const resultNum = Math.ceil((Math.random()*parseInt(randomNum.value)));
        if(parseInt(yourNum.value) > parseInt(randomNum.value)){
            printWrongNum();
        }else{
            printresult(resultNum);
        }
    }
}
function printWrongNum(){
    h4.innerText = "You enter the wrong number!"
    h2.innerText = "";
    result.classList.remove("hidden");
    result.classList.add("text-focus-in");
}
function printresult(resultNum){
    h4.innerText = 
    `You chose: ${yourNum.value}, the machine chose: ${resultNum}`;
    if(yourNum.value == resultNum){
        h2.innerText = "You Won!";
    }else{
        h2.innerText = "You lost!"
    }
    result.classList.remove("hidden");
    result.classList.add("text-focus-in");
}


randomInput.addEventListener("submit", startGame);

function earase(){
    this.placeholder = "";
}
function print(string){
    this.placeholder = string;
}