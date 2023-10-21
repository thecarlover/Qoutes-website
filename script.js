let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";
let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
        changeBackgroundColor();
    });
};
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);

// Get references to the audio element and the button
const audio = document.getElementById("background-audio");
const playButton = document.getElementById("btn");

// Add a click event listener to the button
playButton.addEventListener("click", function() {
  // Check if the audio is already playing, and pause it if it is
  if (audio.paused) {
    audio.play(); // Play the audio
    playButton.textContent = "Get Qoute"; // Update button text
  } 
});

// Function to change background color
function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  window.addEventListener("load", getQuote);
  btn.addEventListener("click", getQuote);


