import axios from 'axios';

export async function fetchImages(search, page, perPage) {
  const baseUrl = 'https://pixabay.com/api/';
  const KEY = '32913674-39cccb901e0de5e7baddaeb0d';
  const filter = `?key=${KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  const response = await axios.get(`${baseUrl}${filter}`);
  return response;
}
