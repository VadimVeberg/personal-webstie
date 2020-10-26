const closeModal = (modalSelector) => {
    const modalElem = document.querySelector(modalSelector),
        contactFormElem = modalElem.querySelector('.contact-form');

    contactFormElem.classList.remove('animate-slide-down');
    contactFormElem.classList.add('animate-slide-up');
    modalElem.classList.remove('animate-fade-in');
    modalElem.classList.add('animate-fade-out');
    setTimeout(() => modalElem.style.visibility = 'hidden', 300);
    document.body.style.overflow = ''; 
};

const modal = (triggerSelectror, modalSelector) => {
    const modalElem = document.querySelector(modalSelector),
        contactFormElem = modalElem.querySelector('.contact-form'),
        modalCloseBtn = modalElem.querySelector('.close-button'),
        modalTrigger = [...document.querySelectorAll(triggerSelectror), document.querySelector('.call-button.call-button--mobile')];

    const openModal = () => {
        modalElem.style.visibility = 'visible';
        contactFormElem.classList.remove('animate-slide-up');
        contactFormElem.classList.add('animate-slide-down');
        modalElem.classList.remove('animate-fade-out');
        modalElem.classList.add('animate-fade-in');
        document.body.style.overflow = 'hidden';  
    };

    modalTrigger.forEach(item => {
        if (!item.classList.contains('contact-form__button')) {
            item.addEventListener('click', () => openModal());
        }
    });

    modalCloseBtn.addEventListener('click', e => {
        e.preventDefault();
        closeModal(modalSelector);
    });

    modalElem.addEventListener('click', e => {
        if (e.target == modalElem || e.target.classList.contains('close-button')) {
            closeModal(modalSelector);
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape') {
            closeModal(modalSelector);
        }
    });
}

export { closeModal };
export default modal;