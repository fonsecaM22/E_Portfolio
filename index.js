//template_881dmwe
//service_684h7hv
//1wZsG4wIUXaoxsOxl
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event){
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px)`
    }


}

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");

    let x, y;

    if (event.touches) {
        x = event.touches[0].clientX * scaleFactor;
        y = event.touches[0].clientY * scaleFactor;
    } else {
        x = event.clientX * scaleFactor;
        y = event.clientY * scaleFactor;
    }

    for (let i = 0; i < shapes.length; i++) {
        const direction = i % 2 === 0 ? 1 : -1;
        shapes[i].style.transform =
            `translate(${x * direction}px, ${y * direction}px)`;
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle){
    document.body.classList += ' dark-theme'
    } else{
        document.body.classList.remove('dark-theme')
    }
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs.sendForm('service_684h7hv', 'template_881dmwe', event.target, '1wZsG4wIUXaoxsOxl')
    .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch((err) => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email service is temporarily unavailable. Please contact me directly at mauriciofnsc@yahoo.com.", err);
    });
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

document.addEventListener("mousemove", moveBackground);
document.addEventListener("touchmove", moveBackground);