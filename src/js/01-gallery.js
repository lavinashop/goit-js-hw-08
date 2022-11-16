import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createGalleryMarkup() {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href=${original}>
  <img
    class="gallery__image"
    src=${preview}
    alt=${description}
  />
</a>
</li>`
    )
    .join("");
}

galleryEl.insertAdjacentHTML("afterbegin", createGalleryMarkup());
// galleryEl.addEventListener("click", onImageClick);
new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250 })
// function onImageClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
  
//   }