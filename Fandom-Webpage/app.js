const animeButtons = document.querySelectorAll('.anime-button');
const featuredTitle = document.getElementById('featured-title');
const featuredImage = document.getElementById('featured-image');
const featuredDescription = document.getElementById('featured-description');

function updateFeaturedAnime(button) {
  const title = button.dataset.title;
  const image = button.dataset.image;
  const alt = button.dataset.alt;
  const description = button.dataset.description;

  featuredTitle.textContent = title;
  featuredImage.src = image;
  featuredImage.alt = alt;
  featuredDescription.textContent = description;

  animeButtons.forEach((item) => {
    item.classList.remove('active-anime');
    item.setAttribute('aria-pressed', 'false');
  });

  button.classList.add('active-anime');
  button.setAttribute('aria-pressed', 'true');
}

animeButtons.forEach((button, index) => {
  button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');

  button.addEventListener('click', () => {
    updateFeaturedAnime(button);
  });
});

if (animeButtons.length > 0) {
  animeButtons[0].classList.add('active-anime');
}
