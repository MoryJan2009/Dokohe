/* Begin::Video Player */
let playBtn = document.querySelector("#play-video");
let exVideo = document.querySelector(".ex-video");

try {
   let popBtn = document.querySelector(".popup-btn")
   let popBlur = document.querySelector(".main-page")
   let popupCart = document.querySelector(".popup-cart")
   let closePop = document.querySelector(".close-pop")
   let idkBPop = document.querySelector(".idk-pop")

   popBtn.addEventListener("click", () => {
      popupCart.classList.toggle("invisible")
      popBlur.classList.toggle("pop-blur")
   })

   popBlur.addEventListener("click", () => {
      popBlur.classList.remove("pop-blur")
      popupCart.classList.add("invisible")
   })

   closePop.addEventListener("click", () => {
      popupCart.classList.add("invisible")
      popBlur.classList.remove("pop-blur")
   })

   idkBPop.addEventListener("click", () => {
      popupCart.classList.add("invisible")
      popBlur.classList.remove("pop-blur")
   })
} catch (error) {
   null
}

try {
   playBtn.addEventListener("click", () => {
      exVideo.play();
      playBtn.style.display = 'none';
      exVideo.controls = true;
   })

} catch (error) {
   null
}
/* End::Video Player */
/* Begin::Owl-Js Setting */
$(document).ready(function () {
   $(".owl-carousel").owlCarousel()
})

var owl = $(".owl-carousel")
owl.owlCarousel({
   rtl: true,
   items: 4,
   loop: true,
   margin: 10,
   /* Change to [false] for Stop autoplaying boxs:  */
   autoplay: true,
   autoplayTimeout: 3000,
   autoplayHoverPause: true,
   smartSpeed: 500,
   dots: true,
   lazyLoad: true,
   /* Responsive Box Carsouls: */
   responsive: {
      0: {
         items: 1,
      },
      640: {
         items: 2,
      },

      1024: {
         items: 3,
      },
      1280: {
         items: 4,
      },
   },
})
/* Button Next & Prev jQuery */
$(".owl-next").click(function () {
   owl.trigger("next.owl.carousel")
})
$(".owl-prev").click(function () {
   owl.trigger("prev.owl.carousel")
})

/* End::Owl-Js Setting */
/* Begin:: menu Responsive */
let closeBtn = document.querySelector(".close")
let menuBtn = document.querySelector(".menu-btn")
let panelMobile = document.querySelector(".panel-mobile")
let screenCover = document.querySelector(".menu-cover")
let header = document.querySelector('.header-dashboard');
let menuStat = false

menuBtn.addEventListener("click", () => {
   panelMobile.style.right = "0"
   panelMobile.style.display = "block"
   screenCover.style.height = "100%"
   header.style.zIndex = '20'
   menuStat = true
   console.log('ok')
})

closeBtn.addEventListener("click", () => {
   panelMobile.style.right = "-280px"
   panelMobile.style.display = "none"
   screenCover.style.height = "0"
   header.style.zIndex = '-1'
   menuStat = false
})

screenCover.addEventListener('click', () => {
   panelMobile.style.right = "-280px"
   panelMobile.style.display = "none"
   screenCover.style.height = "0"
   header.style.zIndex = '-1'
   screenCover.classList.add('z-0')
   menuStat = false
})
/* End:: menu Responsive */

function form() {
   const form = document.querySelector("form")
   const inputs = form.querySelectorAll("input")
   const KEYBOARDS = {
      backspace: 8,
      arrowLeft: 37,
      arrowRight: 39,
   }

   function handleInput(e) {
      const input = e.target
      const nextInput = input.nextElementSibling
      if (nextInput && input.value) {
         nextInput.focus()
         if (nextInput.value) {
            nextInput.select()
         }
      }
   }

   function handlePaste(e) {
      e.preventDefault()
      const paste = e.clipboardData.getData("text")
      inputs.forEach((input, i) => {
         input.value = paste[i] || ""
      })
   }

   function handleBackspace(e) {
      const input = e.target
      if (input.value) {
         input.value = ""
         return
      }

      input.previousElementSibling.focus()
   }

   function handleArrowLeft(e) {
      const previousInput = e.target.previousElementSibling
      if (!previousInput) return
      previousInput.focus()
   }

   function handleArrowRight(e) {
      const nextInput = e.target.nextElementSibling
      if (!nextInput) return
      nextInput.focus()
   }

   form.addEventListener("input", handleInput)
   inputs[0].addEventListener("paste", handlePaste)

   inputs.forEach((input) => {
      input.addEventListener("focus", (e) => {
         setTimeout(() => {
            e.target.select()
         }, 0)
      })

      input.addEventListener("keydown", (e) => {
         switch (e.keyCode) {
            case KEYBOARDS.backspace:
               handleBackspace(e)
               break
            case KEYBOARDS.arrowLeft:
               handleArrowLeft(e)
               break
            case KEYBOARDS.arrowRight:
               handleArrowRight(e)
               break
            default:
         }
      })
   })

}

try {
   form()
} catch (error) {
   null
}

let showMore = document.querySelector('.show-more');
let coverShowMore = document.querySelector('.show-more-cover')
let showMoreSec = document.querySelector('.sec-show-more')
let closeBtn2 = document.querySelector('.close-btn-show-more')

function showPriceMore() {
   function showmore() {
      showMoreSec.classList.add('flex')
      showMoreSec.classList.remove('invisible')
      showMoreSec.classList.add('opacity-100')
      coverShowMore.classList.add('h-full')
   }

   coverShowMore.addEventListener('click', () => {
      showMoreSec.classList.add('invisible')
      showMoreSec.classList.remove('opacity-100')
      coverShowMore.classList.remove('h-full')
   })

   closeBtn2.addEventListener('click', () => {
      showMoreSec.classList.add('invisible')
      showMoreSec.classList.remove('opacity-100')
      coverShowMore.classList.remove('h-full')
   })
}

try {
   showPriceMore()
} catch (error) {
   null
}

let accountBtn = document.querySelector(".account-btn");
let backBlur = document.querySelector('.back-blur');

accountBtn.addEventListener('click', () => {
   backBlur.style.zIndex = 20
   console.log('ok');
})

backBlur.addEventListener('click', () => {
   backBlur.style.zIndex = -1
})

let lastScrollTop = 0;
let desktopHeader = document.querySelector('header.header');

window.addEventListener('scroll', () => {
   let st = window.scrollY || document.documentElement.scrollTop;

   if (st > lastScrollTop) {
      desktopHeader.style.top = "-100px";
   } else {
      desktopHeader.style.top = "0px";
   }
   lastScrollTop = st <= 0 ? 0 : st;
});

let lastScrollTop2 = 0;
let MobileHeader = document.querySelector('.mbile-header');

window.addEventListener('scroll', () => {
   let st = window.scrollY || document.documentElement.scrollTop;

   if (st > lastScrollTop2) {
      MobileHeader.style.top = "-100px";
   } else {
      MobileHeader.style.top = "0px";
   }
   lastScrollTop2 = st <= 0 ? 0 : st;
});
