const slider = ({sliderSelector, nextButtonSelector, prevButtonSelector}) => {
    const slider = document.querySelector(sliderSelector),
        sliderWrapper = slider.querySelector('.slider__wrapper'),
        nextButton = slider.querySelector(nextButtonSelector),
        prevButton = slider.querySelector(prevButtonSelector),
        sliderFiled = sliderWrapper.closest('.slider__inner');

    let slides = slider.querySelectorAll('.slider__item');
    let step;

    if (slider.clientWidth > 1000) {
        step = parseInt(sliderFiled.clientWidth /3);
    } else if (slider.clientWidth <= 1000 && slider.clientWidth > 500) {
        step = parseInt(sliderFiled.clientWidth /2);
    } else {
        step = parseInt(sliderFiled.clientWidth);
    }
    
    const sliderWidth = step * slides.length * 2;

    let firstSlideIndex = 0,
        lastSlideIndex = slides.length * 2 - 1;

    const initSlider = () => {
        const slidesClones = Array.from(slides).map(slide => slide.cloneNode(true));
        slidesClones.forEach((clone, i) => {
            if (i !== slidesClones.length - 1) {
                sliderWrapper.append(clone);
            } else {
                sliderWrapper.prepend(clone);
            }
        });

        slides = sliderWrapper.children;
        slides.forEach(slide => slide.style.width = step + 'px');

        sliderWrapper.style.cssText = `
            position: relative;
            left: -${step}px;

            width: ${sliderWidth}px;
        `;
        
    };
    
    const cycleArr = (arr, direction) => {
        const first = arr[0],
            last = arr[arr.length - 1];

        switch (direction) {
            case 'right' :
                arr.pop();
                arr.unshift(last);
                return arr;
            break;
            case 'left':
                arr.shift();
                arr.push(first);
                return arr;
            break;
        }
    };
    
    initSlider();

    let sliderOffset = 0,
        itemsAndPositions = Array.from(slides).map(slide => ({slide, position: 0}));

    const moveItems = (direction) => {
        switch (direction) {
            case 'right':
                const currentItemRight = itemsAndPositions[lastSlideIndex];
                currentItemRight.position -= sliderWidth;
                sliderOffset += step;

                currentItemRight.slide.style.transform = `translateX(${currentItemRight.position}px)`;
                sliderWrapper.style.transform = `translateX(${sliderOffset}px)`;

                itemsAndPositions = cycleArr(itemsAndPositions, direction);
            break;
            case 'left':
                const currentItemLeft = itemsAndPositions[firstSlideIndex];
                currentItemLeft.position += sliderWidth;
                sliderOffset -= step;

                currentItemLeft.slide.style.transform = `translateX(${currentItemLeft.position}px)`;
                sliderWrapper.style.transform = `translateX(${sliderOffset}px)`;

                itemsAndPositions = cycleArr(itemsAndPositions, direction);
            break;
        }
    };

    nextButton.addEventListener('click', () => {
        moveItems('left');
    });

    prevButton.addEventListener('click', () => {
        moveItems('right');
    });
};

export default slider;