gsap.registerPlugin(ScrollTrigger);

// Animate all p tags

var sections = gsap.utils.toArray("p");
sections.forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
      scrub: true,
      end: "bottom 25%",
      markers: true,
    },
  });
});

// Timeline of Events

const tl = gsap.timeline();
tl.from(".sec1-slide1", { opacity: 0, x: "50px" })
  .to(".sec1-slide1", { opacity: 1 })
  .to(".sec1-slide1", { opacity: 0, x: "-50px" })
  .from(".sec1-slide2", { opacity: 0, x: "50px" })
  .to(".sec1-slide2", { opacity: 1 })
  .to(".sec1-slide2", { opacity: 0 })
  .from(".sec1-slide3", { opacity: 0, x: "50px" })
  .to(".sec1-slide3", { opacity: 1 })
  .to(".sec1-slide3", { opacity: 0 })
  .from(".sec1-slide4", { opacity: 0, x: "50px" })
  .to(".sec1-slide4", { opacity: 1 })
  .to(".sec1-slide4", { opacity: 0 });

var pinOnly = ScrollTrigger.create({
  animation: tl,
  trigger: ".interective__timeline",
  pin: true,
  scrub: true,
  start: "top top",
  end: "+=600%",
});

// ScrollTrigger.create({
//   animation: tl,
//   trigger: "#container",
//   start: "top top",
//   end: "+=4000",
//   scrub: true,
//   pin: true,
//   anticipatePin: 1,
// });

// var tl01 = gsap.timeline({
//   scrollTrigger: {
//     scroller: ".scrollContainer",
//     trigger: ".trigger-wrap",
//     start: "top top",
//     end: "+=200%",
//     toggleActions: "play reverse play reverse",
//   },
// });

// tl01.to(".traditional1 img", { opacity: 1 });

// var tl02 = gsap.timeline({
//   scrollTrigger: {
//     scroller: ".scrollContainer",
//     trigger: ".trigger-wrap",
//     start: "top top-=200%",
//     end: "+=200%",
//     toggleActions: "play reverse play reverse",
//   },
// });

// tl02.to(".traditional2 img", { opacity: 1 });

// var tl03 = gsap.timeline({
//   scrollTrigger: {
//     scroller: ".scrollContainer",
//     trigger: ".trigger-wrap",
//     start: "top top-=400%",
//     end: "+=200%",
//     toggleActions: "play reverse play reverse",
//   },
// });

// tl03.to(".traditional3 img", { opacity: 1 });
