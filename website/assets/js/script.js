const btnMobile = document.querySelector(".menu-btn");


function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle('active');

    const active = navMenu.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);