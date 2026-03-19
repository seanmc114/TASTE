const recipes = [
  {
    id: 'risotto', title: 'Mrs Mariotto’s Risotto', cook: 'Mrs Mariotto', country: 'Italy', flag: '🇮🇹',
    why: 'The PDF presents this as a family recipe, with emphasis on saffron, parmesan, and patient stirring throughout. fileciteturn2file0L2-L15',
    tip: 'Type of rice is crucial. Never stop stirring. If you run out of stock, use boiling water. Stock should stay hot. fileciteturn2file0L2-L15',
    ingredients: ['320g risotto rice (Arborio)', 'olive oil', 'shallots', 'half a glass of white wine', 'half a litre of stock', 'butter', 'saffron', 'parmesan', 'salt'],
    method: ['Soften the chopped shallots in olive oil.', 'Stir in the rice and coat the grains.', 'Add wine and simmer briefly.', 'Add hot stock gradually, one ladle at a time, stirring constantly.', 'Add saffron near the end.', 'Season, stir in parmesan, and serve.'],
    image: 'assets/photos/recipe01.png', accent: '#c76c41'
  },
  {
    id: 'vanillekipferl', title: 'Ms Beglan’s Vanillekipferl', cook: 'Mrs Beglan', country: 'Germany', flag: '🇩🇪',
    why: 'The recipe notes that these vanilla crescents are part of German Christmas tradition and are shared when people visit one another during Advent and Christmas. fileciteturn2file0L18-L18',
    tip: 'Chill before baking, and do not overwork the dough. Dust while still hot. fileciteturn2file0L18-L18',
    ingredients: ['250g flour', '180g butter', '100g ground almonds', '90g caster sugar', 'vanilla sugar', 'icing sugar'],
    method: ['Knead ingredients into a dry, flaky dough.', 'Shape into logs and chill well.', 'Cut and shape crescents.', 'Chill again if needed.', 'Bake until only lightly golden.', 'Dust with vanilla and icing sugar while hot.'],
    image: 'assets/photos/recipe02.png', accent: '#7a4b2f'
  },
  {
    id: 'romanian-sarmale', title: 'Mrs Lupu’s Romanian Cabbage Rolls', cook: 'Mrs Lupu', country: 'Romania', flag: '🇷🇴',
    why: 'The book describes sarmale as a true feast for the senses and a classic family dish. fileciteturn2file0L19-L19',
    tip: 'Best served hot with sour cream, chilli peppers, and warm polenta; even tastier the next day. fileciteturn2file0L19-L19',
    ingredients: ['sauerkraut', 'minced pork', 'smoked pork', 'smoked bacon', 'rice', 'onions', 'white wine', 'tomato broth', 'thyme', 'dill'],
    method: ['Prepare and soften cabbage leaves.', 'Cook onion and rice, then mix with meats and herbs.', 'Roll filling into cabbage leaves.', 'Layer with chopped cabbage and smoked meat in a pot.', 'Pour over warm wine and tomato broth.', 'Cook slowly until the cabbage is tender.'],
    image: 'assets/photos/recipe03.png', accent: '#355a95'
  },
  {
    id: 'moldovan-sarmale', title: 'Mrs Andreev’s Sarmale în foi de viță', cook: 'Mrs Andreev', country: 'Moldova', flag: '🇲🇩',
    why: 'The recipe is tied to Moldovan vineyards, celebrations, and hospitality, with each roll representing time, care, and family tradition. fileciteturn2file0L20-L20',
    tip: 'Roll them small and tight; in Moldova, smaller rolls show skill. Use plenty of fresh dill. fileciteturn2file0L20-L20',
    ingredients: ['vine leaves', 'minced pork or beef mix', 'rice', 'onion', 'sunflower oil', 'tomato paste', 'salt', 'pepper', 'dill', 'parsley'],
    method: ['Soften or rinse the vine leaves.', 'Mix filling ingredients in a bowl.', 'Place a spoon of filling near the base of each leaf and roll.', 'Line a pot with spare leaves and arrange the rolls.', 'Add bay leaves and water or light sauce.', 'Cook gently until tender and fragrant.'],
    image: 'assets/photos/recipe04.png', accent: '#9c503d'
  },
  {
    id: 'banana-waffles', title: 'Mrs Sonina’s Banana Waffles', cook: 'Mrs Sonina', country: 'Thailand', flag: '🇹🇭',
    why: 'Described as a great breakfast with plenty of topping options. fileciteturn2file0L21-L21',
    tip: 'Try adding some wholewheat flour for extra fibre. fileciteturn2file0L21-L21',
    ingredients: ['ripe banana', 'self-raising flour', 'butter', 'cinnamon', '3 eggs'],
    method: ['Combine ingredients.', 'Mix to a smooth batter and fold in mashed banana.', 'Rest briefly.', 'Cook in a hot waffle iron until golden.'],
    image: 'assets/photos/recipe05.png', accent: '#cd5f43'
  },
  {
    id: 'jollof', title: 'Mrs Nwogu’s Jollof Rice', cook: 'Mrs Nwogu', country: 'Nigeria', flag: '🇳🇬',
    why: 'The recipe is described as favourite food because it brings the cook right back home to Nigeria. fileciteturn2file0L22-L22',
    tip: 'Cover the rice with foil before putting the lid on while it rests. fileciteturn2file0L22-L22',
    ingredients: ['tomatoes', 'red pepper', 'habanero', 'garlic', 'ginger', 'olive oil', 'onion', 'tomato paste', 'paprika', 'basmati rice', 'bouillon'],
    method: ['Blend tomato sauce ingredients until smooth.', 'Cook onion, tomato paste, and spices.', 'Coat the rice in the spiced mixture.', 'Add the blended sauce and simmer without stirring.', 'Rest the rice off the heat.', 'Fluff and garnish before serving.'],
    image: 'assets/photos/recipe06.png', accent: '#55884f'
  },
  {
    id: 'chaghchouka', title: 'Mrs Benaceur’s Chaghchouka', cook: 'Mrs Benaceur', country: 'Algeria', flag: '🇩🇿',
    why: 'The book calls it a popular Algerian and North African dish that is quick, flavourful, and ideal for family meals. fileciteturn2file0L23-L23',
    tip: 'Serve with bread for dipping and sharing. fileciteturn2file0L23-L23',
    ingredients: ['olive oil', 'onion', 'red and green peppers', 'tomatoes', 'garlic', 'cumin', 'paprika', 'coriander', 'eggs'],
    method: ['Cook onion and peppers.', 'Add garlic, tomatoes, and spices and simmer.', 'Make wells in the sauce.', 'Crack in the eggs and cook until set to your liking.', 'Garnish and serve with crusty bread.'],
    image: 'assets/photos/recipe07.png', accent: '#4b8a64'
  },
  {
    id: 'maqroud', title: 'Mrs Benaceur’s Maqroud', cook: 'Mrs Benaceur', country: 'Algeria', flag: '🇩🇿',
    why: 'The recipe describes maqroud as a beloved Algerian celebration sweet with a crunchy semolina crust and fragrant date filling dipped in honey. fileciteturn2file0L24-L24',
    tip: 'Rest the dough, knead lightly, and keep the honey warm. fileciteturn2file0L24-L24',
    ingredients: ['semolina', 'flour', 'melted butter', 'orange blossom water', 'date paste', 'cinnamon', 'oil for frying', 'warm honey'],
    method: ['Rub semolina, flour, salt, and butter together.', 'Add water gradually and rest the dough.', 'Prepare a smooth date filling.', 'Wrap the filling inside the dough log.', 'Cut into diamonds and fry until golden.', 'Dip in warm honey mixed with orange blossom water.'],
    image: 'assets/photos/recipe08.png', accent: '#b36d36'
  },
  {
    id: 'biryani', title: 'Mrs Khan’s Chicken Biryani', cook: 'Mrs Khan', country: 'Pakistan', flag: '🇵🇰',
    why: 'The book describes biryani as one of the most popular and delicious foods, famous for its taste and aroma. fileciteturn2file0L25-L25',
    tip: 'Use good basmati rice, soak it first, and never overcook before layering. fileciteturn2file0L25-L25',
    ingredients: ['chicken', 'rice', 'onions', 'tomatoes', 'garlic paste', 'ginger paste', 'red chilli powder', 'turmeric', 'biryani masala'],
    method: ['Wash and soak the rice.', 'Fry onions until deep golden.', 'Cook chicken with ginger, garlic, tomato, and spices.', 'Boil the rice until about 70% cooked.', 'Layer rice and chicken with herbs and colour.', 'Cook on low heat until finished, then fluff gently.'],
    image: 'assets/photos/recipe09.png', accent: '#48794d'
  },
  {
    id: 'golden-cookies', title: 'Mrs Nilofar’s Golden Cookies', cook: 'Mrs Nilofar', country: 'Afghanistan', flag: '🇦🇫',
    why: 'The book says these cookies are special because they are simple, easy, and made with ingredients people often already have at home. fileciteturn2file0L26-L26',
    tip: 'Try pistachios, almonds, or cashews instead of walnuts. fileciteturn2file0L26-L26',
    ingredients: ['eggs', 'sugar', 'oil', 'flour', 'baking powder', 'cardamom powder', 'egg yolk', 'milk'],
    method: ['Beat eggs, sugar, and oil until creamy.', 'Mix in flour, baking powder, and cardamom.', 'Roll into walnut-sized balls and flatten slightly.', 'Top if desired.', 'Bake until lightly golden.', 'Cool before serving.'],
    image: 'assets/photos/recipe10.png', accent: '#8f4a35'
  },
  {
    id: 'dumplings', title: 'Mrs Li’s Chinese Dumplings with Chilli Oil', cook: 'Mrs Xue Li', country: 'China', flag: '🇨🇳',
    why: 'The recipe notes that dumplings are a traditional family dish often made together at home. fileciteturn2file0L27-L27',
    tip: 'Fresh garlic and chilli oil lift the flavour. fileciteturn2file0L27-L27',
    ingredients: ['pork mince', 'dumpling wrappers', 'spring onion', 'soy sauce', 'garlic', 'chilli oil'],
    method: ['Mix the pork with seasoning and spring onion.', 'Wrap the filling in dumpling wrappers.', 'Boil until cooked.', 'Serve with chilli oil and soy sauce.'],
    image: 'assets/photos/recipe11.png', accent: '#bb4337'
  },
  {
    id: 'garlic-potatoes', title: 'Mrs Phillips’ Garlic/Cheese Potatoes', cook: 'Mrs Phillips', country: 'France', flag: '🇫🇷',
    why: 'Described in the book as tasty and filling. fileciteturn2file0L28-L28',
    tip: 'Watch that the cream does not spill over. fileciteturn2file0L28-L28',
    ingredients: ['potato', 'cheese', 'double cream', 'garlic or garlic purée'],
    method: ['Slice and wash the potatoes.', 'Layer them in an oven dish.', 'Add cream, garlic, and cheese.', 'Bake at 200°C for about 45 minutes.', 'Top with more cheese near the end.'],
    image: 'assets/photos/recipe12.png', accent: '#5670a5'
  },
  {
    id: 'cumin-potatoes', title: 'Mrs Kadariya’s Potatoes with Cumin', cook: 'Mrs Kalpana Kadariya', country: 'Nepal', flag: '🇳🇵',
    why: 'The recipe is presented as homemade, easy, quick, and able to go with almost anything. fileciteturn2file0L29-L29',
    tip: 'Adjust spice, salt, and turmeric to taste. fileciteturn2file0L29-L29',
    ingredients: ['potatoes', 'cumin seeds', 'salt', 'turmeric powder', 'coriander'],
    method: ['Boil and peel the potatoes.', 'Cut into small cubes.', 'Heat oil and add cumin seeds.', 'Fry the potatoes.', 'Add salt, turmeric, and cumin powder.', 'Finish with coriander.'],
    image: '', accent: '#c58b3c'
  },
  {
    id: 'spaghetti', title: 'Mrs Doyle’s Spaghetti with Meatballs', cook: 'Mrs Doyle', country: 'Italy', flag: '🇮🇹',
    why: 'The book describes it simply as easy to make. fileciteturn2file0L30-L30',
    tip: 'Add any extra ingredients or seasoning you like. fileciteturn2file0L30-L30',
    ingredients: ['string spaghetti', 'pasta sauce', 'meatballs', 'salt'],
    method: ['Boil the spaghetti.', 'Fry the meatballs until brown.', 'Cook the sauce with seasoning.', 'Combine everything and serve.'],
    image: '', accent: '#b34f47'
  }
];

