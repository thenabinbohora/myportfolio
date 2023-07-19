let isModalOpen = false;
let contrastToggle = false;
let scaleFactor = 1 / 20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolOdd = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolOdd}px, ${y * boolOdd}px)`;
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme";
    }

    else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible';
    emailjs
        .sendForm(
            'service_cqfd01j',
            'template_jprbwub',
            event.target,
            '4VE8jnQgLrxzpjEpf'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += ' modal__overlay--visible';
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily down. Please reach me directly through thenabinbohora@gmail.com"
            );
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += ' modal--open';
}