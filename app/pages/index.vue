<template>
  <div class="home-page">
    <header class="main-header">
      <div class="header-content container">
        <NuxtLink to="/" class="logo">
          <img src="/images/logo.png" alt="El Rincón del Lector Logo" />
          <span>OpenBook</span>
        </NuxtLink>
        <div class="search-bar">
          <input type="text" placeholder="Busca tu próxima historia..." />
          <button class="search-button">🔍</button>
        </div>
        <div class="user-actions">
          <NuxtLink to="/perfil" class="icon-link">👤</NuxtLink>
          <NuxtLink to="/carrito" class="icon-link cart-icon">
            🛒
            <span class="cart-count">0</span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <section class="hero-section">
      <div class="hero-background">
        <!-- <img src="/images/libreria.jpg" alt="Fondo de librería " /> -->
      </div>
      <div class="hero-content container">
        <h1>Tu Próxima Aventura Comienza Aquí.</h1>
        <p>Libros nuevos y usados cuidadosamente seleccionados, más accesorios que inspiran tu pasión por la lectura.</p>
        <NuxtLink to="/libros" class="btn-primary">Explora Nuestros Libros</NuxtLink>
      </div>
    </section>

    <main class="main-content container">
      <section class="featured-section">
        <h2>Novedades que no te puedes perder</h2>
        <div class="book-grid">
          <BookCard v-for="book in newArrivals" :key="book.id" :book="book" />
        </div>
        <NuxtLink to="/novedades" class="view-all-link">Ver todas las novedades &gt;</NuxtLink>
      </section>

      <section class="featured-section">
        <h2>Joyas Ocultas: Nuestros Libros Usados Seleccionados</h2>
        <div class="book-grid">
          <BookCard v-for="book in usedBooks" :key="book.id" :book="book" :isUsed="true" />
        </div>
        <NuxtLink to="/usados" class="view-all-link">Explorar libros usados &gt;</NuxtLink>
      </section>

      <section class="genres-section">
        <h2>Encuentra tu Género Ideal</h2>
        <div class="genres-grid">
          <NuxtLink to="/genero/ficcion" class="genre-card">
            📖 Ficción
          </NuxtLink>
          <NuxtLink to="/genero/fantasia" class="genre-card">
            ✨ Fantasía
          </NuxtLink>
          <NuxtLink to="/genero/misterio" class="genre-card">
            🔍 Misterio
          </NuxtLink>
          <NuxtLink to="/genero/ciencia-ficcion" class="genre-card">
            🚀 Ciencia Ficción
          </NuxtLink>
        </div>
      </section>

      <section class="accessories-section">
        <h2>Accesorios que Amamos</h2>
        <div class="accessories-grid">
          <AccessoryCard v-for="accessory in featuredAccessories" :key="accessory.id" :accessory="accessory" />
        </div>
        <NuxtLink to="/accesorios" class="view-all-link">Ver todos los accesorios &gt;</NuxtLink>
      </section>

      <section class="testimonials-section">
        <h2>Lo que dicen nuestros lectores</h2>
        <div class="testimonial-carousel">
          <TestimonialCard :quote="'¡Encontré mi libro favorito y la atención fue excelente! Totalmente recomendable.'" :author="'Sofía G.'" />
          <TestimonialCard :quote="'La mejor selección de libros usados, como nuevos. ¡Volveré por más!'" :author="'Martín P.'" />
        </div>
      </section>
    </main>

    <footer class="main-footer">
      <div class="footer-content container">
        <div class="footer-links">
          <h3>Navegación</h3>
          <ul>
            <li><NuxtLink to="/sobre-nosotros">Sobre Nosotros</NuxtLink></li>
            <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
            <li><NuxtLink to="/preguntas-frecuentes">Preguntas Frecuentes</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-social">
          <h3>Síguenos</h3>
          <div class="social-icons">
            <a href="#" target="_blank">📸</a> <a href="#" target="_blank">📘</a> </div>
        </div>
        <div class="footer-info">
          <h3>Métodos de Pago</h3>
          <img src="/images/mercadopago.jpg" alt="Mercado Pago" class="payment-logo" />
          <p class="location-info">Hecho con pasión por los libros en Madariaga, Buenos Aires.</p>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2025 OpenBook. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Script setup es la forma recomendada en Vue 3 y Nuxt 3 para la lógica del componente.

