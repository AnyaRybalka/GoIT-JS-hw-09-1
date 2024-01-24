import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);

//create items of img
function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      </li>`;
    })
    .join("");
}

//add items of img to HTML
const gallery = document.querySelector(".gallery");
const items = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", items);

const lightbox = new SimpleLightbox(".gallery a", {
  // captions: true,
  captionsData: "alt",
  captionDelay: 250,
});


