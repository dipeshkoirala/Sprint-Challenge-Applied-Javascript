/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const images = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg",
]; //Defined array for the images

function carouselC(images) {
  const carousel = document.createElement("div");
  const leftBtn = document.createElement("button");

  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image;

    carousel.appendChild(img);
  });

  const rightBtn = document.createElement("button");

  //classList
  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");

  //textContent
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  leftBtn.addEventListener("click", function () {
    let caro_img = [...document.querySelectorAll(".carousel img")];
    caro_img.forEach((event) => {
      //console.log(caro_img.src);
      event.style.border = "5px solid Red";
      event.style.transform = "scale(.8)";
      event.style.opacity = "0.2";
      event.style.transform = "rotate(180deg)";
      event.style.transition = "transform 1s";
    });
  });

  rightBtn.addEventListener("click", function () {
    let caro_img = [...document.querySelectorAll(".carousel img")];
    caro_img.forEach((event) => {
      //console.log(caro_img.src);
      event.style.border = "2px dotted silver";
      event.style.opacity = "1";
      event.style.transform = "scale(2)";
    });
  });
  carousel.appendChild(leftBtn);
  carousel.appendChild(rightBtn);

  return carousel;
}

const caroCon = document.querySelector(".carousel-container");
caroCon.appendChild(carouselC(images));
