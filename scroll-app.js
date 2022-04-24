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
  .from(".sec1-years", { opacity: 0 }, "one")
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
});

// Timeline of Invasion ========================== //
// =============================================== //

var tl2 = gsap.timeline();

// 1
tl2
  .from("#sec2-nav1 span", { opacity: 0 }, "one")
  .to("#sec2-nav1 span", { opacity: 0 }, "one-end")
  .to("#sec2-nav1 i", { backgroundColor: "red", scale: 2 }, "one")
  .to("#sec2-nav1 i", { backgroundColor: "#000", scale: 1 }, "one-end")
  .from(".sec2-slide1", { opacity: 1 }, "one")
  .to(".sec2-slide1", { opacity: 0 }, "one-end");

// 2
tl2
  .from("#sec2-nav2 span", { opacity: 0 }, "two")
  .to("#sec2-nav2 span", { opacity: 0 }, "two-end")
  .to("#sec2-nav2 i", { backgroundColor: "red", scale: 2 }, "two")
  .to("#sec2-nav2 i", { backgroundColor: "#000", scale: 1 }, "two-end")
  .from(".sec2-slide2", { opacity: 0 }, "two")
  .to(".sec2-slide2", { opacity: 0 }, "two-end");

// 3
tl2
  .from("#sec2-nav3 span", { opacity: 0 }, "three")
  .to("#sec2-nav3 span", { opacity: 0 }, "three-end")
  .to("#sec2-nav3 i", { backgroundColor: "red", scale: 2 }, "three")
  .to("#sec2-nav3 i", { backgroundColor: "#000", scale: 1 }, "three-end")
  .from(".sec2-slide3", { opacity: 0 }, "three")
  .to(".sec2-slide3", { opacity: 0 }, "three-end");

// 4
tl2
  .from("#sec2-nav4 span", { opacity: 0 }, "four")
  .to("#sec2-nav4 span", { opacity: 0 }, "four-end")
  .to("#sec2-nav4 i", { backgroundColor: "red", scale: 2 }, "four")
  .to("#sec2-nav4 i", { backgroundColor: "#000", scale: 1 }, "four-end")
  .from(".sec2-slide4", { opacity: 0 }, "four")
  .to(".sec2-slide4", { opacity: 0 }, "four-end");

// 5
tl2
  .from("#sec2-nav5 span", { opacity: 0 }, "five")
  .to("#sec2-nav5 span", { opacity: 0 }, "five-end")
  .to("#sec2-nav5 i", { backgroundColor: "red", scale: 2 }, "five")
  .to("#sec2-nav5 i", { backgroundColor: "#000", scale: 1 }, "five-end")
  .from(".sec2-slide5", { opacity: 0 }, "five")
  .to(".sec2-slide5", { opacity: 0 }, "five-end");

// 6
tl2
  .from("#sec2-nav6 span", { opacity: 0 }, "six")
  .to("#sec2-nav6 span", { opacity: 0 }, "six-end")
  .to("#sec2-nav6 i", { backgroundColor: "red", scale: 2 }, "six")
  .to("#sec2-nav6 i", { backgroundColor: "#000", scale: 1 }, "six-end")
  .from(".sec2-slide6", { opacity: 0 }, "six")
  .to(".sec2-slide6", { opacity: 0 }, "six-end");

// 7
tl2
  .from("#sec2-nav7 span", { opacity: 0 }, "seven")
  .to("#sec2-nav7 span", { opacity: 0 }, "seven-end")
  .to("#sec2-nav7 i", { backgroundColor: "red", scale: 2 }, "seven")
  .to("#sec2-nav7 i", { backgroundColor: "#000", scale: 1 }, "seven-end")
  .from(".sec2-slide7", { opacity: 0 }, "seven")
  .to(".sec2-slide7", { opacity: 0 }, "seven-end");

// 8
tl2
  .from("#sec2-nav8 span", { opacity: 0 }, "eight")
  .to("#sec2-nav8 span", { opacity: 0 }, "eight-end")
  .to("#sec2-nav8 i", { backgroundColor: "red", scale: 2 }, "eight")
  .to("#sec2-nav8 i", { backgroundColor: "#000", scale: 1 }, "eight-end")
  .from(".sec2-slide8", { opacity: 0 }, "eight")
  .to(".sec2-slide8", { opacity: 0 }, "eight-end");

// 9
tl2
  .from("#sec2-nav9 span", { opacity: 0 }, "nine")
  .to("#sec2-nav9 span", { opacity: 0 }, "nine-end")
  .to("#sec2-nav9 i", { backgroundColor: "red", scale: 2 }, "nine")
  .to("#sec2-nav9 i", { backgroundColor: "#000", scale: 1 }, "nine-end")
  .from(".sec2-slide9", { opacity: 0 }, "nine")
  .to(".sec2-slide9", { opacity: 0 }, "nine-end");

