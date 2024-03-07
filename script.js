document.addEventListener('DOMContentLoaded', function () {
    let menubar = document.getElementById('menubar');
    let navbar = document.querySelector('.navbar');
    let header = document.querySelector('.header');
    let loginBtn = document.getElementById('login-btn');
    let loginFormContainer = document.getElementById('login-form-container');
    let closeLoginBtn = document.getElementById('close-login-btn');
    let homeParallaxElements = document.querySelectorAll('.home-parallax');

    menubar.onclick = () => {
        menubar.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        if (window.scrollY > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
            menubar.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        }
    };

    loginBtn.onclick = () => {
        loginFormContainer.classList.toggle('active');
    };

    closeLoginBtn.onclick = () => {
        loginFormContainer.classList.remove('active');
    };

    document.onmousemove = (e) => {
        homeParallaxElements.forEach(element => {
            let speed = element.getAttribute('data-speed');
            let x = (window.innerHeight - e.pageX * speed) / 90;
            let y = (window.innerHeight - e.pageY * speed) / 90;

            element.style.transform = `translateX(${y}px) translateY(${x}px)`;
        });
    };

    document.onmouseleave = () => {
        homeParallaxElements.forEach(element => {
            element.style.transform = `translateX(0px) translateY(0px)`;
        });
    };
});
