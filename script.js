const MAP_BASE = 'https://cdn.jsdelivr.net/gh/djaiss/mapsicon@master/all';
const FLAG_BASE = 'https://flagcdn.com';

const recipes = [
  {
    id: 'risotto',
    title: "Mrs Mariotto's Risottto",
    cook: 'Mrs Mariotto',
    country: 'Italy',
    iso: 'it',
    wiki: 'https://en.wikipedia.org/wiki/Italy',
    why: 'A warm, creamy family favourite.',
    tip: 'Keep stirring and add the stock gradually.',
    ingredients: ['olive oil', 'onion', 'rice', 'vegetable stock', 'butter', 'parmesan'],
    method: ['Cook the onion gently.', 'Toast the rice.', 'Add hot stock a little at a time.', 'Stir until creamy.', 'Finish with butter and parmesan.'],
    image: 'assets/photos/recipe01.png', accent: '#9b6448'
  },
  {
    id: 'vanillekipferl',
    title: "Mrs Beglan's Vanillekipferl (Vanilla Crescents)",
    cook: 'Mrs Beglan',
    country: 'Germany',
    iso: 'de',
    wiki: 'https://en.wikipedia.org/wiki/Germany',
    why: 'A classic sweet biscuit for sharing.',
    tip: 'Dust while still slightly warm.',
    ingredients: ['plain flour', 'ground almonds', 'butter', 'sugar', 'vanilla sugar', 'icing sugar'],
    method: ['Make a soft dough.', 'Shape into crescents.', 'Bake until pale golden.', 'Dust generously with vanilla icing sugar.'],
    image: 'assets/photos/recipe02.png', accent: '#c9a36a'
  },
  {
    id: 'sarmale',
    title: "Mrs Lupu's Sarmale",
    cook: 'Mrs Lupu',
    country: 'Romania',
    iso: 'ro',
    wiki: 'https://en.wikipedia.org/wiki/Romania',
    why: 'A much-loved family comfort dish.',
    tip: 'Pack the rolls snugly so they keep their shape.',
    ingredients: ['cabbage leaves', 'minced meat', 'rice', 'onion', 'tomato', 'seasoning'],
    method: ['Prepare the filling.', 'Wrap in cabbage leaves.', 'Layer in a pot.', 'Cook gently until tender.'],
    image: 'assets/photos/recipe03.png', accent: '#b2624d'
  },
  {
    id: 'sarmale-foi',
    title: "Mrs andreev's Sarmale in foi de vita",
    cook: 'Mrs andreev',
    country: 'Moldova',
    iso: 'md',
    wiki: 'https://en.wikipedia.org/wiki/Moldova',
    why: 'A rich, home-style dish often made for family gatherings.',
    tip: 'Cook slowly for the best flavour.',
    ingredients: ['vine leaves', 'minced meat', 'rice', 'onion', 'herbs', 'seasoning'],
    method: ['Prepare the filling.', 'Wrap in vine leaves.', 'Arrange in a pot.', 'Cook gently until soft and fragrant.'],
    image: 'assets/photos/recipe04.png', accent: '#8f5c47'
  },
  {
    id: 'banana-waffles',
    title: "Mrs Sonina's Banana Waffles",
    cook: 'Mrs Sonina',
    country: 'Thailand',
    iso: 'th',
    wiki: 'https://en.wikipedia.org/wiki/Thailand',
    why: 'A cheerful breakfast favourite.',
    tip: 'Very good with fruit and yoghurt on top.',
    ingredients: ['ripe banana', 'self-raising flour', 'butter', 'cinnamon', 'eggs'],
    method: ['Mix the batter.', 'Fold in mashed banana.', 'Rest briefly.', 'Cook in a waffle iron until golden.'],
    image: 'assets/photos/recipe05.png', accent: '#cd5f43'
  },
  {
    id: 'jollof',
    title: "Mrs Nwogu's Jollof Rice",
    cook: 'Mrs Nwogu',
    country: 'Nigeria',
    iso: 'ng',
    wiki: 'https://en.wikipedia.org/wiki/Nigeria',
    why: 'Full of colour, flavour and home memories.',
    tip: 'Let it rest before fluffing.',
    ingredients: ['tomatoes', 'pepper', 'garlic', 'ginger', 'onion', 'rice', 'stock', 'spices'],
    method: ['Blend the sauce ingredients.', 'Cook the base with onion and spices.', 'Add the rice and sauce.', 'Simmer gently until the rice is cooked.'],
    image: 'assets/photos/recipe06.png', accent: '#55884f'
  },
  {
    id: 'chaghchouka',
    title: "Mrs Benaceur's Chaghchouka",
    cook: 'Mrs Benaceur',
    country: 'Algeria',
    iso: 'dz',
    wiki: 'https://en.wikipedia.org/wiki/Algeria',
    why: 'Quick, flavourful and ideal for sharing.',
    tip: 'Serve with bread.',
    ingredients: ['olive oil', 'onion', 'peppers', 'tomatoes', 'garlic', 'cumin', 'paprika', 'eggs'],
    method: ['Cook the vegetables.', 'Add garlic and spices.', 'Simmer the sauce.', 'Cook the eggs in the sauce and serve.'],
    image: 'assets/photos/recipe07.png', accent: '#4b8a64'
  },
  {
    id: 'maqroud',
    title: "Mrs Benaceur's Maqroud",
    cook: 'Mrs Benaceur',
    country: 'Algeria',
    iso: 'dz',
    wiki: 'https://en.wikipedia.org/wiki/Algeria',
    why: 'A celebration sweet with real character.',
    tip: 'Keep the honey warm before dipping.',
    ingredients: ['semolina', 'flour', 'butter', 'orange blossom water', 'date paste', 'cinnamon', 'honey'],
    method: ['Make the dough.', 'Prepare the filling.', 'Shape and cut into diamonds.', 'Fry until golden.', 'Dip in warm honey.'],
    image: 'assets/photos/recipe08.png', accent: '#b36d36'
  },
  {
    id: 'biryani',
    title: "Mrs Khan's Chicken Biryani",
    cook: 'Mrs Khan',
    country: 'Pakistan',
    iso: 'pk',
    wiki: 'https://en.wikipedia.org/wiki/Pakistan',
    why: 'Known for its aroma, colour and flavour.',
    tip: 'Do not overcook the rice before layering.',
    ingredients: ['chicken', 'rice', 'onions', 'tomatoes', 'ginger', 'garlic', 'biryani masala'],
    method: ['Soak the rice.', 'Cook the chicken with spices.', 'Part-cook the rice.', 'Layer and steam gently until finished.'],
    image: 'assets/photos/recipe09.png', accent: '#48794d'
  },
  {
    id: 'golden-cookies',
    title: "Mrs Khorrami's Golden Cookies",
    cook: 'Mrs Khorrami',
    country: 'Afghanistan',
    iso: 'af',
    wiki: 'https://en.wikipedia.org/wiki/Afghanistan',
    why: 'Simple, easy and made from everyday ingredients.',
    tip: 'Cardamom gives them a lovely warmth.',
    ingredients: ['eggs', 'sugar', 'oil', 'flour', 'baking powder', 'cardamom'],
    method: ['Beat the wet ingredients.', 'Mix in the dry ingredients.', 'Shape into rounds.', 'Bake until lightly golden.'],
    image: 'assets/photos/recipe10.png', accent: '#8f4a35'
  },
  {
    id: 'dumplings',
    title: "Mrs Li's Chinese Dumplings with Chili Oil",
    cook: 'Mrs Li',
    country: 'China',
    iso: 'cn',
    wiki: 'https://en.wikipedia.org/wiki/China',
    why: 'A traditional family dish often made together.',
    tip: 'Fresh garlic and chilli oil lift the flavour.',
    ingredients: ['dumpling wrappers', 'pork mince', 'spring onion', 'soy sauce', 'garlic', 'chilli oil'],
    method: ['Mix the filling.', 'Wrap the dumplings.', 'Boil until cooked.', 'Serve with chilli oil.'],
    image: 'assets/photos/recipe11.png', accent: '#bb4337'
  },
  {
    id: 'garlic-potatoes',
    title: "Mrs Phillips' Garlic Cheese Potatoes",
    cook: 'Mrs Phillips',
    country: 'France',
    iso: 'fr',
    wiki: 'https://en.wikipedia.org/wiki/France',
    why: 'Tasty, filling and very hard to resist.',
    tip: 'Watch that the cream does not spill over.',
    ingredients: ['potatoes', 'cheese', 'double cream', 'garlic'],
    method: ['Slice the potatoes.', 'Layer in a dish.', 'Add cream, garlic and cheese.', 'Bake until golden and bubbling.'],
    image: 'assets/photos/recipe12.png', accent: '#5670a5'
  },
  {
    id: 'cumin-potatoes',
    title: "Mrs Kadariya's Potatoes with Cumin",
    cook: 'Mrs Kadariya',
    country: 'Nepal',
    iso: 'np',
    wiki: 'https://en.wikipedia.org/wiki/Nepal',
    why: 'Homemade, quick and easy to serve with almost anything.',
    tip: 'Adjust the spice and seasoning to taste.',
    ingredients: ['potatoes', 'cumin seeds', 'salt', 'turmeric powder', 'coriander'],
    method: ['Boil and peel the potatoes.', 'Cut into cubes.', 'Heat oil and add cumin seeds.', 'Fry the potatoes.', 'Add salt and turmeric.', 'Finish with coriander.'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jeera_aloo.jpg/500px-Jeera_aloo.jpg', accent: '#c58b3c'
  },
  {
    id: 'spaghetti',
    title: "Mrs Doyle's Spaghetti with Meatballs",
    cook: 'Mrs Doyle',
    country: 'Italy',
    iso: 'it',
    wiki: 'https://en.wikipedia.org/wiki/Italy',
    why: 'Easy to make and always welcome.',
    tip: 'Season the sauce well and serve hot.',
    ingredients: ['spaghetti', 'pasta sauce', 'meatballs', 'salt'],
    method: ['Boil the spaghetti.', 'Cook the meatballs until browned.', 'Heat the sauce.', 'Combine and serve.'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Pasta_with_meatballs.jpg/960px-Pasta_with_meatballs.jpg', accent: '#b34f47'
  }
];

const contentsGrid = document.getElementById('contentsGrid');
const recipeCardGrid = document.getElementById('recipeCardGrid');
const recipesSection = document.getElementById('recipes');
const openBookButton = document.getElementById('openBook');
const bookStage = document.getElementById('bookStage');
const welcomeSpread = document.getElementById('welcomeSpread');

function flagUrl(iso) {
  return `${FLAG_BASE}/${iso}.svg`;
}

function mapUrl(iso) {
  return `${MAP_BASE}/${iso}/vector.svg`;
}

function makeIndexLink(recipe, index) {
  return `
    <a href="#${recipe.id}">
      <div class="index-line">
        <img class="index-flag" src="${flagUrl(recipe.iso)}" alt="${recipe.country} flag" loading="lazy" />
        <div>
          <div style="font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#7a6555;">${String(index + 1).padStart(2, '0')} · ${recipe.country}</div>
          <strong>${recipe.title}</strong>
        </div>
      </div>
    </a>`;
}

contentsGrid.innerHTML = recipes.map(makeIndexLink).join('');
recipeCardGrid.innerHTML = recipes.map((recipe, index) => `
  <a class="recipe-link-card" href="#${recipe.id}">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
      <div>
        <div style="font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#7a6555;">${String(index + 1).padStart(2, '0')}</div>
        <h3 style="margin:.45rem 0 .35rem;font-size:1.12rem;">${recipe.title}</h3>
        <div style="color:#6f5949;">${recipe.country}</div>
      </div>
      <img class="index-flag" src="${flagUrl(recipe.iso)}" alt="${recipe.country} flag" loading="lazy" />
    </div>
  </a>`).join('');

recipesSection.innerHTML = recipes.map((recipe, index) => `
  <article class="recipe-layout" id="${recipe.id}" style="--accent:${recipe.accent}">
    <div class="recipe-media">
      <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" />
    </div>
    <div class="recipe-body">
      <div class="recipe-number">Recipe ${String(index + 1).padStart(2, '0')}</div>
      <h2>${recipe.title}</h2>
      <div class="origin-row">
        <span class="country-chip">${recipe.country}</span>
        <div class="map-wrap" aria-label="${recipe.country} map outline">
          <img src="${mapUrl(recipe.iso)}" alt="${recipe.country} map outline" loading="lazy" />
        </div>
        <a class="flag-link" href="${recipe.wiki}" target="_blank" rel="noreferrer" aria-label="Open ${recipe.country} on Wikipedia">
          <img src="${flagUrl(recipe.iso)}" alt="${recipe.country} flag" loading="lazy" />
        </a>
      </div>
      <div class="recipe-grid">
        <div class="panel">
          <h3>Ingredients</h3>
          <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="panel">
          <h3>Method</h3>
          <ol>${recipe.method.map(step => `<li>${step}</li>`).join('')}</ol>
        </div>
        <div class="panel full-span">
          <h3>Why it is special</h3>
          <p>${recipe.why}</p>
        </div>
        <div class="panel full-span">
          <h3>Tip from the cook</h3>
          <p>${recipe.tip}</p>
        </div>
      </div>
    </div>
  </article>`).join('');

openBookButton.addEventListener('click', () => {
  if (bookStage.classList.contains('open')) return;
  bookStage.classList.add('open');
  requestAnimationFrame(() => {
    welcomeSpread.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
