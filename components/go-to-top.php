<style>
    #gototop{
        position:fixed;
        right:20px;
        bottom:20px;
        color:#BD9A68;
        z-index:10;
        display: none;
    }
</style>
<a href="#top" id="gototop">
<i class="bi bi-arrow-up-square-fill fs-1"></i>
</a>
<script>
window.addEventListener('scroll', () => {
    let topBtn = document.getElementById('gototop');
    topBtn.style.display = window.scrollY > 0? 'block':'none';
});
</script>