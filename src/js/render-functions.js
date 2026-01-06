import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loaderClass = document.querySelector('.loader');
const galleryClass = document.querySelector('.gallery');
const showMoreBtnClass = document.querySelector('.show-more-btn');

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  preloading: false,
});

export function showLoader() {
  loaderClass.classList.remove('hidden');
}

export function removeLoader() {
  loaderClass.classList.add('hidden');
}

export function clearGallery() {
  galleryClass.innerHTML = '';
}

export function createGallery(images) {
  const markup = images
    .map(
      el => `<li class="gallery-item">
      <a class="gallery-link" href="${el.largeImageURL}">
        <img
          class="gallery-image"
          src="${el.webformatURL}"
          alt="${el.tags}"
          width="360"
          height="200"
        />
      </a>
      <div class="card">
        <ul>
          <li>
            <p class="title">Likes</p>
            <p class="subtitle">${el.likes}</p>
          </li>
          <li>
            <p class="title">Views</p>
            <p class="subtitle">${el.views}</p>
          </li>
          <li>
            <p class="title">Comments</p>
            <p class="subtitle">${el.comments}</p>
          </li>
          <li>
            <p class="title">Downloads</p>
            <p class="subtitle">${el.downloads}</p>
          </li>
        </ul>
      </div>
    </li>`
    )
    .join('');
  galleryClass.innerHTML = markup;
  gallery.refresh();
}

export function appendToGallery(images) {
  const markup = images
    .map(
      el => `<li class="gallery-item">
      <a class="gallery-link" href="${el.largeImageURL}">
        <img
          class="gallery-image"
          src="${el.webformatURL}"
          alt="${el.tags}"
          width="360"
          height="200"
        />
      </a>
      <div class="card">
        <ul>
          <li>
            <p class="title">Likes</p>
            <p class="subtitle">${el.likes}</p>
          </li>
          <li>
            <p class="title">Views</p>
            <p class="subtitle">${el.views}</p>
          </li>
          <li>
            <p class="title">Comments</p>
            <p class="subtitle">${el.comments}</p>
          </li>
          <li>
            <p class="title">Downloads</p>
            <p class="subtitle">${el.downloads}</p>
          </li>
        </ul>
      </div>
    </li>`
    )
    .join('');
  galleryClass.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}

export function removeLoadMoreButton() {
  showMoreBtnClass.classList.add('hidden');
}

export function showLoadMoreButton() {
  showMoreBtnClass.classList.remove('hidden');
}

export function getImageDimensions() {
  const imageClass = document.querySelector('.gallery-item');
  const gap = 24;
  return imageClass.getBoundingClientRect().height + 2 * gap;
}
