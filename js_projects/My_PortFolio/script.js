
    const left = document.querySelector("#left");
    const right = document.querySelector("#right");
    const slider = document.querySelector(".galary");


    left.addEventListener('click', ()=>{
      slider.scrollLeft -= 400
    })
    right.addEventListener('click', ()=>{
      slider.scrollLeft += 400
    })
    slider.addEventListener('wheel', (e)=>{
      e.preventDefault()
      slider.scrollLeft += e.deltaY;
    })

    var typed = new Typed('#element', {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });

    
