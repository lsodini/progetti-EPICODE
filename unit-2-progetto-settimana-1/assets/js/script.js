window.onscroll = function() {stickyHeader()};

function stickyHeader() {
    var header = document.getElementById("myNav");
    var getS = document.getElementById("pill")

    if (window.pageYOffset > 600) { /* Cambia colore quando si scrolla verso il basso */
        header.style.backgroundColor = "#fff"; // Colore di sfondo bianco
        getS.style.backgroundColor = "#1a8917"
    } else {
        header.style.backgroundColor = "#ffc017"; // sfondo originale
        getS.style.backgroundColor = "#181919"
    }
}
const mElements = document.getElementsByTagName("g");
const mElementsFiltered = Array.from(mElements).filter(
  (element) => element.getAttribute("opacity") === "0"
);
mElementsFiltered.shift();

const mAnimation = setInterval(() => {
  const randomNum = Math.floor(Math.random() * mElementsFiltered.length);
  const currentElement = mElementsFiltered[randomNum];
  const currentOpacity = currentElement.getAttribute("opacity");
  if (currentOpacity === "0") {
    currentElement.setAttribute("opacity", 1);
  } else if (currentOpacity === "1") {
    currentElement.setAttribute("opacity", 0);
  }
}, 10);