const darkModeButton = document.querySelector(".choiceMode");
darkModeButton.addEventListener("click", darkMode);

function darkMode(){
    
    const logodarkModeButton = document.querySelector(".darkModeChoice i");
    const container = document.querySelector(".container");
    const link = document.querySelectorAll("a");
    const colorItemLight = document.querySelectorAll(".greenItemLight");
    const colorItemDark = document.querySelectorAll(".greenItemDark");
    const colorTextLight = document.querySelectorAll(".greenTextLight");
    console.log()
    const colorTextDark = document.querySelectorAll(".greenTextDark");
    const colorBgLight = document.querySelectorAll(".greenBgLight");
    console.log()
    const colorBgDark = document.querySelectorAll(".greenBgDark");

    if(logodarkModeButton.classList == "fa-solid fa-sun"){
        //------------change logo of button "darkmode"---------\\
        logodarkModeButton.classList.remove("fa-sun");
        logodarkModeButton.classList.add("fa-moon");
        //------------change background of container ---------\\
        container.classList.add("dark");
        for(item of link){
            item.classList.add("dark");
        }
        //------------change Item ---------\\
        for(item of colorItemLight ){
            item.classList.remove(color+"ItemLight");
            item.classList.add(color+"ItemDark");
        }
        //------------change Text ---------\\
        for(item of colorTextLight ){
            item.classList.remove(color+"TextLight");
            item.classList.add(color+"TextDark");
        }
        //------------change Background cards ---------\\
        for(item of colorBgLight ){
            item.classList.remove(color+"BgLight");
            item.classList.add(color+"BgDark");
        }

    }else{
        logodarkModeButton.classList.remove("fa-moon");
        logodarkModeButton.classList.add("fa-sun");

        container.classList.remove("dark");
        for(item of link){
            item.classList.remove("dark");
        }

        for(item of colorItemDark ){
            item.classList.remove(color+"ItemDark");
            item.classList.add(color+"ItemLight");
        }

        for(item of colorTextDark ){
            item.classList.remove(color+"TextDark");
            item.classList.add(color+"TextLight");
        }
        for(item of colorBgDark ){
            item.classList.remove(color+"BgDark");
            item.classList.add(color+"BgLight");
        }
    };
    // ----------------------------------------------------\\

}