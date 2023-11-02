const colorButton = document.querySelector(".choiceColor");

colorButton.addEventListener("click",themeColor);

// TODO Transformer cette page en themegreen et faire la meme chose pour les autres couleurs 
// TODO Voir pour en faire des objets
function themeColor(event){
    const titles =document.querySelectorAll("h1, h2, h3");
    const colorTarget = event.target;
    const cards = document.querySelectorAll(".card");
    const cardLeft = document.querySelector(".leftUl");
    const cursors = document.querySelectorAll(".cursor p");
    for(const card of cards){
        for (const title of titles){
            for (const cursor of cursors){
                if (colorTarget.classList.contains("green")){     
                    card.classList.add("cardGreen");
                    cardLeft.classList.add("cardGreen"); 
                    title.classList.add("titleGreen");
                    cursor.classList.add("titleGreen");

                }else if(colorTarget.classList.contains("red")){
                    card.classList.remove("cardGreen");
                    cardLeft.classList.remove("cardGreen");
                    title.classList.remove("titleGreen");
                    cursor.classList.remove("titleGreen");

                }else if(colorTarget.classList.contains("yellow")){
                    card.classList.remove("cardGreen");
                    cardLeft.classList.remove("cardGreen");
                    title.classList.remove("titleGreen");
                    cursor.classList.remove("titleGreen"); 
                }else{
                    card.classList.remove("cardGreen");
                    cardLeft.classList.remove("cardGreen");
                    title.classList.remove("titleGreen");
                    cursor.classList.remove("titleGreen"); 
                }
            }
        }
    }
}