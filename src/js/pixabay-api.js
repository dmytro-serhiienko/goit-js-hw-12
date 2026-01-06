import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53639618-7ccf198a06ad48a4b9e98f6f9';

export async function getImages(query, page = 1, limit = 15) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: limit,
    page: page,
  };

  const response = await axios.get(BASE_URL, { params });
  return { array: response.data.hits, totalHits: response.data.totalHits };
}
