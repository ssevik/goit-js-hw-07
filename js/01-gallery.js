import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGallery = document.querySelector('.gallery')
const cards = createItem(galleryItems);
  
createGallery.insertAdjacentHTML('beforeend', cards)


  
function createItem(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
       
          <a class="gallery__link" href="${original}">
            <img class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        
      </div>`
  }).join('');
  
};

const onGalleryClick = (evt) => {
  evt.preventDefault();

  if (evt.target.classList.contains("gallery")) return;
  const source = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);
  instance.show();

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        instance.close();
    };
  })
};

createGallery.addEventListener('click', onGalleryClick)
 
// console.log(galleryItems);
