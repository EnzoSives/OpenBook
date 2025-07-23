<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1>Género: <span class="genre-name">{{ formattedGenre }}</span></h1>
      <p>Explorando todos los libros de nuestro catálogo de {{ formattedGenre.toLowerCase() }}.</p>
      <div class="book-grid">
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const genreSlug = computed(() => route.params.slug as string);

// Una propiedad computada para mostrar el nombre del género más bonito (ej. 'ciencia-ficcion' -> 'Ciencia Ficción')
const formattedGenre = computed(() => {
  if (!genreSlug.value) return '';
  return genreSlug.value
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});

useHead({
  title: `Libros de ${formattedGenre.value} - OpenBook`
})
</script>

<style scoped>
.page-container {
  padding: 40px 20px;
}
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
h1, p {
  text-align: center;
  margin-bottom: 20px;
}
h1 {
  font-family: 'Playfair Display', serif;
}
.genre-name {
  color: #4CAF50;
}
.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
</style>