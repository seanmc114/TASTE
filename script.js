const recipes = [
  {
    id: 'lasagne',
    title: 'Mrs Doyle’s Lasagne',
    cook: 'Mrs Doyle',
    country: 'Italy',
    flag: 'assets/flags/italy.svg',
    map: 'assets/maps/italy.svg',
    why: 'A cosy family favourite, perfect for gathering around the table.',
    tip: 'Let it rest before cutting so the layers hold nicely.',
    ingredients: ['minced beef', 'lasagne sheets', 'tomato sauce', 'white sauce', 'onion', 'garlic', 'cheese'],
    method: ['Cook the beef with onion, garlic, and tomato sauce.', 'Prepare the white sauce.', 'Layer sauce, pasta sheets, and cheese in an oven dish.', 'Repeat the layers until the dish is full.', 'Bake until bubbling and golden on top.'],
    image: 'assets/photos/recipe01.png',
    accent: '#b94c47'
  },
  {
    id: 'fried-rice',
    title: 'Mrs Mali’s Fried Rice',
    cook: 'Mrs Mali',
    country: 'Germany',
    flag: 'assets/flags/germany.svg',
    map: 'assets/maps/germany.svg',
    why: 'Quick, colourful, and easy to customise with whatever vegetables you have.',
    tip: 'Use cooled rice so the grains stay separate while frying.',
    ingredients: ['cooked rice', 'mixed vegetables', 'eggs', 'soy sauce', 'spring onion', 'oil'],
    method: ['Heat the oil in a pan.', 'Cook the vegetables until just soft.', 'Add the rice and stir-fry well.', 'Push everything aside and scramble the eggs.', 'Mix together and season with soy sauce.'],
    image: 'assets/photos/recipe02.png',
    accent: '#c78632'
  },
  {
    id: 'sarmale',
    title: 'Mrs Dima’s Sarmale',
    cook: 'Mrs Dima',
    country: 'Romania',
    flag: 'assets/flags/romania.svg',
    map: 'assets/maps/romania.svg',
    why: 'A treasured dish often made for family occasions and shared meals.',
    tip: 'Roll tightly and cook gently for the best texture.',
    ingredients: ['cabbage leaves', 'minced meat', 'rice', 'onion', 'tomato sauce', 'herbs'],
    method: ['Prepare the filling with meat, rice, onion, and herbs.', 'Soften the cabbage leaves if needed.', 'Wrap spoonfuls of filling inside the leaves.', 'Arrange in a pot with sauce.', 'Cook slowly until tender and full of flavour.'],
    image: 'assets/photos/recipe03.png',
    accent: '#3f72bf'
  },
  {
    id: 'rice-stuffed-vine-leaves',
    title: 'Mrs Doroftei’s Rice Stuffed Vine Leaves',
    cook: 'Mrs Doroftei',
    country: 'Moldova',
    flag: 'assets/flags/moldova.svg',
    map: 'assets/maps/moldova.svg',
    why: 'A beautifully traditional dish with a homemade feel.',
    tip: 'Line the pot with extra leaves to protect the rolls as they cook.',
    ingredients: ['vine leaves', 'rice', 'onion', 'carrot', 'tomato', 'oil', 'herbs'],
    method: ['Cook the rice mixture with vegetables and seasoning.', 'Place filling into each vine leaf.', 'Roll neatly and arrange in a pot.', 'Add a little liquid and cook gently.', 'Serve warm when tender.'],
    image: 'assets/photos/recipe04.png',
    accent: '#9c503d'
  },
  {
    id: 'banana-waffles',
    title: 'Mrs Sonina’s Banana Waffles',
    cook: 'Mrs Sonina',
    country: 'Thailand',
    flag: 'assets/flags/thailand.svg',
    map: 'assets/maps/thailand.svg',
    why: 'A cheerful breakfast dish with lots of topping options.',
    tip: 'A little wholewheat flour adds extra texture and fibre.',
    ingredients: ['ripe banana', 'self-raising flour', 'butter', 'cinnamon', 'eggs'],
    method: ['Mash the banana.', 'Mix with the remaining ingredients into a smooth batter.', 'Rest briefly.', 'Cook in a hot waffle iron until golden.', 'Serve with your favourite toppings.'],
    image: 'assets/photos/recipe05.png',
    accent: '#cd5f43'
  },
  {
    id: 'jollof',
    title: 'Mrs Nwogu’s Jollof Rice',
    cook: 'Mrs Nwogu',
    country: 'Nigeria',
    flag: 'assets/flags/nigeria.svg',
    map: 'assets/maps/nigeria.svg',
    why: 'Rich in colour and aroma, and full of home comfort.',
    tip: 'Let the rice rest covered before fluffing it.',
    ingredients: ['tomatoes', 'red pepper', 'habanero', 'garlic', 'ginger', 'olive oil', 'onion', 'tomato paste', 'paprika', 'basmati rice', 'bouillon'],
    method: ['Blend the tomato and pepper mixture.', 'Cook onion, tomato paste, and spices.', 'Stir in the rice.', 'Add the blended sauce and simmer gently.', 'Rest off the heat, then fluff and serve.'],
    image: 'assets/photos/recipe06.png',
    accent: '#55884f'
  },
  {
    id: 'chaghchouka',
    title: 'Mrs Benaceur’s Chaghchouka',
    cook: 'Mrs Benaceur',
    country: 'Algeria',
    flag: 'assets/flags/algeria.svg',
    map: 'assets/maps/algeria.svg',
    why: 'Quick, warm, and full of North African flavour.',
    tip: 'Serve with bread for dipping and sharing.',
    ingredients: ['olive oil', 'onion', 'red and green peppers', 'tomatoes', 'garlic', 'cumin', 'paprika', 'coriander', 'eggs'],
    method: ['Cook the onion and peppers.', 'Add garlic, tomatoes, and spices.', 'Simmer until thick and fragrant.', 'Make small wells and crack in the eggs.', 'Cook until the eggs are just set.'],
    image: 'assets/photos/recipe07.png',
    accent: '#4b8a64'
  },
  {
    id: 'maqroud',
    title: 'Mrs Benaceur’s Maqroud',
    cook: 'Mrs Benaceur',
    country: 'Algeria',
    flag: 'assets/flags/algeria.svg',
    map: 'assets/maps/algeria.svg',
    why: 'A celebration sweet with a lovely balance of crunch, dates, and honey.',
    tip: 'Keep the honey warm so the fried pieces coat well.',
    ingredients: ['semolina', 'flour', 'melted butter', 'orange blossom water', 'date paste', 'cinnamon', 'oil for frying', 'warm honey'],
    method: ['Rub the semolina and flour with butter.', 'Add liquid and let the dough rest.', 'Make a smooth date filling.', 'Wrap the filling inside the dough.', 'Cut into shapes, fry until golden, and dip in warm honey.'],
    image: 'assets/photos/recipe08.png',
    accent: '#b36d36'
  },
  {
    id: 'biryani',
    title: 'Mrs Khan’s Chicken Biryani',
    cook: 'Mrs Khan',
    country: 'Pakistan',
    flag: 'assets/flags/pakistan.svg',
    map: 'assets/maps/pakistan.svg',
    why: 'A layered dish famous for its flavour, colour, and aroma.',
    tip: 'Soak the basmati rice first and avoid overcooking it before layering.',
    ingredients: ['chicken', 'rice', 'onions', 'tomatoes', 'garlic paste', 'ginger paste', 'red chilli powder', 'turmeric', 'biryani masala'],
    method: ['Soak and prepare the rice.', 'Fry onions until golden.', 'Cook the chicken with garlic, ginger, tomato, and spices.', 'Boil the rice until partly cooked.', 'Layer rice and chicken and finish on low heat.'],
    image: 'assets/photos/recipe09.png',
    accent: '#48794d'
  },
  {
    id: 'golden-cookies',
    title: 'Mrs Nilofar’s Golden Cookies',
    cook: 'Mrs Nilofar',
    country: 'Afghanistan',
    flag: 'assets/flags/afghanistan.svg',
    map: 'assets/maps/afghanistan.svg',
    why: 'Simple, homemade, and made from ingredients many families already have.',
    tip: 'Try different nuts on top for variety.',
    ingredients: ['eggs', 'sugar', 'oil', 'flour', 'baking powder', 'cardamom powder', 'egg yolk', 'milk'],
    method: ['Beat eggs, sugar, and oil until creamy.', 'Mix in the dry ingredients.', 'Shape into small balls and flatten slightly.', 'Add topping if desired.', 'Bake until lightly golden.'],
    image: 'assets/photos/recipe10.png',
    accent: '#8f4a35'
  },
  {
    id: 'dumplings',
    title: 'Mrs Li’s Chinese Dumplings with Chilli Oil',
    cook: 'Mrs Xue Li',
    country: 'China',
    flag: 'assets/flags/china.svg',
    map: 'assets/maps/china.svg',
    why: 'A traditional family dish often made together at home.',
    tip: 'Fresh garlic and chilli oil really lift the flavour.',
    ingredients: ['pork mince', 'dumpling wrappers', 'spring onion', 'soy sauce', 'garlic', 'chilli oil'],
    method: ['Mix the filling ingredients.', 'Wrap small spoonfuls in dumpling wrappers.', 'Boil or steam until cooked through.', 'Serve hot with chilli oil and soy sauce.'],
    image: 'assets/photos/recipe11.png',
    accent: '#bb4337'
  },
  {
    id: 'garlic-potatoes',
    title: 'Mrs Phillips’ Garlic/Cheese Potatoes',
    cook: 'Mrs Phillips',
    country: 'France',
    flag: 'assets/flags/france.svg',
    map: 'assets/maps/france.svg',
    why: 'A tasty and filling oven dish that feels very comforting.',
    tip: 'Keep an eye on the cream as it bakes.',
    ingredients: ['potatoes', 'cheese', 'double cream', 'garlic or garlic purée'],
    method: ['Slice and rinse the potatoes.', 'Layer them in an oven dish.', 'Add cream, garlic, and cheese.', 'Bake until soft and golden.', 'Finish with extra cheese if you like.'],
    image: 'assets/photos/recipe12.png',
    accent: '#5670a5'
  },
  {
    id: 'cumin-potatoes',
    title: 'Mrs Kadariya’s Potatoes with Cumin',
    cook: 'Mrs Kalpana Kadariya',
    country: 'Nepal',
    flag: 'assets/flags/nepal.svg',
    map: 'assets/maps/nepal.svg',
    why: 'Quick, homemade, and easy to serve beside many other dishes.',
    tip: 'Adjust the spice, salt, and turmeric to taste.',
    ingredients: ['potatoes', 'cumin seeds', 'salt', 'turmeric powder', 'coriander'],
    method: ['Boil and peel the potatoes.', 'Cut into cubes.', 'Heat oil and add cumin seeds.', 'Fry the potatoes.', 'Season with salt, turmeric, and cumin.', 'Finish with coriander.'],
    image: 'assets/photos/recipe13.png',
    accent: '#c58b3c'
  },
  {
    id: 'spaghetti',
    title: 'Mrs Doyle’s Spaghetti with Meatballs',
    cook: 'Mrs Doyle',
    country: 'Italy',
    flag: 'assets/flags/italy.svg',
    map: 'assets/maps/italy.svg',
    why: 'Easy to make, cheerful to serve, and always a crowd-pleaser.',
    tip: 'Add any extra seasoning or herbs you enjoy.',
    ingredients: ['spaghetti', 'pasta sauce', 'meatballs', 'salt'],
    method: ['Boil the spaghetti.', 'Brown the meatballs in a pan.', 'Warm the sauce and season it.', 'Combine and serve hot.'],
    image: 'assets/photos/recipe14.png',
    accent: '#b34f47'
  }
];

