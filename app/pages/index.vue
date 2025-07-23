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
          
          <div class="icon-link cart-icon" @click="toggleCartModal">
            🛒
            <span class="cart-count">{{ cartCount }}</span>
          </div>
          
          <CartPopover
            v-if="isCartModalVisible"
            :cart-items="cartItems"
            :cart-total="cartTotal"
            :cart-count="cartCount"
            @close="isCartModalVisible = false"
            @remove-item="removeFromCart"
          />
        </div>
      </div>
    </header>

    <section class="hero-section">
      <div class="hero-background"></div>
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
          <div v-for="book in newArrivals" :key="book.id" class="book-card-wrapper">
            <BookCard :book="book" />
            
          </div>
        </div>
        <NuxtLink to="/novedades" class="view-all-link">Ver todas las novedades &gt;</NuxtLink>
      </section>

      <section class="featured-section">
        <h2>Joyas Ocultas: Nuestros Libros Usados Seleccionados</h2>
        <div class="book-grid">
           <div v-for="book in usedBooks" :key="book.id" class="book-card-wrapper">
            <BookCard :book="book" :isUsed="true" />
          
          </div>
        </div>
        <NuxtLink to="/usados" class="view-all-link">Explorar libros usados &gt;</NuxtLink>
      </section>

      <section class="genres-section">
        <h2>Encuentra tu Género Ideal</h2>
        <div class="genres-grid">
          <NuxtLink to="/genero/ficcion" class="genre-card">📖 Ficción</NuxtLink>
          <NuxtLink to="/genero/fantasia" class="genre-card">✨ Fantasía</NuxtLink>
          <NuxtLink to="/genero/misterio" class="genre-card">🔍 Misterio</NuxtLink>
          <NuxtLink to="/genero/ciencia-ficcion" class="genre-card">🚀 Ciencia Ficción</NuxtLink>
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
            <a href="#" target="_blank">📸</a> <a href="#" target="_blank">📘</a>
          </div>
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
import { ref } from 'vue';

// IMPORTACIONES
import BookCard from '~/components/BookCard.vue';
import AccessoryCard from '~/components/AccessoryCard.vue';
import TestimonialCard from '~/components/TestimonialCard.vue';
// CORRECCIÓN: Se añaden las importaciones que faltaban
import CartPopover from '~/components/CartPopover.vue'; 
import { useCart } from '~/composables/useCart';

// CORRECCIÓN: Se añade toda la lógica de control del carrito que faltaba
const { cartItems, cartCount, cartTotal, addToCart, removeFromCart } = useCart();
const isCartModalVisible = ref(false);

const toggleCartModal = () => {
  isCartModalVisible.value = !isCartModalVisible.value;
};

// DATOS DE EJEMPLO
const newArrivals = ref([
  { id: 1, title: 'El Viaje del Sol', author: 'Ana López', price: 25.99, imageUrl: '/images/book1.jpg' },
  { id: 2, title: 'Sombras Antiguas', author: 'Carlos Ruiz', price: 22.50, imageUrl: '/images/book2.jpg' },
  { id: 3, title: 'El Jardín Secreto', author: 'Federico Gómez', price: 18.00, imageUrl: '/images/book3.jpg' },
  { id: 4, title: 'Más Allá del Horizonte', author: 'Laura Pérez', price: 29.99, imageUrl: '/images/book4.jpg' },
]);

const usedBooks = ref([
  { id: 5, title: 'Crónicas de Narnia', author: 'C.S. Lewis', price: 15.00, imageUrl: '/images/book5.jpg' },
  { id: 6, title: '1984', author: 'George Orwell', price: 12.00, imageUrl: '/images/book6.jpg' },
]);

const featuredAccessories = ref([
  { id: 7, name: 'Marcapáginas de Cuero', price: 8.50, imageUrl: '/images/accessory1.jpg' },
  { id: 8, name: 'Lámpara de Lectura LED', price: 15.00, imageUrl: '/images/accessory2.jpg' },
]);

useHead({
  title: 'OpenBook - Tu Librería Online de Libros Nuevos y Usados',
  meta: [
    { name: 'description', content: 'Explora una amplia selección de libros nuevos y usados, y encuentra accesorios de lectura únicos. ¡Tu próxima aventura te espera!' }
  ]
})
</script>

<style scoped>
/* ESTILOS ORIGINALES (la mayoría no cambia) */
.home-page {
  font-family: 'Georgia', serif; 
  --text-font: 'Roboto', sans-serif;
  color: #333;
  background-color: #f8f8f8;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

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
  font-family: 'Playfair Display', serif;
  font-size: 1.8em;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.search-bar {
  display: flex;
  flex-grow: 1;
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
  margin-left: -40px;
}

.user-actions {
  /* CORRECCIÓN: Regla clave para que el popover se posicione correctamente */
  position: relative; 
  display: flex;
  align-items: center;
}

.user-actions .icon-link {
  font-size: 1.5em;
  color: #555;
  margin-left: 20px;
  text-decoration: none;
}

/* CORRECCIÓN: cursor:pointer para el ícono del carrito */
.user-actions .cart-icon {
  cursor: pointer;
  position: relative; /* Para el contador */
}

.cart-icon .cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #4CAF50;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.7em;
  font-weight: bold;
}

.hero-section {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
  background-image: url('/images/libreria.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
}

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
  background-color: #4CAF50;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #45a049;
}

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
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
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

.testimonial-carousel {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.main-footer {
  background-color: #222;
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

.footer-links ul { list-style: none; padding: 0; }
.footer-links li { margin-bottom: 10px; }
.footer-links a { color: #f0f0f0; text-decoration: none; transition: color 0.3s ease; }
.footer-links a:hover { color: #4CAF50; }
.social-icons a { color: #f0f0f0; font-size: 1.8em; margin-right: 15px; text-decoration: none; transition: color 0.3s ease; }
.social-icons a:hover { color: #4CAF50; }
.payment-logo { height: 30px; margin-top: 10px; }
.location-info { font-size: 0.9em; margin-top: 20px; opacity: 0.8; }

.copyright {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #444;
  font-size: 0.85em;
  opacity: 0.7;
}

/* CORRECCIÓN: Estilos para el botón de "Añadir al Carrito" */
.book-card-wrapper {
  position: relative;
}

.add-to-cart-btn {
  position: absolute;
  bottom: 20px;
  left: 50%;
  background-color: #222;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translate(-50%, 10px);
  z-index: 2;
}

.book-card-wrapper:hover .add-to-cart-btn {
  opacity: 1;
  transform: translateX(-50%);
}
</style>