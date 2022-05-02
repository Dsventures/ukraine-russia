gsap.registerPlugin(ScrollTrigger);

// Animate all p tags

// var touchIframes = document.getElementsByClassName("iframeTouch");
// var gestureGIF = document.getElementsByClassName("gesture")[0];

// for (var t = 0; t < touchIframes.length; t++) {
//   touchIframes[t].onclick = function () {
//     // gestureGIF.style.display = "none";
//     alert("Test");
//   };
// }

var sections = gsap.utils.toArray(".scroll-p");
sections.forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
      scrub: true,
      end: "bottom 25%",
      markers: false,
    },
  });
});

// var charts = gsap.utils.toArray(".interactive__charts");
// charts.forEach((section) => {
//   gsap.from(section, {
//     opacity: 0,
//     scrollTrigger: {
//       trigger: section,
//       start: "top 75%",
//       scrub: true,
//       end: "bottom 25%",
//       markers: false,
//     },
//   });
// });

// Timeline of Events ========================= //
// ============================================ //

// var tl = gsap.timeline();

// var activeState = { color: "red", fontSize: "17px", fontWeight: "bold" };
// var inActiveState = { color: "grey", fontSize: "12px" };

// // 1
// tl.from(".sec1-slide1", { opacity: 1 }, "one")
//   .to(".sec1-slide1", { opacity: 1 })
//   .to(".sec1-slide1", { opacity: 0 }, "one-end")
//   .to("#dec2021", activeState, "one")
//   .from(".sec1-years", { opacity: 1 }, "one")
//   .to("#dec2021", inActiveState, "one-end");

// // 2
// tl.from(".sec1-slide2", { opacity: 0 }, "two")
//   .to(".sec1-slide2", { opacity: 1 })
//   .to(".sec1-slide2", { opacity: 0 }, "two-end")
//   .to("#feb2022", activeState, "two")
//   .to(".sec1-years", { x: "-124px" }, "two")
//   .to("#feb2022", inActiveState, "two-end");

// // 3
// tl.from(".sec1-slide3", { opacity: 0 }, "three")
//   .to(".sec1-slide3", { opacity: 1 })
//   .to(".sec1-slide3", { opacity: 0 }, "three-end")
//   .to("#feb22-2022", activeState, "three")
//   .to(".sec1-years", { x: "-224px" }, "three")
//   .to("#feb22-2022", inActiveState, "three-end");

// // 4
// tl.from(".sec1-slide4", { opacity: 0 }, "four")
//   .to(".sec1-slide4", { opacity: 1 })
//   .to(".sec1-slide4", { opacity: 0 }, "four-end")
//   .to("#feb24-2022", activeState, "four")
//   .to(".sec1-years", { x: "-324px" }, "four")
//   .to("#feb24-2022", inActiveState, "four-end");

// // 5
// tl.from(".sec1-slide5", { opacity: 0 }, "five")
//   .to(".sec1-slide5", { opacity: 1 })
//   .to(".sec1-slide5", { opacity: 0 }, "five-end")
//   .to("#feb26-2022", activeState, "five")
//   .to(".sec1-years", { x: "-424px" }, "five")
//   .to("#feb26-2022", inActiveState, "five-end");

// // 6
// tl.from(".sec1-slide6", { opacity: 0 }, "six")
//   .to(".sec1-slide6", { opacity: 1 })
//   .to(".sec1-slide6", { opacity: 0 }, "six-end")
//   .to("#mar02-2022", activeState, "six")
//   .to(".sec1-years", { x: "-524px" }, "six")
//   .to("#mar02-2022", inActiveState, "six-end");

// // 7
// tl.from(".sec1-slide7", { opacity: 0 }, "seven")
//   .to(".sec1-slide7", { opacity: 1 })
//   .to(".sec1-slide7", { opacity: 0 }, "seven-end")
//   .to("#mar26-2022", activeState, "seven")
//   .to(".sec1-years", { x: "-624px" }, "seven")
//   .to("#mar26-2022", inActiveState, "seven-end");

// // 8
// tl.from(".sec1-slide8", { opacity: 0 }, "eight")
//   .to(".sec1-slide8", { opacity: 1 })
//   .to(".sec1-slide8", { opacity: 0 }, "eight-end")
//   .to("#mar31-2022", activeState, "eight")
//   .to(".sec1-years", { x: "-724px" }, "eight")
//   .to("#mar31-2022", inActiveState, "eight-end");

// // 9
// tl.from(".sec1-slide9", { opacity: 0 }, "nine")
//   .to(".sec1-slide9", { opacity: 1 })
//   .to(".sec1-slide9", { opacity: 0 }, "nine-end")
//   .to("#apr02-2022", activeState, "nine")
//   .to(".sec1-years", { x: "-824px" }, "nine")
//   .to("#apr02-2022", inActiveState, "nine-end");

// // 10
// tl.from(".sec1-slide10", { opacity: 0 }, "ten")
//   .to(".sec1-slide10", { opacity: 1 })
//   .to(".sec1-slide10", { opacity: 0 }, "ten-end")
//   .to("#apr03-2022", activeState, "ten")
//   .to(".sec1-years", { x: "-924px" }, "ten")
//   .to("#apr03-2022", inActiveState, "ten-end");

