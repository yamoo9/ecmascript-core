const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos';

function fetchPhotos(limit = 10, page = 1) {
  return axios.get(`${ENDPOINT}?_page=${page}&_limit=${limit}`);
}

const fetchPhotoButton = document.querySelector('[data-component="FetchPhotoButton"]');
const photoList = document.querySelector('[data-component="PhotoList"]');
const photoCountInput = document.querySelector('[data-component="PhotoCountInput"]');

const handleFetchPhoto = async () => {
  try {
    const response = await fetchPhotos(photoCountInput.value, 1);
    renderPhotoList(response.data);
  } catch (error) {
    alert(error.message);
    // renderPhotoList(error);
  }
}

const renderPhotoList = (photos) => {
  photoList.innerHTML = '';

  photos.forEach(photo => {
    console.log(photo);
    photoList.insertAdjacentHTML('beforeend', /* html */ `
      <li>
        <figure>
          <img src="${photo.thumbnailUrl}" alt="" />
          <figcaption>${photo.title}</figcaption>
        </figure>
      </li>
    `);
  });
}

fetchPhotoButton.addEventListener('click', handleFetchPhoto);