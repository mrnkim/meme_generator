const form = document.querySelector("#form");
const url = document.querySelector("#url");
const stage = document.querySelector("#stage");
const textTop = document.querySelector("#textTop");
const textBottom = document.querySelector("#textBottom");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newImg = document.createElement("img");
  newImg.setAttribute("src", `${url.value}`);

  //Creating memeDiv to contain img, top text, and bottom text
  const memeDiv = document.createElement("div");
  memeDiv.classList.add("memeDiv");
  memeDiv.style.position = "relative";

  newImg.onload = function () {
    memeDiv.style.maxWidth = newImg.width + "px";
    memeDiv.style.maxHeight = newImg.height + "px";
    console.dir(memeDiv);
    fontSize = Math.floor(newImg.width / 10);

    //Creating function to style text for both top and bottom texts
    function styleText(elem) {
      elem.style.position = "absolute";
      elem.style.width = "100%";
      elem.style.textAlign = "center";
      elem.style.fontSize = fontSize + "px";
      elem.style.fontFamily = "impact";
      elem.style.textTransform = "uppercase";
      elem.style.color = "white";
      elem.style.textShadow =
        "5px 5px #000, -5px -5px #000, 5px -5px #000, -5px 5px #000, 0px 5px #000, 5px 0px #000, 0px -5px #000, -5px 0px #000  , 5px 5px 5px #000";
      elem.style.fontWeight = "800";
    }

    //Creating and positioning text top div
    const textTopDiv = document.createElement("div");
    textTopDiv.classList.add("textTopDiv");
    textTopDiv.textContent = `${textTop.value}`;
    textTopDiv.style.top = "3%";
    styleText(textTopDiv);

    //Creating and positioning text bottom div
    const textBottomDiv = document.createElement("div");
    textBottomDiv.classList.add("textBottomDiv");
    textBottomDiv.textContent = `${textBottom.value}`;
    textBottomDiv.style.bottom = "3%";
    styleText(textBottomDiv);

    //Creating and positioning remove button
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.style.fontSize = Math.floor(newImg.width / 1.5) + "px";
    removeBtn.style.display = "none";
    removeBtn.textContent = "X";
    removeBtn.style.color = "rgba(255, 255, 255, 0.2)";
    removeBtn.style.backgroundColor = "rgba(66, 64, 64, 0.1)";
    removeBtn.style.position = "absolute";
    removeBtn.style.bottom = "0%";
    removeBtn.style.top = "0%";
    removeBtn.style.right = "0%";
    removeBtn.style.left = "0%";
    removeBtn.style.border = "none";
    removeBtn.style.minWidth = "100%";
    removeBtn.style.minHeight = "100%";

    memeDiv.addEventListener("mouseover", function () {
      removeBtn.style.display = "initial";
      removeBtn.style.cursor = "pointer";
    });
    memeDiv.addEventListener("mouseout", function () {
      removeBtn.style.display = "none";
    });

    //Appending each div to memeDiv and showing to the page
    memeDiv.append(newImg);
    memeDiv.append(textTopDiv);
    memeDiv.append(textBottomDiv);
    memeDiv.append(removeBtn);
    stage.append(memeDiv);

    // Clear the inputs
    url.value = "";
    textTop.value = "";
    textBottom.value = "";

    //remove memeDiv once remove button is clicked
    removeBtn.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
      }
    });
  };
});
