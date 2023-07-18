// 
// 
// 

function contact(event) {
    event.preventDefault();
        emailjs
            .sendForm(
                'service_cqfd01j',
                'template_jprbwub',
                event.target,
                '4VE8jnQgLrxzpjEpf'
            ).then(() => {

            })
    const loading = document.querySelector('modal__overlay--loading');
    const success = document.querySelector('modal__overlay--success');
    

}