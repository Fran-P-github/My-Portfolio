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
    
    // IMPLEMENT FOR LOOP
    
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

const slider = () => {
    let next = document.querySelector('#next');
    let prev = document.querySelector('#prev');
    let imgs_slider = document.querySelector('.slider-imgs');
    let imgs = document.querySelectorAll('.slider-imgs img');
    let size = 150;
    var counter = 1;
    imgs_slider.style.transform = `translateX(${-size * counter}px)`;
    next.addEventListener('click', () => {
        if(counter >= imgs.length - 1) return;
        counter++;
        imgs_slider.style.transition = "transform .4s";
        imgs_slider.style.transform = `translateX(${-size * counter -1}px)`;

    });

    prev.addEventListener('click', () => {
        if(counter <= 0) return;
        counter--;
        imgs_slider.style.transition = "transform .4s";
        imgs_slider.style.transform = `translateX(${-size * counter -1}px)`;

    });

    imgs_slider.addEventListener("transitionend", () => {
        if(counter <= 0){
            imgs_slider.style.transition = "none";
            counter = 8;
            imgs_slider.style.transform = `translateX(${-size * counter}px)`;
        }

        else if(counter >= imgs.length - 1){
            imgs_slider.style.transition = "none";
            counter = 1;
            imgs_slider.style.transform = `translateX(${-size * counter}px)`;
        }
    });
}

const app = () => {
    nav_slide();
    parallax_effect();
    nav_click();
    slider();
}

app();
