import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="gallery-info">
          <div class="gallery-info-item">
            <span class="gallery-info-label">Likes</span>
            <span>${likes}</span>
          </div>
          <div class="gallery-info-item">
            <span class="gallery-info-label">Views</span>
            <span>${views}</span>
          </div>
          <div class="gallery-info-item">
            <span class="gallery-info-label">Comments</span>
            <span>${comments}</span>
          </div>
          <div class="gallery-info-item">
            <span class="gallery-info-label">Downloads</span>
            <span>${downloads}</span>
          </div>
        </div>
      </li>
    `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.add('is-visible');
}

export function hideLoader() {
  loaderEl.classList.remove('is-visible');
}
