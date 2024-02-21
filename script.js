//--------------------Js to scroll content-----------------------------
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

//-----------------------Js to switch tabs----------------------------
document.querySelector('.selectedTab').classList.add('selectedTab');

// Function to toggle content and tabs
function showContent(tab) {
    document.querySelectorAll('.contentBox').forEach(content => {
        content.style.display = 'none';
    });

    document.querySelectorAll('.desc, .har, .use').forEach(tab => {
        tab.classList.remove('selectedTab');
    });

    if (tab === 'description') {
        document.getElementById('descriptionContent').style.display = 'block';
        document.querySelector('.desc').classList.add('selectedTab');
    } else if (tab === 'harvest') {
        document.getElementById('harvestContent').style.display = 'block';
        document.querySelector('.har').classList.add('selectedTab');
    } else if (tab === 'useCases') {
        document.getElementById('useCasesContent').style.display = 'block';
        document.querySelector('.use').classList.add('selectedTab');
    }
}