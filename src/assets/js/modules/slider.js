const slider = ({sliderSelector, slidesCount, nextButtonSelector, prevButtonSelector}) => {
    const slider = document.querySelector(sliderSelector),
        sliderWrapper = slider.querySelector('.slider__wrapper'),
        nextButton = slider.querySelector(nextButtonSelector),
        prevButton = slider.querySelector(prevButtonSelector);

    let slides = slider.querySelectorAll('.slider__item');
    const step = +slides[0].clientWidth,
        sliderWidth = step * slidesCount * 2;

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

    let firstSlideIndex = 0,
        lastSlideIndex = slidesCount * 2 - 1;

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