// IMPORTACIONES
// Importa tus componentes si los creas en la carpeta 'components/'
import { ref } from 'vue';

import BookCard from '~/components/BookCard.vue';
import AccessoryCard from '~/components/AccessoryCard.vue';
import TestimonialCard from '~/components/TestimonialCard.vue';

// DATOS DE EJEMPLO (IDEALMENTE VENDRÍAN DE TU BACKEND)
// Aquí definimos datos reactivos para las secciones, usando 'ref'
// En un proyecto real, usarías 'useFetch' o 'axios' para obtener esto de tu API
const newArrivals = ref([
  { id: 1, title: 'El Viaje del Sol', author: 'Ana López', price: 25.99, imageUrl: '/images/book1.jpg' },
  { id: 2, title: 'Sombras Antiguas', author: 'Carlos Ruiz', price: 22.50, imageUrl: '/images/book2.jpg' },
  { id: 3, title: 'El Jardín Secreto', author: 'Federico Gómez', price: 18.00, imageUrl: '/images/book3.jpg' },
  { id: 4, title: 'Más Allá del Horizonte', author: 'Laura Pérez', price: 29.99, imageUrl: '/images/book4.jpg' },
]);

const usedBooks = ref([
  { id: 5, title: 'Crónicas de Narnia (Usado)', author: 'C.S. Lewis', price: 15.00, imageUrl: '/images/book5.jpg' },
  { id: 6, title: '1984 (Usado)', author: 'George Orwell', price: 12.00, imageUrl: '/images/book6.jpg' },
]);

const featuredAccessories = ref([
  { id: 7, name: 'Marcapáginas de Cuero', price: 8.50, imageUrl: '/images/accessory1.jpg' },
  { id: 8, name: 'Lámpara de Lectura LED', price: 15.00, imageUrl: '/images/accessory2.jpg' },
]);

// Puedes usar 'useHead' de Nuxt para SEO específico de esta página
useHead({
  title: 'OpenBook - Tu Librería Online de Libros Nuevos y Usados',
  meta: [
    { name: 'description', content: 'Explora una amplia selección de libros nuevos y usados, y encuentra accesorios de lectura únicos. ¡Tu próxima aventura te espera!' }
  ]
})

// Lógica de búsqueda (ejemplo, implementarías la búsqueda real con tu backend)
const handleSearch = () => {
  // Aquí llamarías a tu API de búsqueda con el término ingresado
  console.log('Buscando...');
}

// Puedes definir más funciones o lógica aquí
</script>

<style scoped>
/* ESTILOS CSS - Aquí va el diseño para que se vea moderno, elegante y llamativo */
/* Usa SCSS/SASS si lo configuras en nuxt.config.ts */

