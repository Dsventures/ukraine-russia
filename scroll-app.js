gsap.registerPlugin(ScrollTrigger);

// Animate all p tags

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

// Timeline of Events ========================= //
// ============================================ //

var tl = gsap.timeline();

var activeState = { color: "red", fontSize: "17px", fontWeight: "bold" };
var inActiveState = { color: "grey", fontSize: "12px" };

// 1
tl.from(".sec1-slide1", { opacity: 1 }, "one")
  .to(".sec1-slide1", { opacity: 1 })
  .to(".sec1-slide1", { opacity: 0 }, "one-end")
  .to("#dec2021", activeState, "one")
  .from(".sec1-years", { opacity: 1 }, "one")
  .to("#dec2021", inActiveState, "one-end");

// 2
tl.from(".sec1-slide2", { opacity: 0 }, "two")
  .to(".sec1-slide2", { opacity: 1 })
  .to(".sec1-slide2", { opacity: 0 }, "two-end")
  .to("#feb2022", activeState, "two")
  .to(".sec1-years", { x: "-124px" }, "two")
  .to("#feb2022", inActiveState, "two-end");

// 3
tl.from(".sec1-slide3", { opacity: 0 }, "three")
  .to(".sec1-slide3", { opacity: 1 })
  .to(".sec1-slide3", { opacity: 0 }, "three-end")
  .to("#feb22-2022", activeState, "three")
  .to(".sec1-years", { x: "-224px" }, "three")
  .to("#feb22-2022", inActiveState, "three-end");

// 4
tl.from(".sec1-slide4", { opacity: 0 }, "four")
  .to(".sec1-slide4", { opacity: 1 })
  .to(".sec1-slide4", { opacity: 0 }, "four-end")
  .to("#feb24-2022", activeState, "four")
  .to(".sec1-years", { x: "-324px" }, "four")
  .to("#feb24-2022", inActiveState, "four-end");

// 5
tl.from(".sec1-slide5", { opacity: 0 }, "five")
  .to(".sec1-slide5", { opacity: 1 })
  .to(".sec1-slide5", { opacity: 0 }, "five-end")
  .to("#feb26-2022", activeState, "five")
  .to(".sec1-years", { x: "-424px" }, "five")
  .to("#feb26-2022", inActiveState, "five-end");

// 6
tl.from(".sec1-slide6", { opacity: 0 }, "six")
  .to(".sec1-slide6", { opacity: 1 })
  .to(".sec1-slide6", { opacity: 0 }, "six-end")
  .to("#mar02-2022", activeState, "six")
  .to(".sec1-years", { x: "-524px" }, "six")
  .to("#mar02-2022", inActiveState, "six-end");

// 7
tl.from(".sec1-slide7", { opacity: 0 }, "seven")
  .to(".sec1-slide7", { opacity: 1 })
  .to(".sec1-slide7", { opacity: 0 }, "seven-end")
  .to("#mar26-2022", activeState, "seven")
  .to(".sec1-years", { x: "-624px" }, "seven")
  .to("#mar26-2022", inActiveState, "seven-end");

// 8
tl.from(".sec1-slide8", { opacity: 0 }, "eight")
  .to(".sec1-slide8", { opacity: 1 })
  .to(".sec1-slide8", { opacity: 0 }, "eight-end")
  .to("#mar31-2022", activeState, "eight")
  .to(".sec1-years", { x: "-724px" }, "eight")
  .to("#mar31-2022", inActiveState, "eight-end");

// 9
tl.from(".sec1-slide9", { opacity: 0 }, "nine")
  .to(".sec1-slide9", { opacity: 1 })
  .to(".sec1-slide9", { opacity: 0 }, "nine-end")
  .to("#apr02-2022", activeState, "nine")
  .to(".sec1-years", { x: "-824px" }, "nine")
  .to("#apr02-2022", inActiveState, "nine-end");

// 10
tl.from(".sec1-slide10", { opacity: 0 }, "ten")
  .to(".sec1-slide10", { opacity: 1 })
  .to(".sec1-slide10", { opacity: 0 }, "ten-end")
  .to("#apr03-2022", activeState, "ten")
  .to(".sec1-years", { x: "-924px" }, "ten")
  .to("#apr03-2022", inActiveState, "ten-end");

