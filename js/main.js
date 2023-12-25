let b_btn = document.getElementById('scroll');
let d_mian = document.getElementById('main');

b_btn.addEventListener('click', function (e) { 
    d_mian.scrollIntoView();
});

window.addEventListener('scroll', function (){ 
    if (scrollY > 900) {
        b_btn.style.opacity = '1';
    }
    else {
        b_btn.style.opacity = "0";
    }
})