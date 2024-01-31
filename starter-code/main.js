document.querySelector(".menu").addEventListener('click',()=>{
    if(document.querySelector(".menu img").getAttribute("src") == "/starter-code/assets/shared/icon-hamburger.svg"){
        document.querySelector(".menu img").setAttribute("src","/starter-code/assets/shared/icon-close.svg")
    }else{
        document.querySelector(".menu img").setAttribute("src","/starter-code/assets/shared/icon-hamburger.svg")
    }
    
    document.querySelector("nav ul").classList.toggle("active-Links");

})