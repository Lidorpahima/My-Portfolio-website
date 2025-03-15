document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }));
  
    const isContactPage = window.location.pathname.includes('contact') || 
                          window.location.href.includes('contact.html');

    const particleColors = isContactPage 
                          ? ["#4E8FF7", "#4E8FF7", "#4E8FF7"]  
                          : ["#E23E57", "#E23E57", "#E23E57"]; 

    const lineColor = isContactPage 
                    ? "#4E8FF7"  
                    : "#ff1d02"; 

    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": particleColors 
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
        },
        "opacity": {
          "value": 0.8,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 120,
          "color": lineColor, 
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 150,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 100,
            "duration": 0.1
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

    var typed = new Typed('.typing', {
      strings: [
        "",
        "Computer Science Student",
        "Backend Enthusiast",
        "Learning AI Technologies",
        "Adaptable Problem Solver",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-out'
    });

  });

 const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
  document.querySelector(".downloadCv").addEventListener("click", function() {
    const link = document.createElement("a");
    
    link.href = "https://drive.google.com/uc?export=download&id=1T32pmypzgD0QPR_XoijU0ra15J80Ck_F";

    link.download = "Lidor-Pahima-CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
