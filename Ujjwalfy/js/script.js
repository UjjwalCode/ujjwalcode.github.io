let firstPlay = document.getElementById('1Play');
let secondPlay = document.getElementById('2Play');
let thirdPlay = document.getElementById('3Play');
let forthPlay = document.getElementById('4Play');
let fifthPlay = document.getElementById('5Play');
let sixthPlay = document.getElementById('6Play');
let seventhPlay = document.getElementById('7Play');
let eighthPlay = document.getElementById('8Play');
let ninthPlay = document.getElementById('9Play');
let tenthPlay = document.getElementById('10Play');

let gif1 = document.getElementById('gif1')
let gif2 = document.getElementById('gif2')
let gif3 = document.getElementById('gif3')
let gif4 = document.getElementById('gif4')
let gif5 = document.getElementById('gif5')
let gif6 = document.getElementById('gif6')
let gif7 = document.getElementById('gif7')
let gif8 = document.getElementById('gif8')
let gif9 = document.getElementById('gif9')
let gif10 = document.getElementById('gif10')

let audio1 = new Audio('songs/1.mp3');
let audio2 = new Audio('songs/2.mp3');
let audio3 = new Audio('songs/3.mp3');
let audio4 = new Audio('songs/4.mp3');
let audio5 = new Audio('songs/5.mp3');
let audio6 = new Audio('songs/6.mp3');
let audio7 = new Audio('songs/7.mp3');
let audio8 = new Audio('songs/8.mp3');
let audio9 = new Audio('songs/9.mp3');
let audio10 = new Audio('songs/10.mp3');

firstPlay.addEventListener('click', ()=>{
    console.log("Working")
    if(audio1.paused){
        audio1.play();
        gif1.style.opacity = 1;
    }
    else{
        audio1.pause();
        gif1.style.opacity = 0;
    }
})
secondPlay.addEventListener('click', ()=>{
    console.log("Working")
    if(audio2.paused){
        audio2.play();
        gif2.style.opacity = 1;
    }
    else{
        audio2.pause();
        gif2.style.opacity = 0;
    }
})
thirdPlay.addEventListener('click', ()=>{
    console.log("Working")
    if(audio3.paused){
        audio3.play();
        gif3.style.opacity = 1;
    }
    else{
        audio3.pause();
        gif3.style.opacity = 0;
    }
})
forthPlay.addEventListener('click', ()=>{
    console.log("Working")
    if(audio4.paused){
        audio4.play();
        gif4.style.opacity = 1;
    }
    else{
        audio4.pause();
        gif4.style.opacity = 0;
    }
})
fifthPlay.addEventListener('click', ()=>{
    console.log("Working")
    if(audio5.paused){
        audio5.play();
        gif5.style.opacity = 1;
    }
    else{
        audio5.pause();
        gif5.style.opacity = 0;
    }
})
sixthPlay.addEventListener('click', ()=>{
    console.log("Working")
    if(audio6.paused){
        audio6.play();
        gif6.style.opacity = 1;
    }
    else{
        audio6.pause();
        gif6.style.opacity = 0;
    }
})
seventhPlay.addEventListener('click', ()=>{
    console.log("Working")
    if(audio7.paused){
        audio7.play();
        gif7.style.opacity = 1;
    }
    else{
        audio7.pause();
        gif7.style.opacity = 0;
    }
})
eighthPlay.addEventListener('click', ()=>{
    console.log("Working")
    if(audio8.paused){
        audio8.play();
        gif8.style.opacity = 1;
    }
    else{
        audio8.pause();
        gif8.style.opacity = 0;
    }
})
ninthPlay.addEventListener('click', ()=>{
    console.log("Working")
    if(audio9.paused){
        audio9.play();
        gif9.style.opacity = 1;
    }
    else{
        audio9.pause();
        gif9.style.opacity = 0;
    }
})
tenthPlay.addEventListener('click', ()=>{
    console.log("Working")
    if(audio10.paused){
        audio10.play();
        gif10.style.opacity = 1;
    }
    else{
        audio10.pause();
        gif10.style.opacity = 0;
    }
})