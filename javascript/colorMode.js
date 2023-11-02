const colorButton = document.querySelector(".choiceColor");
let color = "green";
// idée generale -> changer la variable color en fonction du click ,modifié couleur ici et modifier nom de classe dans darkmode 
colorButton.addEventListener("click",themeColor);


function themeColor(event){
    const currentButton = event.target;
    console.log(currentButton);
}