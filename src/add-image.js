import porche from "./porche.jpg";
import altText from "./altText.txt";

class AddImage {
  render() {
    const img = document.createElement("img");
    img.alt = altText;
    img.width = 300;
    img.src = porche;

    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export default AddImage;
