const button = document.querySelector("[data-button]");
const cardTitle = document.querySelector("[data-card-title]");

const hideElements = () => {
  const elementsToHide = Array.from(
    document.querySelectorAll("[data-element-hide]")
  );
  elementsToHide.forEach((element) => {
    element.classList.add("hide");
  });
};

const changeElements = () => {
  const cardImg = document.querySelector("[data-card-img]");
  cardImg.setAttribute("src", "./images/illustration-thank-you.svg");
  cardImg.setAttribute("alt", "Imagem de celular com recibo");

  cardImg.classList.add("card__img--thanks");

  cardTitle.innerHTML = "Thank you!";

  const cardDesc = document.querySelector("[data-card-desc]");
  cardDesc.innerHTML =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
  cardDesc.classList.add("card__desc--thanks");
};

const insertRatio = () => {
  const ratioStars = Array.from(document.querySelectorAll("input"));

  const getRatio = () => {
    for (let i = 0; i < ratioStars.length; i++) {
      if (ratioStars[i].checked) {
        const ratioValue = ratioStars[i].value;
        return ratioValue;
      }
    }
  };
  const ratioValue = getRatio();
  const createDiv = document.createElement("div");

  createDiv.appendChild(
    document.createTextNode(
      `${
        ratioValue > 0
          ? `You selected ${ratioValue} out of 5`
          : "You don't selected any number"
      }`
    )
  );
  createDiv.classList.add("card__rate--value");
  cardTitle.parentNode.insertBefore(createDiv, cardTitle);
};

const displayRatio = (e) => {
  e.preventDefault();
  button.innerHTML = "Submiting...";
  const card = document
    .querySelector("[data-card]")
    .classList.add("card--thanks");

  hideElements();
  changeElements();
  insertRatio();
};

button.addEventListener("click", displayRatio);
