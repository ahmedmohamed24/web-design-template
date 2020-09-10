document.addEventListener('DOMContentLoaded', () => {
    screenLoaded();
    scrollEvent();
    navToggle();
    analyticsFire();
    carouselFiring();
    mobileEditFire();
    aboutUsContainer();
    navResponsive();

})
function navResponsive() {
    let firstNavItems = document.querySelector(".navItem:first-of-type");
    let lastNavItem = document.querySelector(".navItem:last-of-type")
    let w = document.documentElement.clientWidth;
    window.addEventListener("resize", (e) => {
        w = e.currentTarget.innerWidth
    })
    firstNavItems.addEventListener("click", (e) => {
        if (w < 991) {
            e.currentTarget.childNodes[3].classList.toggle("showNavLayer");
            e.currentTarget.childNodes[1].classList.toggle("arrowSmallMotion");
        };
    })
    lastNavItem.addEventListener("click", (e) => {
        if (w < 991) {
            e.currentTarget.childNodes[3].classList.toggle("showNavLayer");
            e.currentTarget.childNodes[1].classList.toggle("arrowSmallMotion");
        }
    })

}
function analyticsFire() {
    const analyticLabels = document.querySelectorAll(".analyticsLabel");
    const analyticImgs = document.querySelectorAll(".analyticImg");
    let labelNumber;
    let lastSelected = 2;
    for (let label of analyticLabels) {
        label.addEventListener("click", (e) => {
            labelNumber = e.currentTarget.attributes["label-data"].value;
            getCases(labelNumber)


        })
    }
    function getCases(lNum) {
        switch (lNum) {
            case '1':
                if (lastSelected !== 0) {
                    analyticLabels[0].classList.add("activeItem");
                    analyticLabels[1].classList.remove("activeItem");
                    analyticLabels[2].classList.remove("activeItem");
                    analyticImgs[0].style.zIndex = "0";
                    analyticImgs[1].style.zIndex = "-1";
                    analyticImgs[2].style.zIndex = "-1";
                }
                break;
            case '2':
                if (lastSelected !== 1) {
                    analyticLabels[1].classList.add("activeItem");
                    analyticLabels[0].classList.remove("activeItem");
                    analyticLabels[2].classList.remove("activeItem");
                    analyticImgs[0].style.zIndex = "-1";
                    analyticImgs[1].style.zIndex = "0";
                    analyticImgs[2].style.zIndex = "-1";
                }
                break;
            case '3':
                if (lastSelected !== 2) {
                    analyticLabels[2].classList.add("activeItem");
                    analyticLabels[0].classList.remove("activeItem");
                    analyticLabels[1].classList.remove("activeItem");
                    analyticImgs[0].style.zIndex = "-1";
                    analyticImgs[1].style.zIndex = "-1";
                    analyticImgs[2].style.zIndex = "0";
                }
                break;

            default:
                analyticLabels[0].classList.add("activeItem");
                analyticLabels[1].classList.remove("activeItem");
                analyticLabels[2].classList.remove("activeItem");
                break;
        }
        lastSelected = lNum - 1;
        if (lastSelected !== 1 && lastSelected !== 2 && lastSelected !== 3)
            lastSelected = 0;
    }
}

function scrollEvent() {
    let screenYPos;
    let nav = document.querySelector("nav");
    nav.style.backgroundColor = "transparent";
    const portfolio = document.querySelector("#portfolio");
    let portfolioPos = portfolio.offsetTop - portfolio.offsetHeight;
    const blogs = document.querySelector("#blogs");
    let blogsPos = blogs.offsetTop - blogs.offsetHeight;
    const blogDesign = document.querySelector(".blogDesign");
    const blogDescription = document.querySelector(".blogDescription");
    const SEOSection = document.querySelector("#SEO");
    let SEOPos = SEOSection.offsetTop - SEOSection.offsetHeight;
    document.addEventListener("scroll", (e) => {
        /*This is for Navbar background */
        screenYPos = e.target.scrollingElement.scrollTop;
        if (screenYPos > 10)
            nav.style.backgroundColor = "#000";
        else
            nav.style.backgroundColor = "transparent";


        /*this is for portfolio section animation */
        if (screenYPos >= portfolioPos) {
            portfolio.classList.add("portfolioMove");
        }
        /*this is for blog section animation */
        if (screenYPos >= blogsPos) {
            blogDesign.classList.add("blogAnimation");
            blogDescription.classList.add("blogAnimation");


        }
        /*this section is for SEO animation */
        if (screenYPos >= SEOPos) {
            SEOSection.classList.add("SEOAnimation");
        }
    })
}
function carouselFiring() {
    const carousel = document.querySelector(".carouselInnerContainer");
    const prevSlide = document.querySelector(".prevSlide");
    const nextSlide = document.querySelector(".nextSlide");
    const carImages = document.querySelectorAll(".craouselItem img");
    let carouselCounter = 1;
    let carouseImgSize = document.querySelectorAll(".craouselItem")[0].clientWidth;
    let slideNumber = document.querySelector("#slideNumber");
    document.querySelector(".carouselOuterContainer").style.width = 1.5 * carouseImgSize;
    carousel.style.transform = `translateX(-${(carouseImgSize * carouselCounter)}px)`;
    /*Next And Previous handling */
    nextSlide.addEventListener("click", () => {
        for (let x of carImages) {
            x.style.animation = "carouselImgAnimate 1s ease-in-out backwards";
        }
        if ((carouselCounter < 6) && (carouselCounter >= 1)) {
            carouselCounter++;
            slideNumber.innerHTML = carouselCounter;
            carousel.style.transform = `translateX(-${(carouseImgSize * carouselCounter)}px)`;
        }
        else {
            carouselCounter = 1;
            slideNumber.innerHTML = carouselCounter;
            carousel.style.transform = `translateX(-${(carouseImgSize * carouselCounter)}px)`;
        }
    })
    prevSlide.addEventListener("click", () => {
        for (let x of carImages) {
            x.style.animation = "carouselImgAnimate 1s ease-in-out backwards";
        }
        if ((carouselCounter <= 6) && (carouselCounter > 1)) {
            carouselCounter--;
            slideNumber.innerHTML = carouselCounter;
            carousel.style.transform = `translateX(-${(carouseImgSize * carouselCounter)}px)`;
        }
        else {
            carouselCounter = 6;
            slideNumber.innerHTML = carouselCounter;
            carousel.style.transform = `translateX(-${(carouseImgSize * carouselCounter)}px)`;
        }
    })
}
function screenLoaded() {
    document.querySelector(".loaderContainer").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
}
function navToggle() {
    let menuOpen = document.querySelector(".comboBtn .menuOpen");
    let menuClose = document.querySelector(".comboBtn .menuClose");
    let nav = document.querySelector("nav");

    menuOpen.addEventListener("click", () => {
        menuClose.style.display = "block";
        menuOpen.style.display = "none";
        document.querySelector("nav").style.bottom = "0";
        document.querySelector("nav .row > div:nth-of-type(2)").style.display = "block";
        document.querySelector("nav .row > .navJoinUsContainer").style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
        nav.style.backgroundColor = "#000";
    })
    menuClose.addEventListener("click", () => {
        menuClose.style.display = "none";
        menuOpen.style.display = "block";
        document.querySelector("nav").style.bottom = "";
        document.querySelector("nav .row > div:nth-of-type(2)").style.display = "none";
        document.querySelector("nav .row > .navJoinUsContainer").style.display = "none";
        document.querySelector("body").style.overflow = "auto";

    })
}


