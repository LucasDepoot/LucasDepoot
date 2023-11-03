const colorButton = document.querySelectorAll(".colored");
const cards = document.querySelectorAll(".card");
const nav = document.querySelector(".navBar");
const title = document.querySelector("h1");
const work = document.querySelector("h2");


for(const button of colorButton){
button.addEventListener("click",themeColor);}

function themeColor(event){
    let color = null;
    const colorTarget = event.target;
    if(colorTarget.classList.contains("blue")){
        color = "blue";
        localStorage.setItem('colors',color);
    }else if (colorTarget.classList.contains("red")){
        color = "red";
        localStorage.setItem('colors',color);
    }else if (colorTarget.classList.contains("yellow")){
        color = "yellow";
        localStorage.setItem('colors',color);
    }else{
        color = "green";
        localStorage.setItem('colors',color);
    }

    

    for (const card of cards) {
        card.classList.remove("blueCard");
        card.classList.remove("greenCard");
        card.classList.remove("yellowCard");
        card.classList.remove("redCard");
        card.classList.add(color+"Card");

    }

    nav.classList.remove("blueNav");
    nav.classList.remove("greenNav");
    nav.classList.remove("yellowNav");
    nav.classList.remove("redNav");
    nav.classList.add(color+"Nav");

    title.classList.remove("blueH1");
    title.classList.remove("greenH1");
    title.classList.remove("yellowH1");
    title.classList.remove("redH1");
    title.classList.add(color+"H1");

    work.classList.remove("blueH2");
    work.classList.remove("greenH2");
    work.classList.remove("yellowH2");
    work.classList.remove("redH2");
    work.classList.add(color+"H2");
}
