let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        document.getElementById("navbar").style.transform = "translateY(-100%)";
    } else {
        document.getElementById("navbar").style.transform = "translateY(0)";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
