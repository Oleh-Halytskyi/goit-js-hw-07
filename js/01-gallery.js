import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', selectImg)
window.addEventListener('keydown', onEscapeClose);

gallery.innerHTML = createGalleryItem(galleryItems);

let modalWindow


function createGalleryItem(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `;
    })
    .join('');
}

function selectImg(event) {
    event.preventDefault()
    if (!event.target.classList.contains('gallery__image')) {
        return
    }
    modalWindow = basicLightbox.create(
        ` <img src="${event.target.dataset.source}"/>`
    )
    modalWindow.show()

}

function onEscapeClose(event) {
   if (event.code === 'Escape') {
       modalWindow.close(); 
    }
  }
