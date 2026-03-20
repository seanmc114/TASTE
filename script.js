const recipes = [
  // (UNCHANGED — your recipes stay exactly as they are)
  // KEEP ALL YOUR EXISTING DATA HERE — DO NOT EDIT
];

// ---------- RENDER ----------
const recipesSection = document.getElementById("recipes");

recipesSection.innerHTML = recipes.map((recipe, index) => `
  <article class="recipe-layout" id="${recipe.id}" style="--accent:${recipe.accent}">
    
    <div class="recipe-media">
      <img src="${recipe.image}" alt="${recipe.title}" />
    </div>

    <div class="recipe-body">
      <div class="kicker">Recipe ${String(index + 1).padStart(2, '0')}</div>
      <h2>${recipe.title}</h2>

      <div class="recipe-topline">
        
        <!-- 🔵 FLAG (BIGGER + CLICKABLE) -->
        <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(recipe.country)}" target="_blank" class="badge" style="text-decoration:none;">
          <img src="assets/flags/${recipe.code}.svg" alt="" style="width:32px;height:32px;">
          <span>${recipe.country}</span>
        </a>

        <span class="badge">Cook: ${recipe.cook}</span>
      </div>

      <!-- ❌ REMOVED MAP TILE COMPLETELY -->

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

// ---------- OPEN BOOK ----------
const openBook = document.getElementById("openBook");
const bookStage = document.getElementById("bookStage");

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