const contentsGrid = document.getElementById('contentsGrid');
const recipeCardGrid = document.getElementById('recipeCardGrid');
const recipesSection = document.getElementById('recipes');
const openBook = document.getElementById('openBook');
const bookStage = document.getElementById('bookStage');

function makeLink(recipe, index) {
  return `
    <a href="#${recipe.id}">
      <div class="mini">${String(index + 1).padStart(2, '0')} · ${recipe.country}</div>
      <strong>${recipe.title}</strong>
      <div style="margin-top:8px;color:#6f5949;display:flex;align-items:center;gap:8px;">
        <img src="${recipe.flag}" alt="${recipe.country} flag" style="width:22px;height:15px;border-radius:3px;object-fit:cover;" />
        <span>${recipe.cook}</span>
      </div>
    </a>`;
}

contentsGrid.innerHTML = recipes.map(makeLink).join('');
recipeCardGrid.innerHTML = recipes.map((recipe, index) => `
  <a class="recipe-link-card" href="#${recipe.id}">
    <div class="mini">${String(index + 1).padStart(2, '0')}</div>
    <h3 style="margin:.4rem 0 .3rem;font-size:1.15rem;">${recipe.title}</h3>
    <div style="display:flex;align-items:center;gap:8px;">
      <img src="${recipe.flag}" alt="${recipe.country} flag" style="width:22px;height:15px;border-radius:3px;object-fit:cover;" />
      <span>${recipe.country}</span>
    </div>
  </a>`).join('');

