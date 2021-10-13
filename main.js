// Active navbar 
let nav = document.querySelector('.navigation-wrap');
window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('scoll-on');
    } else {
        nav.classList.remove('scoll-on');
    }
}

// navbar hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach((a) => {
    a.addEventListener('click',()=>{
        navCollapse.classList.remove('show');
    })
});