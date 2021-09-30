const nav_slide = () => {
    const brg = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');
    console.log('Hello');
    brg.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    }); 
}

nav_slide();