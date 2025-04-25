// import "./style.css";
import breadImage from "./resources/bread.jpg";
import noodlesImage from "./resources/noodles.jpg";
import tandooriChickenImage from "./resources/tandoori-chicken.jpg";

class ImageCarousal {
  images = [];
  constructor(parentNode, id) {
    this.parentNode = parentNode;
    this.id = id;
  }
  addImage(imageSrc) {
    this.images.push(imageSrc);
  }
  removeImage(index) {
    this.images.splice(index, 1);
  }
  createImageCarousal() {
    const carousalContainer = document.createElement("div");
    carousalContainer.classList.add("carousal-container");
    carousalContainer.setAttribute("id", this.id);
    this.parentNode.appendChild(carousalContainer);
    const carousalFrame = document.createElement("div");
    carousalFrame.classList.add("carousal-frame");
    carousalContainer.appendChild(carousalFrame);
    const updateImage = (imageIndex) => {
      const image = document.createElement("img");
      image.classList.add("carousal-image");
      image.src = this.images[imageIndex];
      carousalFrame.appendChild(image);
    };
    updateImage(0);
  }
}

const container = document.querySelector("div#container");
const foodImagesCarousal = new ImageCarousal(container, "food-carousal");
foodImagesCarousal.addImage(tandooriChickenImage);
foodImagesCarousal.addImage(noodlesImage);
foodImagesCarousal.addImage(breadImage);
foodImagesCarousal.createImageCarousal();
