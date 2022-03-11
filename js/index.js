const phonNav = document.getElementById('pNav');
phonNav.addEventListener('click' , ()=>{
    let navB = document.getElementById('nav')
    if (navB.style.display=='none'){
        navB.style.display = 'flex';
    }
    else{
        navB.style.display = 'none';
    }
})

let reg = document.getElementById('reg');
reg.addEventListener('click', ()=>{
    reg.innerHTML = 'Coming Soon'
})
const classic_btn = document.getElementById('classical-btn');
const classical = document.getElementById('classic')
const firstPg = document.getElementById('firstPg');
classic_btn.addEventListener('click', function(){
    classical.style.display = 'inline';
    firstPg.style.display = 'none'
}) 

const hipHopBtn = document.getElementById('hip-hop-btn');
const hipHop = document.getElementById('hip-hop');
hipHopBtn.addEventListener('click', function(){
    hipHop.style.display = 'inline';
    firstPg.style.display = 'none'
}) 

const slasaBtn = document.getElementById('salsa-btn');
const salsa = document.getElementById('salsa');
slasaBtn.addEventListener('click', function(){
    salsa.style.display = 'inline';
    firstPg.style.display = 'none'
}) 

let submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
    submit.innerHTML = 'Submitted'
})

const gbclassic = document.getElementById('gbclassic');
const gbhip = document.getElementById('gbhip');
const gbsalsa = document.getElementById('gbsalsa');

gbclassic.addEventListener('click', ()=>{
    classical.style.display = 'none';
    firstPg.style.display = 'block'
});

gbhip.addEventListener('click', ()=>{
    hipHop.style.display = 'none';
    firstPg.style.display = 'block'
})

gbsalsa.addEventListener('click', ()=>{
    salsa.style.display = 'none';
    firstPg.style.display = 'block'
})