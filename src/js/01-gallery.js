import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const galleryUl = document.querySelector('.gallery');
const galleryItem = galleryItems.map( (item) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>`
).join("");
galleryUl.innerHTML = galleryItem;


let lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
  });
