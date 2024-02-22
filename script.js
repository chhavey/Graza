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

window.addEventListener('scroll', function () {
    const scrollUpDiv = document.getElementById('scrollUpDiv');
    if (window.scrollY > 0) {
        scrollUpDiv.style.transform = 'translateY(-150%)';
    } else {
        scrollUpDiv.style.transform = 'translateY(0)';
    }
});


// -----------------------carousel------------------------------------

let currentSlide = 1;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex - 1].classList.add('active');
    currentSlide = slideIndex;

    const buttons = document.querySelectorAll('.control-btn');
    buttons.forEach(button => {
        button.querySelector('.mobile-view').classList.remove('selected');
        button.querySelector('.web-view').classList.remove('selected');
    });
    const selectedButton = document.querySelector(`.control-btn:nth-child(${slideIndex})`);
    selectedButton.querySelector('.mobile-view').classList.add('selected');
    selectedButton.querySelector('.web-view').classList.add('selected');
}


//------------------------js for purchase-----------------------------

function toggleSet(setId) {
    const sets = document.querySelectorAll('.set');
    sets.forEach(set => {
        if (set.id === setId) {
            set.classList.add('selectedSet');
        } else {
            set.classList.remove('selectedSet');
        }
    });

    let priceLabel, prevPrice, previousSubPrice, subscribePrice;
    switch (setId) {
        case 'set1':
            prevPrice = "";
            priceLabel = "$37";
            previousSubPrice = "$37";
            subscribePrice = "$33.30";
            break;
        case 'set2':
            prevPrice = "$74";
            priceLabel = "$69";
            previousSubPrice = "$74";
            subscribePrice = "$64.17";
            break;
        case 'set3':
            prevPrice = "$111";
            priceLabel = "$102";
            previousSubPrice = "$111";
            subscribePrice = "$94.86";
            break;
        case 'set6':
            prevPrice = "$222";
            priceLabel = "$199";
            previousSubPrice = "$222";
            subscribePrice = "$185.07";
            break;
        default:
            prevPrice = "";
            priceLabel = "$37";
            previousSubPrice = "$74";
            subscribePrice = "$33.30";
            break;
    }
    document.querySelector('.prev').textContent = prevPrice;
    document.querySelector('.otpPrice').textContent = priceLabel;
    document.querySelector('.previous').textContent = previousSubPrice;
    document.querySelector('.subPrice').textContent = subscribePrice;
    document.querySelector('.cartBtn').textContent = `Add to Cart - ${priceLabel}`;
    document.querySelector('.subBtn').textContent = `Subscribe - ${subscribePrice}`;

}

function togglePurchaseOption(option) {
    const purchaseOptions = document.querySelectorAll('.radioBtn');
    purchaseOptions.forEach(purchaseOption => {
        purchaseOption.classList.remove('selectedRadio');
    });
    document.getElementById(option).classList.add('selectedRadio');

    const cartButton = document.querySelector('.cartBtn');
    const subButton = document.querySelector('.subBtn');
    const otpLabel = document.querySelector('.otpLabel');
    const subLabel = document.querySelector('.subLabel');
    const frequency = document.querySelector('.frequency');

    if (option === 'option1') {
        cartButton.style.display = 'block';
        subButton.style.display = 'none';
        otpLabel.style.display = 'block';
        subLabel.style.display = 'none';
        frequency.style.display = 'none';
    } else {
        cartButton.style.display = 'none';
        subButton.style.display = 'block';
        subLabel.style.display = 'block';
        otpLabel.style.display = 'none';
        frequency.style.display = 'block';
    }
}


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