const contentsGrid = document.getElementById('contentsGrid');
const recipeCardGrid = document.getElementById('recipeCardGrid');
const recipesSection = document.getElementById('recipes');

function makeLink(recipe, index) {
  return `
    <a href="#${recipe.id}">
      <div class="mini">${String(index + 1).padStart(2, '0')} · ${recipe.country}</div>
      <strong>${recipe.title}</strong>
      <div style="margin-top:8px;color:#6f5949;">${recipe.flag} ${recipe.cook}</div>
    </a>`;
}

contentsGrid.innerHTML = recipes.map(makeLink).join('');
recipeCardGrid.innerHTML = recipes.map((recipe, index) => `
  <a class="recipe-link-card" href="#${recipe.id}">
    <div class="mini">${String(index + 1).padStart(2, '0')}</div>
    <h3 style="margin:.4rem 0 .3rem;font-size:1.15rem;">${recipe.title}</h3>
    <div>${recipe.flag} ${recipe.country}</div>
  </a>`).join('');

recipesSection.innerHTML = recipes.map((recipe, index) => `
  <article class="recipe-layout" id="${recipe.id}" style="--accent:${recipe.accent}">
    <div class="recipe-media ${recipe.image ? '' : 'placeholder'}" ${recipe.image ? '' : `data-title="${recipe.title}"`}>
      ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.title}" />` : ''}
    </div>
    <div class="recipe-body">
      <div class="mini">Recipe ${String(index + 1).padStart(2, '0')}</div>
      <h2>${recipe.title}</h2>
      <div class="recipe-topline">
        <span class="badge">${recipe.flag} ${recipe.country}</span>
        <span class="badge">Cook: ${recipe.cook}</span>
        <span class="badge">Map spotlight: ${recipe.country}</span>
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

document.getElementById('openBook').addEventListener('click', () => {
  document.getElementById('bookStage').classList.add('open');
  setTimeout(() => {
    document.getElementById('contents').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 700);
});
