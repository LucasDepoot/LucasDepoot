const colorStorage = localStorage.getItem("colors");
const newVisit = document.querySelector(".newVisit");

    if(colorStorage){
        for (const card of cards) 
        card.classList.add(colorStorage+"Card");
        nav.classList.add(colorStorage+"Nav");
        work.classList.add(colorStorage+"H2");
        title.classList.add(colorStorage+"H1");
    }else{
        newVisit.style.display= "block";
        for(const button of colorButton){
            button.addEventListener("click",displayVisit);}
    }
    function displayVisit(){
        newVisit.style.display= "none";
    }