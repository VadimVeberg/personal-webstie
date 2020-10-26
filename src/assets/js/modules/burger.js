const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector),
        closeIcon = burgerElem.querySelector('.menu-button__icon--close'),
        openIcon = burgerElem.querySelector('.menu-button__icon--open');

    burgerElem.addEventListener('click', () => {
        if (getComputedStyle(menuElem).visibility === 'hidden' && window.screen.availWidth < 992) {
            menuElem.classList.remove('animate-slide-up');
            menuElem.classList.add('animate-slide-down');
            menuElem.style.visibility = 'visible';
            closeIcon.style.display = 'block';
            openIcon.style.display = 'none';
        } else {
            menuElem.classList.remove('animate-slide-down');
            menuElem.classList.add('animate-slide-up');
            setTimeout(() => menuElem.style.visibility = 'hidden', 300);
            closeIcon.style.display = 'none';
            openIcon.style.display = 'block';
        }
    });


};

export default burger;