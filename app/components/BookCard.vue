<template>
  <div class="book-card" :class="{ 'used': isUsed, 'new-arrival': book.isNew, 'on-sale': book.isOnSale }">
    
    <div class="book-img-wrapper" @mouseenter="showOverlay = true" @mouseleave="showOverlay = false">
      <img :src="book.imageUrl" :alt="book.title" />

      <!-- Acciones superiores con mejor diseño -->
      <div class="top-actions">
        <button class="action-btn favorite-btn" @click.stop="toggleFavorite">
          <svg v-if="!isFavorited" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        
        
      </div>

      <!-- Tags modernizados -->
      <div class="tags-container">
        <span v-if="isUsed" class="tag used-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Usado
        </span>
        <span v-if="book.isNew && !isUsed" class="tag new-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg>
          Nuevo
        </span>
        <span v-if="book.isOnSale" class="tag sale-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
            <line x1="7" y1="7" x2="7.01" y2="7"/>
          </svg>
          Oferta
        </span>
      </div>

      <!-- Overlay mejorado -->
      <div class="info-overlay" :class="{ 'show': showOverlay }">
        <div class="overlay-content">
          <p class="overlay-description">
            {{ book.description || 'No hay descripción disponible.' }}
          </p>
          <button class="overlay-btn" @click.stop="goToBookDetails">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Ver Detalles
          </button>
        </div>
      </div>
    </div>

    <!-- Contenido del libro con mejor estructura -->
    <div class="book-content">
      <div class="book-header">
        <h3 class="book-title">{{ book.title }}</h3>
        <p class="book-author">{{ book.author }}</p>
      </div>

      <div class="book-meta">
        <span class="book-genre">{{ book.genre || 'Variado' }}</span>
        <div class="book-rating">
          <div class="stars">
            <svg v-for="n in 5" :key="n" width="14" height="14" viewBox="0 0 24 24" 
                 :fill="n <= 4 ? '#fbbf24' : 'none'" 
                 :stroke="n <= 4 ? '#fbbf24' : '#d1d5db'" 
                 stroke-width="2">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
          </div>
          <span class="rating-text">4.0</span>
        </div>
      </div>

      <div class="book-footer">
        <div class="price-section">
          <span class="book-price">${{ book.price.toFixed(2) }}</span>
        </div>
        
        <div class="action-buttons">
          <button class="btn btn-secondary" @click.stop="addToCart">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            Añadir
          </button>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  book: {
    id: number;
    title: string;
    author: string;
    price: number;
    imageUrl: string;
    genre?: string;
    isNew?: boolean;
    isOnSale?: boolean;
    description?: string;
  };
  isUsed?: boolean;
}>();

const router = useRouter();

const isFavorited = ref(false);
const showOverlay = ref(false);

const toggleFavorite = () => {
  isFavorited.value = !isFavorited.value;
  console.log(`Libro ${props.book.title} ${isFavorited.value ? 'añadido' : 'quitado'} de favoritos`);
};

const addToCart = () => {
  console.log(`Añadir "${props.book.title}" al carrito.`);
};

const buyNow = () => {
  console.log(`Comprar "${props.book.title}" ahora.`);
  addToCart();
  router.push('/checkout');
};

const goToBookDetails = () => {
  router.push(`/libros/${props.book.id}`);
};
</script>

<style scoped>
/* Variables CSS modernas */
:root {
  --primary: #059669;
  --primary-dark: #047857;
  --secondary: #6b7280;
  --secondary-dark: #4b5563;
  --accent: #f59e0b;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  
  --border-radius: 0.75rem;
  --border-radius-lg: 1rem;
  --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.book-card {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  border: 1px solid var(--gray-200);
}

.book-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--gray-300);
}

/* Imagen y wrapper */
.book-img-wrapper {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: var(--gray-100);
}

.book-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.book-card:hover .book-img-wrapper img {
  transform: scale(1.02);
}

/* Acciones superiores */
.top-actions {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
  z-index: 10;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid var(--gray-200);
  border-radius: 50%;
  color: var(--gray-600);
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.action-btn:hover {
  background: var(--white);
  color: var(--danger);
  transform: scale(1.05);
  box-shadow: var(--shadow-md);
}

.favorite-btn.favorited,
.favorite-btn:has(.favorited) {
  color: var(--danger);
  background: rgba(228, 8, 8, 0.1);
  border-color: var(--danger);
}

/* Tags */
.tags-container {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 10;
}

.tag {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-sm);
}

.used-tag {
  background: rgba(245, 158, 11, 0.9);
  color: var(--gray-800);
}

.new-tag {
  background: rgba(16, 185, 129, 0.9);
  color: var(--white);
}

.sale-tag {
  background: rgba(239, 68, 68, 0.9);
  color: var(--white);
}

/* Overlay */
.info-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9));
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 5;
}

.info-overlay.show {
  opacity: 1;
  transform: translateY(0);
}

.overlay-content {
  text-align: center;
  padding: 24px;
  color: var(--white);
}

.overlay-description {
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 20px;
  opacity: 0.9;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.overlay-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.overlay-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

/* Contenido del libro */
.book-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  gap: 12px;
}

.book-header {
  text-align: center;
}

.book-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--gray-900);
  line-height: 1.4;
  margin: 0 0 6px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8rem;
}

.book-author {
  font-size: 0.875rem;
  color: var(--gray-600);
  margin: 0;
  font-weight: 500;
}

.book-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-top: 1px solid var(--gray-200);
  border-bottom: 1px solid var(--gray-200);
}

.book-genre {
  font-size: 0.75rem;
  color: var(--gray-500);
  background: var(--gray-100);
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.book-rating {
  display: flex;
  align-items: center;
  gap: 6px;
}

.stars {
  display: flex;
  gap: 1px;
}

.rating-text {
  font-size: 0.75rem;
  color: var(--gray-600);
  font-weight: 500;
}

.book-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  gap: 12px;
}

.price-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.book-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
}

.btn-secondary {
  background: var(--gray-100);
  color: var(--gray-700);
  border: 1px solid var(--gray-300);
}

.btn-secondary:hover {
  background: var(--gray-200);
  color: var(--gray-800);
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--primary);
  color: var(--white);
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* Estados especiales de la card */
.book-card.used {
  border-color: var(--warning);
}

.book-card.new-arrival {
  border-color: var(--success);
}

.book-card.on-sale {
  border-color: var(--danger);
}

/* Responsive */
@media (max-width: 640px) {
  .book-content {
    padding: 12px;
    gap: 10px;
  }
  
  .book-title {
    font-size: 1rem;
  }
  
  .action-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .book-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  
  .price-section {
    align-items: center;
  }
}
</style>