document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector('.header-burger'),
        header = document.querySelector('.header');

    btn.addEventListener("click", () => {
        btn.classList.toggle('active');
        header.classList.toggle('active');
    })
});