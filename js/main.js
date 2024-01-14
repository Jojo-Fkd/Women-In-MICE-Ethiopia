const body = document.querySelector("body");

/* MOBILE NAVIGATION ACTIVATION */

const mobileSideBarIcon = document.querySelector(".side-bar-icon-container");
const mobileNav = document.querySelector(".nav-items-mobile");

mobileSideBarIcon.onclick = () => {
  mobileSideBarIcon.querySelector(".side-bar-icon").classList.toggle("active");
  mobileNav.classList.toggle("active");
  body.classList.toggle("covered");
};

window.scrollTo(0, 0);

/* NEWS LETTER */
const popupContainer = document.querySelector(".popup_container");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbytTtHVYHtkFB5KiEmgx94r8LDEAq2QmdoKQOEPlL6vn9hT8TKnRU4Ogpnd48CqLSBP/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  popupContainer.classList.add("active");
  body.classList.add("covered");
  popupContainer.querySelector(".loading").classList.add("active");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      popupContainer.querySelector(".loading").classList.remove("active");
      popupContainer
        .querySelector(".news-letter_success")
        .classList.add("active");
      popupContainer
        .querySelector(".news-letter_success")
        .querySelector("ul li:first-child").innerText =
        form.querySelector("input#emailNews").value;
    })
    .catch((err) => {
      popupContainer.querySelector(".loading").classList.remove("active");
      popupContainer
        .querySelector(".failed_news-letter")
        .classList.add("active");
    });
});
