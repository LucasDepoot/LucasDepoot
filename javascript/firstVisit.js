const colorStorage = localStorage.getItem("colors");
const newVisit = document.querySelector(".newVisit");
console.log(newVisit)
    if(colorStorage){
        console.log(colorStorage);
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
        console.log("bite");
        newVisit.style.display= "none";
    }