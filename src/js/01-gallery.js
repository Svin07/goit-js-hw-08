// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";


import 'simplelightbox/dist/simple-lightbox.min.css';


const elementsList = document.querySelector(".gallery");



const addImages = galleryItems.map(item => 

`<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`

).join("");



elementsList.insertAdjacentHTML('beforeend', addImages);





  const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

 
