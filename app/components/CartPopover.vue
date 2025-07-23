<template>
  <div class="cart-popover-container">
    <div class="popover-arrow"></div>

    <div class="cart-popover-header">
      <h3>Tu Carrito</h3>
      <button class="close-button" @click="$emit('close')">&times;</button>
    </div>

    <div class="cart-popover-body">
      <div v-if="cartCount > 0" class="cart-items-list">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.imageUrl" :alt="item.title" class="item-image" />
          <div class="item-details">
            <span class="item-title">{{ item.title }}</span>
            <span class="item-price">{{ item.quantity }} x ${{ item.price.toFixed(2) }}</span>
          </div>
          <button class="remove-item-button" @click="$emit('removeItem', item.id)">🗑️</button>
        </div>
      </div>
      <div v-else class="empty-cart-message">
        <p>🛒</p>
        <p>Tu carrito está vacío.</p>
      </div>
    </div>

    <div v-if="cartCount > 0" class="cart-popover-footer">
      <div class="cart-summary">
        <span>Total ({{ cartCount }} items):</span>
        <span class="total-price">${{ cartTotal }}</span>
      </div>
      <NuxtLink to="/carrito" class="go-to-cart-button" @click="$emit('close')">
        Ver Carrito Completo
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '~/composables/useCart';

defineProps<{
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: string;
}>();

defineEmits(['close', 'removeItem']);
</script>

<style scoped>
/* CAMBIO CLAVE: Estilos para el contenedor del popover */
.cart-popover-container {
  position: absolute;
  top: calc(100% + 15px); /* Se posiciona debajo del ícono + 15px de espacio */
  right: 0;
  width: 380px;
  max-width: 90vw;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  animation: fade-in-down 0.2s ease-out;
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* AGREGADO: Estilo para la flecha del tooltip */
.popover-arrow {
  position: absolute;
  top: -10px; /* Lo posiciona justo encima del popover */
  right: 20px; /* Alineado con el ícono del carrito */
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}

.cart-popover-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.cart-popover-header h3 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 1.5em;
}

.close-button {
  background: none;
  border: none;
  font-size: 2em;
  color: #aaa;
  cursor: pointer;
  line-height: 1;
}

.cart-popover-body {
  padding: 10px;
  overflow-y: auto;
  max-height: calc(80vh - 200px); /* Límite de altura */
}

.cart-items-list {
  display: flex;
  flex-direction: column;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 8px;
}

.cart-item:hover {
  background-color: #f8f9fa;
}

.item-image {
  width: 50px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
}

.item-details {
  flex-grow: 1;
}

.item-title {
  display: block;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 5px;
}

.item-price {
  font-size: 0.9em;
  color: #666;
}

.remove-item-button {
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.remove-item-button:hover {
  opacity: 1;
}

.empty-cart-message {
  text-align: center;
  padding: 30px 0;
  color: #888;
}
.empty-cart-message p:first-child {
  font-size: 3em;
  margin: 0;
}

.cart-popover-footer {
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  background-color: #f8f9fa;
  border-radius: 0 0 12px 12px;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  font-size: 1.1em;
  margin-bottom: 15px;
}

.total-price {
  font-weight: bold;
  font-size: 1.2em;
}

.go-to-cart-button {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s;
}
.go-to-cart-button:hover {
  background-color: #45a049;
}
</style>