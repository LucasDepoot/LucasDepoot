const colorButton = document.querySelectorAll(".colored");
for(const button of colorButton){
button.addEventListener("click",themeBlue);}
 let color = "green";
function themeBlue(event){
    let color = "green";
    const colorTarget = event.target;
    if(colorTarget.classList.contains("blue")){
        color = "blue";
    }else if (colorTarget.classList.contains("red")){
        color = "red";
    }else if (colorTarget.classList.contains("yellow")){
        color = "yellow";
    }

    const container = document.querySelector(".container");
    const cards = document.querySelectorAll(".card");
    const nav = document.querySelector(".navBar");
    const name = document.querySelector("h1");
    const work = document.querySelector("h2");

    console.log(color);
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

    name.classList.remove("blueH1");
    name.classList.remove("greenH1");
    name.classList.remove("yellowH1");
    name.classList.remove("redH1");
    name.classList.add(color+"H1");

    work.classList.remove("blueH2");
    work.classList.remove("greenH2");
    work.classList.remove("yellowH2");
    work.classList.remove("redH2");
    work.classList.add(color+"H2");
}
