const data = [
  {
    slug: "howls-moving-castle-1",
    movie: "Howl’s Moving Castle",
    quote: "“A heart’s a heavy burden.”"
  },
  {
    slug: "spirited-away-2",
    movie: "Spirited Away",
    quote: "“Once you’ve met someone you never really forget them.”"
  },
  {
    slug: "howls-moving-castle-2",
    movie: "Howl’s Moving Castle",
    quote: "“One thing you can always count on is that hearts change.”"
  },
  {
    slug: "the-secret-world-of-arrietty-5",
    movie: "The Secret World of Arrietty",
    quote: "“Sometimes you have to fight for the things that are worth fighting for.”"
  },
  {
    slug: "kikis-delivery-service-2",
    movie: "Kiki’s Delivery Service",
    quote: "“Just follow your heart, and keep smiling.”"
  },
  {
    slug: "princess-monoke-1",
    movie: "Princess Mononoke",
    quote: "“Well, they say that happy women make a happy village.”"
  },
  {
    slug: "castle-in-the-sky-1",
    movie: "Castle in the Sky",
    quote: "“The world cannot live without love.”"
  },
  {
    slug: "whisper-of-the-heart-3",
    movie: "Whisper of the Heart",
    quote: "“Don’t worry. I’ll wait here till you’re done.”"
  },
  {
    slug: "howls-moving-castle-3",
    movie: "Howl’s Moving Castle",
    quote: "“I don’t care if you’re a monster.”"
  },
  {
    slug: "the-wind-rises-1",
    movie: "The Wind Rises",
    quote: "“I asked the spring to bring you, to me.”"
  },
  {
    slug: "the-secret-world-of-arrietty-4",
    movie: "The Secret World Of Arrietty",
    quote: "“My heart is stronger now that you’re in it.”"
  },
  {
    slug: "howls-moving-castle-4",
    movie: "Howl’s Moving Castle",
    quote: "“Sophie, you are beautiful.”"
  },
  {
    slug: "my-neighbor-totoro-1",
    movie: "My Neighbor Totoro",
    quote: "“Totoro, I beg you, please protect Mei. She'll be lost, and probably scared. Please believe me, I'll be good for the rest of my life if I can just see her again.”"
  },
  {
    slug: "the-wind-rises-2",
    movie: "The Wind Rises",
    quote: "“I’ll keep holding your hand. You should sleep.”"
  },
  {
    slug: "howls-moving-castle-5",
    movie: "Howl’s Moving Castle",
    quote: "“I’ve finally found someone I want to protect. You.”"
  },
  {
    slug: "spirited-away-1",
    movie: "Spirited Away",
    quote: "“Now go and don’t look back.”"
  },
  {
    slug: "from-up-on-poppy-hill-5",
    movie: "From Up On Poppy Hill",
    quote: "“I guess we stop feeling how we feel. We’ll just have to go back to being friends.”"
  },
  {
    slug: "the-wind-rises-3",
    movie: "The Wind Rises",
    quote: "“I will wait for you even if it takes a hundred years.”"
  },
  {
    slug: "the-secret-world-of-arrietty-3",
    movie: "The Secret World Of Arrietty",
    quote: "“When I saw you, I just wanted to find a way to protect you.”"
  },
  {
    slug: "whisper-of-the-heart-5",
    movie: "Whisper of the Heart",
    quote: "“I read all kinds of books so my name would be on the cards before yours.”"
  },
  {
    slug: "grave-of-the-fireflies-1",
    movie: "Grave of the Fireflies",
    quote: "“I don’t need anything. Please stay home with me.”"
  },
  {
    slug: "ponyo-1",
    movie: "Ponyo",
    quote: "“I love Ponyo whether she’s a fish, a human, or something in between.”"
  },
  {
    slug: "whisper-of-the-heart-7",
    movie: "Whisper of the Heart",
    quote: "“I know it’s too soon, but will you marry me?”"
  }
];


var source = document.getElementById("li-template").innerHTML;
var template = Handlebars.compile(source);

var itemsHtml = "";
shuffle(data);
data.forEach((v,k,a) => {
  itemsHtml += template(v);
});

document.querySelector(".slider").innerHTML += itemsHtml;

const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const music = [
  "castle-in-the-sky-the-girl-who-fell-from-the-sky.mp3",
  "howls-moving-castle-merry-go-round-of-life .mp3",
  "my-neighbor-totoro-path-of-the-wind-from.mp3",
  "princess-mononoke -the-Legend-of-ashitaka.mp3",
  "spirited-away-one-summers-day.mp3",
];

const song = music[Math.floor(Math.random() * music.length)];

const player = document.querySelector('#player');
player.src = "music/" + song;

document.querySelector('#toggle-sound').addEventListener("click", () => {
  if (player.muted) {
    player.muted = false;
    document.querySelector("#toggle-sound p").innerHTML = '<i data-feather="volume-2"></i>';
  } else {
    player.muted = true;
    document.querySelector("#toggle-sound p").innerHTML = '<i data-feather="volume-x"></i>';
  }
  feather.replace();
});

document.addEventListener("click", ()=>{
  if (player.paused) {
    player.play();
  }
})

feather.replace()