// // 11
// tl.from(".sec1-slide11", { opacity: 0 }, "eleven")
//   .to(".sec1-slide11", { opacity: 1 })
//   .to(".sec1-slide11", { opacity: 0 }, "eleven-end")
//   .to("#apr04-2022", activeState, "eleven")
//   .to(".sec1-years", { x: "-1124px" }, "eleven")
//   .to("#apr04-2022", inActiveState, "eleven-end");

// // 12
// tl.from(".sec1-slide12", { opacity: 0 }, "twelve")
//   .to(".sec1-slide12", { opacity: 1 })
//   .to("#apr10-2022", activeState, "twelve")
//   .to(".sec1-years", { x: "-1224px" }, "twelve");

// tl.from(".sec1-slide12", { opacity: 0 }, "twelve")
//   .to(".sec1-slide12", { opacity: 1 })
//   .to(".sec1-slide12", { opacity: 0 }, "twelve-end")
//   .to("#apr10-2022", activeState, "twelve")
//   .to(".sec1-years", { x: "-1224px" }, "twelve")
//   .to("#apr10-2022", inActiveState, "twelve-end");

// var pinOnly = ScrollTrigger.create({
//   animation: tl,
//   trigger: ".interective__timeline",
//   pin: true,
//   scrub: true,
//   start: "top top",
//   end: "+=600%",
//   pinSpacing: true,
// });

// Timeline of Invasion ========================== //
// =============================================== //

// var tl2 = gsap.timeline();

// // 1
// tl2
//   .from("#sec2-nav1 span", { opacity: 0 }, "one")
//   .to("#sec2-nav1 span", { opacity: 0 }, "one-end")
//   .to("#sec2-nav1 i", { backgroundColor: "#000", scale: 2 }, "one")
//   .to("#sec2-nav1 i", { backgroundColor: "#c4c4c4", scale: 1 }, "one-end")
//   .from(".sec2-slide1", { opacity: 1 }, "one")
//   .to(".sec2-slide1", { opacity: 0 }, "one-end");

// // 2
// tl2
//   .from("#sec2-nav2 span", { opacity: 0 }, "two")
//   .to("#sec2-nav2 span", { opacity: 0 }, "two-end")
//   .to("#sec2-nav2 i", { backgroundColor: "#000", scale: 2 }, "two")
//   .to("#sec2-nav2 i", { backgroundColor: "#c4c4c4", scale: 1 }, "two-end")
//   .from(".sec2-slide2", { opacity: 0 }, "two")
//   .to(".sec2-slide2", { opacity: 0 }, "two-end");

// // 3
// tl2
//   .from("#sec2-nav3 span", { opacity: 0 }, "three")
//   .to("#sec2-nav3 span", { opacity: 0 }, "three-end")
//   .to("#sec2-nav3 i", { backgroundColor: "#000", scale: 2 }, "three")
//   .to("#sec2-nav3 i", { backgroundColor: "#c4c4c4", scale: 1 }, "three-end")
//   .from(".sec2-slide3", { opacity: 0 }, "three")
//   .to(".sec2-slide3", { opacity: 0 }, "three-end");

// // 4
// tl2
//   .from("#sec2-nav4 span", { opacity: 0 }, "four")
//   .to("#sec2-nav4 span", { opacity: 0 }, "four-end")
//   .to("#sec2-nav4 i", { backgroundColor: "#000", scale: 2 }, "four")
//   .to("#sec2-nav4 i", { backgroundColor: "#c4c4c4", scale: 1 }, "four-end")
//   .from(".sec2-slide4", { opacity: 0 }, "four")
//   .to(".sec2-slide4", { opacity: 0 }, "four-end");

// // 5
// tl2
//   .from("#sec2-nav5 span", { opacity: 0 }, "five")
//   .to("#sec2-nav5 span", { opacity: 0 }, "five-end")
//   .to("#sec2-nav5 i", { backgroundColor: "#000", scale: 2 }, "five")
//   .to("#sec2-nav5 i", { backgroundColor: "#c4c4c4", scale: 1 }, "five-end")
//   .from(".sec2-slide5", { opacity: 0 }, "five")
//   .to(".sec2-slide5", { opacity: 0 }, "five-end");

// // 6
// tl2
//   .from("#sec2-nav6 span", { opacity: 0 }, "six")
//   .to("#sec2-nav6 span", { opacity: 0 }, "six-end")
//   .to("#sec2-nav6 i", { backgroundColor: "#000", scale: 2 }, "six")
//   .to("#sec2-nav6 i", { backgroundColor: "#c4c4c4", scale: 1 }, "six-end")
//   .from(".sec2-slide6", { opacity: 0 }, "six")
//   .to(".sec2-slide6", { opacity: 0 }, "six-end");

// // 7
// tl2
//   .from("#sec2-nav7 span", { opacity: 0 }, "seven")
//   .to("#sec2-nav7 span", { opacity: 0 }, "seven-end")
//   .to("#sec2-nav7 i", { backgroundColor: "#000", scale: 2 }, "seven")
//   .to("#sec2-nav7 i", { backgroundColor: "#c4c4c4", scale: 1 }, "seven-end")
//   .from(".sec2-slide7", { opacity: 0 }, "seven")
//   .to(".sec2-slide7", { opacity: 0 }, "seven-end");