// 11
tl.from(".sec1-slide11", { opacity: 0 }, "eleven")
  .to(".sec1-slide11", { opacity: 1 })
  .to(".sec1-slide11", { opacity: 0 }, "eleven-end")
  .to("#apr04-2022", activeState, "eleven")
  .to(".sec1-years", { x: "-1124px" }, "eleven")
  .to("#apr04-2022", inActiveState, "eleven-end");

// 12
tl.from(".sec1-slide12", { opacity: 0 }, "twelve")
  .to(".sec1-slide12", { opacity: 1 })
  .to("#apr10-2022", activeState, "twelve")
  .to(".sec1-years", { x: "-1224px" }, "twelve");

// tl.from(".sec1-slide12", { opacity: 0 }, "twelve")
//   .to(".sec1-slide12", { opacity: 1 })
//   .to(".sec1-slide12", { opacity: 0 }, "twelve-end")
//   .to("#apr10-2022", activeState, "twelve")
//   .to(".sec1-years", { x: "-1224px" }, "twelve")
//   .to("#apr10-2022", inActiveState, "twelve-end");

var pinOnly = ScrollTrigger.create({
  animation: tl,
  trigger: ".interective__timeline",
  pin: true,
  scrub: true,
  start: "top top",
  end: "+=600%",
  pinSpacing: true,
});

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

var tl3 = gsap.timeline();

// 1
tl3
  .from(".interactive__sanction-map1", { opacity: 0 }, "one")
  .to(".sec5Page1", { backgroundColor: "#000", scale: 2 }, "one")
  .to(".sec5Page1", { backgroundColor: "#c4c4c4", scale: 1 }, "one-end")
  .to(".interactive__sanction-map1", { opacity: 0 }, "one-end");

// 2
tl3
  .from(".interactive__sanction-map2", { opacity: 0 }, "two")
  .to(".sec5Page2", { backgroundColor: "#000", scale: 2 }, "two")
  .to(".sec5Page2", { backgroundColor: "#c4c4c4", scale: 1 }, "two-end")
  .to(".interactive__sanction-map2", { opacity: 0 }, "two-end");

// 3
tl3
  .from(".interactive__sanction-map3", { opacity: 0 }, "three")
  .to(".sec5Page3", { backgroundColor: "#000", scale: 2 }, "three")
  .to(".sec5Page3", { backgroundColor: "#c4c4c4", scale: 1 }, "three-end")
  .to(".interactive__sanction-map3", { opacity: 0 }, "three-end");

// 4
tl3
  .from(".interactive__sanction-map4", { opacity: 0 }, "four")
  .to(".sec5Page4", { backgroundColor: "#000", scale: 2 }, "four")
  .to(".sec5Page4", { backgroundColor: "#c4c4c4", scale: 1 }, "four-end")
  .to(".interactive__sanction-map4", { opacity: 0 }, "four-end");

// 5
tl3
  .from(".interactive__sanction-map5", { opacity: 0 }, "five")
  .to(".sec5Page5", { backgroundColor: "#000", scale: 2 }, "five")
  .to(".sec5Page5", { backgroundColor: "#c4c4c4", scale: 1 }, "five-end")
  .to(".interactive__sanction-map5", { opacity: 0 }, "five-end");

// 6
tl3
  .from(".interactive__sanction-map6", { opacity: 0 }, "six")
  .to(".sec5Page6", { backgroundColor: "#000", scale: 2 }, "six")
  .to(".sec5Page6", { backgroundColor: "#c4c4c4", scale: 1 }, "six-end")
  .to(".interactive__sanction-map6", { opacity: 0 }, "six-end");

// 7
tl3
  .from(".interactive__sanction-map7", { opacity: 0 }, "seven")
  .to(".sec5Page7", { backgroundColor: "#000", scale: 2 }, "seven")
  .to(".sec5Page7", { backgroundColor: "#c4c4c4", scale: 1 }, "seven-end")
  .to(".interactive__sanction-map7", { opacity: 0 }, "seven-end");

// 8
tl3
  .from(".interactive__sanction-map8", { opacity: 0 }, "eight")
  .to(".sec5Page8", { backgroundColor: "#000", scale: 2 }, "eight")
  .to(".sec5Page8", { backgroundColor: "#c4c4c4", scale: 1 }, "eight-end")
  .to(".interactive__sanction-map8", { opacity: 0 }, "eight-end");

