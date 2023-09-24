var sections = document.getElementsByClassName('image-section');

for (let item of sections) {
    item.addEventListener('wheel', function (e) {
        if (e.deltaY > 0) {
            item.scrollLeft += 100;
        } else {
            item.scrollLeft -= 100;
        }
        if (item.scrollLeft > 0 && item.scrollLeft < item.scrollLeftMax) {
            e.preventDefault();
        }
    });
}

const MODAL = document.getElementById('modal');
const MODAL_IMAGE = document.getElementById('modal-image');
let images = document.getElementsByClassName('image-section__image');

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