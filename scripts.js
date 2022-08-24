onLoad = () => {
  addCards(shapes);
};

addCards = (cardType) => {
  let cards1 = cardType.map((card) => {
    return `<div class="card ${card.name} 1">
                <img src=${card.image} alt=${card.name} id="${card.name} 1" class="hidden">
            </div>`;
  });
  let cards2 = cardType.map((card) => {
    return `<div class="card ${card.name} 2">
                <img src=${card.image} alt=${card.name} id="${card.name} 2" class="hidden">
            </div>`;
  });
  document.getElementById("gameCards").innerHTML =
    cards1.join("") + cards2.join("");
  document.querySelectorAll("div.card").forEach((card) => {
    card.addEventListener(
      "click",
      (handleClick = () => {
        flipCard(card.className.split(" ")[1], card.className.split(" ")[2]);
      })
    );
  });
};

flipCard = (card, num) => {
  let clickedCard = document.getElementById(`${card} ${num}`);
  let cardsFlipped = document.querySelectorAll(".flipped").length;
  if (cardsFlipped === 0 && clickedCard.classList.contains("hidden")) {
    clickedCard.classList.remove("hidden");
    clickedCard.classList.add("flipped");
    console.log("flipped first card");
  } else if (cardsFlipped === 1 && clickedCard.classList.contains("hidden")) {
    clickedCard.classList.remove("hidden");
    clickedCard.classList.add("flipped");
    console.log("flipped second card");
    console.log("comparing cards");
    setTimeout(() => {
      checkForMatch(`${card} ${num}`);
    }, 1000);
  }
};

checkForMatch = () => {
  let cards = document.querySelectorAll(".flipped");
  if (cards[0].id.split(" ")[0] === cards[1].id.split(" ")[0]) {
    document.getElementById(cards[0].id).classList.remove("flipped");
    document.getElementById(cards[0].id).classList.add("locked");
    document.getElementById(cards[1].id).classList.remove("flipped");
    document.getElementById(cards[1].id).classList.add("locked");
    console.log("cards match");
  } else {
    document.getElementById(cards[0].id).classList.remove("flipped");
    document.getElementById(cards[0].id).classList.add("hidden");
    document.getElementById(cards[1].id).classList.remove("flipped");
    document.getElementById(cards[1].id).classList.add("hidden");
    console.log("cards do not match");
  }
};

let shapes = [
  {
    name: "triangle",
    image: `https://i.imgur.com/UycJH0q.png`,
  },
  {
    name: "square",
    image: `https://i.imgur.com/t8fosOv.png`,
  },
  {
    name: "circle",
    image: `https://i.imgur.com/0obc2mu.png`,
  },
  {
    name: "star",
    image: `https://i.imgur.com/qOO9lLn.png`,
  },
];

onLoad();
