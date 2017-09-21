 function debounce(func, wait = 10, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }


    const portfolioElements = document.querySelectorAll(".portfolio-element");

    function checkSlide(e){

      portfolioElements.forEach(portfolioElement=>{
        //half way through image
        const slideInAt = (window.scrollY + window.innerHeight) -
         portfolioElement.style.height / 2 ;

         //bottom of the image
        const imageBottom  = portfolioElement.offsetTop + portfolioElement.style.height;

        const isHalfShown = slideInAt > portfolioElement.offsetTop;
        const isNotScrolledPassed = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPassed){
          portfolioElement.classList.add("active")
        };
        
      })

    }

    window.addEventListener("scroll", debounce(checkSlide));