// // 8
// tl2
//   .from("#sec2-nav8 span", { opacity: 0 }, "eight")
//   .to("#sec2-nav8 span", { opacity: 0 }, "eight-end")
//   .to("#sec2-nav8 i", { backgroundColor: "#000", scale: 2 }, "eight")
//   .to("#sec2-nav8 i", { backgroundColor: "#c4c4c4", scale: 1 }, "eight-end")
//   .from(".sec2-slide8", { opacity: 0 }, "eight")
//   .to(".sec2-slide8", { opacity: 0 }, "eight-end");

// // 9
// tl2
//   .from("#sec2-nav9 span", { opacity: 0 }, "nine")
//   .to("#sec2-nav9 span", { opacity: 0 }, "nine-end")
//   .to("#sec2-nav9 i", { backgroundColor: "#000", scale: 2 }, "nine")
//   .to("#sec2-nav9 i", { backgroundColor: "#c4c4c4", scale: 1 }, "nine-end")
//   .from(".sec2-slide9", { opacity: 0 }, "nine")
//   .to(".sec2-slide9", { opacity: 0 }, "nine-end");

// // 10
// tl2
//   .from("#sec2-nav10 span", { opacity: 0 }, "ten")
//   .to("#sec2-nav10 span", { opacity: 0 }, "ten-end")
//   .to("#sec2-nav10 i", { backgroundColor: "#000", scale: 2 }, "ten")
//   .to("#sec2-nav10 i", { backgroundColor: "#c4c4c4", scale: 1 }, "ten-end")
//   .from(".sec2-slide10", { opacity: 0 }, "ten")
//   .to(".sec2-slide10", { opacity: 1 }, "ten-end");

// 11
// tl2
//   .from("#sec2-nav11 span", { opacity: 0 }, "eleven")
//   .to("#sec2-nav11 span", { opacity: 0 }, "eleven-end")
//   .to("#sec2-nav11 i", { backgroundColor: "#000", scale: 2 }, "eleven")
//   .to("#sec2-nav11 i", { backgroundColor: "#000", scale: 1 }, "eleven-end")
//   .from(".sec2-slide11", { opacity: 0 }, "eleven")
//   .to(".sec2-slide11", { opacity: 1 }, "eleven-end");

// var pinOnly2 = ScrollTrigger.create({
//   // animation: tl2,
//   trigger: ".interective__invasion",
//   pin: true,
//   scrub: true,
//   start: "top top",
//   end: "+=600%",
//   pinSpacing: true,
// });

// var tl3 = gsap.timeline();

// // 1
// tl3
//   .from(".interactive__sanction-map1", { opacity: 0 }, "one")
//   .to(".sec5Page1", { backgroundColor: "#000", scale: 2 }, "one")
//   .to(".sec5Page1", { backgroundColor: "#c4c4c4", scale: 1 }, "one-end")
//   .to(".interactive__sanction-map1", { opacity: 0 }, "one-end");

// // 2
// tl3
//   .from(".interactive__sanction-map2", { opacity: 0 }, "two")
//   .to(".sec5Page2", { backgroundColor: "#000", scale: 2 }, "two")
//   .to(".sec5Page2", { backgroundColor: "#c4c4c4", scale: 1 }, "two-end")
//   .to(".interactive__sanction-map2", { opacity: 0 }, "two-end");

// // 3
// tl3
//   .from(".interactive__sanction-map3", { opacity: 0 }, "three")
//   .to(".sec5Page3", { backgroundColor: "#000", scale: 2 }, "three")
//   .to(".sec5Page3", { backgroundColor: "#c4c4c4", scale: 1 }, "three-end")
//   .to(".interactive__sanction-map3", { opacity: 0 }, "three-end");

// // 4
// tl3
//   .from(".interactive__sanction-map4", { opacity: 0 }, "four")
//   .to(".sec5Page4", { backgroundColor: "#000", scale: 2 }, "four")
//   .to(".sec5Page4", { backgroundColor: "#c4c4c4", scale: 1 }, "four-end")
//   .to(".interactive__sanction-map4", { opacity: 0 }, "four-end");

// // 5
// tl3
//   .from(".interactive__sanction-map5", { opacity: 0 }, "five")
//   .to(".sec5Page5", { backgroundColor: "#000", scale: 2 }, "five")
//   .to(".sec5Page5", { backgroundColor: "#c4c4c4", scale: 1 }, "five-end")
//   .to(".interactive__sanction-map5", { opacity: 0 }, "five-end");

// // 6
// tl3
//   .from(".interactive__sanction-map6", { opacity: 0 }, "six")
//   .to(".sec5Page6", { backgroundColor: "#000", scale: 2 }, "six")
//   .to(".sec5Page6", { backgroundColor: "#c4c4c4", scale: 1 }, "six-end")
//   .to(".interactive__sanction-map6", { opacity: 0 }, "six-end");

// // 7
// tl3
//   .from(".interactive__sanction-map7", { opacity: 0 }, "seven")
//   .to(".sec5Page7", { backgroundColor: "#000", scale: 2 }, "seven")
//   .to(".sec5Page7", { backgroundColor: "#c4c4c4", scale: 1 }, "seven-end")
//   .to(".interactive__sanction-map7", { opacity: 0 }, "seven-end");

