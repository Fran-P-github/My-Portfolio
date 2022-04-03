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
    let nav_bar = document.querySelector('.nav-bar')
    let sections = nav_bar.children;

    for(let i = 0; i < sections.length; i++){
    	sections[i].addEventListener('click', () => {
	    window.scrollTo({
	        top: i * window.innerHeight,
		left: 0,
		behavior: 'smooth'
	    });
	});
    }
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
            counter = imgs.length - 2; // imgs length
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
