let iris = document.getElementsByClassName("footer--eyes--eye--iris");

document.onmousemove = function () {

    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";


    for (let i = 0; i < 2; i++) {
        iris[i].style.left = x;
        iris[i].style.top = y;
        iris[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
}


const menu = document.querySelector('.nav--bar--responsive');
const kebab = document.querySelector('.nav--bar--bloc');

kebab.addEventListener('click', () => {
    menu.classList.toggle('apear');
});