// // 8
// tl3
//   .from(".interactive__sanction-map8", { opacity: 0 }, "eight")
//   .to(".sec5Page8", { backgroundColor: "#000", scale: 2 }, "eight")
//   .to(".sec5Page8", { backgroundColor: "#c4c4c4", scale: 1 }, "eight-end")
//   .to(".interactive__sanction-map8", { opacity: 0 }, "eight-end");

// // 9
// tl3
//   .from(".interactive__sanction-map9", { opacity: 0 }, "nine")
//   .to(".sec5Page9", { backgroundColor: "#000", scale: 2 }, "nine")
//   .to(".sec5Page9", { backgroundColor: "#c4c4c4", scale: 1 }, "nine-end")
//   .to(".interactive__sanction-map9", { opacity: 0 }, "nine-end");

// // 10
// tl3
//   .from(".interactive__sanction-map10", { opacity: 0 }, "ten")
//   .to(".sec5Page10", { backgroundColor: "#000", scale: 2 }, "ten")
//   .to(".sec5Page10", { backgroundColor: "#c4c4c4", scale: 1 }, "ten-end")
//   .to(".interactive__sanction-map10", { opacity: 0 }, "ten-end");

// // 11
// tl3
//   .from(".interactive__sanction-map11", { opacity: 0 }, "eleven")
//   .to(".sec5Page11", { backgroundColor: "#000", scale: 2 }, "eleven");
// // .to(".interactive__sanction-map11", { opacity: 0 }, "eleven-end");

// var pinOnly3 = ScrollTrigger.create({
//   animation: tl3,
//   trigger: ".interective__sanction",
//   pin: true,
//   scrub: true,
//   start: "top top",
//   end: "+=600%",
//   pinSpacing: true,
// });

// var tl4 = gsap.timeline();

// // 1
// tl4
//   .from(".sec3-slide1", { opacity: 1 }, "one")
//   .to(".sec3-slide1", { opacity: 1 })
//   .to(".sec3-slide1", { opacity: 0 }, "one-end")
//   .to(
//     "#sec3year1",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "one"
//   )
//   .from(".sec3-years", { opacity: 1 }, "one")
//   .to(
//     "#sec3year1",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "one-end"
//   );

// // 2
// tl4
//   .from(".sec3-slide2", { opacity: 0 }, "two")
//   .to(".sec3-slide2", { opacity: 1 })
//   .to(".sec3-slide2", { opacity: 0 }, "two-end")
//   .to(
//     "#sec3year2",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "two"
//   )
//   .to(".sec3-years", { x: "-70px" }, "two")
//   .to(
//     "#sec3year2",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "two-end"
//   );

// // 3
// tl4
//   .from(".sec3-slide3", { opacity: 0 }, "three")
//   .to(".sec3-slide3", { opacity: 1 })
//   .to(".sec3-slide3", { opacity: 0 }, "three-end")
//   .to(
//     "#sec3year3",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "three"
//   )
//   .to(".sec3-years", { x: "-140px" }, "three")
//   .to(
//     "#sec3year3",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "three-end"
//   );

// // 4
// tl4
//   .from(".sec3-slide4", { opacity: 0 }, "four")
//   .to(".sec3-slide4", { opacity: 1 })
//   .to(".sec3-slide4", { opacity: 0 }, "four-end")
//   .to(
//     "#sec3year4",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "four"
//   )
//   .to(".sec3-years", { x: "-210px" }, "four")
//   .to(
//     "#sec3year4",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "four-end"
//   );

// // 5
// tl4
//   .from(".sec3-slide5", { opacity: 0 }, "five")
//   .to(".sec3-slide5", { opacity: 1 })
//   .to(".sec3-slide5", { opacity: 0 }, "five-end")
//   .to(
//     "#sec3year5",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "five"
//   )
//   .to(".sec3-years", { x: "-280px" }, "five")
//   .to(
//     "#sec3year5",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "five-end"
//   );

// // 6
// tl4
//   .from(".sec3-slide6", { opacity: 0 }, "six")
//   .to(".sec3-slide6", { opacity: 1 })
//   .to(".sec3-slide6", { opacity: 0 }, "six-end")
//   .to(
//     "#sec3year6",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "six"
//   )
//   .to(".sec3-years", { x: "-350px" }, "six")
//   .to(
//     "#sec3year6",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "six-end"
//   );

// // 7
// tl4
//   .from(".sec3-slide7", { opacity: 0 }, "seven")
//   .to(".sec3-slide7", { opacity: 1 })
//   .to(".sec3-slide7", { opacity: 0 }, "seven-end")
//   .to(
//     "#sec3year7",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "seven"
//   )
//   .to(".sec3-years", { x: "-420px" }, "seven")
//   .to(
//     "#sec3year7",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "seven-end"
//   );

// // 8
// tl4
//   .from(".sec3-slide8", { opacity: 0 }, "eight")
//   .to(".sec3-slide8", { opacity: 1 })
//   .to(".sec3-slide8", { opacity: 0 }, "eight-end")
//   .to(
//     "#sec3year8",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "eight"
//   )
//   .to(".sec3-years", { x: "-490px" }, "eight")
//   .to(
//     "#sec3year8",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "eight-end"
//   );

