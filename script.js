// Variables
const cursor = document.querySelector(".cursor");
const page1 = document.querySelector(".page1");
// const spanExp = document.querySelector(".page2 span");




function loaderAnimation(){
  let tl = gsap.timeline()

  tl.from(".loader h3",{
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1
  })
  tl.to(".loader h3",{
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.1
  })
  tl.to(".loader",{
    width: 0,
    duration: 1
  })
  tl.from('.page1-content h1 span',{
    y:100,
    opacity:0,
    stagger: 0.1,
    duration: .5
  })

}
loaderAnimation()

// Cursor Animation
function cursoranimation() {
  page1.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      x: dets.x,
      y: dets.y,
    });
  });
  page1.addEventListener("mouseenter", function (dets) {
    gsap.to(".cursor", {
      scale: 1,
      opacity: 1,
    });
  });
  page1.addEventListener("mouseleave", function (dets) {
    gsap.to(".cursor", {
      scale: 0,
      opacity: 0,
    });
  });
}
cursoranimation();

//Locomotive scroll
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotive();

// Paragraph Animation
function paraAnimation(){
  const para = document.querySelector(".para");

let clutter= '';

para.textContent.split("\n").forEach(function(dets){
  clutter += `<div> <span class="text"> ${dets} </span> </div>`

  document.querySelector(".para").innerHTML = clutter;
})


let tl = gsap.timeline({
  scrollTrigger:{
      trigger: ".heading",
      scroller: ".main",
      // markers: true,
      start: "top 20%",
      end: "top 10%"
      // scrub: 3
  }
})
tl.to(".page2>span",{
  width: "94%"
})
tl.to(".text", {
  y: 0,
  stagger: 0.1
})

}
paraAnimation();

// page4anime
function page4anim(){
  const paragraph = document.querySelector(".paragraph");

  let clutter= '';
  
  paragraph.textContent.split("\n").forEach(function(dets){
    clutter += `<div> <span class="text"> ${dets} </span> </div>`
  
    document.querySelector(".paragraph").innerHTML = clutter;
  })
  
  
  let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page4 .heading",
        scroller: ".main",
        // markers: true,
        start: "top 20%",
        end: "top 10%",
        scrub: 3
    }
  })
  tl2.to(".page4>span",{
    width: "94%"
  })
  tl2.to(".text", {
    y: 0,
    stagger: 0.2
  })
  
}
page4anim()

// page5anime
function page5anim(){
  const paragraph2 = document.querySelector(".paragraph2");

  let clutter= '';
  
  paragraph2.textContent.split("\n").forEach(function(dets){
    clutter += `<div> <span class="text"> ${dets} </span> </div>`
  
    document.querySelector(".paragraph2").innerHTML = clutter;
  })
  
  
  let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page5 .heading",
        scroller: ".main",
        // markers: true,
        start: "top 20%",
        end: "top 10%",
        scrub: 3
    }
  })
  tl3.to(".page5>span",{
    width: "94%"
  })
  tl3.to(".text", {
    y: 0,
    stagger: 0.2
  })
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  let lt = gsap.timeline({
    scrollTrigger:{
        trigger: ".footer",
        scroller: ".main",
        // markers: true,
        start: "top 10%",
        end: "top 0%",
        scrub: 3
    }
    })

  lt.from('.bottom-footer h1 span',{
    y:-100,
    opacity:0,
    stagger: 0.1,
    duration: .4
  })
}
page5anim()


function menuanimation(){
  const menu = document.querySelector(".menu")
  const close = document.querySelector(".close")

  menu.addEventListener("click", function(){
    gsap.to(".menuslider",{
      opacity: 1,
      height: "70vh",
      duration: 0.5,
      display: "block"
    })
    gsap.to(".menu-content",{
      opacity: 1,
      scale: 1,
      delay:.5,
      duration: 0.5,
      display: "block"
    })
  })
  close.addEventListener("click", function(){
    gsap.to(".menuslider",{
      opacity: 0,
      height: "0vh",
      duration: 0.5,
      display: "none"
    })
    gsap.to(".menu-content",{
      opacity: 0,
      scale: 0,
      duration: 0.5,
      display: "none"
    })
  })
}
menuanimation();
