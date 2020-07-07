'use strict'


const navbar=document.querySelector('#navbar')
const navbarHeight=navbar.getBoundingClientRect().height
document.addEventListener('scroll',()=>{

console.log(window.scrollY)
console.log(navbarHeight)


if(window.scrollY>=navbarHeight){
    navbar.classList.add('navbar--dark')
    const navbarDark=document.querySelector('#navbar.navbar--dark');
    
    // navbarDark.style.opacity=window.scrollY/110

}else{
    navbar.classList.remove('navbar--dark')
}
});


const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    // console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if(link!=null){
        console.log(link);

    }

})