.home-page {
  font-family: 'Georgia', serif; /* Para títulos y un toque clásico */
  --text-font: 'Roboto', sans-serif; /* Para el cuerpo del texto */
  color: #333; /* Color de texto principal */
  background-color: #f8f8f8; /* Un blanco roto cálido */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- Header --- */
.main-header {
  background-color: #fff;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-family: 'Playfair Display', serif; /* O una fuente similar para el logo */
  font-size: 1.8em;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.logo img {
  height: 40px; /* Tamaño de tu logo */
  margin-right: 10px;
}

.search-bar {
  display: flex;
  flex-grow: 1; /* Para que ocupe espacio */
  margin: 0 30px;
  max-width: 500px;
}

.search-bar input {
  flex-grow: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 25px;
  outline: none;
  font-size: 1em;
  font-family: var(--text-font);
}

.search-bar button {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 1.2em;
  margin-left: -40px; /* Para superponer el icono */
}

.user-actions .icon-link {
  font-size: 1.5em;
  color: #555;
  margin-left: 20px;
  text-decoration: none;
  position: relative;
}

.cart-icon .cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #4CAF50; /* O tu color de acento, un verde esmeralda */
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.7em;
  font-weight: bold;
}

/* --- Hero Section --- */
.hero-section {
  position: relative;
  height: 500px; /* Altura del hero */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
  /* ¡Aquí aplicamos la imagen de fondo directamente! */
 background-image: url('/images/libreria.jpg');  /* Asegúrate de que esta ruta sea correcta */
  background-size: cover; /* Cubre todo el área sin distorsionar */
  background-position: center center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
}

/* El pseudo-elemento para la capa oscura y el z-index */
.hero-section::before {
  content: ''; /* Es necesario para pseudo-elementos */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Capa oscura semitransparente (ajusta el 0.4 si es necesario) */
  /* filter: brightness(0.6);  -- Esto lo quitamos porque ya lo manejamos con rgba */
  z-index: 0; /* Asegura que esté justo encima de la imagen, pero debajo del contenido */
}

/* El contenido del Hero ahora necesita un z-index más alto que el pseudo-elemento */
.hero-content {
  position: relative; /* Crucial para que su z-index funcione en relación con hero-section::before */
  z-index: 1; /* Asegura que el texto y el botón estén por encima de la capa oscura y la imagen */
}

/* Estilos de h1 y p se mantienen iguales */
.hero-content h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5em;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-content p {
  font-family: var(--text-font);
  font-size: 1.2em;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
}
.btn-primary {
  background-color: #4CAF50; /* Tu color de acento */
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #45a049; /* Un tono un poco más oscuro al pasar el mouse */
}

/* --- Main Content Sections --- */
.main-content {
  padding: 50px 0;
}

.featured-section,
.genres-section,
.accessories-section,
.testimonials-section {
  margin-bottom: 60px;
}

.featured-section h2,
.genres-section h2,
.accessories-section h2,
.testimonials-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.book-grid, .accessories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); /* Responsivo */
  gap: 30px;
  justify-content: center;
}

.view-all-link {
  display: block;
  text-align: center;
  margin-top: 30px;
  color: #4CAF50;
  text-decoration: none;
  font-weight: bold;
  font-family: var(--text-font);
}

.view-all-link:hover {
  text-decoration: underline;
}

/* --- Genres Section --- */
.genres-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.genre-card {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  text-decoration: none;
  color: #555;
  font-family: var(--text-font);
  font-size: 1.1em;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.genre-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  color: #4CAF50;
}

/* --- Testimonials Section (simplificado, usarías un carrusel real) --- */
.testimonial-carousel {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap; /* Para responsive */
}

/* --- Footer --- */
.main-footer {
  background-color: #222; /* Un gris oscuro o negro suave */
  color: #f0f0f0;
  padding: 50px 0 20px;
  font-family: var(--text-font);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-links, .footer-social, .footer-info {
  flex: 1;
  min-width: 200px;
}

.footer-links h3, .footer-social h3, .footer-info h3 {
  color: #fff;
  margin-bottom: 20px;
  font-size: 1.3em;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #f0f0f0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #4CAF50;
}

.social-icons a {
  color: #f0f0f0;
  font-size: 1.8em;
  margin-right: 15px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #4CAF50;
}

.payment-logo {
  height: 30px; /* Tamaño del logo de Mercado Pago */
  margin-top: 10px;
}

.location-info {
  font-size: 0.9em;
  margin-top: 20px;
  opacity: 0.8;
}

.copyright {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #444;
  font-size: 0.85em;
  opacity: 0.7;
}

/* Estilos básicos para los componentes BookCard, AccessoryCard, TestimonialCard */
/* Estos deberían ser archivos .vue separados en la carpeta 'components/' */

/* Ejemplo para BookCard (componentes/BookCard.vue) */
.book-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease;
}

.book-card:hover {
  transform: translateY(-5px);
}

.book-card img {
  width: 100%;
  height: 250px; /* Altura fija para portadas */
  object-fit: cover;
}

.book-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.2em;
  margin: 15px 10px 5px;
  color: #333;
}

.book-card p {
  font-family: var(--text-font);
  font-size: 0.9em;
  color: #666;
  margin-bottom: 10px;
}

.book-card .price {
  font-family: var(--text-font);
  font-size: 1.1em;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 15px;
  display: block;
}

/* Estilo para la etiqueta "Usado" */
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
}
/* Asegúrate de que BookCard.vue tenga un slot o prop para `isUsed` para aplicar esto */
</style>