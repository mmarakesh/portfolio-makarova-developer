AOS.init();

gsap.from('.boxes', {y:-20,  duration: 3, delay: 1.5, opacity: 0, stagger: .3, repeat: -1, repeatDelay: 3})
gsap.from('.circle', {x: -300, duration: 3, delay: .5, opacity: 0})
gsap.from('.photoOne', {y: -200, ease: 'bounce', duration: 5, delay: 1, opacity: 0})
gsap.to('.text', {
text: "a web developer.", 
duration: 3,
repeat: -1,
ease: "power1.in",
yoyo: true,
delay: 2
})

// cursor
function mousecursor() {
if ($("body")) {
const e = document.querySelector(".cursor-inner"),
t = document.querySelector(".cursor-outer");
let n, i = 0,
o = !1;
window.onmousemove = function (s) {
o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
}, $("body").on("mouseenter", "a, .btnMenu, .cursor-pointer", function () {
e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
}), $("body").on("mouseleave", "a, .btnMenu, .cursor-pointer", function () {
$(this).is("a, .btnMenu") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
}), e.style.visibility = "visible", t.style.visibility = "visible"
}
};
$(function () {
mousecursor();
});