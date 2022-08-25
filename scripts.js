onLoad = () => {
  addCards(shapes);
};

addCards = (cardType) => {
  let allCards = [];
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
  cards1.forEach((card) => {
    allCards.push(card);
  });
  cards2.forEach((card) => {
    allCards.push(card);
  });
  document.getElementById("gameCards").innerHTML = allCards
    .sort(() => Math.random() - 0.5)
    .join("");
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

let tarot = [
  {
    name: "fool",
    image: `https://i.imgur.com/qEcaSbB.jpg`,
  },
  {
    name: "magician",
    image: `https://i.imgur.com/jAwmSDM.jpg`,
  },
  {
    name: "high-priestess",
    image: `https://i.imgur.com/MlfZChj.jpg`,
  },
  {
    name: "empress",
    image: `https://i.imgur.com/U7CCgmK.jpg`,
  },
  {
    name: "emperor",
    image: `https://i.imgur.com/wzyo1A1.jpg`,
  },
  {
    name: "hierophant",
    image: `https://i.imgur.com/77Hx0Sa.jpg`,
  },
  {
    name: "lovers",
    image: `https://i.imgur.com/n4CjeiX.jpg`,
  },
  {
    name: "chariot",
    image: `https://i.imgur.com/Q9ZS4Ym.jpg`,
  },
  {
    name: "strength",
    image: `https://i.imgur.com/RRR0Kld.jpg`,
  },
  {
    name: "hermit",
    image: `https://i.imgur.com/OXodOad.jpg`,
  },
  {
    name: "wheel-of-fortune",
    image: `https://i.imgur.com/BVgqVWT.jpg`,
  },
  {
    name: "justice",
    image: `https://i.imgur.com/tpR3mTs.jpg`,
  },
  {
    name: "hanged-man",
    image: `https://i.imgur.com/ggdWCyT.jpg`,
  },
  {
    name: "death",
    image: `https://i.imgur.com/QPywtHg.jpg`,
  },
  {
    name: "temperance",
    image: `https://i.imgur.com/jsfFLLl.jpg`,
  },
  {
    name: "devil",
    image: `https://i.imgur.com/dDUZCVz.jpg`,
  },
  {
    name: "tower",
    image: `https://i.imgur.com/7jX0whb.jpg`,
  },
  {
    name: "star",
    image: `https://i.imgur.com/ETRoYe7.jpg`,
  },
  {
    name: "moon",
    image: `https://i.imgur.com/QTNZkHO.jpg`,
  },
  {
    name: "sun",
    image: `https://i.imgur.com/f0LQvzT.jpg`,
  },
  {
    name: "judgement",
    image: `https://i.imgur.com/y7PS8ul.jpg`,
  },
  {
    name: "world",
    image: `https://i.imgur.com/LsjfDUw.jpg`,
  },
];

let playingCards = [
  {
    name: "spade-ace",
    image: `https://i.imgur.com/IUNgDAG.png`,
  },
  {
    name: "spade-two",
    image: `https://i.imgur.com/PZHHXXN.png`,
  },
  {
    name: "spade-three",
    image: `https://i.imgur.com/aBgmSAq.png`,
  },
  {
    name: "spade-four",
    image: `https://i.imgur.com/cXlxxJ8.png`,
  },
  {
    name: "spade-five",
    image: `https://i.imgur.com/sHz8xlS.png`,
  },
  {
    name: "spade-six",
    image: `https://i.imgur.com/y5C28zW.png`,
  },
  {
    name: "spade-seven",
    image: `https://i.imgur.com/FwRr8xm.png`,
  },
  {
    name: "spade-eight",
    image: `https://i.imgur.com/QfQVqy8.png`,
  },
  {
    name: "spade-nine",
    image: `https://i.imgur.com/uIDRS3T.png`,
  },
  {
    name: "spade-ten",
    image: `https://i.imgur.com/8G4bNuV.png`,
  },
  {
    name: "spade-jack",
    image: `https://i.imgur.com/UrVpRR9.png`,
  },
  {
    name: "spade-queen",
    image: `https://i.imgur.com/U0p05Kd.png`,
  },
  {
    name: "spade-king",
    image: `https://i.imgur.com/OuJS9J0.png`,
  },
  {
    name: "club-ace",
    image: `https://i.imgur.com/Su2JOZx.png`,
  },
  {
    name: "club-two",
    image: `https://i.imgur.com/9AWHnUZ.png`,
  },
  {
    name: "club-three",
    image: `https://i.imgur.com/CLWVdMY.png`,
  },
  {
    name: "club-four",
    image: `https://i.imgur.com/Y3QlFet.png`,
  },
  {
    name: "club-five",
    image: `https://i.imgur.com/w0mEnor.png`,
  },
  {
    name: "club-six",
    image: `https://i.imgur.com/oX2rJvF.png`,
  },
  {
    name: "club-seven",
    image: `https://i.imgur.com/nEmyAb4.png`,
  },
  {
    name: "club-eight",
    image: `https://i.imgur.com/rdEa7Xg.png`,
  },
  {
    name: "club-nine",
    image: `https://i.imgur.com/e0t4lmY.png`,
  },
  {
    name: "club-ten",
    image: `https://i.imgur.com/Gxku6nI.png`,
  },
  {
    name: "club-jack",
    image: `https://i.imgur.com/pmkiysr.png`,
  },
  {
    name: "club-queen",
    image: `https://i.imgur.com/eKwzqnQ.png`,
  },
  {
    name: "club-king",
    image: `https://i.imgur.com/8QFaJgj.png`,
  },
  {
    name: "heart-ace",
    image: `https://i.imgur.com/1z2wd2r.png`,
  },
  {
    name: "heart-two",
    image: `https://i.imgur.com/cY3Z5Ju.png`,
  },
  {
    name: "heart-three",
    image: `https://i.imgur.com/UBBX0aI.png`,
  },
  {
    name: "heart-four",
    image: `https://i.imgur.com/TGmAKWS.png`,
  },
  {
    name: "heart-five",
    image: `https://i.imgur.com/nswGAJV.png`,
  },
  {
    name: "heart-six",
    image: `https://i.imgur.com/s0A6yvC.png`,
  },
  {
    name: "heart-seven",
    image: `https://i.imgur.com/VyMdLrm.png`,
  },
  {
    name: "heart-eight",
    image: `https://i.imgur.com/n1GPSCV.png`,
  },
  {
    name: "heart-nine",
    image: `https://i.imgur.com/gAnwqIL.png`,
  },
  {
    name: "heart-ten",
    image: `https://i.imgur.com/AVKu8vv.png`,
  },
  {
    name: "heart-jack",
    image: `https://i.imgur.com/L9ibL1S.png`,
  },
  {
    name: "heart-queen",
    image: `https://i.imgur.com/LCxwRW1.png`,
  },
  {
    name: "heart-king",
    image: `https://i.imgur.com/NiP5K2S.png`,
  },
  {
    name: "diamond-ace",
    image: `https://i.imgur.com/NHA9PCZ.png`,
  },
  {
    name: "diamond-two",
    image: `https://i.imgur.com/eMSSsDb.png`,
  },
  {
    name: "diamond-three",
    image: `https://i.imgur.com/DEuCtoo.png`,
  },
  {
    name: "diamond-four",
    image: `https://i.imgur.com/flxcHfA.png`,
  },
  {
    name: "diamond-five",
    image: `https://i.imgur.com/whgC8kq.png`,
  },
  {
    name: "diamond-six",
    image: `https://i.imgur.com/2pDxmhd.png`,
  },
  {
    name: "diamond-seven",
    image: `https://i.imgur.com/jpWMB7r.png`,
  },
  {
    name: "diamond-eight",
    image: `https://i.imgur.com/qwkhmPG.png`,
  },
  {
    name: "diamond-nine",
    image: `https://i.imgur.com/rZ2cYdp.png`,
  },
  {
    name: "diamond-ten",
    image: `https://i.imgur.com/wo8stYx.png`,
  },
  {
    name: "diamond-jack",
    image: `https://i.imgur.com/tGW0rQV.png`,
  },
  {
    name: "diamond-queen",
    image: `https://i.imgur.com/TmX6GPO.png`,
  },
  {
    name: "diamond-king",
    image: `https://i.imgur.com/0XQitZb.png`,
  },
];

let pokemon = [
  {
    name: "venusaur",
    image: `https://i.imgur.com/EY0BMND.png`,
  },
  {
    name: "charizard",
    image: `https://i.imgur.com/D1qQyv4.png`,
  },
  {
    name: "blastoise",
    image: `https://i.imgur.com/LwM5WOA.png`,
  },
  {
    name: "butterfree",
    image: `https://i.imgur.com/ONUrefM.png`,
  },
  {
    name: "beedrill",
    image: `https://i.imgur.com/VvpknOi.png`,
  },
  {
    name: "pidgeot",
    image: `https://i.imgur.com/pUoHVfd.png`,
  },
  {
    name: "raticate",
    image: `https://i.imgur.com/JKMHi0A.png`,
  },
  {
    name: "fearow",
    image: `https://i.imgur.com/ANipUaa.png`,
  },
  {
    name: "arbok",
    image: `https://i.imgur.com/zgEjVmA.png`,
  },
  {
    name: "raichu",
    image: `https://i.imgur.com/LidWLGb.png`,
  },
  {
    name: "sandslash",
    image: `https://i.imgur.com/Mn9wzQn.png`,
  },
  {
    name: "nidoqueen",
    image: `https://i.imgur.com/oX9BYDu.png`,
  },
  {
    name: "nidoking",
    image: `https://i.imgur.com/V5nWsQe.png`,
  },
  {
    name: "clefable",
    image: `https://i.imgur.com/e0Fw6I0.png`,
  },
  {
    name: "ninetales",
    image: `https://i.imgur.com/ANlYLAp.png`,
  },
  {
    name: "wigglytuff",
    image: `https://i.imgur.com/nm4bjlV.png`,
  },
  {
    name: "golbat",
    image: `https://i.imgur.com/9wLll4e.png`,
  },
  {
    name: "vileplume",
    image: `https://i.imgur.com/sRbgLG4.png`,
  },
  {
    name: "parasect",
    image: `https://i.imgur.com/CfMMm93.png`,
  },
  {
    name: "venomoth",
    image: `https://i.imgur.com/JI8WOrJ.png`,
  },
  {
    name: "dugtrio",
    image: `https://i.imgur.com/ebYRF36.png`,
  },
  {
    name: "persian",
    image: `https://i.imgur.com/HP7qblD.png`,
  },
  {
    name: "golduck",
    image: `https://i.imgur.com/maLxO15.png`,
  },
  {
    name: "primeape",
    image: `https://i.imgur.com/MNshO5N.png`,
  },
  {
    name: "arcanine",
    image: `https://i.imgur.com/tl3z8Gd.png`,
  },
  {
    name: "poliwrath",
    image: `https://i.imgur.com/jQI8PEr.png`,
  },
  {
    name: "alakazam",
    image: `https://i.imgur.com/SS4spFL.png`,
  },
  {
    name: "machamp",
    image: `https://i.imgur.com/vqCV4az.png`,
  },
  {
    name: "victreebel",
    image: `https://i.imgur.com/9KyoOYg.png`,
  },
  {
    name: "tentacruel",
    image: `https://i.imgur.com/EydCmvg.png`,
  },
  {
    name: "golem",
    image: `https://i.imgur.com/yfmI4kg.png`,
  },
  {
    name: "rapidash",
    image: `https://i.imgur.com/A7Qkok1.png`,
  },
  {
    name: "slowbro",
    image: `https://i.imgur.com/ClfjXlB.png`,
  },
  {
    name: "magneton",
    image: `https://i.imgur.com/DXHPGhB.png`,
  },
  {
    name: "farfetchd",
    image: `https://i.imgur.com/DHYXNeB.png`,
  },
  {
    name: "dodrio",
    image: `https://i.imgur.com/Wo0GFum.png`,
  },
  {
    name: "dewgong",
    image: `https://i.imgur.com/dSeadCd.png`,
  },
  {
    name: "muk",
    image: `https://i.imgur.com/L5KXe3T.png`,
  },
  {
    name: "cloyster",
    image: `https://i.imgur.com/OFckh3m.png`,
  },
  {
    name: "gengar",
    image: `https://i.imgur.com/6mFgluk.png`,
  },
  {
    name: "onix",
    image: `https://i.imgur.com/rkzl9OQ.png`,
  },
  {
    name: "hypno",
    image: `https://i.imgur.com/ka8D07c.png`,
  },
  {
    name: "kingler",
    image: `https://i.imgur.com/I0BCZuz.png`,
  },
  {
    name: "electrode",
    image: `https://i.imgur.com/oql41Qa.png`,
  },
  {
    name: "exeggutor",
    image: `https://i.imgur.com/P09ZjmH.png`,
  },
  {
    name: "marowak",
    image: `https://i.imgur.com/1bwvDlS.png`,
  },
  {
    name: "hitmonlee",
    image: `https://i.imgur.com/C2UTxQf.png`,
  },
  {
    name: "hitmonchan",
    image: `https://i.imgur.com/7aO17ap.png`,
  },
  {
    name: "lickitung",
    image: `https://i.imgur.com/MnqqmHt.png`,
  },
  {
    name: "weezing",
    image: `https://i.imgur.com/rwx21Zg.png`,
  },
  {
    name: "rhydon",
    image: `https://i.imgur.com/dnMc0yw.png`,
  },
  {
    name: "chansey",
    image: `https://i.imgur.com/R2oAOkZ.png`,
  },
  {
    name: "tangela",
    image: `https://i.imgur.com/8syxEVR.png`,
  },
  {
    name: "kangaskhan",
    image: `https://i.imgur.com/ROt7cCy.png`,
  },
  {
    name: "seadra",
    image: `https://i.imgur.com/yMxBUIv.png`,
  },
  {
    name: "seaking",
    image: `https://i.imgur.com/ytTtsGc.png`,
  },
  {
    name: "starmie",
    image: `https://i.imgur.com/vzenwwn.png`,
  },
  {
    name: "mr-mime",
    image: `https://i.imgur.com/FZjJJgA.png`,
  },
  {
    name: "scyther",
    image: `https://i.imgur.com/k6WlF2d.png`,
  },
  {
    name: "jynx",
    image: `https://i.imgur.com/RomckNV.png`,
  },
  {
    name: "electabuzz",
    image: `https://i.imgur.com/lppuyNa.png`,
  },
  {
    name: "magmar",
    image: `https://i.imgur.com/UZEbrRi.png`,
  },
  {
    name: "pinsir",
    image: `https://i.imgur.com/jW1i6s6.png`,
  },
  {
    name: "tauros",
    image: `https://i.imgur.com/4wmOgyA.png`,
  },
  {
    name: "gyarados",
    image: `https://i.imgur.com/L7onvij.png`,
  },
  {
    name: "lapras",
    image: `https://i.imgur.com/IPU0xg2.png`,
  },
  {
    name: "ditto",
    image: `https://i.imgur.com/ldG3Id6.png`,
  },
  {
    name: "vaporeon",
    image: `https://i.imgur.com/tfsVEAG.png`,
  },
  {
    name: "jolteon",
    image: `https://i.imgur.com/cYwFP35.png`,
  },
  {
    name: "flareon",
    image: `https://i.imgur.com/SojNFzD.png`,
  },
  {
    name: "porygon",
    image: `https://i.imgur.com/ae3lM65.png`,
  },
  {
    name: "omastar",
    image: `https://i.imgur.com/Icbjd54.png`,
  },
  {
    name: "kabutops",
    image: `https://i.imgur.com/1jU51Ft.png`,
  },
  {
    name: "aerodactyl",
    image: `https://i.imgur.com/8pk1zJI.png`,
  },
  {
    name: "snorlax",
    image: `https://i.imgur.com/lSaEcx4.png`,
  },
  {
    name: "articuno",
    image: `https://i.imgur.com/3lYICuR.png`,
  },
  {
    name: "zapdos",
    image: `https://i.imgur.com/Tg8XnFK.png`,
  },
  {
    name: "moltres",
    image: `https://i.imgur.com/AX76v6j.png`,
  },
  {
    name: "dragonite",
    image: `https://i.imgur.com/kZauwmK.png`,
  },
  {
    name: "mewtwo",
    image: `https://i.imgur.com/whFX4l6.png`,
  },
  {
    name: "mew",
    image: `https://i.imgur.com/Mo0EdWj.png`,
  },
];

onLoad();
