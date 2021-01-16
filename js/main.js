(function () { 

    const smoothScroll = function (targetEl, duration) {
        // const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        // let targetPosition = target.getBoundingClientRect().top - headerElHeight; 
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2; 
            if (t < 1) return c  * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 50);
            });
        });
    };
    scrollTo();
}());
(function(){
    const burger = document.querySelector(".header__burger"); 
    const burgerDisabled = document.querySelector('.burger__disabled');
    let burgerActive;
    burger.addEventListener('click',() => {
        burgerDisabled.classList.replace('burger__disabled', 'burger__active');
        burgerActive = document.querySelector('.burger__active');
    });
    const closeBtn = document.getElementById('close'); 
    closeBtn.addEventListener('click', () => {
        
        addAnimationOnClose(burgerActive);
      
    });
    const tab = document.querySelectorAll('.burger-tabs').forEach(item => {
        item.addEventListener('click', event => {
            addAnimationOnClose(burgerActive);
        });
    });
  
}());

function addAnimationOnClose(burgerActive){
    burgerActive.classList.add('close-animation');
    setTimeout(() => {
        burgerActive.classList.remove('close-animation');
        burgerActive.classList.replace('burger__active', 'burger__disabled');
  }, 1000);
}