// 10
tl2
  .from("#sec2-nav10 span", { opacity: 0 }, "ten")
  .to("#sec2-nav10 span", { opacity: 0 }, "ten-end")
  .to("#sec2-nav10 i", { backgroundColor: "red", scale: 2 }, "ten")
  .to("#sec2-nav10 i", { backgroundColor: "#000", scale: 1 }, "ten-end")
  .from(".sec2-slide10", { opacity: 0 }, "ten")
  .to(".sec2-slide10", { opacity: 1 }, "ten-end");

var pinOnly2 = ScrollTrigger.create({
  animation: tl2,
  trigger: ".interective__invasion",
  pin: true,
  scrub: true,
  start: "top top",
  end: "+=600%",
});

var tl3 = gsap.timeline();

// 1
tl3
  .from(".interactive__sanction-map1", { opacity: 0 }, "one")
  .to(".interactive__sanction-map1", { opacity: 0 }, "one-end");

// 2
tl3
  .from(".interactive__sanction-map2", { opacity: 0 }, "two")
  .to(".interactive__sanction-map2", { opacity: 0 }, "two-end");

// 3
tl3
  .from(".interactive__sanction-map3", { opacity: 0 }, "three")
  .to(".interactive__sanction-map3", { opacity: 0 }, "three-end");

// 4
tl3
  .from(".interactive__sanction-map4", { opacity: 0 }, "four")
  .to(".interactive__sanction-map4", { opacity: 0 }, "four-end");

// 5
tl3
  .from(".interactive__sanction-map5", { opacity: 0 }, "five")
  .to(".interactive__sanction-map5", { opacity: 0 }, "five-end");

// 6
tl3
  .from(".interactive__sanction-map6", { opacity: 0 }, "six")
  .to(".interactive__sanction-map6", { opacity: 0 }, "six-end");

// 7
tl3
  .from(".interactive__sanction-map7", { opacity: 0 }, "seven")
  .to(".interactive__sanction-map7", { opacity: 0 }, "seven-end");

// 8
tl3
  .from(".interactive__sanction-map8", { opacity: 0 }, "eight")
  .to(".interactive__sanction-map8", { opacity: 0 }, "eight-end");

// 9
tl3
  .from(".interactive__sanction-map9", { opacity: 0 }, "nine")
  .to(".interactive__sanction-map9", { opacity: 0 }, "nine-end");

// 10
tl3
  .from(".interactive__sanction-map10", { opacity: 0 }, "ten")
  .to(".interactive__sanction-map10", { opacity: 0 }, "ten-end");

// 11
tl3.from(".interactive__sanction-map11", { opacity: 0 }, "eleven");
// .to(".interactive__sanction-map11", { opacity: 0 }, "eleven-end");

var pinOnly3 = ScrollTrigger.create({
  animation: tl3,
  trigger: ".interective__sanction",
  pin: true,
  scrub: true,
  start: "top top",
  end: "+=600%",
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
  .from(".sec3-years", { opacity: 0 }, "one")
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
  .to(".sec3-years", { x: "-124px" }, "two")
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
  .to(".sec3-years", { x: "-224px" }, "three")
  .to(
    "#sec3year3",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "three-end"
  );

// 4
tl4
  .from(".sec-slide4", { opacity: 0 }, "four")
  .to(".sec3-slide4", { opacity: 1 })
  .to(".sec3-slide4", { opacity: 0 }, "four-end")
  .to(
    "#sec3year4",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "four"
  )
  .to(".sec3-years", { x: "-324px" }, "four")
  .to(
    "#sec3year4",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "four-end"
  );

// 5
tl4
  .from(".sec-slide5", { opacity: 0 }, "five")
  .to(".sec3-slide5", { opacity: 1 })
  .to(".sec3-slide5", { opacity: 0 }, "five-end")
  .to(
    "#sec3year5",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "five"
  )
  .to(".sec3-years", { x: "-324px" }, "five")
  .to(
    "#sec3year5",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "five-end"
  );

// 6
tl4
  .from(".sec-slide6", { opacity: 0 }, "six")
  .to(".sec3-slide6", { opacity: 1 })
  .to(".sec3-slide6", { opacity: 0 }, "six-end")
  .to(
    "#sec3year6",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "six"
  )
  .to(".sec3-years", { x: "-324px" }, "six")
  .to(
    "#sec3year6",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "six-end"
  );

// 7
tl4
  .from(".sec-slide7", { opacity: 0 }, "seven")
  .to(".sec3-slide7", { opacity: 1 })
  .to(".sec3-slide7", { opacity: 0 }, "seven-end")
  .to(
    "#sec3year7",
    { color: "red", fontSize: "17px", fontWeight: "bold" },
    "seven"
  )
  .to(".sec3-years", { x: "-324px" }, "seven")
  .to(
    "#sec3year7",
    { color: "grey", fontSize: "12px", fontWeight: "normal" },
    "seven-end"
  );

var pinOnly4 = ScrollTrigger.create({
  animation: tl4,
  trigger: ".history_timeline",
  pin: true,
  scrub: true,
  start: "top top",
  end: "+=600%",
});
