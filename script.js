const recipes = [
  {
    id: 'risotto',
    title: "Mrs Mariotto's Risottto",
    cook: 'Mrs Mariotto',
    country: 'Italy',
    code: 'it',
    why: 'A creamy family favourite that feels both comforting and special.',
    tip: 'Stir gently and keep adding stock a little at a time.',
    ingredients: ['rice', 'leek', 'butter', 'stock cube', 'water'],
    method: ['Melt the butter and cook the leek gently.', 'Add the rice and coat it well.', 'Pour in hot stock a little at a time, stirring often.', 'Cook until creamy and tender.'],
    image: 'assets/photos/recipe01.png',
    accent: '#c86c4b'
  },
  {
    id: 'vanillekipferl',
    title: "Mrs Beglan's Vanillekipferl (Vanilla Crescents)",
    cook: 'Mrs Beglan',
    country: 'Germany',
    code: 'de',
    why: 'A festive biscuit with a soft vanilla sweetness and a beautiful finish.',
    tip: 'Dust generously while still slightly warm.',
    ingredients: ['flour', 'ground almonds', 'butter', 'sugar', 'vanilla sugar'],
    method: ['Mix the dough until soft and smooth.', 'Shape into small crescents.', 'Bake until pale golden.', 'Finish with vanilla sugar.'],
    image: 'assets/photos/recipe02.png',
    accent: '#b07c48'
  },
  {
    id: 'sarmale',
    title: "Mrs Lupu's Sarmale",
    cook: 'Mrs Lupu',
    country: 'Romania',
    code: 'ro',
    why: 'A celebratory dish with deep family roots and great comfort in every bite.',
    tip: 'Let the rolls simmer gently so the filling stays tender.',
    ingredients: ['rice', 'minced meat', 'onion', 'herbs', 'pickled cabbage leaves'],
    method: ['Prepare the filling with rice, meat, and onion.', 'Wrap the filling in cabbage leaves.', 'Layer in a pot and cook slowly until rich and tender.'],
    image: 'assets/photos/recipe03.png',
    accent: '#b54d4e'
  },
  {
    id: 'sarmale-dolma',
    title: "Mrs andreev's Sarmale in foi de vita",
    cook: 'Mrs andreev',
    country: 'Moldova',
    code: 'md',
    why: 'A dish full of home flavour, shared at family tables and special gatherings.',
    tip: 'Line the pot with spare leaves and cook gently.',
    ingredients: ['vine leaves', 'rice', 'meat', 'onion', 'herbs'],
    method: ['Prepare a seasoned rice filling.', 'Wrap the filling in vine leaves.', 'Arrange in a pot and simmer until soft and fragrant.'],
    image: 'assets/photos/recipe04.png',
    accent: '#9c503d'
  },
  {
    id: 'banana-waffles',
    title: "Mrs Sonina's Banana Waffles",
    cook: 'Mrs Sonina',
    country: 'Thailand',
    code: 'th',
    why: 'A cheerful breakfast favourite with lots of room for toppings.',
    tip: 'A little cinnamon lifts the flavour beautifully.',
    ingredients: ['ripe banana', 'self-raising flour', 'butter', 'cinnamon', 'eggs'],
    method: ['Mash the banana and mix the batter.', 'Rest briefly.', 'Cook in a hot waffle iron until golden.'],
    image: 'assets/photos/recipe05.png',
    accent: '#cd5f43'
  },
  {
    id: 'jollof',
    title: "Mrs Nwogu's Jollof Rice",
    cook: 'Mrs Nwogu',
    country: 'Nigeria',
    code: 'ng',
    why: 'A bold, much-loved dish that brings the taste and feeling of home straight to the table.',
    tip: 'Let the rice rest before fluffing it.',
    ingredients: ['tomatoes', 'red pepper', 'garlic', 'ginger', 'onion', 'tomato paste', 'rice', 'bouillon'],
    method: ['Blend the tomato mixture.', 'Cook onions, paste, and spices.', 'Add rice and sauce.', 'Simmer gently until the rice is cooked.', 'Rest and fluff before serving.'],
    image: 'assets/photos/recipe06.png',
    accent: '#55884f'
  },
  {
    id: 'chaghchouka',
    title: "Mrs Benaceur's Chaghchouka",
    cook: 'Mrs Benaceur',
    country: 'Algeria',
    code: 'dz',
    why: 'Quick, flavourful, and perfect for sharing around the table.',
    tip: 'Serve with bread for dipping and sharing.',
    ingredients: ['olive oil', 'onion', 'peppers', 'tomatoes', 'garlic', 'cumin', 'paprika', 'eggs'],
    method: ['Cook onion and peppers.', 'Add tomatoes, garlic, and spices.', 'Make small wells.', 'Crack in the eggs and cook until set.'],
    image: 'assets/photos/recipe07.png',
    accent: '#4b8a64'
  },
  {
    id: 'maqroud',
    title: "Mrs Benaceur's Maqroud",
    cook: 'Mrs Benaceur',
    country: 'Algeria',
    code: 'dz',
    why: 'A celebration sweet with rich date filling and a honeyed finish.',
    tip: 'Keep the honey warm and let the dough rest.',
    ingredients: ['semolina', 'flour', 'butter', 'date paste', 'cinnamon', 'orange blossom water', 'honey'],
    method: ['Make the dough.', 'Prepare the date filling.', 'Shape and cut into diamonds.', 'Fry until golden.', 'Dip in warm honey.'],
    image: 'assets/photos/recipe08.png',
    accent: '#b36d36'
  },
  {
    id: 'biryani',
    title: "Mrs Khan's Chicken Biryani",
    cook: 'Mrs Khan',
    country: 'Pakistan',
    code: 'pk',
    why: 'Famous for its aroma, colour, and the sense of occasion it brings.',
    tip: 'Soak the basmati rice and avoid overcooking it before layering.',
    ingredients: ['chicken', 'basmati rice', 'onions', 'tomatoes', 'garlic', 'ginger', 'biryani masala'],
    method: ['Wash and soak the rice.', 'Cook the chicken with onion, tomato, and spices.', 'Boil the rice until almost done.', 'Layer and steam gently until finished.'],
    image: 'assets/photos/recipe09.png',
    accent: '#48794d'
  },
  {
    id: 'golden-cookies',
    title: "Mrs Khorrami's Golden Cookies",
    cook: 'Mrs Khorrami',
    country: 'Afghanistan',
    code: 'af',
    why: 'Simple, generous, and made from ingredients many families already have at home.',
    tip: 'Try adding pistachios, almonds, or cashews.',
    ingredients: ['eggs', 'sugar', 'oil', 'flour', 'baking powder', 'cardamom powder'],
    method: ['Beat eggs, sugar, and oil.', 'Mix in the dry ingredients.', 'Shape into small rounds.', 'Bake until lightly golden.'],
    image: 'assets/photos/recipe10.png',
    accent: '#8f4a35'
  },
  {
    id: 'dumplings',
    title: "Mrs Li's Chinese Dumplings with Chili Oil",
    cook: 'Mrs Li',
    country: 'China',
    code: 'cn',
    why: 'A traditional family dish that is often made together and shared together.',
    tip: 'Fresh garlic and chilli oil lift the flavour.',
    ingredients: ['pork mince', 'dumpling wrappers', 'spring onion', 'soy sauce', 'garlic', 'chilli oil'],
    method: ['Mix the filling.', 'Wrap the dumplings.', 'Boil until cooked.', 'Serve with chilli oil and soy sauce.'],
    image: 'assets/photos/recipe11.png',
    accent: '#bb4337'
  },
  {
    id: 'garlic-potatoes',
    title: "Mrs Phillips' Garlic Cheese Potatoes",
    cook: 'Mrs Phillips',
    country: 'France',
    code: 'fr',
    why: 'Tasty, filling, and ideal beside a family meal.',
    tip: 'Keep an eye on the cream while it bakes.',
    ingredients: ['potatoes', 'cheese', 'double cream', 'garlic'],
    method: ['Slice the potatoes.', 'Layer in a baking dish.', 'Add cream, garlic, and cheese.', 'Bake until bubbling and golden.'],
    image: 'assets/photos/recipe12.png',
    accent: '#5670a5'
  },
  {
    id: 'cumin-potatoes',
    title: "Mrs Kadariya's Potatoes with Cumin",
    cook: 'Mrs Kadariya',
    country: 'Nepal',
    code: 'np',
    why: 'Homemade, quick, and ready to go with almost anything.',
    tip: 'Adjust the spice, salt, and turmeric to taste.',
    ingredients: ['potatoes', 'cumin seeds', 'salt', 'turmeric powder', 'coriander'],
    method: ['Boil and peel the potatoes.', 'Cut into cubes.', 'Heat oil and add cumin seeds.', 'Fry the potatoes.', 'Add seasoning and finish with coriander.'],
    image: 'assets/photos/recipe13.png',
    accent: '#c58b3c'
  },
  {
    id: 'spaghetti',
    title: "Mrs Doyle's Spaghetti with Meatballs",
    cook: 'Mrs Doyle',
    country: 'Italy',
    code: 'it',
    why: 'A simple, classic dish that always feels welcome on the table.',
    tip: 'Add any extra seasoning you like to make it your own.',
    ingredients: ['spaghetti', 'pasta sauce', 'meatballs', 'salt'],
    method: ['Boil the spaghetti.', 'Cook the meatballs until browned.', 'Warm the sauce.', 'Bring everything together and serve.'],
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
      <div class="kicker">${String(index + 1).padStart(2, '0')} · ${recipe.country}</div>
      <strong>${recipe.title}</strong>
      <div style="margin-top:10px;display:flex;align-items:center;gap:10px;color:#6f5949;">
        <img src="assets/flags/${recipe.code}.svg" alt="" width="22" height="16" style="border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.16)">
        <span>${recipe.cook}</span>
      </div>
    </a>`;
}

contentsGrid.innerHTML = recipes.map(makeLink).join('');

recipeCardGrid.innerHTML = recipes.map((recipe, index) => `
  <a class="recipe-link-card" href="#${recipe.id}">
    <div class="kicker">${String(index + 1).padStart(2, '0')}</div>
    <h3 style="margin:.4rem 0 .3rem;font-size:1.15rem;">${recipe.title}</h3>
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <img src="assets/flags/${recipe.code}.svg" alt="" width="22" height="16" style="border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.16)">
      <span>${recipe.country}</span>
    </div>
  </a>
`).join('');

recipesSection.innerHTML = recipes.map((recipe, index) => `
  <article class="recipe-layout" id="${recipe.id}" style="--accent:${recipe.accent}">
    <div class="recipe-media">
      <img src="${recipe.image}" alt="${recipe.title}" />
    </div>
    <div class="recipe-body">
      <div class="kicker">Recipe ${String(index + 1).padStart(2, '0')}</div>
      <h2>${recipe.title}</h2>
      <div class="recipe-topline">
        <span class="badge">
          <img src="assets/flags/${recipe.code}.svg" alt="">
          <span>${recipe.country}</span>
        </span>
        <span class="badge">Cook: ${recipe.cook}</span>
      </div>
      <div class="country-spot">
        <div class="country-spot-map">
          <img src="assets/maps/${recipe.code}.svg" alt="">
          <span class="country-pin" aria-hidden="true"></span>
        </div>
        <div class="country-spot-text">${recipe.country}</div>
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
  </article>
`).join('');

openBook.addEventListener('click', () => {
  if (bookStage.classList.contains('open')) return;
  document.body.classList.remove('locked');
  document.body.classList.add('unlocked');
  bookStage.classList.add('open');
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const introPage = document.querySelector('.intro-page');
    if (introPage) introPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 1650);
});