// 9
tl3
  .from(".interactive__sanction-map9", { opacity: 0 }, "nine")
  .to(".sec5Page9", { backgroundColor: "#000", scale: 2 }, "nine")
  .to(".sec5Page9", { backgroundColor: "#c4c4c4", scale: 1 }, "nine-end")
  .to(".interactive__sanction-map9", { opacity: 0 }, "nine-end");

// 10
tl3
  .from(".interactive__sanction-map10", { opacity: 0 }, "ten")
  .to(".sec5Page10", { backgroundColor: "#000", scale: 2 }, "ten")
  .to(".sec5Page10", { backgroundColor: "#c4c4c4", scale: 1 }, "ten-end")
  .to(".interactive__sanction-map10", { opacity: 0 }, "ten-end");

// 11
tl3
  .from(".interactive__sanction-map11", { opacity: 0 }, "eleven")
  .to(".sec5Page11", { backgroundColor: "#000", scale: 2 }, "eleven");
// .to(".interactive__sanction-map11", { opacity: 0 }, "eleven-end");

var pinOnly3 = ScrollTrigger.create({
  animation: tl3,
  trigger: ".interective__sanction",
  pin: true,
  scrub: true,
  start: "top top",
  end: "+=600%",
  pinSpacing: true,
});

var tl4 = gsap.timeline();

// 1
tl4
  .from(".sec3-slide1", { opacity: 1 }, "one")
  .to(".sec3-slide1", { opacity: 1 })
  .to(".sec3-slide1", { opacity: 0 }, "one-end")
  .to(
    "#sec3year1",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "one"
  )
  .from(".sec3-years", { opacity: 1 }, "one")
  .to(
    "#sec3year1",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "one-end"
  );

// 2
tl4
  .from(".sec3-slide2", { opacity: 0 }, "two")
  .to(".sec3-slide2", { opacity: 1 })
  .to(".sec3-slide2", { opacity: 0 }, "two-end")
  .to(
    "#sec3year2",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "two"
  )
  .to(".sec3-years", { x: "-70px" }, "two")
  .to(
    "#sec3year2",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "two-end"
  );

// 3
tl4
  .from(".sec3-slide3", { opacity: 0 }, "three")
  .to(".sec3-slide3", { opacity: 1 })
  .to(".sec3-slide3", { opacity: 0 }, "three-end")
  .to(
    "#sec3year3",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "three"
  )
  .to(".sec3-years", { x: "-140px" }, "three")
  .to(
    "#sec3year3",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "three-end"
  );

// 4
tl4
  .from(".sec3-slide4", { opacity: 0 }, "four")
  .to(".sec3-slide4", { opacity: 1 })
  .to(".sec3-slide4", { opacity: 0 }, "four-end")
  .to(
    "#sec3year4",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "four"
  )
  .to(".sec3-years", { x: "-210px" }, "four")
  .to(
    "#sec3year4",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "four-end"
  );

// 5
tl4
  .from(".sec3-slide5", { opacity: 0 }, "five")
  .to(".sec3-slide5", { opacity: 1 })
  .to(".sec3-slide5", { opacity: 0 }, "five-end")
  .to(
    "#sec3year5",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "five"
  )
  .to(".sec3-years", { x: "-280px" }, "five")
  .to(
    "#sec3year5",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "five-end"
  );

// 6
tl4
  .from(".sec3-slide6", { opacity: 0 }, "six")
  .to(".sec3-slide6", { opacity: 1 })
  .to(".sec3-slide6", { opacity: 0 }, "six-end")
  .to(
    "#sec3year6",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "six"
  )
  .to(".sec3-years", { x: "-350px" }, "six")
  .to(
    "#sec3year6",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "six-end"
  );

// 7
tl4
  .from(".sec3-slide7", { opacity: 0 }, "seven")
  .to(".sec3-slide7", { opacity: 1 })
  .to(".sec3-slide7", { opacity: 0 }, "seven-end")
  .to(
    "#sec3year7",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "seven"
  )
  .to(".sec3-years", { x: "-420px" }, "seven")
  .to(
    "#sec3year7",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "seven-end"
  );

