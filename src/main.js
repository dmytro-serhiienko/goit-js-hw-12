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

const submitBtnClass = document.querySelector('.submit-btn');
const inputQueryClass = document.querySelector('.form-input');
const showMoreBtnClass = document.querySelector('.show-more-btn');
//Initialize global variables

let page = 1;
let limit = 15;
let currentquery = '';
let totalHits = 0;
let allImages = [];

// Start with the task
removeLoader();
removeLoadMoreButton();

submitBtnClass.addEventListener('click', async evt => {
  evt.preventDefault();
  removeLoadMoreButton();
  const query = inputQueryClass.value.trim();
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
    allImages = [];
    clearGallery();

    const images = await getImages(query, page, limit);
    if (images.array.length === 0) {
      removeLoader();
      removeLoadMoreButton();
      iziToast.error({
        message: 'No images were found. Try another query.',
        position: 'topRight',
      });
      return;
    }

    removeLoader();
    allImages = images.array;
    createGallery(images.array);
    totalHits = images.totalHits;
    page += 1;

    if (page * limit <= totalHits) {
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

showMoreBtnClass.addEventListener('click', async evt => {
  evt.preventDefault();
  removeLoadMoreButton();
  showLoader();
  try {
    const newImages = await getImages(currentquery, page, limit);
    allImages = allImages.concat(newImages.array);
    removeLoader();

    appendToGallery(newImages.array);

    setTimeout(() => {
      let elemHeight = getImageDimensions();
      window.scrollBy({
        top: elemHeight * 2,
        behavior: 'smooth',
      });
    }, 100);

    page += 1;

    if (page * limit > totalHits) {
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
