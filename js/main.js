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
  cardTitle.innerHTML = "Thank you!";

  const cardDesc = document.querySelector("[data-card-desc]");
  cardDesc.innerHTML =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
};

const insertRatio = () => {
  const createDiv = document.createElement("div");

  const stars = 13;

  const newContent = document.createTextNode(`Você escolheu ${stars} estrelas`);

  const newDiv = createDiv.appendChild(newContent);

  cardTitle.parentNode.insertBefore(newDiv, cardTitle);
};

const displayRatio = (e) => {
  e.preventDefault();
  button.innerHTML = "Submiting...";

  //   hideElements();
  //   changeElements();
  insertRatio();
};

button.addEventListener("click", displayRatio);
