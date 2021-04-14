burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', () => {
    navList.classList.toggle('class-resp');
    navbar.classList.toggle('nav-resp');
})