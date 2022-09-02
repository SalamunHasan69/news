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
const newsContainer = async () => {
  const newsCard = document.getElementById('news-cards');
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card card-side bg-base-100 shadow-xl bg-white">
        <div>
          <figure class="p-3"><img src="https://placeimg.com/200/280/arch" class="rounded-2xl" alt="Movie"></figure>
        </div>
        <div class="card-body">
          <h2 class="card-title text-black font-bold text-3xl	">The best fashion influencers to follow for sartorial
            inspiration
          </h2>
          <p>From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some
            of the
            best fashion blogs out there, and for even more inspiration, do head to our separate black fashion
            influencer
            roundup.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
  `;
  newsCard.appendChild(div);
}
newsContainer();

setMenu();

// loadNews();