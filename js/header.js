let navigationbar = document.querySelector('.navigationbar');
let nav_email = document.querySelector('.header-mail>a');
let nav_phone = document.querySelector('.header-contact>a');
let menus = document.querySelectorAll('.main-menu .navigation .menu-item .nav-links');
let nav_logo1 = document.querySelector('.main-menu .logo a img');
let nav_logo2 = document.querySelector('.logo a img');
let mobile_nav_toggler = document.querySelector('.mobile-nav-toggler');
let close_btn = document.querySelector('.close-btn');
let mobile_menu = document.querySelector('.mobile-menu');
let accordion_headers = document.querySelectorAll('.mobile-menu .accordion-header>button');

mobile_nav_toggler.addEventListener('click',function(){
    mobile_menu.style.transform = 'translateX(0%)';
});
close_btn.addEventListener('click',function(){
    mobile_menu.style.transform = 'translateX(100%)';
});


window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navigationbar.classList.add('scrolled');
        nav_email.style.color = '#BD9A68';
        nav_phone.style.color = '#BD9A68';
        nav_logo1.style.filter = 'none';
        nav_logo2.style.filter = 'none';
        mobile_nav_toggler.querySelector('i').style.color = '#BD9A68';
        menus.forEach((menu)=>{
            menu.style.color = 'black';
        });
    } else {
        navigationbar.classList.remove('scrolled');
        nav_email.style.color = 'white';
        nav_phone.style.color = 'white';
        nav_logo1.style.filter = 'brightness(0) invert(1)';
        nav_logo2.style.filter = 'brightness(0) invert(1)';
        mobile_nav_toggler.querySelector('i').style.color = 'white';
        menus.forEach((menu)=>{
            menu.style.color = 'white';
        });
    }
});
