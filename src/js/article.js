const article = require('../_includes/article.hbs');

function renderarticle() {
  const articleContainer = document.querySelector('#article');
  articleContainer.innerHTML = article();
}

renderarticle();