// 8
tl4
  .from(".sec3-slide8", { opacity: 0 }, "eight")
  .to(".sec3-slide8", { opacity: 1 })
  .to(".sec3-slide8", { opacity: 0 }, "eight-end")
  .to(
    "#sec3year8",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "eight"
  )
  .to(".sec3-years", { x: "-490px" }, "eight")
  .to(
    "#sec3year8",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "eight-end"
  );

// 9
tl4
  .from(".sec3-slide9", { opacity: 0 }, "nine")
  .to(".sec3-slide9", { opacity: 1 })
  .to(".sec3-slide9", { opacity: 0 }, "nine-end")
  .to(
    "#sec3year9",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "nine"
  )
  .to(".sec3-years", { x: "-560px" }, "nine")
  .to(
    "#sec3year9",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "nine-end"
  );

// 10
tl4
  .from(".sec3-slide10", { opacity: 0 }, "ten")
  .to(".sec3-slide10", { opacity: 1 })
  .to(".sec3-slide10", { opacity: 0 }, "ten-end")
  .to(
    "#sec3year10",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "ten"
  )
  .to(".sec3-years", { x: "-630px" }, "ten")
  .to(
    "#sec3year10",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "ten-end"
  );

// 11
tl4
  .from(".sec3-slide11", { opacity: 0 }, "eleven")
  .to(".sec3-slide11", { opacity: 1 })
  .to(".sec3-slide11", { opacity: 0 }, "eleven-end")
  .to(
    "#sec3year11",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "eleven"
  )
  .to(".sec3-years", { x: "-700px" }, "eleven")
  .to(
    "#sec3year11",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "eleven-end"
  );

// 12
tl4
  .from(".sec3-slide12", { opacity: 0 }, "twelve")
  .to(".sec3-slide12", { opacity: 1 })
  .to(".sec3-slide12", { opacity: 0 }, "twelve-end")
  .to(
    "#sec3year12",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "twelve"
  )
  .to(".sec3-years", { x: "-770px" }, "twelve")
  .to(
    "#sec3year12",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "twelve-end"
  );

// 13
tl4
  .from(".sec3-slide13", { opacity: 0 }, "thirteen")
  .to(".sec3-slide13", { opacity: 1 })
  .to(".sec3-slide13", { opacity: 0 }, "thirteen-end")
  .to(
    "#sec3year13",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "thirteen"
  )
  .to(".sec3-years", { x: "-880px" }, "thirteen")
  .to(
    "#sec3year13",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "thirteen-end"
  );

// 14
tl4
  .from(".sec3-slide14", { opacity: 0 }, "fourteen")
  .to(".sec3-slide14", { opacity: 1 })
  .to(".sec3-slide14", { opacity: 0 }, "fourteen-end")
  .to(
    "#sec3year14",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "fourteen"
  )
  .to(".sec3-years", { x: "-950px" }, "fourteen")
  .to(
    "#sec3year14",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "fourteen-end"
  );

// 15
tl4
  .from(".sec3-slide15", { opacity: 0 }, "fifteen")
  .to(".sec3-slide15", { opacity: 1 })
  .to(".sec3-slide15", { opacity: 0 }, "fifteen-end")
  .to(
    "#sec3year15",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "fifteen"
  )
  .to(".sec3-years", { x: "-1020px" }, "fifteen")
  .to(
    "#sec3year15",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "fifteen-end"
  );

// 16
tl4
  .from(".sec3-slide16", { opacity: 0 }, "sixteen")
  .to(".sec3-slide16", { opacity: 1 })
  .to(".sec3-slide16", { opacity: 0 }, "sixteen-end")
  .to(
    "#sec3year16",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "sixteen"
  )
  .to(".sec3-years", { x: "-1100px" }, "sixteen")
  .to(
    "#sec3year16",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "sixteen-end"
  );

// 17
tl4
  .from(".sec3-slide17", { opacity: 0 }, "seventeen")
  .to(".sec3-slide17", { opacity: 1 })
  .to(".sec3-slide17", { opacity: 0 }, "seventeen-end")
  .to(
    "#sec3year17",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "seventeen"
  )
  .to(".sec3-years", { x: "-1200px" }, "seventeen")
  .to(
    "#sec3year17",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "seventeen-end"
  );

// 18
tl4
  .from(".sec3-slide18", { opacity: 0 }, "eighteen")
  .to(".sec3-slide18", { opacity: 1 })
  .to(".sec3-slide18", { opacity: 0 }, "eighteen-end")
  .to(
    "#sec3year18",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "eighteen"
  )
  .to(".sec3-years", { x: "-1300px" }, "eighteen")
  .to(
    "#sec3year18",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "eighteen-end"
  );

