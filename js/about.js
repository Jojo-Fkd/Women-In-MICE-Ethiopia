/* SLIDER SECTION FUNCTION */

const items = document.querySelectorAll(".values figure");
const prev = document.querySelectorAll(".previous");
const next = document.querySelectorAll(".next");
const tracker = document.querySelectorAll(".values-tracker li");

const itemCounted = items.length;
let itemCount = 0;

next.forEach((btn) => {
  btn.onclick = () => {
    itemCount++;
    if (itemCount >= itemCounted) {
      itemCount = 0;
    }
    carousel();
  };
});

prev.forEach((btn) => {
  btn.onclick = () => {
    btn.onclick = () => {
      itemCount--;
      if (itemCount < 0) {
        itemCount = itemCounted - 1;
      }
      carousel();
    };
  };
});

tracker.forEach((track, index) => {
  track.onclick = () => {
    itemCount = index;
    carousel();
  };
});

const carousel = () => {
  items.forEach((item) => {
    item.classList.remove("active");
  });
  tracker.forEach((track) => {
    track.classList.remove("active");
  });
  items[itemCount].classList.add("active");
  tracker[itemCount].classList.add("active");
};

/* QUESTION AND ANSWER SECTION FUNCTIONALITY */

const questions = document.querySelectorAll(".question");
questions.forEach((questionContainer) => {
  const questionToggle = questionContainer.querySelector(
    ".question-article .answer-toggle"
  );
  questionToggle.onclick = () => {
    questionToggle.classList.toggle("active");
    const answer = questionContainer.querySelector(".answer");
    answer.classList.toggle("active");
  };
});

/* COUNTRY PROGRAMMES (READ MORE) POPUP FUNCTIONALITY */

const readMoreBtns = document.querySelectorAll(".programmes article button");

readMoreBtns.forEach((btn) => {
  btn.onclick = () => {
    body.classList.add("covered");
    const informationParent = btn.parentElement;
    const moreTitle = informationParent.querySelector(
      "figure figcaption h3"
    ).innerText;
    const moreInfo = informationParent.querySelector(
      "figure figcaption p"
    ).innerText;
    popup(moreTitle, moreInfo);
  };
});

const moreInfoPopupContainer = document.querySelector(
  ".more_info-popup-container"
);
const moreInfoPopup = document.querySelector(".more_info-popup");

const popup = (title, info) => {
  moreInfoPopup.querySelector("section h3").innerText = title;
  moreInfoPopup.querySelector("p").textContent = info;
  moreInfoPopupContainer.classList.add("active");
  const closeBtn = moreInfoPopup.querySelector("section button");
  closeBtn.onclick = () => {
    moreInfoPopupContainer.classList.remove("active");
    body.classList.remove("covered");
  };
};
