import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  createGallery,
  removeLoader,
  showLoader,
  showLoadMoreButton,
  removeLoadMoreButton,
  getImageDimensions,
  appendToGallery,
} from './js/render-functions';
import { getImages } from './js/pixabay-api';
const API_KEY = '53125865-ed9f58673896f3ad0b9dfa3df';

const form = document.querySelector('#search-form');
const inputQuery = document.querySelector('.form-input');
const showMoreBtn = document.querySelector('.show-more-btn');

let page = 1;
const limit = 15;
let currentQuery = '';
let totalHits = 0;
let allImages = [];

removeLoader();
removeLoadMoreButton();

form.addEventListener('submit', async evt => {
  evt.preventDefault();
  removeLoadMoreButton();
  const query = inputQuery.value.trim();
  if (!query) {
    clearGallery();
    removeLoadMoreButton();
    iziToast.error({ message: 'Please enter a query', position: 'topRight' });
    return;
  }

  showLoader();

  try {
    currentQuery = query;
    page = 1;
    allImages = [];
    clearGallery();

    const { array: images, totalHits: hits } = await getImages(
      query,
      page,
      limit
    );
    if (images.length === 0) {
      removeLoader();
      removeLoadMoreButton();
      iziToast.error({
        message: 'No images were found. Try another query.',
        position: 'topRight',
      });
      return;
    }

    removeLoader();
    allImages = images;
    renderGallery(allImages, true);
    totalHits = hits;

    if (allImages.length < totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      removeLoadMoreButton();
    }
    page += 1;
  } catch (error) {
    removeLoader();
    console.log(error);
    iziToast.error({
      message: 'Something went wrong. Try again.',
      position: 'topRight',
    });
  }
});

showMoreBtn.addEventListener('click', async evt => {
  evt.preventDefault();
  removeLoadMoreButton();
  showLoader();
  try {
    const { array: newImages } = await getImages(currentQuery, page, limit);
    allImages = allImages.concat(newImages);
    removeLoader();

    renderGallery(newImages, false);

    setTimeout(() => {
      let elemHeight = getImageDimensions();
      window.scrollBy({
        top: elemHeight * 2,
        behavior: 'smooth',
      });
    }, 100);

    if (allImages.length >= totalHits) {
      removeLoadMoreButton();
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
    page += 1;
  } catch (error) {
    console.log(error);
    removeLoader();
    removeLoadMoreButton();
    iziToast.error({
      message: 'Something went wrong. Try again.',
      position: 'topRight',
    });
  }
});

function renderGallery(images, isNewSearch = false) {
  if (isNewSearch) {
    createGallery(images);
  } else {
    appendToGallery(images);
  }
}
