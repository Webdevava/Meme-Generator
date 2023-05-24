let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
// API URL
let url = "https://meme-api.com/gimme";
// Array of Subreddit
let subreddit = ["wholesomememes", "memes", "marvelmemes", "dogmemes"];
// Function to get random meme
let getMeme = () => {
  const randomSubreddit = Math.floor(Math.random() * subreddit.length);
  // console.log(getMeme)
  //   return subreddit[randomSubreddit];
  fetch(url + randomSubreddit)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      let memeImg = new Image();
      memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
      };
      memeImg.src = data.url;
    });
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
