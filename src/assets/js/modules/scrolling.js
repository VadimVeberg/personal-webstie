const scrolling = () => {
    const links = document.querySelectorAll('[href^="#"]'),
        speed = 1;

    const screenHeight = document.documentElement.clientHeight;

    function animate({timing, draw, duration}, widthTop, toBlock, elemHeight) {

        let start = performance.now();
      
        requestAnimationFrame(function animate(time) {
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
      
          let progress = timing(timeFraction);
      
          draw(progress, widthTop, toBlock, elemHeight); 
      
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
      
        });
    }

    const quad = (timeFraction) => {
        return Math.pow(timeFraction, 3)
    }
    
    const linear = (timeFraction) => {
        return timeFraction;
    }

    const draw = (progress, toBlock, widthTop, elemHeight) => {
        let  r =(toBlock < 0) ? widthTop - (-toBlock )*(progress)/speed : widthTop + toBlock*(progress)/speed;
        window.scrollTo(0, r);
    };

    links.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const heightTop = document.documentElement.scrollTop || document.body.scrollTop,
                hash = e.target.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top;

            animate({
                timing: quad,
                draw: draw,
                duration: 900
            }, toBlock, heightTop);
        });
    })

    // scrollTopButton.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const widthTop = document.documentElement.scrollTop,
    //         toBlock = document.querySelector('.characteristics-and-buy').getBoundingClientRect().top,
    //         elemHeight = e.target.offsetHeight;

    //     animate({
    //         timing: quad,
    //         draw: draw,
    //         duration: 1000
    //     }, toBlock, widthTop, elemHeight);
    // });
};


export default scrolling;