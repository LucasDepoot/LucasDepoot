const darkModeButton = document.querySelector(".choiceMode");
darkModeButton.addEventListener("click", darkMode);

function darkMode(){

    
    const logodarkMode = document.querySelector(".darkModeChoice i");
    const container = document.querySelector(".container");
    const links = document.querySelectorAll("a");
    const cursor =document.querySelector(".cursor");
    
    container.classList.toggle("dark");
    cursor.classList.toggle("dark");
    for(const link of links){
        link.classList.toggle("darkText");
    };
    
    if(logodarkMode.classList.contains("fa-sun")){
        logodarkMode.classList.remove("fa-sun");
        logodarkMode.classList.add("fa-moon");
    }else{
        logodarkMode.classList.remove("fa-moon");
        logodarkMode.classList.add("fa-sun");
    }
}