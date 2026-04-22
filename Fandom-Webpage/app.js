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
const animeButtons = document.querySelectorAll('.anime-button');
const featuredTitle = document.getElementById('featured-title');
const featuredImage = document.getElementById('featured-image');
const featuredDescription = document.getElementById('featured-description');

function updateFeaturedAnime(button) {
  const title = button.dataset.title;
  const image = button.dataset.image;
  const alt = button.dataset.alt;
  const description = button.dataset.description;

  if (!featuredTitle || !featuredImage || !featuredDescription) {
    return;
  }

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

if (animeButtons.length > 0) {
  animeButtons.forEach((button, index) => {
    button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');

    button.addEventListener('click', () => {
      updateFeaturedAnime(button);
    });
  });

  animeButtons[0].classList.add('active-anime');
}

const quizForm = document.getElementById('anime-quiz-form');
const quizResult = document.getElementById('quiz-result');

const animeResults = {
  steinsgate: {
    title: 'Steins;Gate',
    description: 'You like emotional stories with high stakes, smart ideas, and painful choices. You probably enjoy characters who are pushed to their limits and forced to grow.',
    image: 'https://images2.alphacoders.com/224/thumb-350-224760.webp',
    alt: 'Steins;Gate'
  },
  codegeass: {
    title: 'Code Geass',
    description: 'You are drawn to strategy, power, and morally complicated characters. You probably like stories where the main character walks the line between hero and villain.',
    image: 'https://images7.alphacoders.com/846/thumb-350-846114.webp',
    alt: 'Code Geass'
  },
  linkclick: {
    title: 'Link Click',
    description: 'You enjoy mystery, suspense, and emotional twists. You probably like stories that start small and become deeper and more intense over time.',
    image: 'https://4kwallpapers.com/images/walls/thumbs_3t/16206.png',
    alt: 'Link Click'
  },
  sao: {
    title: 'Sword Art Online',
    description: 'You like futuristic concepts, virtual worlds, and stories about technology pushing human limits. You probably enjoy action mixed with bigger philosophical ideas.',
    image: 'https://wallpapers-clan.com/wp-content/uploads/2024/06/sword-art-online-kirito-asuna-sky-desktop-wallpaper-preview-1024x576.jpg',
    alt: 'Sword Art Online'
  },
  tobehx: {
    title: 'To Be Hero X',
    description: 'You like unique worlds, symbolic ideas, and stories about reputation, society, and personal purpose. You probably enjoy something that feels different from standard anime formulas.',
    image: 'https://images.alphacoders.com/139/thumb-350-1395130.webp',
    alt: 'To Be Hero X'
  }
};

function getQuizResult(form) {
  const formData = new FormData(form);

  const scores = {
    steinsgate: 0,
    codegeass: 0,
    linkclick: 0,
    sao: 0,
    tobehx: 0
  };

  for (const answer of formData.values()) {
    scores[answer]++;
  }

  let bestMatch = '';
  let highestScore = -1;

  for (const anime in scores) {
    if (scores[anime] > highestScore) {
      highestScore = scores[anime];
      bestMatch = anime;
    }
  }

  return animeResults[bestMatch];
}

if (quizForm && quizResult) {
  quizForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const result = getQuizResult(quizForm);

    quizResult.innerHTML = `
      <h3>Your best match is: ${result.title}</h3>
      <img src="${result.image}" alt="${result.alt}" width="300">
      <p>${result.description}</p>
    `;
  });
}
