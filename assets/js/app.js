const button = document.querySelector(".startButton");
const coin = document.querySelector(".coin");
const balance = document.getElementById("totalCash")
const btc = document.getElementById("btc")

button.addEventListener('click', () =>{
    coin.classList.remove('animate');
    void coin.offsetWidth;
    coin.classList.add('animate');
    playCoinAudio();
    addCash()
})

function playCoinAudio(){
    const coinSound = new Audio("assets/sounds/coin-drop-1.mp3");
    coinSound.play();
}

let btcTotal = 107859000000;
let btcQnt = 0;

function addCash(){
    btcQnt++;
    const formatted = btcTotal.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    balance.innerHTML = `Balance: $${formatted}`
    btc.innerHTML = `BTC: ${btcQnt}`
    btcTotal = btcTotal + 107859000000;
}