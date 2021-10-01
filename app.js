const nav_slide = () => {
    const brg = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');
    brg.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        brg.classList.toggle('brg-active');
    }); 
}

const parallax_effect = () => {
    let imgs = document.querySelectorAll('.bg-img');
    let about = document.querySelector('#welcome');
    let head = document.querySelector('#head');
    document.addEventListener('mousemove', (a) => {
        imgs.forEach(image => {
            let speed = image.getAttribute('data-speed');
            let x = (window.innerWidth - a.pageX*speed) / 100;
            let y = (window.innerHeight - a.pageY*speed) / 100;
            if(a.pageY < window.innerHeight * 2){
                image.style.transform = `translateX(${x}px) translateY(${y}px)`;
            }

            else{
                image.style.transform = `translateX(0px) translateY(0px)`;
            }
        });
    });
}

const nav_click = () => {
    let home = document.querySelector('#home-button');
    let about = document.querySelector('#about-button');
    let projects = document.querySelector('#projects-button');
    let social = document.querySelector('#social-button');
    let contact = document.querySelector('#contact-button');

    home.addEventListener('click', () => {
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
        });
    });

    about.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    });

    projects.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight * 2,
            left: 0,
            behavior: 'smooth'
        });
    });

    social.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight * 3,
            left: 0,
            behavior: 'smooth'
        });
    });

    contact.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight * 4,
            left: 0,
            behavior: 'smooth'
        });
    });
}

const app = () => {
    nav_slide();
    parallax_effect();
    nav_click();
}

app();