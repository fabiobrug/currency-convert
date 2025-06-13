const coins = [
  {
    name: "BTC",
    icon: "<i class='fab fa-bitcoin'></i>",
    iconClass: "fab fa-bitcoin",
    class: "startButton",
    price: "107859",
    id: "btc",
    qnt: "0",
  },
  {
    name: "ETH",
    icon: "<i class='fab fa-ethereum'></i>",
    iconClass: "fab fa-ethereum",
    class: "ethButton",
    price: "2515",
    id: "eth",
    qnt: "0",
  },
  {
    name: "SOL",
    icon: "<i class='fas fa-sun'></i>", // usar ícone similar
    iconClass: "fas fa-sun",
    class: "solButton",
    price: "145",
    id: "sol",
    qnt: "0",
  },
  {
    name: "XRP",
    icon: "<i class='fas fa-water'></i>", // usar ícone criativo
    iconClass: "fas fa-water",
    class: "xrpButton",
    price: "2",
    id: "xrp",
    qnt: "0",
  }
];


let coinIndex = 0;
let currentCoin = coins[coinIndex]; 


const button = document.querySelector(".startButton");
const coin = document.querySelector(".coin");



const balance = document.getElementById("totalCash")
const btc = document.getElementById("btc")
const shuffle = document.querySelector(".shuffle")

let gambling = false;

let shuffleOrder = 0;

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

let btcTotal = 0;
let btcQnt = 0;

function addCash(){
    
const price = parseFloat(currentCoin.price);

    btcTotal = btcTotal + price;
    btcQnt++;
    const formatted = btcTotal.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    balance.innerHTML = `Balance: $${formatted}`

    const coinDisplay = document.getElementById(currentCoin.id);

    if(coinDisplay){
        currentCoin.qnt++;
        coinDisplay.innerHTML = `${currentCoin.name}: ${currentCoin.qnt}`;
    }
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
     button.classList.remove(currentCoin.class);
     button.classList.add("startButtonGM")
     button.innerHTML = "Welcome to hell"
     shuffle.classList.add("shuffleGM")
     addYes()
     addNo()
     addQuestion()
     playHellAudio()
}

function gmOFF(){
    coinUp()
    document.body.classList.remove("gamblingMode")
     button.classList.remove("startButtonGM")
     shuffle.classList.remove("shuffleGM")
     button.innerHTML = `${currentCoin.name} ${currentCoin.icon}`
     playCoinAudio();
     stopHellAudio();
}

function gamblingMode() {
    const luck = Math.random();

    if(luck < 0.1 && btcQnt != 0){
        gambling = true;
        gmON()
    }else {
        gmOFF()
        addCash()
  }
}

const laughAudio = new Audio('assets/sounds/joker-laugh-2-98829.mp3')
const buyAudio = new Audio('assets/sounds/buy_1.mp3')

function addYes(){
    const yesBtn = document.createElement('button')
    yesBtn.innerHTML = "Yes"
    yesBtn.classList.add("yes")
    document.body.appendChild(yesBtn);
    yesBtn.addEventListener('mousemove', () => {
        laughAudio.play()
    })
    yesBtn.addEventListener('click', () =>{
    
     const luck = Math.random();

    if(luck < 0.5 && btcQnt != 0){
       btcTotal = 0;
    }else {
        btcTotal = btcTotal * 2;
  }

  const formatted = btcTotal.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    balance.innerHTML = `Balance: $${formatted}`

    const coinDisplay = document.getElementById(currentCoin.id);

    if(coinDisplay){
        coinDisplay.innerHTML = `${currentCoin.name}: ${currentCoin.qnt}`;
    }


    buyAudio.play()
    gmOFF()
    removeGamblingUI()
    })
}

function addNo(){
    const NoBtn = document.createElement('button')
    NoBtn.innerHTML = "No"
    NoBtn.classList.add("no")
    document.body.appendChild(NoBtn);

    NoBtn.addEventListener('click', () => {
     gmOFF()
    removeGamblingUI()
    })
}

function addQuestion(){
    const question = document.createElement('h4')
    question.innerHTML = "Press YES to double or lose it all"
    question.classList.add("question")
    document.body.appendChild(question)
}

function removeYes() {
    const yesBtn = document.querySelector('.yes');
    if (yesBtn) yesBtn.remove();
}

function removeNo() {
    const noBtn = document.querySelector('.no');
    if (noBtn) noBtn.remove();
}

function removeQuestion() {
    const question = document.querySelector('.question');
    if (question) question.remove();
}

function removeGamblingUI() {
    removeYes();
    removeNo();
    removeQuestion();
    button.classList.add(currentCoin.class);
    gambling = false;
}



shuffle.addEventListener('click', () => {
    coinIndex = (coinIndex + 1) % coins.length;

    currentCoin = coins[coinIndex]

    button.className = ""
    button.innerHTML = `${currentCoin.name} ${currentCoin.icon}`
    button.classList.add(currentCoin.class);
    console.log(currentCoin)
})

function coinUp(){

    const coinUp = document.getElementById("coinUp")

 coinUp.innerHTML = '';

const newCoin = document.createElement('i')
    newCoin.className = currentCoin.iconClass

    coinUp.appendChild(newCoin);

    coin.classList.remove('animate');
     void coin.offsetWidth;
     coin.classList.add('animate');

}
