let Search = document.getElementById("search")
let mini_search = document.getElementById("mini-search")
let close = document.getElementById("close")


Search.addEventListener("click", () => {
    mini_search.classList.add("mini_search_hide")
})

close.addEventListener("click", () => {
    mini_search.classList.remove("mini_search_hide")
    mini_search.classList.add("close-durition")
})
window.addEventListener("scroll", () => {
    mini_search.classList.remove("mini_search_hide")
    mini_search.classList.add("window-durition")
})


$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});