// // 9
// tl4
//   .from(".sec3-slide9", { opacity: 0 }, "nine")
//   .to(".sec3-slide9", { opacity: 1 })
//   .to(".sec3-slide9", { opacity: 0 }, "nine-end")
//   .to(
//     "#sec3year9",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "nine"
//   )
//   .to(".sec3-years", { x: "-560px" }, "nine")
//   .to(
//     "#sec3year9",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "nine-end"
//   );

// // 10
// tl4
//   .from(".sec3-slide10", { opacity: 0 }, "ten")
//   .to(".sec3-slide10", { opacity: 1 })
//   .to(".sec3-slide10", { opacity: 0 }, "ten-end")
//   .to(
//     "#sec3year10",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "ten"
//   )
//   .to(".sec3-years", { x: "-630px" }, "ten")
//   .to(
//     "#sec3year10",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "ten-end"
//   );

// // 11
// tl4
//   .from(".sec3-slide11", { opacity: 0 }, "eleven")
//   .to(".sec3-slide11", { opacity: 1 })
//   .to(".sec3-slide11", { opacity: 0 }, "eleven-end")
//   .to(
//     "#sec3year11",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "eleven"
//   )
//   .to(".sec3-years", { x: "-700px" }, "eleven")
//   .to(
//     "#sec3year11",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "eleven-end"
//   );

// // 12
// tl4
//   .from(".sec3-slide12", { opacity: 0 }, "twelve")
//   .to(".sec3-slide12", { opacity: 1 })
//   .to(".sec3-slide12", { opacity: 0 }, "twelve-end")
//   .to(
//     "#sec3year12",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "twelve"
//   )
//   .to(".sec3-years", { x: "-770px" }, "twelve")
//   .to(
//     "#sec3year12",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "twelve-end"
//   );

// // 13
// tl4
//   .from(".sec3-slide13", { opacity: 0 }, "thirteen")
//   .to(".sec3-slide13", { opacity: 1 })
//   .to(".sec3-slide13", { opacity: 0 }, "thirteen-end")
//   .to(
//     "#sec3year13",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "thirteen"
//   )
//   .to(".sec3-years", { x: "-880px" }, "thirteen")
//   .to(
//     "#sec3year13",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "thirteen-end"
//   );

// // 14
// tl4
//   .from(".sec3-slide14", { opacity: 0 }, "fourteen")
//   .to(".sec3-slide14", { opacity: 1 })
//   .to(".sec3-slide14", { opacity: 0 }, "fourteen-end")
//   .to(
//     "#sec3year14",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "fourteen"
//   )
//   .to(".sec3-years", { x: "-950px" }, "fourteen")
//   .to(
//     "#sec3year14",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "fourteen-end"
//   );

// // 15
// tl4
//   .from(".sec3-slide15", { opacity: 0 }, "fifteen")
//   .to(".sec3-slide15", { opacity: 1 })
//   .to(".sec3-slide15", { opacity: 0 }, "fifteen-end")
//   .to(
//     "#sec3year15",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "fifteen"
//   )
//   .to(".sec3-years", { x: "-1020px" }, "fifteen")
//   .to(
//     "#sec3year15",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "fifteen-end"
//   );

// // 16
// tl4
//   .from(".sec3-slide16", { opacity: 0 }, "sixteen")
//   .to(".sec3-slide16", { opacity: 1 })
//   .to(".sec3-slide16", { opacity: 0 }, "sixteen-end")
//   .to(
//     "#sec3year16",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "sixteen"
//   )
//   .to(".sec3-years", { x: "-1100px" }, "sixteen")
//   .to(
//     "#sec3year16",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "sixteen-end"
//   );

// // 17
// tl4
//   .from(".sec3-slide17", { opacity: 0 }, "seventeen")
//   .to(".sec3-slide17", { opacity: 1 })
//   .to(".sec3-slide17", { opacity: 0 }, "seventeen-end")
//   .to(
//     "#sec3year17",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "seventeen"
//   )
//   .to(".sec3-years", { x: "-1200px" }, "seventeen")
//   .to(
//     "#sec3year17",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "seventeen-end"
//   );

// // 18
// tl4
//   .from(".sec3-slide18", { opacity: 0 }, "eighteen")
//   .to(".sec3-slide18", { opacity: 1 })
//   .to(".sec3-slide18", { opacity: 0 }, "eighteen-end")
//   .to(
//     "#sec3year18",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "eighteen"
//   )
//   .to(".sec3-years", { x: "-1300px" }, "eighteen")
//   .to(
//     "#sec3year18",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "eighteen-end"
//   );

// // 19
// tl4
//   .from(".sec3-slide19", { opacity: 0 }, "nineteen")
//   .to(".sec3-slide19", { opacity: 1 })
//   .to(".sec3-slide19", { opacity: 1 }, "nineteen-end")
//   .to(
//     "#sec3year19",
//     { color: "red", fontSize: "17px", fontWeight: "bold" },
//     "nineteen"
//   )
//   .to(".sec3-years", { x: "-1400px" }, "nineteen")
//   .to(
//     "#sec3year19",
//     { color: "grey", fontSize: "12px", fontWeight: "normal" },
//     "nineteen-end"
//   );

