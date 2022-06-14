// =============== Active-Link =================
let links = document.querySelectorAll(".nav__link");
for(let i =0; i<links.length; i++){
    links[i].addEventListener('click',activeLink);
}

function activeLink() {
    links.forEach(l=>{
        l.classList.remove('activeLink');
        this.classList.add('activeLink');
    })
}

// ================== Show Hidden Menu ====================

// ======================Tutorial Code =====================
// const showMenu = (toggleId ,navbarId) =>{
//     const toggle = document.getElementById(toggleId),
//     navbar = document.getElementById(navbarId);
//     if(toggle && navbar){
//         toggle.addEventListener('click',() =>{
//             navbar.classList.toggle('toggleWidth');
//             toggle.classList.toggle('toggleRotate');
//         })
//     }
// }
// showMenu('nav__toggle','nav');

// =============== My Code ==============
 const toggle = document.getElementById('nav__toggle'),
 nav = document.getElementById('nav');
toggle.addEventListener('click',showMenu);
function showMenu(){
    toggle.classList.toggle('toggleRotate');
    nav.classList.toggle('toggleWidth');
} 