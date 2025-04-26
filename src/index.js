import "./style.css";
import breadImage from "./resources/bread.jpg";
import noodlesImage from "./resources/noodles.jpg";
import tandooriChickenImage from "./resources/tandoori-chicken.jpg";

class ImageCarousal {
  currentIndex = 0;
  constructor(parentNode, id, images) {
    this.parentNode = parentNode;
    this.id = id;
    this.images = images;
  }

  init() {
    this.createCarousalStructure();
    this.addNavigationDots();
    this.updateImage();
    this.setImageTimer();
  }

  createCarousalStructure() {
    this.carousalContainer = document.createElement("div");
    this.carousalContainer.classList.add("carousal-container");
    this.carousalContainer.setAttribute("id", this.id);
    this.parentNode.appendChild(this.carousalContainer);
    this.carousalFrame = document.createElement("div");
    this.carousalFrame.classList.add("carousal-frame");
    this.carousalContainer.appendChild(this.carousalFrame);
    this.imageNode = document.createElement("img");
    this.imageNode.classList.add("carousal-image");
    this.carousalFrame.appendChild(this.imageNode);
    this.previousButton = document.createElement("button");
    this.carousalContainer.appendChild(this.previousButton);
    this.previousButton.classList.add("previous-button");
    this.previousButton.textContent = "<";
    this.previousButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.previousImage();
    });
    this.nextButton = document.createElement("button");
    this.carousalContainer.appendChild(this.nextButton);
    this.nextButton.classList.add("next-button");
    this.nextButton.textContent = ">";
    this.nextButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.nextImage();
    });
  }
  updateImage() {
    this.imageNode.src = this.images[this.currentIndex];
    this.highlightNavigationDots();
  }
  nextImage() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
      this.updateImage();
      return;
    }
    this.currentIndex++;
    this.updateImage();
  }
  previousImage() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
      this.updateImage();
      return;
    }
    this.currentIndex--;
    this.updateImage();
  }
  addNavigationDots() {
    this.navigationDotsContainer = document.createElement("div");
    this.navigationDotsContainer.classList.add("navigation-dots-container");
    this.carousalContainer.appendChild(this.navigationDotsContainer);
    this.navigationDots = [];
    for (let i = 0; i < this.images.length; i++) {
      this.navigationDots[i] = document.createElement("button");
      this.navigationDots[i].classList.add("navigation-dots");
      this.navigationDots[i].textContent = "•";
      this.navigationDots[i].addEventListener("click", (event) => {
        event.preventDefault();
        this.currentIndex = i;
        this.updateImage();
      });
      this.navigationDotsContainer.appendChild(this.navigationDots[i]);
    }
  }
  highlightNavigationDots() {
    this.navigationDots.forEach((item) => {
      if (item.classList.contains("highlighted-dot")) {
        item.classList.remove("highlighted-dot");
      }
    });
    this.navigationDots[this.currentIndex].classList.add("highlighted-dot");
  }
  setImageTimer() {
    setInterval(this.nextImage.bind(this), 5000);
  }
}

const container = document.querySelector("div#container");
const foodImages = [tandooriChickenImage, noodlesImage, breadImage];
const foodImagesCarousal = new ImageCarousal(
  container,
  "food-carousal",
  foodImages,
);
foodImagesCarousal.init();
