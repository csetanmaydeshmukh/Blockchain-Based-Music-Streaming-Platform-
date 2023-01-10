AOS.init({
    duration: 1000,
  });
var text = document.querySelector('.text'),
    char = text.querySelectorAll('span'),
    replaceChar = text.querySelectorAll('span:not([data-char="."])');

var tl1 = gsap.timeline();


tl1.set(char, {
    yPercent: -110
})
tl1.set(text, {
    autoAlpha:1
});
tl1.to(char, {
    duration:1,
    yPercent:0,
    stagger:0.05,
    ease: "expo.inOut"
}).to(replaceChar, {
    duration:1,
    yPercent:110,
    ease: "expo.inOut",
    repeat:-1,
    yoyo:true,
    stagger:0.1
})
setTimeout(() => {
    console.clear();
}, 5000);
setTimeout(() => {
    document.getElementById("alert-1").className = "alert-disable";  
}, 15000);
setTimeout(() => {
    document.getElementById("spinner-1").className = "spinner-disable";  
}, 1000);