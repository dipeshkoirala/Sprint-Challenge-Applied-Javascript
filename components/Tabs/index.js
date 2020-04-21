// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
function tab(obj) {
  const tab1 = document.createElement("div");
  tab1.classList.add("tab");
  tab1.textContent = obj.toUpperCase();
  tab1.style.margin = "10px";
  tab1.style.background = "black";
  tab1.style.padding = "7px";
  tab1.style.color = "white";
  return tab1;
}

// const tab1 = document.querySelector(".tabs");
// tab1.appendChild(tab());
const tab2 = document.querySelector(".tabs");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((response) => {
    //console.log(response.data.topics);
    response.data.topics.forEach((obj) => {
      const topi = tab(obj);
      console.log(topi);
      tab2.appendChild(topi);
    });
  })
  .catch((error) => {
    console.log("Data couldn't be returned", error);
  });