// 19
tl4
  .from(".sec3-slide19", { opacity: 0 }, "nineteen")
  .to(".sec3-slide19", { opacity: 1 })
  .to(".sec3-slide19", { opacity: 1 }, "nineteen-end")
  .to(
    "#sec3year19",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "nineteen"
  )
  .to(".sec3-years", { x: "-1400px" }, "nineteen")
  .to(
    "#sec3year19",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "nineteen-end"
  );

var pinOnly4 = ScrollTrigger.create({
  animation: tl4,
  trigger: ".history_timeline",
  pin: true,
  scrub: true,
  start: "top top",
  end: "+=600%",
  pinSpacing: true,
});

var tl5 = gsap.timeline();

// 1
tl5
  .from(".swiper-slide1", { opacity: 1 }, "one")
  .to(".sec6Page1", { backgroundColor: "#000", scale: 2 }, "one")
  .to(".sec6Page1", { backgroundColor: "#c4c4c4", scale: 1 }, "one-end")
  .to(".swiper-slide1", { opacity: 0 }, "one-end");

// 2
tl5
  .from(".swiper-slide2", { opacity: 0 }, "two")
  .to(".sec6Page2", { backgroundColor: "#000", scale: 2 }, "two")
  .to(".sec6Page2", { backgroundColor: "#c4c4c4", scale: 1 }, "two-end")
  .to(".swiper-slide2", { opacity: 0 }, "two-end");

// 3
tl5
  .from(".swiper-slide3", { opacity: 0 }, "three")
  .to(".sec6Page3", { backgroundColor: "#000", scale: 2 }, "three")
  .to(".sec6Page3", { backgroundColor: "#c4c4c4", scale: 1 }, "three-end")
  .to(".swiper-slide3", { opacity: 0 }, "three-end");

// 4
tl5
  .from(".swiper-slide4", { opacity: 0 }, "four")
  .to(".sec6Page4", { backgroundColor: "#000", scale: 2 }, "four")
  .to(".sec6Page4", { backgroundColor: "#c4c4c4", scale: 1 }, "four-end")
  .to(".swiper-slide4", { opacity: 0 }, "four-end");

// 5
tl5
  .from(".swiper-slide5", { opacity: 0 }, "five")
  .to(".sec6Page5", { backgroundColor: "#000", scale: 2 }, "five")
  .to(".sec6Page5", { backgroundColor: "#c4c4c4", scale: 1 }, "five-end")
  .to(".swiper-slide5", { opacity: 0 }, "five-end");

// 6
tl5
  .from(".swiper-slide6", { opacity: 0 }, "six")
  .to(".sec6Page6", { backgroundColor: "#000", scale: 2 }, "six")
  .to(".sec6Page6", { backgroundColor: "#c4c4c4", scale: 1 }, "six-end")
  .to(".swiper-slide6", { opacity: 0 }, "six-end");

// 7
tl5
  .from(".swiper-slide7", { opacity: 0 }, "seven")
  .to(".sec6Page7", { backgroundColor: "#000", scale: 2 }, "seven")
  .to(".sec6Page7", { backgroundColor: "#c4c4c4", scale: 1 }, "seven-end")
  .to(".swiper-slide7", { opacity: 0 }, "seven-end");

// 8
tl5
  .from(".swiper-slide8", { opacity: 0 }, "eight")
  .to(".sec6Page8", { backgroundColor: "#000", scale: 2 }, "eight")
  .to(".sec6Page8", { backgroundColor: "#c4c4c4", scale: 1 }, "eight-end")
  .to(".swiper-slide8", { opacity: 0 }, "eight-end");

// 9
tl5
  .from(".swiper-slide9", { opacity: 0 }, "nine")
  .to(".sec6Page9", { backgroundColor: "#000", scale: 2 }, "nine")
  .to(".sec6Page9", { backgroundColor: "#c4c4c4", scale: 1 }, "nine-end")
  .to(".swiper-slide9", { opacity: 0 }, "nine-end");

