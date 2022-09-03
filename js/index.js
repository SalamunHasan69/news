const loadNews = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data.news_category;
};
const setMenu = async () => {
  const data = await loadNews();
  const menu = document.getElementById('menu');
  for (const news of data) {
    // console.log(news.category_name);
    const li = document.createElement('li');
    li.innerHTML = `
    <a>${news.category_name}</a>
    `;
    menu.appendChild(li);
  }
};
const loadAllNews = (category_id) => {
  fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    .then(res => res.json())
    .then(data => displayNews(data.data));
}
const displayNews = data => {
  const newsCards = document.getElementById('news-cards');
  data.forEach(news => {
    console.log(news)
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('card');
    newsDiv.innerHTML = `
    <div class="card card-side bg-base-100 shadow-xl bg-white mb-4">
        <div class="w-2/5">
          <figure><img src="${news.image_url}" class="rounded-2xl p-3" alt="Movie"></figure>
        </div>
        <div class="card-body">
          <h1 class="card-title text-black font-bold text-3xl">${news.title}</h1>
          <p id="ellipsis">${news.details.slice(0, 143)}</p>
          <div class="grid gap-4 grid-cols-3 items-center">
            <div>
              <label tabindex="0" class="avatar">
                <div class="w-10 rounded-full mr-2">
                  <img src="${news.author.img}" />
                </div>
                <h3 class="card-title text-black font-medium text-xl">${news.author.name}</h3>
              </label>
            </div>
            <div>
              <p class="text-black font-medium">${news.total_view}</p>
            </div>
            <div class="card-actions justify-end">
              <label for="my-modal-3" class="btn btn-primary modal-button">Details</label>
            </div>
          </div>
        </div>
      </div>
    `;
    newsCards.appendChild(newsDiv);
  });
  const displayModal = data => {
    const displayNewsDetails = document.getElementById('news-details');
    data.forEach(news => {
      console.log(news)
      const modalDiv = document.createElement('div');
      modalDiv.innerHTML = `
    <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <img src="${news.image_url}" class="rounded-2xl p-3" alt="Movie">
    <h1 class="card-title text-black font-bold text-3xl">${news.title}</h1>
    <p id="ellipsis">${news.details}</p>
  </div>
    `
    })
  }
  displayModal();
};


loadAllNews('01');
setMenu();

// loadNews();