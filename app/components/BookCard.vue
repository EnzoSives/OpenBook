<template>
  <div class="book-card" :class="{ 'used': isUsed }">
    <div class="book-img-wrapper">
      <img :src="book.imageUrl" :alt="book.title" />
    </div>
    <h3>{{ book.title }}</h3>
    <p class="book-author">{{ book.author }}</p>
    <span class="book-price">${{ book.price.toFixed(2) }}</span>
    <button class="add-to-cart-btn">Añadir al carrito</button>
  </div>
</template>

<script setup lang="ts">
// Definimos las propiedades (props) que este componente espera recibir.
// 'book' es requerido y tiene una estructura definida.
// 'isUsed' es opcional y por defecto es falso.
const props = defineProps<{
  book: {
    id: number;
    title: string;
    author: string;
    price: number;
    imageUrl: string;
  };
  isUsed?: boolean; // Prop opcional para indicar si es un libro usado
}>();
</script>

<style scoped>
/* Estilos específicos para BookCard.vue */
.book-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  padding-bottom: 15px; /* Espacio para el botón */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Para que el botón quede abajo */
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.book-img-wrapper {
  width: 100%;
  height: 250px; /* Altura fija para portadas */
  overflow: hidden;
  position: relative; /* Necesario para la etiqueta 'Usado' */
}

.book-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cubre el espacio manteniendo la proporción */
}

.book-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.2em;
  margin: 15px 10px 5px;
  color: #333;
  min-height: 2.4em; /* Asegura espacio para 2 líneas de título */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limita a 2 líneas */
  -webkit-box-orient: vertical;
}

.book-card .book-author {
  font-family: 'Roboto', sans-serif;
  font-size: 0.9em;
  color: #666;
  margin-bottom: 10px;
  min-height: 1.2em; /* Espacio para una línea de autor */
}

.book-card .book-price {
  font-family: 'Roboto', sans-serif;
  font-size: 1.1em;
  font-weight: bold;
  color: #4CAF50; /* Tu color de acento */
  margin-bottom: 15px;
  display: block;
}

.add-to-cart-btn {
  background-color: #4CAF50; /* Tu color de acento */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: auto; /* Empuja el botón hacia abajo */
}

.add-to-cart-btn:hover {
  background-color: #45a049;
}

/* Estilo para la etiqueta "Usado" (se aplica si el componente tiene la clase 'used') */
.book-card.used .book-img-wrapper::after {
  content: 'Usado';
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #FFC107; /* Amarillo para destacar */
  color: #333;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 0.8em;
  font-weight: bold;
  z-index: 10; /* Asegura que esté encima de la imagen */
}
</style>