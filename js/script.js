// ------------------Banner------------------
let main_banner = document.querySelector('.banner');
let slider_change_btn_1 = document.getElementById('slider-change-btn-1');
let slider_change_btn_2 = document.getElementById('slider-change-btn-2');
slider_change_btn_1.addEventListener('click',()=>{
    slider_change_btn_1.classList.add('slider-change-btn-outline');
    slider_change_btn_2.classList.remove('slider-change-btn-outline');
    main_banner.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('../images/villa1.png')";
});
slider_change_btn_2.addEventListener('click',()=>{
    slider_change_btn_2.classList.add('slider-change-btn-outline');
    slider_change_btn_1.classList.remove('slider-change-btn-outline');
    main_banner.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('../images/villa2.jpg')";
});