// 10
tl5
  .from(".swiper-slide10", { opacity: 0 }, "ten")
  .to(".sec6Page10", { backgroundColor: "#000", scale: 2 }, "ten")
  .to(".sec6Page10", { backgroundColor: "#c4c4c4", scale: 1 }, "ten-end")
  .to(".swiper-slide10", { opacity: 0 }, "ten-end");

// 11
tl5
  .from(".swiper-slide11", { opacity: 0 }, "eleven")
  .to(".sec6Page11", { backgroundColor: "#000", scale: 2 }, "eleven")
  .to(".sec6Page11", { backgroundColor: "#c4c4c4", scale: 1 }, "eleven-end")
  .to(".swiper-slide11", { opacity: 0 }, "eleven-end");

// 12
tl5
  .from(".swiper-slide12", { opacity: 0 }, "twelve")
  .to(".sec6Page12", { backgroundColor: "#000", scale: 2 }, "twelve")
  .to(".sec6Page12", { backgroundColor: "#c4c4c4", scale: 1 }, "twelve-end")
  .to(".swiper-slide12", { opacity: 0 }, "twelve-end");

// 13
tl5
  .from(".swiper-slide13", { opacity: 0 }, "thirteen")
  .to(".sec6Page13", { backgroundColor: "#000", scale: 2 }, "thirteen")
  .to(".sec6Page13", { backgroundColor: "#c4c4c4", scale: 1 }, "thirteen-end")
  .to(".swiper-slide13", { opacity: 0 }, "thirteen-end");

// 14
tl5
  .from(".swiper-slide14", { opacity: 0 }, "fourteen")
  .to(".sec6Page14", { backgroundColor: "#000", scale: 2 }, "fourteen")
  .to(".sec6Page14", { backgroundColor: "#c4c4c4", scale: 1 }, "fourteen-end")
  .to(".swiper-slide14", { opacity: 0 }, "fourteen-end");

// 15
tl5
  .from(".swiper-slide15", { opacity: 0 }, "fifteen")
  .to(".sec6Page15", { backgroundColor: "#000", scale: 2 }, "fifteen")
  .to(".sec6Page15", { backgroundColor: "#c4c4c4", scale: 1 }, "fifteen-end")
  .to(".swiper-slide15", { opacity: 0 }, "fifteen-end");

// 16
tl5
  .from(".swiper-slide16", { opacity: 0 }, "sixteen")
  .to(".sec6Page16", { backgroundColor: "#000", scale: 2 }, "sixteen")
  .to(".sec6Page16", { backgroundColor: "#c4c4c4", scale: 1 }, "sixteen-end")
  .to(".swiper-slide16", { opacity: 0 }, "sixteen-end");

// 17
tl5
  .from(".swiper-slide17", { opacity: 0 }, "seventeen")
  .to(".sec6Page17", { backgroundColor: "#000", scale: 2 }, "seventeen")
  .to(".sec6Page17", { backgroundColor: "#c4c4c4", scale: 1 }, "seventeen-end")
  .to(".swiper-slide17", { opacity: 0 }, "seventeen-end");

// 18
tl5
  .from(".swiper-slide18", { opacity: 0 }, "eighteen")
  .to(".sec6Page18", { backgroundColor: "#000", scale: 2 }, "eighteen")
  .to(".sec6Page18", { backgroundColor: "#c4c4c4", scale: 1 }, "eighteen-end")
  .to(".swiper-slide18", { opacity: 0 }, "eighteen-end");

// 19
tl5
  .from(".swiper-slide19", { opacity: 0 }, "nineteen")
  .to(".sec6Page19", { backgroundColor: "#000", scale: 2 }, "nineteen")
  .to(".sec6Page19", { backgroundColor: "#c4c4c4", scale: 1 }, "nineteen-end")
  .to(".swiper-slide19", { opacity: 0 }, "nineteen-end");

// 20
tl5
  .from(".swiper-slide20", { opacity: 0 }, "twenty")
  .to(".sec6Page20", { backgroundColor: "#000", scale: 2 }, "twenty")
  .to(".sec6Page20", { backgroundColor: "#c4c4c4", scale: 1 }, "twenty-end")
  .to(".swiper-slide20", { opacity: 1 }, "twenty-end");

var pinOnly5 = ScrollTrigger.create({
  animation: tl5,
  trigger: ".interactive_photogallery",
  pin: true,
  scrub: true,
  start: "top top",
  end: "+=600%",
  pinSpacing: true,
});
