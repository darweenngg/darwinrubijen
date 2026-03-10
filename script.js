/* Envelope */

function openInvite(){

const envelope=document.querySelector(".envelope");

envelope.classList.add("open");

setTimeout(()=>{

document.getElementById("envelopeScreen").style.display="none";
document.getElementById("mainContent").style.display="block";

document.getElementById("bgMusic").play();

startScrollAnimations();

},1200);

}

/* Countdown */

const weddingDate=new Date("December 10, 2027 00:00:00").getTime();
const countdownEl=document.getElementById("countdown");

setInterval(function(){

const now=new Date().getTime();
const distance=weddingDate-now;

const days=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

countdownEl.innerHTML=
days+" DAYS • "+hours+" HOURS • "+minutes+" MINUTES";

},1000);

/* Music */

function toggleMusic(){

const music=document.getElementById("bgMusic");

if(music.paused){
music.play();
}else{
music.pause();
}

}

/* Scroll animations */

function startScrollAnimations(){

const sections=document.querySelectorAll(".fade-section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

sections.forEach(section=>{
observer.observe(section);
});

}
