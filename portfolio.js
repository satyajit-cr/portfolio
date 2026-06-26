// =====================
// Typing Effect
// =====================

const text = [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "Web Developer",
    "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type,1500);
    }else{
        setTimeout(type,100);
    }

})();
window.addEventListener("scroll",function(){

    const nav=document.querySelector("nav");

    nav.classList.toggle("sticky",window.scrollY>100);

});
document.querySelectorAll('nav a').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hidden=document.querySelectorAll("section");

hidden.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop;

if(pageYOffset>=sectionTop-200){

current=section.getAttribute("id");

}

});

navLinks.forEach(a=>{

a.classList.remove("active");

if(a.getAttribute("href")==="#"+current){

a.classList.add("active");

}

});

});
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const increment=target/100;

if(c<target){

counter.innerText=`${Math.ceil(c+increment)}`;

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

}

updateCounter();

});

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
const menu=document.querySelector(".menu-btn");

const nav=document.querySelector("nav ul");

menu.onclick=()=>{

nav.classList.toggle("open");

};