<template>
  <div class="page-container">
    <div class="header-section">
      <h1>Todos Nuestros Libros</h1>
      <p>Explora nuestro catálogo completo. Usa los filtros para encontrar tu próxima lectura.</p>
    </div>

    <div class="navigation-section">
      <button @click="goBack" class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
        Volver
      </button>
    </div>

    <div class="catalog-layout">
      <aside class="filters-panel">
        <h3>Filtrar y Ordenar</h3>

        <div class="filter-group">
          <label for="search">Buscar por Título o Autor</label>
          <input id="search" type="text" v-model="searchTerm" placeholder="Ej: 'El Viaje del Sol'..." />
        </div>

        <div class="filter-group">
          <label for="genre">Género</label>
          <select id="genre" v-model="selectedGenre">
            <option value="todos">Todos los géneros</option>
            <option value="Ficción">Ficción</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Misterio">Misterio</option>
            <option value="Ciencia Ficción">Ciencia Ficción</option>
            <option value="No Ficción">No Ficción</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Condición</label>
          <div class="radio-group">
            <label><input type="radio" value="todos" v-model="selectedCondition" /> Todos</label>
            <label><input type="radio" value="nuevo" v-model="selectedCondition" /> Nuevos</label>
            <label><input type="radio" value="usado" v-model="selectedCondition" /> Usados</label>
          </div>
        </div>

        <div class="filter-group">
          <label for="sort">Ordenar por</label>
          <select id="sort" v-model="selectedSort">
            <option value="relevancia">Relevancia</option>
            <option value="precio-asc">Precio: Menor a Mayor</option>
            <option value="precio-desc">Precio: Mayor a Menor</option>
            <option value="titulo-asc">Título: A-Z</option>
            <option value="titulo-desc">Título: Z-A</option>
          </select>
        </div>
      </aside>

      <main class="results-panel">
        <div class="results-header">
          <p>Mostrando <b>{{ filteredBooks.length }}</b> de <b>{{ allBooks.length }}</b> libros.</p>
        </div>

        <div v-if="filteredBooks.length > 0" class="book-grid">
          <BookCard v-for="book in filteredBooks" :key="book.id" :book="book" :isUsed="!book.isNew" />
        </div>
        <div v-else class="no-results">
          <p>😔 No se encontraron libros que coincidan con tu búsqueda.</p>
          <span>Intenta ajustar los filtros para encontrar tu libro ideal.</span>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
// --- CAMBIO SUGERIDO ---
// En proyectos modernos con Nuxt 3, la siguiente línea no es necesaria
// porque 'useRouter' se importa automáticamente.
// Si no usas Nuxt, déjala como 'vue-router' o la ruta que corresponda en tu proyecto.
import { useRouter } from 'vue-router';
import BookCard from '~/components/BookCard.vue';

// Si usas Nuxt, puedes borrar el 'import' de arriba y esto funcionará igual.
const router = useRouter();

useHead({
  title: 'Catálogo de Libros - OpenBook'
});

const goBack = () => {
  router.back();
};

const allBooks = ref([
  { id: 1, title: 'El Viaje del Sol', author: 'Ana López', price: 25.99, imageUrl: '/images/book1.jpg', genre: 'Fantasía', isNew: true },
  { id: 2, title: 'Sombras Antiguas', author: 'Carlos Ruiz', price: 22.50, imageUrl: '/images/book2.jpg', genre: 'Misterio', isNew: true },
  { id: 3, title: 'El Jardín Secreto', author: 'Federico Gómez', price: 18.00, imageUrl: '/images/book3.jpg', genre: 'Ficción', isNew: true },
  { id: 4, title: 'Más Allá del Horizonte', author: 'Laura Pérez', price: 29.99, imageUrl: '/images/book4.jpg', genre: 'Ciencia Ficción', isNew: true },
  { id: 5, title: 'Crónicas de Narnia', author: 'C.S. Lewis', price: 15.00, imageUrl: '/images/book5.jpg', genre: 'Fantasía', isNew: false },
  { id: 6, title: '1984', author: 'George Orwell', price: 12.00, imageUrl: '/images/book6.jpg', genre: 'Ciencia Ficción', isNew: false },
  { id: 7, title: 'El Código Da Vinci', author: 'Dan Brown', price: 19.99, imageUrl: '/images/book7.jpg', genre: 'Misterio', isNew: false },
  { id: 8, title: 'Sapiens: De animales a dioses', author: 'Yuval Noah Harari', price: 28.50, imageUrl: '/images/book8.jpg', genre: 'No Ficción', isNew: true },
]);