// var pinOnly4 = ScrollTrigger.create({
//   animation: tl4,
//   trigger: ".history_timeline",
//   pin: true,
//   scrub: true,
//   start: "top top",
//   end: "+=600%",
//   pinSpacing: true,
// });

var tl5 = gsap.timeline();
// zoom into Scene

// tl5.to(
//   "#humanitarian-corridor",
//   {
//     margin: "100px 0 0 0",
//   },
//   "zero"
// );
tl5
  .to(
    "#humanCorridors",
    {
      backgroundColor: "#000",
      scale: 1,
    },
    "zero"
  )
  .to("#humanCorridors", {
    backgroundColor: "#000",
    scale: 1.5,
    x: "100px",
    y: "100px",
  })
  .to("#humanCorridors", {
    backgroundColor: "#000",
    scale: 2,
    x: "150px",
    y: "200px",
  })
  .to("#humanCorridors", {
    backgroundColor: "#000",
    scale: 2.5,
    x: "200px",
    y: "300px",
  });

tl5.to("#humanCorridors", {
  backgroundColor: "#000",
  scale: 3,
  x: "250px",
  y: "400px",
});

// 1st cluster of cities
// chelm / kovel / ustyluh / hrubieszow / lubycza
tl5.to(".chelm", { opacity: 1 }, "one");
tl5.to(".kovel", { opacity: 1 }, "two");
tl5.to(".ustyluh", { opacity: 1 }, "three");
tl5.to(".hrubieszow", { opacity: 1 }, "four");
tl5.to(".lubycza", { opacity: 1 }, "five");

tl5
  .from("#Layer_15", { opacity: 0, scale: 1 }, "six-0")
  .to("#Layer_15", { scale: 1.5 }, "six")
  .to("#Layer_15 circle", { fill: "#ff0000" }, "six")
  .to("#Layer_15", { scale: 1 }, "six-end")
  .to("#Layer_15 circle", { fill: "#ff7246" }, "six-end");

tl5
  .from("#Layer_16", { opacity: 0, scale: 1 }, "seven-0")
  .to("#Layer_16", { scale: 1.5 }, "seven")
  .to("#Layer_16 circle", { fill: "#ff0000" }, "seven")
  .to("#Layer_16", { scale: 1 }, "seven-end");

tl5
  .from("#Layer_17", { opacity: 0, scale: 1 }, "eight-0")
  .to("#Layer_17", { scale: 1.5 }, "eight")
  .to("#Layer_17 circle", { fill: "#ff0000" }, "eight")
  .to("#Layer_17", { scale: 1 }, "eight-end");

// zoom into Scene
tl5.to(
  "#humanCorridors",
  {
    backgroundColor: "#000",
    scale: 3,
    x: "300px",
    y: "250px",
  },
  "nine"
);

// lubaczow / rava / radymno / krakovets
tl5.to(".lubaczow", { opacity: 1 }, "nine");
tl5.to(".rava", { opacity: 1 }, "ten");
tl5.to(".radymno", { opacity: 1 }, "eleven");
tl5.to(".krakovets", { opacity: 1 }, "twelve");

tl5
  .from("#Layer_18", { opacity: 0, scale: 1 }, "thirteen-0")
  .to("#Layer_18", { scale: 1.5 }, "thirteen")
  .to("#Layer_18 circle", { fill: "#ff0000" }, "thirteen")
  .to("#Layer_18", { scale: 1 }, "thirteen-end")
  .to("#Layer_18 circle", { fill: "#ff7246" }, "thirteen-end");

tl5
  .from("#Layer_19", { opacity: 0, scale: 1 }, "fourteen-0")
  .to("#Layer_19", { scale: 1.5 }, "fourteen")
  .to("#Layer_19 circle", { fill: "#ff0000" }, "fourteen")
  .to("#Layer_19", { scale: 1 }, "fourteen-end");

tl5
  .from("#Layer_20", { opacity: 0, scale: 1 }, "fifteen-0")
  .to("#Layer_20", { scale: 1.5 }, "fifteen")
  .to("#Layer_20 circle", { fill: "#ff0000" }, "fifteen")
  .to("#Layer_20", { scale: 1 }, "fifteen-end");

// zoom into Scene
tl5.to(
  "#humanCorridors",
  {
    backgroundColor: "#000",
    scale: 3,
    x: "350px",
    y: "250px",
  },
  "sixteen"
);

// przemsyl / mostyska / dolne / staryava
tl5.to(".przemsyl", { opacity: 1 }, "sixteen");
tl5.to(".mostyska", { opacity: 1 }, "seventeen");
tl5.to(".dolne", { opacity: 1 }, "eighteen");
tl5.to(".staryava", { opacity: 1 }, "nineteen");

tl5
  .from("#Layer_21", { opacity: 0, scale: 1 }, "twenty-0")
  .to("#Layer_21", { scale: 1.5 }, "twenty")
  .to("#Layer_21 circle", { fill: "#ff0000" }, "twenty")
  .to("#Layer_21", { scale: 1 }, "twenty-end")
  .to("#Layer_21 circle", { fill: "#ff7246" }, "twenty-end");

