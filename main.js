const begin__hall = document.getElementById('begin');
const begin__lost = document.getElementById('begin__lost');
const birdsSpace = document.getElementById('birdsSpace');
const carPlayer = document.getElementById('player-group');
const carSpace = document.getElementById('carSpace');
const ptsView = document.getElementById('view__pts');
let jump = false;
let birdsInterval;
let carInterval;
let pts = 0;

let coeficienteDificuldade = 0; 


const perdeu = ()=>{
    ptsView.textContent = `Pontos: ${pts}`
    clearInterval(birdsInterval);
    clearInterval(carInterval);
    begin__lost.style.display = "";    
    begin__lost.style.top = "0";
    

}
const begin = ()=>{
    pts = 0;
    begin__lost.style.top = "-100vh";    
    setTimeout(()=>{
        begin__hall.style.display = "none";
    },500)

    birdsInterval = setInterval(()=>{
        birdsSpace.innerHTML = '<img class="birds" src="assets/birds.gif">'
    },10000)
    carInterval = setInterval(()=>{
        if(lastLevel + 2**lastLevel > pts){
            lastLevel +=1;
            console.log('subiu')
        }
        carSpace.innerHTML = `<img id="targetCar" style="animation: carroRun linear ${8 - lastLevel*0.3}s" class="car" src="assets/car${Math.floor(Math.random() * (5 - 1) + 1)}.png" alt="carro">`;
        setTimeout(()=>{
            if(!jump){
                console.log('perdeu')
                perdeu()}
        },1450);
        pts += 75;
    },4350)



}

document.body.onkeydown = (e)=>{

    if(true){
        carPlayer.style.animation = 'flipCar 1.5s ease-in';
        jump = true;
        setTimeout(()=>{
            carPlayer.style.animation = '';
            jump = false;
        },1500)
    }
}






function start(){
    begin__hall.style.top = "-100vh";
    begin__lost.style.top = "-100vh";    
    setTimeout(()=>{
        begin__hall.style.display = "none";
        begin__lost.style.display = "none"    
    },500)
    begin()

}