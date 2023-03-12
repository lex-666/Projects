(async function () {

  let rate = 1;
  let currencies;
  let videos;
  
  const response = await fetch('api/videos.json');
  videos = await response.json();
  renderVideos(videos);

  // fetch('api/products.json')
  //   .then( response => response.json() )
  //   .then( products => renderProducts(products) );

  // const xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function() {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
  //     products = JSON.parse(xhr.responseText);
  //     renderProducts(products);
  //   }
  // }
  // xhr.open('GET', 'api/products.json');
  // xhr.send();

    function renderVideos(videos) {
        const videosContainer = document.querySelector('.video__block');
        videosContainer.innerHTML = '';
        for (const video of videos) {
            videosContainer.innerHTML += `
            <article class="video-card">
            <h2 class="video__title">${video.name}</h2>
             <p class="video__slogan">${video.description}</p>
            <a href="#"><img src="${video.image}" class = "video__push-button" alt="${video.name}">          
            <div class="product-card__buttons">
              <button class="product-card__buttons-info button button-card">
                Info
              </button>
              <button class="product-card__buttons-buy button button-card">
                Buy - ${(video.price * rate).toFixed(2)}
              </button>
            </div>
            </article>`;
        }
    }

   async function convertCurrency() {
    if (!currencies) {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      currencies = await response.json();
    }
    const convertTo = document.querySelector('.main-products__currency').value;
    rate = currencies.rates[convertTo];
    renderVideos(videos);
  }

  document.querySelector('.main-products__convert').addEventListener('click', convertCurrency);

})();