tl5
  .from("#Layer_22", { opacity: 0, scale: 1 }, "twentytone-0")
  .to("#Layer_22", { scale: 1.5 }, "twentytone")
  .to("#Layer_22 circle", { fill: "#ff0000" }, "twentytone")
  .to("#Layer_22", { scale: 1 }, "twentytone-end");

// zoom into Scene
tl5.to(
  "#humanCorridors",
  {
    backgroundColor: "#000",
    scale: 3,
    x: "370px",
    y: "60px",
  },
  "twentytwo"
);

// snina / bereznyi / sobrance / uzhhorod
tl5.to(".snina", { opacity: 1 }, "twentytwo");
tl5.to(".bereznyi", { opacity: 1 }, "twentythree");
tl5.to(".sobrance", { opacity: 1 }, "twentyfour");
tl5.to(".uzhhorod", { opacity: 1 }, "twentyfive");

tl5
  .from("#Layer_23", { opacity: 0, scale: 1 }, "twentysix-0")
  .to("#Layer_23", { scale: 1.5 }, "twentysix")
  .to("#Layer_23 circle", { fill: "#ff0000" }, "twentysix")
  .to("#Layer_23", { scale: 1 }, "twentysix-end");

tl5
  .from("#Layer_24", { opacity: 0, scale: 1 }, "twentyseven-0")
  .to("#Layer_24", { scale: 1.5 }, "twentyseven")
  .to("#Layer_24 circle", { fill: "#ff0000" }, "twentyseven")
  .to("#Layer_24", { scale: 1 }, "twentyseven-end");

// chop / zahony / berehove / vylok / halmeu
tl5.to(".chop", { opacity: 1 }, "twentyeight");
tl5.to(".zahony", { opacity: 1 }, "twentynine");
tl5.to(".berehove", { opacity: 1 }, "thirty");
tl5.to(".vylok", { opacity: 1 }, "thirtyone");
tl5.to(".halmeu", { opacity: 1 }, "thirtytwo");

tl5
  .from("#Layer_25", { opacity: 0, scale: 1 }, "thirtythree-0")
  .to("#Layer_25", { scale: 1.5 }, "thirtythree")
  .to("#Layer_25 circle", { fill: "#ff0000" }, "thirtythree")
  .to("#Layer_25", { scale: 1 }, "thirtythree-end");

tl5
  .from("#Layer_26", { opacity: 0, scale: 1 }, "thirtyfour-0")
  .to("#Layer_26", { scale: 1.5 }, "thirtyfour")
  .to("#Layer_26 circle", { fill: "#ff0000" }, "thirtyfour")
  .to("#Layer_26", { scale: 1 }, "thirtyfour-end");

tl5
  .from("#Layer_27", { opacity: 0, scale: 1 }, "thirtyfive-0")
  .to("#Layer_27", { scale: 1.5 }, "thirtyfive")
  .to("#Layer_27 circle", { fill: "#ff0000" }, "thirtyfive")
  .to("#Layer_27", { scale: 1 }, "thirtyfive-end");

tl5
  .from("#Layer_28", { opacity: 0, scale: 1 }, "thirtysix-0")
  .to("#Layer_28", { scale: 1.5 }, "thirtysix")
  .to("#Layer_28 circle", { fill: "#ff0000" }, "thirtysix")
  .to("#Layer_28", { scale: 1 }, "thirtysix-end");

tl5
  .from("#Layer_29", { opacity: 0, scale: 1 }, "thirtyseven-0")
  .to("#Layer_29", { scale: 1.5 }, "thirtyseven")
  .to("#Layer_29 circle", { fill: "#ff0000" }, "thirtyseven")
  .to("#Layer_29", { scale: 1 }, "thirtyseven-end");

tl5
  .from("#Layer_30", { opacity: 0, scale: 1 }, "thirtyeight-0")
  .to("#Layer_30", { scale: 1.5 }, "thirtyeight")
  .to("#Layer_30 circle", { fill: "#ff0000" }, "thirtyeight")
  .to("#Layer_30", { scale: 1 }, "thirtyeight-end");

// zoom into Scene
tl5.to(
  "#humanCorridors",
  {
    backgroundColor: "#000",
    scale: 2.5,
    x: "300px",
    y: "60px",
  },
  "thirtynine"
);

//sighetu
tl5.to(".sighetu", { opacity: 1 }, "thirtynine");

tl5
  .from("#Layer_31", { opacity: 0, scale: 1 }, "forty-0")
  .to("#Layer_31", { scale: 1.5 }, "forty")
  .to("#Layer_31 circle", { fill: "#ff0000" }, "forty")
  .to("#Layer_31", { scale: 1 }, "forty-end");

// zoom into Scene
tl5.to(
  "#humanCorridors",
  {
    backgroundColor: "#000",
    scale: 2.5,
    x: "-150px",
    y: "60px",
  },
  "fortyone"
);

// siret
tl5.to(".siret", { opacity: 1 }, "fortyone");

tl5
  .from("#Layer_32", { opacity: 0, scale: 1 }, "fortytwo-0")
  .to("#Layer_32", { scale: 1.5 }, "fortytwo")
  .to("#Layer_32 circle", { fill: "#ff0000" }, "fortytwo")
  .to("#Layer_32", { scale: 1 }, "fortytwo-end");

