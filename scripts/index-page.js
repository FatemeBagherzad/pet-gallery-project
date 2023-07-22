// const images = [
//   {
//     url: './assets/images/Photo-gallery-1.jpg',
//   },
//   {
//     url: './assets/images/Photo-gallery-2.jpg',
//   },
//   {
//     url: './assets/images/Photo-gallery-3.jpg',
//   },
//   {
//     url: './assets/images/Photo-gallery-4.jpg',
//   },
//   {
//     url: './assets/images/Photo-gallery-5.jpg',
//   },
//   {
//     url: './assets/images/Photo-gallery-6.jpg',
//   },
//   {
//     url: './assets/images/Photo-gallery-6.jpg',
//   },
//   {
//     url: './assets/images/Photo-gallery-6.jpg',
//   },
//   {
//     url: './assets/images/Photo-gallery-6.jpg',
//   },

//   {
//     url: './assets/images/Photo-gallery-6.jpg',
//   },
//   {
//     url: './assets/images/Photo-gallery-6.jpg',
//   },
// ];

let images = [];
const apiKey =
  'live_kT9IUM097S8mkNWl8OxZ4onGT2LTWhVh78WXjCTZE5mRBR5Fu1LCjw9i1zDlDThR';

const getPetImgs = () => {
  axios
    .get('https://api.thedogapi.com/v1/images/search?limit=10')
    .then((response) => {
      console.log(response.data);
      images = response.data;
      showGallery();
    })
    .catch((err) => {
      console.log('Error happened during fetching!', err);
    });
};
getPetImgs();

//----------------------------
const showGallery = () => {
  images.forEach((image) => {
    // create
    createImageContainer(image.url);
  });
};

const createImageContainer = (imgUrl) => {
  /**
	 * 
	 * <div class="photo-gallery__item">
						<img
							src="./assets/images/Photo-gallery-1.jpg"
							alt="concert goers with smoke and lasers"
							class="photo-gallery__image"
						/>
					</div>
	 * 
	 */
  let parentEl = document.querySelector('.photo-gallery');

  let photoGalleryItem = document.createElement('div');
  photoGalleryItem.classList.add('photo-gallery__item');

  let img = document.createElement('img');
  img.classList.add('photo-gallery__image');
  img.src = imgUrl;
  photoGalleryItem.appendChild(img);
  parentEl.appendChild(photoGalleryItem);
};

// Onload show gallery
showGallery();
