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

setMenu();

// loadNews();