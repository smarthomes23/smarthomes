let navigationbar = document.querySelector('.navigationbar');
let nav_email = document.querySelector('.navigationbar>nav>a:first-child');
let nav_phone = document.querySelector('.navigationbar>nav>a:last-child');
let menus = document.querySelectorAll('.menus>li');
let nav_logo = document.querySelector('.menus .menu-logo');
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navigationbar.classList.add('scrolled');
        nav_email.style.color = '#BD9A68';
        nav_phone.style.color = '#BD9A68';
        menus.forEach((menu,index)=>{
            menu.querySelector('a').style.color = index==3?'#BD9A68':'black';
        });
    } else {
        navigationbar.classList.remove('scrolled');
        nav_email.style.color = 'white';
        nav_phone.style.color = 'white';
        nav_logo.style.color = 'white';
        menus.forEach((menu)=>{
            menu.querySelector('a').style.color = 'white';
        });
    }
});
