    //recuperation elements a modifier
    const navElementAbout = document.getElementById("nav_about");
    const navElementSkill =document.getElementById("nav_skill");
    const navElementProject =document.getElementById("nav_project");
function position(){
    // Recuperation position scroll
    const scroller = window.scrollY
    console.log(scroller);
    let sectionActive = "about";
    if (scroller>=480 && scroller<900){
        sectionActive = "skill";
    }else if (scroller>=900){
        sectionActive = "project";
    }else {
        sectionActive = "about";
    }
    if (sectionActive === "about"){
        navElementAbout.classList.add("active_section");
        navElementSkill.classList.remove("active_section");
        navElementProject.classList.remove("active_section");
    }
    if (sectionActive === "skill"){
        navElementAbout.classList.remove("active_section");
        navElementSkill.classList.add("active_section");
        navElementProject.classList.remove("active_section");
    }
    if (sectionActive === "project"){
        navElementAbout.classList.remove("active_section");
        navElementSkill.classList.remove("active_section");
        navElementProject.classList.add("active_section");
    }
}
 window.addEventListener('scroll', position);