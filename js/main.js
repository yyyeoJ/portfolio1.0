const project = document.querySelectorAll(".project");
const projectButtons = document.querySelectorAll(".project-buttons");


for(let i = 0; i<project.length;i++){
    project[i].addEventListener("mouseover",()=>{
        projectButtons[i].classList.remove("hidebuttons")
        projectButtons[i].classList.add("showbuttons")

        project[i].classList.remove("projecthoveroff")
        project[i].classList.add("projecthoveron")
    })

    project[i].addEventListener("mouseout",()=>{
        projectButtons[i].classList.remove("showbuttons")
        projectButtons[i].classList.add("hidebuttons")

        project[i].classList.remove("projecthoveron")
        project[i].classList.add("projecthoveroff")
    })
}

const body = document.querySelector("body");

const modal = document.querySelectorAll(".modal-background");
const modalCard = document.querySelectorAll(".modal");
const viewProjectButton = document.querySelectorAll(".viewproject");
const exitButton = document.querySelectorAll(".exit")

for(let i = 0; i<modal.length;i++){
        viewProjectButton[i].addEventListener("click",()=>{
        modalCard[i].classList.remove("showmodal-popout")
        modal[i].classList.add("showmodal")
        modalCard[i].classList.add("showmodal-popup")
        body.classList.add("scrollock")
    })
    
    exitButton[i].addEventListener("click",()=>{
        modal[i].classList.remove("showmodal")
        modalCard[i].classList.remove("showmodal-popup")
        modalCard[i].classList.add("showmodal-popout")
        body.classList.remove("scrollock")
    })
}

const hamburgerButton = document.querySelector(".hamburger-nav-button")
const hamburgerBackground = document.querySelector(".hamburger-nav-background")
const hamburgerNav = document.querySelector(".hamburger-nav")

let open = false;


hamburgerButton.addEventListener("click",()=>{
    body.classList.toggle("scrollock")
    contactMe.classList.toggle("zindex")
    if(open == false){
        hamburgerNav.classList.remove("hidehamburgernav");
        hamburgerNav.classList.add("showhamburgernav");
        hamburgerBackground.classList.toggle("showhamburgerbackground")

        hamburgerButton.classList.toggle("open");
        open = true;
    }

    else if(open == 1){
        hamburgerNav.classList.remove("showhamburgernav");
        hamburgerNav.classList.add("hidehamburgernav");
        hamburgerBackground.classList.toggle("showhamburgerbackground")

        hamburgerButton.classList.toggle("open");
        open = false;
    }
})

const contactMe = document.querySelector(".contact-me")
const hamburgerLink = document.querySelectorAll(".hamburgerlink");
for(let i = 0; i<hamburgerLink.length; i++){
    hamburgerLink[i].addEventListener("click",()=>{
        hamburgerBackground.classList.remove("showhamburgerbackground");
        hamburgerNav.classList.remove("showhamburgernav");
        hamburgerNav.classList.add("hidehamburgernav");
        body.classList.remove("scrollock")

        hamburgerButton.classList.toggle("open");
        open = false;

    })
}

const nav = document.querySelectorAll(".nav a");
const navBackground = document.querySelectorAll(".nav span");
const hamburgerSpan = document.querySelector(".hamburger-nav-button span");


for(let i = 0; i<nav.length; i++){
    nav[i].addEventListener("mouseover",()=>{
        navBackground[i].classList.remove("navoff")
        navBackground[i].classList.add("navon")
    })
    nav[i].addEventListener("mouseout",()=>{
        navBackground[i].classList.remove("navon")
        navBackground[i].classList.add("navoff")
    })
}
hamburgerButton.addEventListener("mouseover",()=>{
    hamburgerSpan.classList.remove("navoff")
    hamburgerSpan.classList.add("navon")
})
hamburgerButton.addEventListener("mouseout",()=>{
    hamburgerSpan.classList.remove("navon")
    hamburgerSpan.classList.add("navoff")
})

