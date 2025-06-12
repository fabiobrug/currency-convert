const button = document.querySelector(".startButton");
const coin = document.querySelector(".coin");
const balance = document.getElementById("totalCash")
const btc = document.getElementById("btc")
const shuffle = document.querySelector(".shuffle")

let gambling = false;

console.log(gambling)

button.addEventListener('click', () =>{
    if(!gambling){
    gamblingMode()
    }
})


function playCoinAudio(){
    const coinSound = new Audio("assets/sounds/coin-drop-1.mp3");
    coinSound.play();
}

let btcTotal = 107859;
let btcQnt = 0;

function addCash(){
    btcQnt++;
    const formatted = btcTotal.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    balance.innerHTML = `Balance: $${formatted}`
    btc.innerHTML = `BTC: ${btcQnt}`
    btcTotal = btcTotal + 107859;
}

const hellSound = new Audio("assets/sounds/heavy-dark-sound-7545.mp3");
hellSound.loop = true;

function playHellAudio() {
  hellSound.currentTime = 0; 
  hellSound.play();
}

function stopHellAudio() {
  hellSound.pause();
  hellSound.currentTime = 0;
}

function gmON(){
     document.body.classList.add("gamblingMode")
     button.classList.add("startButtonGM")
     button.innerHTML = "Will you risk it all?"
     shuffle.classList.add("shuffleGM")
     addYes()
     playHellAudio()
}

function gmOFF(){
    document.body.classList.remove("gamblingMode")
     button.classList.remove("startButtonGM")
     shuffle.classList.remove("shuffleGM")
     coin.classList.remove('animate');
     void coin.offsetWidth;
     coin.classList.add('animate');
     button.innerHTML = "BTC <i class='fab fa-bitcoin'></i>"
     playCoinAudio();
     addCash()
     stopHellAudio();
}

function gamblingMode() {
    const luck = Math.random();

    if(luck < 0.5){
        gambling = true;
        gmON()
    }else {
        gmOFF()
  }
}

function addYes(){
    const yesBtn = document.createElement('button')
    yesBtn.innerHTML = "Yes"
    yesBtn.classList.add("yes")
    document.body.appendChild(yesBtn);
}