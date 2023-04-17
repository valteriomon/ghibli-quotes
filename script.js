const data = [
  {
    image: "./images/howls-moving-castle-1.jpg",
    movie: "Howl’s Moving Castle",
    quote: "“A heart’s a heavy burden.”"
  },
  {
    image: "./images/spirited-away-2.jpg",
    movie: "Spirited Away",
    quote: "“Once you’ve met someone you never really forget them.”"
  },
  {
    image: "./images/howls-moving-castle-2.jpg",
    movie: "Howl’s Moving Castle",
    quote: "“One thing you can always count on is that hearts change.”"
  },
  {
    image: "./images/the-secret-world-of-arrietty-5.jpg",
    movie: "The Secret World of Arrietty",
    quote: "“Sometimes you have to fight for the things that are worth fighting for.”"
  },
  {
    image: "./images/kikis-delivery-service-2.jpg",
    movie: "Kiki’s Delivery Service",
    quote: "“Just follow your heart, and keep smiling.”"
  },
  {
    image: "./images/princess-monoke-1.jpg",
    movie: "Princess Mononoke",
    quote: "“Well, they say that happy women make a happy village.”"
  },
  {
    image: "./images/castle-in-the-sky-1.jpg",
    movie: "Castle in the Sky",
    quote: "“The world cannot live without love.”"
  },
  {
    image: "./images/whisper-of-the-heart-3.jpg",
    movie: "Whisper of the Heart",
    quote: "“Don’t worry. I’ll wait here till you’re done.”"
  },
  {
    image: "./images/howls-moving-castle-3.jpg",
    movie: "Howl’s Moving Castle",
    quote: "“I don’t care if you’re a monster.”"
  },
  {
    image: "./images/the-wind-rises-1.jpg",
    movie: "The Wind Rises",
    quote: "“I asked the spring to bring you, to me.”"
  },
  {
    image: "./images/the-secret-world-of-arrietty-4.jpg",
    movie: "The Secret World Of Arrietty",
    quote: "“My heart is stronger now that you’re in it.”"
  },
  {
    image: "./images/howls-moving-castle-4.jpg",
    movie: "Howl’s Moving Castle",
    quote: "“Sophie, you are beautiful.”"
  },
  {
    image: "./images/my-neighbor-totoro-1.jpg",
    movie: "My Neighbor Totoro",
    quote: "“Totoro, I beg you, please protect Mei. She'll be lost, and probably scared. Please believe me, I'll be good for the rest of my life if I can just see her again.”"
  },
  {
    image: "./images/the-wind-rises-2.jpg",
    movie: "The Wind Rises",
    quote: "“I’ll keep holding your hand. You should sleep.”"
  },
  {
    image: "./images/howls-moving-castle-5.jpg",
    movie: "Howl’s Moving Castle",
    quote: "“I’ve finally found someone I want to protect. You.”"
  },
  {
    image: "./images/spirited-away-1.jpg",
    movie: "Spirited Away",
    quote: "“Now go and don’t look back.”"
  },
  {
    image: "./images/from-up-on-poppy-hill-5.jpg",
    movie: "From Up On Poppy Hill",
    quote: "“I guess we stop feeling how we feel. We’ll just have to go back to being friends.”"
  },
  {
    image: "./images/the-wind-rises-3.jpg",
    movie: "The Wind Rises",
    quote: "“I will wait for you even if it takes a hundred years.”"
  },
  {
    image: "./images/the-secret-world-of-arrietty-3.jpg",
    movie: "The Secret World Of Arrietty",
    quote: "“When I saw you, I just wanted to find a way to protect you.”"
  },
  {
    image: "./images/whisper-of-the-heart-5.jpg",
    movie: "Whisper of the Heart",
    quote: "“I read all kinds of books so my name would be on the cards before yours.”"
  },
  {
    image: "./images/grave-of-the-fireflies-1.jpg",
    movie: "Grave of the Fireflies",
    quote: "“I don’t need anything. Please stay home with me.”"
  },
  {
    image: "./images/ponyo-1.jpg",
    movie: "Ponyo",
    quote: "“I love Ponyo whether she’s a fish, a human, or something in between.”"
  },
  {
    image: "./images/whisper-of-the-heart-7.jpg",
    movie: "Whisper of the Heart",
    quote: "“I know it’s too soon, but will you marry me?”"
  }
];


var source = document.getElementById("li-template").innerHTML;
var template = Handlebars.compile(source);

var itemsHtml = "";
shuffle(data);

data.push({
  image: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
  movie: "Not The End",
  quote: "This is where your own story begins!"

});

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