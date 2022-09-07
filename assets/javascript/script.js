// Efek scroll
window.addEventListener("scroll", () => {
    let elements = document.querySelectorAll(".elemen-transisi");
    
    for(let i = 0; i < elements.length; i++){
        let heightWindow = window.innerHeight;
        let topElement = elements[i].getBoundingClientRect().top;
        let scroll = 200;
        if(topElement < heightWindow - scroll){
            elements[i].classList.add("transisi");
        }else{
            elements[i].classList.remove("transisi");
        }
    }
})