function mobileEditFire() {
    const mobileEditLabels = document.querySelectorAll(".mobileEditLabel");
    const mobileEditImgs = document.querySelectorAll(".mobileEditImg");
    let labelNumber;
    let lastSelected = 2;
    for (let label of mobileEditLabels) {
        label.addEventListener("click", (e) => {
            labelNumber = e.currentTarget.attributes[1].value;
            getCases(labelNumber);


        })
    }
    function getCases(lNum) {
        switch (lNum) {
            case '1':
                if (lastSelected !== 0) {
                    mobileEditLabels[0].classList.add("activeItemE");
                    mobileEditLabels[1].classList.remove("activeItemE");
                    mobileEditLabels[2].classList.remove("activeItemE");
                    mobileEditImgs[0].style.zIndex = "0";
                    mobileEditImgs[1].style.zIndex = "-1";
                    mobileEditImgs[2].style.zIndex = "-1";
                }
                break;
            case '2':
                if (lastSelected !== 1) {
                    mobileEditLabels[1].classList.add("activeItemE");
                    mobileEditLabels[0].classList.remove("activeItemE");
                    mobileEditLabels[2].classList.remove("activeItemE");
                    mobileEditImgs[0].style.zIndex = "-1";
                    mobileEditImgs[1].style.zIndex = "0";
                    mobileEditImgs[2].style.zIndex = "-1";
                }
                break;
            case '3':
                if (lastSelected !== 2) {
                    mobileEditLabels[2].classList.add("activeItemE");
                    mobileEditLabels[0].classList.remove("activeItemE");
                    mobileEditLabels[1].classList.remove("activeItemE");
                    mobileEditImgs[0].style.zIndex = "-1";
                    mobileEditImgs[1].style.zIndex = "-1";
                    mobileEditImgs[2].style.zIndex = "0";
                }
                break;

            default:
                mobileEditLabels[0].classList.add("activeItemE");
                mobileEditLabels[1].classList.remove("activeItemE");
                mobileEditLabels[2].classList.remove("activeItemE");
                break;
        }
        lastSelected = lNum - 1;
        if (lastSelected !== 1 && lastSelected !== 2 && lastSelected !== 3)
            lastSelected = 0;
    }
}


function aboutUsContainer() {
    const listHeaders = document.querySelectorAll(".listHeader");
    const closeCurrencyLayer = document.querySelector(".closeCurrencyLayer");
    const closeLanguageLayer = document.querySelector(".closeLanguageLayer");
    const currencyLayer = document.querySelector("#currency");
    const languageLayer = document.querySelector("#language");
    const currencyBtn = document.querySelector("#currencyBtn");
    const languageBtn = document.querySelector("#languageBtn");
    for (item of listHeaders) {
        item.addEventListener("click", (e) => {
            e.currentTarget.nextElementSibling.classList.toggle("showList");
        })
    }
    currencyBtn.addEventListener("click", () => {
        currencyLayer.classList.toggle("displayLayer");
        closeCurrencyLayer.addEventListener("click", () => {
            currencyLayer.classList.remove("displayLayer");
        })
    })
    languageBtn.addEventListener("click", () => {
        languageLayer.classList.toggle("displayLayer");
        closeLanguageLayer.addEventListener("click", () => {
            languageLayer.classList.remove("displayLayer");
        })
    })
}