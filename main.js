'use strict'

const navbar=document.querySelector('#navbar')
const navbarHeight=navbar.getBoundingClientRect().height
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
console.log(window.scrollY)
console.log(navbarHeight)
if(window.scrollY>=navbarHeight){
    navbar.classList.add('navbar--dark')
    const navbarDark=document.querySelector('#navbar.navbar--dark');
    home.style.opacity=1-(window.scrollY**1.4/6500);
    // navbarDark.style.opacity=window.scrollY/110
}else{
    navbar.classList.remove('navbar--dark')
    home.style.opacity=1;
}
if(window.scrollY>=homeHeight/2){
    arrowUp.classList.add('visible');
}else{
    arrowUp.classList.remove('visible');
}
});

arrowUp.addEventListener('click',(event)=>{
    const home=document.querySelector('#home');
    home.scrollIntoView({behavior: "smooth", block: "start"});

});

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    // console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if(link!=null){
        console.log(link);
        const menu=document.querySelector(link);
        menu.scrollIntoView({behavior: "smooth", block: "start"});      
    }

});

const contactButton = document.querySelector('.home__contact');
contactButton.addEventListener('click',function(event){
    const contact=document.querySelector('#contact');
    contact.scrollIntoView({behavior: "smooth", block: "start"});

});

