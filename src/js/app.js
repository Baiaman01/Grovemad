$(document).ready(function () {
    $('.slick-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

const requestBtn = document.querySelector('#requestBtn')
const modal = document.querySelector('#custom-modal')
const requestCloseBtn = document.querySelector('#request-close-btn')
const requestCloseBtnThanks = document.querySelector('#request-close-btn-thanks')
const modalRequest = document.querySelector('#modal-request')
const submitBtn = document.querySelector('#modal-request-submit')
const modalThanks = document.querySelector('#modal-thanks')
const body = document.querySelector('body')

requestBtn.addEventListener('click', () => {
  openModal(modal)
  openModal(modalRequest)
  body.style.overflow = 'hidden'
}) 

requestCloseBtn.addEventListener('click', () => {
  closeModal(modalRequest)
  closeModal(modal)
  body.style.overflow = 'auto'
})

requestCloseBtnThanks.addEventListener('click', () => {
  closeModal(modalRequest)
  closeModal(modal)
  closeModal(modalThanks)
  body.style.overflow = 'auto'
}) 
console.log(submitBtn);
submitBtn.addEventListener('click', () => {
  closeModal(modalRequest)
  openModal(modalThanks)
  setTimeout( () => {
    closeModal(modalThanks)
    closeModal(modal)
    body.style.overflow = 'auto'
  }, 5000)
})
function closeModal(selector) {
  selector.classList.remove('active')
}

function openModal(selector) {
  selector.classList.add('active')
}

const burger = document.querySelector('#burger')
const header__row = document.querySelector('.header__row')
const overlay = document.querySelector('.overlay')

burger.addEventListener('click', () => {
  header__row.classList.toggle('active')
  burger.classList.toggle('active')
  overlay.classList.toggle('active')
  body.classList.toggle('hidden')
})

  

let carusel = document.querySelector('#carusel');
let teams = document.querySelector('#teams');


