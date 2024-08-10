// Banner change background 
document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.banner');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    let backgroundToggle = true;
    let interval;

    // Function to toggle background
    function toggleBackground() {
        if (backgroundToggle) {
            banner.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/villa2.jpg')";
        } else {
            banner.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/villa1.png')";
        }
        backgroundToggle = !backgroundToggle;
        backgroundToggle?btn1.checked=true:btn2.checked=true;
    }

    // Automatic background change every 5 seconds
    function startAutoToggle() {
        interval = setInterval(toggleBackground, 5000);
    }

    // Manual control
    btn1.addEventListener('click', function() {
        clearInterval(interval); // Stop automatic toggle
        banner.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/villa1.png')";
        backgroundToggle = false; // Reset toggle state
        startAutoToggle(); // Restart automatic toggle
    });

    btn2.addEventListener('click', function() {
        clearInterval(interval); // Stop automatic toggle
        banner.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/villa2.jpg')";
        backgroundToggle = true; // Reset toggle state
        startAutoToggle(); // Restart automatic toggle
    });

    // Start the automatic background change on load
    startAutoToggle();
});

// Inquiry form
let tncbtn = document.querySelector('.blog-area .inquiry-box .terms-condition i');
let tncbtnclicked = false;
tncbtn.addEventListener('click',function(){
    if(!tncbtnclicked){
        tncbtn.style.color = '#BD9A68';
        tncbtnclicked = !tncbtnclicked;
    }else{
        tncbtn.style.color = 'rgb(236, 236, 236)';
        tncbtnclicked = !tncbtnclicked;
    }
});