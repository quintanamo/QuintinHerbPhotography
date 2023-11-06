const MODAL = document.getElementById('modal');
const MODAL_IMAGE = document.getElementById('modal-image');
let images = document.getElementsByClassName('gallery__image');

for (let image of images) {
    console.log(image);
    image.addEventListener('click', () => openModal(image.src, image.alt));
}

function openModal(src, alt) {
    MODAL_IMAGE.src = src;
    MODAL_IMAGE.alt = alt;
    MODAL.style.display = 'flex';
}

function closeModal() {
    MODAL.style.display = 'none';
}