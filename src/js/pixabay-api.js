import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53639618-7ccf198a06ad48a4b9e98f6f9';

export async function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