recipesSection.innerHTML = recipes.map((recipe, index) => `
  <article class="recipe-layout" id="${recipe.id}" style="--accent:${recipe.accent}">
    <div class="recipe-media-wrap">
      <div class="recipe-media ${recipe.image ? '' : 'placeholder'}" ${recipe.image ? '' : `data-title="${recipe.title}"`}>
        ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.title}" />` : ''}
      </div>
      <div class="recipe-sidebits">
        <div class="flag-card">
          <img src="${recipe.flag}" alt="${recipe.country} flag" />
          <div class="flag-label">Flag</div>
        </div>
        <div class="map-card">
          <img src="${recipe.map}" alt="Map card for ${recipe.country}" />
          <div class="map-label">Map</div>
        </div>
      </div>
    </div>
    <div class="recipe-body">
      <div class="mini">Recipe ${String(index + 1).padStart(2, '0')}</div>
      <h2>${recipe.title}</h2>
      <div class="recipe-topline">
        <span class="badge"><img src="${recipe.flag}" alt="${recipe.country} flag" /> ${recipe.country}</span>
        <span class="badge">Cook: ${recipe.cook}</span>
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

function unlockBook() {
  bookStage.classList.add('open');
  document.body.classList.remove('preopen');
  document.body.classList.add('book-open');
  setTimeout(() => {
    document.getElementById('top').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

openBook.addEventListener('click', unlockBook);

document.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && !document.body.classList.contains('book-open')) {
    event.preventDefault();
    unlockBook();
  }
});
