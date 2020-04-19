// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
function cards() {
  //variable declaration
  const card = document.createElement("div"); //returh card
  const headline = document.createElement("div"); //append to card
  const author = document.createElement("div"); //append to card
  const imgContain = document.createElement("div"); //append to author
  const authImg = document.createElement("img"); //append to author
  const authorName = document.createElement("span"); //append to author
  //defining class
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("auther");
  imgContain.classList.add("img-container");

  //adding default value in text content
  headline.textContent = "{Headline of article}";
  authImg.src = " {url of authors image}";
  authorName.textContent = "By {author's name}";

  //appening and returning

  author.appendChild(imgContain);
  author.appendChild(imgContain);
  author.appendChild(authImg);
  author.appendChild(authorName);
  card.appendChild(headline);
  card.appendChild(author);

  return card;
}
