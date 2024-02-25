
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
      strings: ['<i>Good In problem </i> solving.', '&amp; Good Projects.'],
      typeSpeed: 50,
    });

    // Code for nav options
    let ham = document.querySelector("#ham");
    let ul_list = document.querySelector(".right > ul");

    let flag = false;
    ham.addEventListener('click', () => {
      if(flag == false) {
        ul_list.style.opacity = 1;
        ham.setAttribute('src','cros.svg');
        flag = true;
      } else {
        ul_list.style.opacity = 0;
        ham.setAttribute('src','ham.svg');
        flag = false;
      }
    })

    
