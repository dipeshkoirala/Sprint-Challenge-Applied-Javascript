// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
data = [{ date: "$MARCH 28,2019", temp: "98°" }];

function Header(date, temp) {
  //variable declaration
  const header1 = document.createElement("div");
  const span = document.createElement("span");
  const h_1 = document.createElement("h1");
  const span1 = document.createElement("span");

  //defining class
  header1.classList.add("header");
  span.classList.add("date");
  span1.classList.add("temp");

  //adding default value in text content
  span.textContent = date;
  h_1.textContent = "Lambda Times";
  span1.textContent = temp;
}
