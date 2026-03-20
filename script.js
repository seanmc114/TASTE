
const recipes = [
  {
    id: 'risotto', title: 'Mrs Mariotto’s Risottto', cook: 'Mrs Mariotto', country: 'Italy', flag: '🇮🇹',
    wiki: 'https://en.wikipedia.org/wiki/Italy', map: 'assets/maps/italy.png',
    why: 'A simple, comforting dish that brings people together at the table.',
    tip: 'Stir regularly and add the stock gradually for the creamiest texture.',
    ingredients: ['rice', 'stock', 'butter', 'onion', 'parmesan', 'seasoning'],
    method: ['Cook the onion gently.', 'Add the rice and stir well.', 'Add stock a little at a time.', 'Keep stirring until creamy.', 'Finish with butter and parmesan.'],
    image: 'assets/photos/recipe01.png', accent: '#8c5b43'
  },
  {
    id: 'vanillekipferl', title: 'Mrs Beglan’s Vanillekipferl (Vanilla Crescents)', cook: 'Mrs Beglan', country: 'Germany', flag: '🇩🇪',
    wiki: 'https://en.wikipedia.org/wiki/Germany', map: 'assets/maps/germany.png',
    why: 'A classic family biscuit, especially lovely with tea or coffee.',
    tip: 'Dust with icing sugar while still slightly warm.',
    ingredients: ['flour', 'butter', 'ground almonds', 'sugar', 'vanilla', 'icing sugar'],
    method: ['Make a soft dough.', 'Shape into crescents.', 'Bake until pale golden.', 'Dust generously with icing sugar.'],
    image: 'assets/photos/recipe02.png', accent: '#cda46f'
  },
  {
    id: 'sarmale', title: 'Mrs Lupu’s Sarmale', cook: 'Mrs Lupu', country: 'Romania', flag: '🇷🇴',
    wiki: 'https://en.wikipedia.org/wiki/Romania', map: 'assets/maps/romania.png',
    why: 'A rich, traditional dish often tied to family meals and special occasions.',
    tip: 'Let the rolls cook slowly so the flavour deepens.',
    ingredients: ['cabbage leaves', 'minced meat', 'rice', 'onion', 'tomato', 'seasoning'],
    method: ['Prepare the filling.', 'Roll it into cabbage leaves.', 'Layer in a pot.', 'Cook gently until tender.'],
    image: 'assets/photos/recipe03.png', accent: '#8e6d52'
  },
  {
    id: 'sarmale-vita', title: 'Mrs andreev’s Sarmale in foi de vita', cook: 'Mrs andreev', country: 'Moldova', flag: '🇲🇩',
    wiki: 'https://en.wikipedia.org/wiki/Moldova', map: 'assets/maps/moldova.png',
    why: 'A treasured home recipe with a deep family feel.',
    tip: 'Line the pot well and keep the rolls packed closely together.',
    ingredients: ['vine leaves', 'minced meat', 'rice', 'onion', 'herbs', 'seasoning'],
    method: ['Prepare the filling.', 'Wrap in vine leaves.', 'Arrange in a pot.', 'Cook gently until soft and fragrant.'],
    image: 'assets/photos/recipe04.png', accent: '#9c503d'
  },
  {
    id: 'banana-waffles', title: 'Mrs Sonina’s Banana Waffles', cook: 'Mrs Sonina', country: 'Thailand', flag: '🇹🇭',
    wiki: 'https://en.wikipedia.org/wiki/Thailand', map: 'assets/maps/thailand.png',
    why: 'A bright, easy favourite that works beautifully at breakfast.',
    tip: 'A little cinnamon gives extra warmth.',
    ingredients: ['ripe banana', 'self-raising flour', 'butter', 'cinnamon', '3 eggs'],
    method: ['Combine ingredients.', 'Mix to a smooth batter.', 'Rest briefly.', 'Cook in a hot waffle iron until golden.'],
    image: 'assets/photos/recipe05.png', accent: '#cd5f43'
  },
  {
    id: 'jollof', title: 'Mrs Nwogu’s Jollof Rice', cook: 'Mrs Nwogu', country: 'Nigeria', flag: '🇳🇬',
    wiki: 'https://en.wikipedia.org/wiki/Nigeria', map: 'assets/maps/nigeria.png',
    why: 'A bold, much-loved rice dish full of colour and warmth.',
    tip: 'Let it rest before fluffing for the best texture.',
    ingredients: ['tomatoes', 'red pepper', 'habanero', 'garlic', 'ginger', 'olive oil', 'onion', 'tomato paste', 'paprika', 'basmati rice', 'bouillon'],
    method: ['Blend the sauce.', 'Cook onion, tomato paste, and spices.', 'Coat the rice.', 'Add sauce and simmer.', 'Rest and fluff.'],
    image: 'assets/photos/recipe06.png', accent: '#55884f'
  },
  {
    id: 'chaghchouka', title: 'Mrs Benaceur’s Chaghchouka', cook: 'Mrs Benaceur', country: 'Algeria', flag: '🇩🇿',
    wiki: 'https://en.wikipedia.org/wiki/Algeria', map: 'assets/maps/algeria.png',
    why: 'Quick, flavourful, and ideal for sharing.',
    tip: 'Serve with bread for dipping.',
    ingredients: ['olive oil', 'onion', 'peppers', 'tomatoes', 'garlic', 'cumin', 'paprika', 'coriander', 'eggs'],
    method: ['Cook onion and peppers.', 'Add garlic, tomatoes, and spices.', 'Make wells in the sauce.', 'Crack in the eggs and cook until set.'],
    image: 'assets/photos/recipe07.png', accent: '#4b8a64'
  },
  {
    id: 'maqroud', title: 'Mrs Benaceur’s Maqroud', cook: 'Mrs Benaceur', country: 'Algeria', flag: '🇩🇿',
    wiki: 'https://en.wikipedia.org/wiki/Algeria', map: 'assets/maps/algeria.png',
    why: 'A beloved celebration sweet with a lovely honey finish.',
    tip: 'Keep the honey warm for dipping.',
    ingredients: ['semolina', 'flour', 'melted butter', 'orange blossom water', 'date paste', 'cinnamon', 'oil for frying', 'warm honey'],
    method: ['Make the dough.', 'Prepare the filling.', 'Shape and cut into diamonds.', 'Fry until golden.', 'Dip in warm honey.'],
    image: 'assets/photos/recipe08.png', accent: '#b36d36'
  },
  {
    id: 'biryani', title: 'Mrs Khan’s Chicken Biryani', cook: 'Mrs Khan', country: 'Pakistan', flag: '🇵🇰',
    wiki: 'https://en.wikipedia.org/wiki/Pakistan', map: 'assets/maps/pakistan.png',
    why: 'A hugely popular rice dish, loved for its aroma and layered flavour.',
    tip: 'Use good basmati rice and do not overcook it before layering.',
    ingredients: ['chicken', 'rice', 'onions', 'tomatoes', 'garlic paste', 'ginger paste', 'red chilli powder', 'turmeric', 'biryani masala'],
    method: ['Wash and soak the rice.', 'Fry onions until golden.', 'Cook chicken with spices.', 'Part-cook the rice.', 'Layer and steam gently.'],
    image: 'assets/photos/recipe09.png', accent: '#48794d'
  },
  {
    id: 'golden-cookies', title: 'Mrs Khorrami’s Golden Cookies', cook: 'Mrs Khorrami', country: 'Afghanistan', flag: '🇦🇫',
    wiki: 'https://en.wikipedia.org/wiki/Afghanistan', map: 'assets/maps/afghanistan.png',
    why: 'Simple, easy, and made with ingredients many people already have at home.',
    tip: 'Try pistachios, almonds, or cashews as a topping.',
    ingredients: ['eggs', 'sugar', 'oil', 'flour', 'baking powder', 'cardamom powder', 'egg yolk', 'milk'],
    method: ['Beat eggs, sugar, and oil.', 'Mix in dry ingredients.', 'Shape into small rounds.', 'Brush and bake until lightly golden.'],
    image: 'assets/photos/recipe10.png', accent: '#8f4a35'
  },
  {
    id: 'dumplings', title: 'Mrs Li’s Chinese Dumplings with Chili Oil', cook: 'Mrs Li', country: 'China', flag: '🇨🇳',
    wiki: 'https://en.wikipedia.org/wiki/China', map: 'assets/maps/china.png',
    why: 'A traditional dish often made and shared together.',
    tip: 'Fresh garlic and chili oil lift the flavour beautifully.',
    ingredients: ['pork mince', 'dumpling wrappers', 'spring onion', 'soy sauce', 'garlic', 'chili oil'],
    method: ['Mix the filling.', 'Wrap the dumplings.', 'Boil until cooked.', 'Serve with sauce and chili oil.'],
    image: 'assets/photos/recipe11.png', accent: '#bb4337'
  },
  {
    id: 'garlic-potatoes', title: 'Mrs Phillips’ Garlic Cheese Potatoes', cook: 'Mrs Phillips', country: 'France', flag: '🇫🇷',
    wiki: 'https://en.wikipedia.org/wiki/France', map: 'assets/maps/france.png',
    why: 'Tasty, filling, and deeply comforting.',
    tip: 'Keep an eye on the cream as it bakes.',
    ingredients: ['potato', 'cheese', 'double cream', 'garlic or garlic purée'],
    method: ['Slice the potatoes.', 'Layer them in a dish.', 'Add cream, garlic, and cheese.', 'Bake until golden and tender.'],
    image: 'assets/photos/recipe12.png', accent: '#5670a5'
  },
  {
    id: 'cumin-potatoes', title: 'Mrs Kadariya’s Potatoes with Cumin', cook: 'Mrs Kadariya', country: 'Nepal', flag: '🇳🇵',
    wiki: 'https://en.wikipedia.org/wiki/Nepal', map: 'assets/maps/nepal.png',
    why: 'Homemade, quick, and good with almost anything.',
    tip: 'Adjust the spice, salt, and turmeric to taste.',
    ingredients: ['potatoes', 'cumin seeds', 'salt', 'turmeric powder', 'coriander'],
    method: ['Boil and peel the potatoes.', 'Cut into cubes.', 'Heat oil and add cumin seeds.', 'Fry the potatoes.', 'Season and finish with coriander.'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alu%20Jeera.jpg?width=1200',
    credit: '<a href="https://commons.wikimedia.org/wiki/File:Alu_Jeera.jpg" target="_blank" rel="noreferrer noopener">Photo: Wikimedia Commons</a>',
    accent: '#c58b3c'
  },
  {
    id: 'spaghetti', title: 'Mrs Doyle’s Spaghetti with Meatballs', cook: 'Mrs Doyle', country: 'Italy', flag: '🇮🇹',
    wiki: 'https://en.wikipedia.org/wiki/Italy', map: 'assets/maps/italy.png',
    why: 'Easy to make and always a crowd-pleaser.',
    tip: 'Add extra seasoning if you like a richer sauce.',
    ingredients: ['string spaghetti', 'pasta sauce', 'meatballs', 'salt'],
    method: ['Boil the spaghetti.', 'Cook the meatballs until browned.', 'Warm the sauce.', 'Combine and serve.'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Spaghetti%20and%20meatballs.jpg?width=1200',
    credit: '<a href="https://commons.wikimedia.org/wiki/File:Spaghetti_and_meatballs.jpg" target="_blank" rel="noreferrer noopener">Photo: Wikimedia Commons</a>',
    accent: '#b34f47'
  }
];

const contentsGrid = document.getElementById('contentsGrid');
const recipesSection = document.getElementById('recipes');
const openBook = document.getElementById('openBook');
const bookStage = document.getElementById('bookStage');
const coverCue = document.getElementById('coverCue');

function makeContentsLink(recipe, index) {
  return `
    <a href="#${recipe.id}">
      <div class="recipe-number">${String(index + 1).padStart(2, '0')} · ${recipe.country}</div>
      <strong>${recipe.title}</strong>
      <div style="margin-top:8px;color:#6f5949;">${recipe.cook}</div>
    </a>`;
}

function makeRecipe(recipe, index) {
  return `
  <article class="recipe-layout" id="${recipe.id}" style="--accent:${recipe.accent}">
    <div class="recipe-media">
      <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" />
      ${recipe.credit ? `<div class="photo-credit">${recipe.credit}</div>` : ''}
    </div>
    <div class="recipe-body">
      <div class="recipe-number">Recipe ${String(index + 1).padStart(2, '0')}</div>
      <h2>${recipe.title}</h2>
      <div class="origin-block">
        <a class="flag-link" href="${recipe.wiki}" target="_blank" rel="noreferrer noopener" aria-label="Learn more about ${recipe.country}">${recipe.flag}</a>
        <div>
          <div class="country-map"><img src="${recipe.map}" alt="Outline map of ${recipe.country}" loading="lazy" /></div>
        </div>
      </div>
      <div class="recipe-topline">
        <span class="badge">${recipe.country}</span>
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
  </article>`;
}

contentsGrid.innerHTML = recipes.map(makeContentsLink).join('');
recipesSection.innerHTML = recipes.map(makeRecipe).join('');

openBook.addEventListener('click', () => {
  bookStage.classList.add('open');
  document.body.classList.remove('book-locked');
  if (coverCue) coverCue.style.display = 'none';
  setTimeout(() => {
    document.getElementById('insideBook').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 250);
});
