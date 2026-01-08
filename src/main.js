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
const API_KEY = '53868223-5cc179c49926eee1c1fc25cc4';

const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('.form-input');
const btnShowEl = document.querySelector('.show-more-btn');

let page = 1;
let limit = 15;
let currentquery = '';
let totalHits = 0;
let allImg = [];

removeLoader();
removeLoadMoreButton();

formEl.addEventListener('submit', async event => {
  event.preventDefault();
  removeLoadMoreButton();
  const query = inputEl.value.trim();
  if (!query) {
    clearGallery();
    removeLoadMoreButton();
    iziToast.error({ message: 'Please enter a query', position: 'topRight' });
    return;
  }

  showLoader();

  try {
    currentquery = query;
    page = 1;
    allImg = [];
    clearGallery();

    const img = await getImages(query, page, limit);
    if (img.array.length === 0) {
      removeLoader();
      removeLoadMoreButton();
      iziToast.error({
        message: 'No images were found. Try another query.',
        position: 'topRight',
      });
      return;
    }

    removeLoader();
    allImg = img.array;
    createGallery(img.array);
    totalHits = img.totalHits;

    if (allImg.length < totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      removeLoadMoreButton();
    }
  } catch (error) {
    removeLoader();
    console.log(error);
    iziToast.error({
      message: 'Something went wrong. Try again.',
      position: 'topRight',
    });
  }
});

btnShowEl.addEventListener('click', async event => {
  event.preventDefault();
  removeLoadMoreButton();
  showLoader();
  try {
    page += 1;
    const newImages = await getImages(currentquery, page, limit);
    allImg = allImg.concat(newImages.array);
    removeLoader();

    appendToGallery(newImages.array);

    setTimeout(() => {
      let elHeight = getImageDimensions();
      window.scrollBy({
        top: elHeight * 2,
        behavior: 'smooth',
      });
    }, 100);

    if (allImg.length >= totalHits) {
      removeLoadMoreButton();
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
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
