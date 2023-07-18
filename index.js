// 
// 
// 

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
                alert (
                    "The email service is temporarily down. Please reach me directly through thenabinbohora@gmail.com"
                );
            })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += ' modal--open';
}