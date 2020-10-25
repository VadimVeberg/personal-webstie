const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);

    burgerElem.addEventListener('click', () => {
        if (getComputedStyle(menuElem).visibility === 'hidden' && window.screen.availWidth < 992) {
            menuElem.classList.remove('animate-slide-up');
            menuElem.classList.add('animate-slide-down');
            menuElem.style.visibility = 'visible';
        } else {
            menuElem.classList.remove('animate-slide-down');
            menuElem.classList.add('animate-slide-up');
            setTimeout(() => menuElem.style.visibility = 'hidden', 300)
            
        }
    });
};

export default burger;