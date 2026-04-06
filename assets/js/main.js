// TODO:::::::::::::::::;preloader:::::::::::::::::::::
window.addEventListener("load", () => {
    const LOGO = document.getElementById("preloader");
    if (LOGO) setTimeout(() => LOGO.classList.add("preloader-hidden"), 1000);
});

// TODO:::::::::::::::sroll navbar:::::::::::::::::::::::
let lastScroll = window.scrollY;
const NAV = document.getElementById("nav");

window.addEventListener("scroll", () => {
    const CURR_SCROLL = window.scrollY;

    if (CURR_SCROLL > lastScroll && CURR_SCROLL > 100) NAV.classList.add("scroll");
    else NAV.classList.remove("scroll");

    lastScroll = CURR_SCROLL;
});

// TODO:::::::::::::::active section::::::::::::::::
const SET_ACTIVE_SECTION = () => {
    const CURR_SEC = window.location.hash || "#home";

    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("href") === CURR_SEC) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
};
SET_ACTIVE_SECTION();
window.addEventListener("hashchange", SET_ACTIVE_SECTION);

// TODO::::::::::::::::::::::::::: top btn::::::::::::::::::::
const TOP_BTN = document.getElementById("topBtn");

window.onscroll = () => {
    let percent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    TOP_BTN.style.background = `conic-gradient(var(--color-ocean) ${percent * 360}deg, #444 0deg)`;

    (window.scrollY > 100) ? TOP_BTN.style.opacity = 1 : TOP_BTN.style.opacity = 0;
};

TOP_BTN.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


