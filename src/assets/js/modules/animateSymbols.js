const animateSymbols = (parentSelector, symbolsSelector) => {
    const parentElem = document.querySelector(parentSelector),
        symbolsElems = parentElem.querySelectorAll(symbolsSelector),
        parentClassName = parentElem.className;

    let isShowed = false;

    const showAymbols = () => {
        symbolsElems.forEach(symbol => {
            const symbolName = symbol.className.match(/flying-symbol--.*/g),
                specialClass = `${parentClassName}__${symbolName}`,
                commonClass = `${parentClassName}__flying-symbol`;
            symbol.classList.add(commonClass, specialClass);
        })
        isShowed = true;
    }

    const isParentElemInView = () => {
        if (parentElem.getBoundingClientRect().top > 0) {
            return parentElem.getBoundingClientRect().top <= ((parentElem.getBoundingClientRect().height / 3) * 2);
        } else {
            return -parentElem.getBoundingClientRect().top <= (parentElem.getBoundingClientRect().height / 3);
        }
    };
    
    if (isParentElemInView()) {
        showAymbols();
    } 

    window.addEventListener('scroll', () => {
        if (isParentElemInView() && !isShowed) {
            showAymbols();
        }
    });
};

export default animateSymbols;