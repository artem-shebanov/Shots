import * as flsFunctions from "./modules/functions.js";
//import Swiper, { Navigation, Pagination } from 'swiper';

//const swiper = new Swiper();

flsFunctions.testWebP();

const menu = document.querySelector(".burger_menu");
const menuTopLine = document.querySelector(".line_unique");
const linesToCross = document.querySelectorAll(".line");

menu.addEventListener("click", function () {
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        menuTopLine.classList.remove("hidden");
        linesToCross.forEach(elem => elem.classList.remove("active"));
    }else{
        menu.classList.add("active");
        menuTopLine.classList.add("hidden");
        linesToCross.forEach(elem => elem.classList.add("active"));
    }
})
