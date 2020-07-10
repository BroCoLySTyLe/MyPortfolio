'use strict'

const navbar=document.querySelector('#navbar')
let navbarHeight=navbar.getBoundingClientRect().height

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');

window.addEventListener('resize',()=>{
    navbarHeight=navbar.getBoundingClientRect().height
    // if(window.innerWidth<=600){
    //     // document.querySelector(".navbar__menu").style.display="none";
           
    // }else{
    //     // document.querySelector(".navbar__menus").style.display="flex";

    // }
})

document.addEventListener('scroll',()=>{

if(window.scrollY>=navbarHeight){
    navbar.classList.add('navbar--dark')
    const navbarDark=document.querySelector('#navbar.navbar--dark');
    home.style.opacity=1-(window.scrollY**1.2/1500);
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
    const target = event.target;
    const link = target.dataset.link;
    if(link!=null){
        console.log(link);
        const menu=document.querySelector(link);
        menu.scrollIntoView({behavior: "smooth", block: "start"})

        // setTimeout(()=>{
        // window.scrollTo(0,window.scrollY-221);
        // },1000)

    }

});

const contactButton = document.querySelector('.home__contact');
contactButton.addEventListener('click',function(event){
    const contact=document.querySelector('#contact');
    contact.scrollIntoView({behavior: "smooth", block: "start"});

});

// Projects

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll('.project');
const btns = document.querySelectorAll(".category__btn");

workBtnContainer.addEventListener('click',(event)=>{
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter
    if(filter ==null){
        return;
    }

    const prevTarget = document.querySelector(".category__btn.active")
    prevTarget.classList.remove('active')
    // const target = event.target.classList.contains("category__btn")? event.target : event.target.parentNode;
    const target = event.target.nodeName=='BUTTON'? event.target : event.target.parentNode;
    target.classList.add('active')
    // btns.forEach((btn)=>{
    //     if(btn==target){
    //         btn.classList.add('active');
    //     }else{
    //         btn.classList.remove('active');
    //     }   
    // })
    




    projectContainer.classList.add('anim-out');

    setTimeout(()=>{
        projects.forEach((project)=>{
            if(filter ==='*' || project.dataset.type.split(", ").includes(filter)){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });
    projectContainer.classList.remove('anim-out');   
    },300)
    
    
})

const hamberger=document.querySelector("#navbar .hamberger");
hamberger.addEventListener("click",(event)=>{
    if(document.querySelector(".navbar__menus").classList.contains("active")){
        document.querySelector(".navbar__menus").classList.remove("active");

    }else{
        document.querySelector(".navbar__menus").classList.add("active");

    }

})
document.querySelector(".navbar__menus").addEventListener("click",()=>{
    console.log("hihihi")
    if(document.querySelector(".navbar__menus").classList.contains("active")){
        document.querySelector(".navbar__menus").classList.remove("active");

    }else{
        document.querySelector(".navbar__menus").classList.add("active");

    }

})