const searchTerm = ref('');
const selectedGenre = ref('todos');
const selectedCondition = ref('todos');
const selectedSort = ref('relevancia');

const filteredBooks = computed(() => {
  let books = [...allBooks.value];

  if (searchTerm.value.trim() !== '') {
    const lowerCaseSearch = searchTerm.value.toLowerCase();
    books = books.filter(book =>
      book.title.toLowerCase().includes(lowerCaseSearch) ||
      book.author.toLowerCase().includes(lowerCaseSearch)
    );
  }

  if (selectedGenre.value !== 'todos') {
    books = books.filter(book => book.genre === selectedGenre.value);
  }

  if (selectedCondition.value !== 'todos') {
    const isNew = selectedCondition.value === 'nuevo';
    books = books.filter(book => book.isNew === isNew);
  }

  switch (selectedSort.value) {
    case 'precio-asc':
      books.sort((a, b) => a.price - b.price);
      break;
    case 'precio-desc':
      books.sort((a, b) => b.price - a.price);
      break;
    case 'titulo-asc':
      books.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'titulo-desc':
      books.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }

  return books;
});
</script>

<style scoped>
/* --- PUNTO CLAVE DE LA CORRECCIÓN --- */
/* Las variables se mueven de ':root' a la clase principal del componente. */
/* Esto asegura que se apliquen correctamente dentro del 'scope' de Vue. */
.page-container {
  --primary-color: #38A169;
  --primary-color-hover: #2F855A;
  --light-gray: #f7fafc;
  --border-color: #e2e8f0;
  --text-dark: #2d3748;
  --text-light: #718096;
  --panel-bg: #ffffff;

  padding: 40px 20px;
  background-color: var(--light-gray);
  color: var(--text-dark);
}

.header-section {
  max-width: 1200px;
  margin: 0 auto 20px auto;
  text-align: center;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.8em;
  color: var(--text-dark);
}

.header-section p {
  font-size: 1.1em;
  color: var(--text-light);
}

.navigation-section {
  max-width: 1400px;
  margin: 0 auto 30px auto;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.back-button:hover {
  background-color: var(--primary-color-hover);
  transform: translateY(-2px);
}

.back-button svg {
  transition: transform 0.2s ease;
}

.back-button:hover svg {
  transform: translateX(-3px);
}

.catalog-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.filters-panel {
  background-color: var(--panel-bg);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  height: fit-content;
  border: 1px solid var(--border-color);
}

.filters-panel h3 {
  font-family: 'Playfair Display', serif;
  margin-top: 0;
  margin-bottom: 25px;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 15px;
  color: var(--text-dark);
}

.filter-group {
  margin-bottom: 25px;
}

.filter-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 0.9em;
  color: var(--text-dark);
}

.filter-group input[type="text"],
.filter-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1em;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.filter-group input[type="text"]:focus,
.filter-group select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.3);
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-group label {
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid var(--border-color);
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  transition: border-color 0.2s ease;
}
input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--primary-color);
}
input[type="radio"]:checked::before {
  transform: scale(1);
}
input[type="radio"]:checked {
  border-color: var(--primary-color);
}

.results-panel {
  min-width: 0;
}
.results-header {
  margin-bottom: 20px;
  color: var(--text-light);
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
}

.no-results {
  background-color: #e2f2e9;
  border: 1px dashed var(--primary-color);
  padding: 50px;
  text-align: center;
  border-radius: 12px;
  color: var(--primary-color-hover);
}
.no-results p {
  font-size: 1.2em;
  font-weight: 600;
  margin: 0 0 10px 0;
}
.no-results span {
  font-size: 1em;
}

@media (max-width: 992px) {
  .catalog-layout {
    grid-template-columns: 220px 1fr;
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .catalog-layout {
    grid-template-columns: 1fr;
  }
  .filters-panel {
    margin-bottom: 30px;
  }
  h1 {
    font-size: 2.2em;
  }
}
</style>