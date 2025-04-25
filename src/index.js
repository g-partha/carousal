import "./style.css";
import breadImage from "./resources/bread.jpg";
import noodlesImage from "./resources/noodles.jpg";
import tandooriChickenImage from "./resources/tandoori-chicken.jpg";

class ImageCarousal {
  constructor() {
    this.carousalContainer = document.createElement("div");
    this.carousalFrame = document.createElement("div");
    this.carousalGrid = document.createElement("div");
    this.carousalItems = [];
  }
  appendCarousal(parentNode, id = "") {
    this.carousalContainer.classList.add("carousal-container");
    parentNode.appendChild(this.carousalContainer);
    this.carousalFrame.classList.add("carousal-frame");
    this.carousalFrame.setAttribute("id", id);
    this.carousalContainer.appendChild(this.carousalFrame);
    this.carousalGrid.classList.add("carousal-grid");
    this.carousalFrame.appendChild(this.carousalGrid);
  }
  addItem(imageSrc) {
    const carousalItem = document.createElement("div");
    carousalItem.classList.add("carousal-items");
    const image = document.createElement("img");
    image.src = imageSrc;
    image.classList.add("carousal-image");
    carousalItem.appendChild(image);
    this.carousalItems.push(carousalItem);
    this.updateCarousal();
  }
  updateCarousal() {
    this.carousalGrid.textContent = "";
    for (let i = 0; i < this.carousalItems.length; i++) {
      this.carousalGrid.appendChild(this.carousalItems[i]);
    }
  }
}

const container = document.querySelector("div#container");
const foodCarousal = new ImageCarousal();
foodCarousal.appendCarousal(container, "food-carousal");
foodCarousal.addItem(tandooriChickenImage);
foodCarousal.addItem(noodlesImage);
foodCarousal.addItem(breadImage);
