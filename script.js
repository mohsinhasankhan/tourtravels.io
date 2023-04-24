//Hamburger
let hamburger=document.querySelector(".hamburger")
let dropdown=document.querySelector(".dropdown")
let crossicon= document.querySelector(".close-icon")
let openicon= document.querySelector(".open-icon")
hamburger.addEventListener('click',()=>{
    dropdown.classList.toggle('active')
    crossicon.classList.toggle('active')    
    if(dropdown.classList.contains('active')){
        openicon.style.display="none"
        crossicon.style.display="block"
    }
    else{
        crossicon.style.display="none"
        openicon.style.display="block"
    }
})