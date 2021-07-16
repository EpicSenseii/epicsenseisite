const burger = document.getElementById('burger');
const sideBar = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    if (sideBar.classList.contains('active')) {
        sideBar.classList.remove('active');
    }
    else (sideBar.classList.add('active'))
})

