
// swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
  
  let openmenu = document.getElementById("hamburger-menu");
  let closemenu = document.querySelector(".navbar")
  let closebtn = document.querySelector(".crossClose")
  openmenu.addEventListener('click', () => {
    closemenu.style.transform = `translateX(0%)`
  
  })
  closebtn.addEventListener('click', () => {
    closemenu.style.transform = `translateX(100%)`
  })
  
  
  
  
  
  let loder = document.getElementById('preloderHome');
  window.addEventListener("load", () => {
    setTimeout(() => {
      loder.style.transform = `translateY(-2000px)`
      loder.style.borderRadius = ` 100%`
    }, 1000);
  })
  
  
  let none = document.querySelector('.disnone');
  let reel1 = document.querySelector(".reel1");
  let reel2 = document.querySelector(".reel2")
  window.addEventListener('scroll', () => {
    none.classList.toggle("scroll-ocean", scrollY > 500)
    reel1.classList.toggle('reel-animate', scrollY > 460);
    reel2.classList.toggle('reel-animate2', scrollY > 460);
  
  })
  
  
  let gallery = Array.from(document.getElementsByClassName('image-js'));
  let pop = document.getElementById("show-img");
  let dinamicImg = document.getElementById("dinamic-img");
  gallery.forEach(img => {
    img.addEventListener("click", () => {
      pop.style.display = 'block';
      dinamicImg.src = img.getAttribute('src');
    })
  });
  
  pop.addEventListener("click", () => {
    pop.style.display = 'none';
  })