// lipcani / sokyryany / Ocnita / mohyliv
tl5.to(".lipcani", { opacity: 1 }, "fortythree");
tl5.to(".sokyryany", { opacity: 1 }, "fortyfour");
tl5.to(".ocnita", { opacity: 1 }, "fortyfive");
tl5.to(".mohyliv", { opacity: 1 }, "fortysix");

tl5
  .from("#Layer_33", { opacity: 0, scale: 1 }, "fortythree-0")
  .to("#Layer_33", { scale: 1.5 }, "fortythree")
  .to("#Layer_33 circle", { fill: "#ff0000" }, "fortythree")
  .to("#Layer_33", { scale: 1 }, "fortythree-end");

tl5
  .from("#Layer_34", { opacity: 0, scale: 1 }, "fortyfour-0")
  .to("#Layer_34", { scale: 1.5 }, "fortyfour")
  .to("#Layer_34 circle", { fill: "#ff0000" }, "fortyfour")
  .to("#Layer_34", { scale: 1 }, "fortyfour-end");

tl5
  .from("#Layer_35", { opacity: 0, scale: 1 }, "fortyfive-0")
  .to("#Layer_35", { scale: 1.5 }, "fortyfive")
  .to("#Layer_35 circle", { fill: "#ff0000" }, "fortyfive")
  .to("#Layer_35", { scale: 1 }, "fortyfive-end");

tl5
  .from("#Layer_36", { opacity: 0, scale: 1 }, "fortysix-0")
  .to("#Layer_36", { scale: 1.5 }, "fortysix")
  .to("#Layer_36 circle", { fill: "#ff0000" }, "fortysix")
  .to("#Layer_36", { scale: 1 }, "fortysix-end");

// zoom into Scene
tl5.to(
  "#humanCorridors",
  {
    backgroundColor: "#000",
    scale: 3,
    x: "-400px",
    y: "-400px",
  },
  "fortyseven"
);

// kuchurhan / palanca / serpneve / vulcanesti
tl5.to(".kuchurhan", { opacity: 1 }, "fortyseven");
tl5.to(".palanca", { opacity: 1 }, "fortyeight");
tl5.to(".serpneve", { opacity: 1 }, "fortynine");
tl5.to(".vulcanesti", { opacity: 1 }, "fifty");

tl5
  .from("#Layer_37", { opacity: 0, scale: 1 }, "fiftyone-0")
  .to("#Layer_37", { scale: 1.5 }, "fiftyone")
  .to("#Layer_37 circle", { fill: "#ff0000" }, "fiftyone")
  .to("#Layer_37", { scale: 1 }, "fiftyone-end");

tl5
  .from("#Layer_38", { opacity: 0, scale: 1 }, "fiftytwo-0")
  .to("#Layer_38", { scale: 1.5 }, "fiftytwo")
  .to("#Layer_38 circle", { fill: "#ff0000" }, "fiftytwo")
  .to("#Layer_38", { scale: 1 }, "fiftytwo-end");

tl5
  .from("#Layer_39", { opacity: 0, scale: 1 }, "fiftythree-0")
  .to("#Layer_39", { scale: 1.5 }, "fiftythree")
  .to("#Layer_39 circle", { fill: "#ff0000" }, "fiftythree")
  .to("#Layer_39", { scale: 1 }, "fiftythree-end");

tl5
  .from("#Layer_40", { opacity: 0, scale: 1 }, "fiftyfour-0")
  .to("#Layer_40", { scale: 1.5 }, "fiftyfour")
  .to("#Layer_40 circle", { fill: "#ff0000" }, "fiftyfour")
  .to("#Layer_40", { scale: 1 }, "fiftyfour-end");

// zoom out of Scene: The End
tl5
  .to("#humanCorridors", {
    backgroundColor: "#000",
    scale: 3,
    x: "-300px",
    y: "-260px",
    delay: 10,
  })
  .to("#humanCorridors", {
    backgroundColor: "#000",
    scale: 2.75,
    x: "-250px",
    y: "-200px",
  })
  .to("#humanCorridors", {
    backgroundColor: "#000",
    scale: 2.5,
    x: "-200px",
    y: "-150px",
  })
  .to("#humanCorridors", {
    backgroundColor: "#000",
    scale: 2.25,
    x: "-150px",
    y: "-100px",
  })
  .to("#humanCorridors", {
    backgroundColor: "#000",
    scale: 2,
    x: "-100px",
    y: "-50px",
  })
  .to("#humanCorridors", {
    backgroundColor: "#000",
    scale: 1.5,
    x: "-50px",
    y: "-25px",
  })
  .to("#humanCorridors", {
    backgroundColor: "#000",
    scale: 1,
    x: "0px",
    y: "0px",
  });

// tl5.to(
//   "#humanitarian-corridor",
//   {
//     margin: "0 0 0 0",
//   },
//   "zero"
// );

var pinOnly5 = ScrollTrigger.create({
  animation: tl5,
  trigger: "#humanitarian-corridor",
  pin: true,
  scrub: true,
  start: "top 50px",
  end: "+=600%",
  pinSpacing: true,
  toggleClass: { targets: "#humanitarian-corridor", className: "is-active" },
  markers: true,
});
