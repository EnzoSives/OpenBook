<template>
  <div class="accessory-card">
    <div class="accessory-img-wrapper">
      <img :src="accessory.imageUrl" :alt="accessory.name" />
    </div>
    <h3>{{ accessory.name }}</h3>
    <span class="accessory-price">${{ accessory.price.toFixed(2) }}</span>
    <button class="add-to-cart-btn">Añadir al carrito</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  accessory: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
}>();
</script>

<style scoped>
/* Estilos específicos para AccessoryCard.vue */
.accessory-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.accessory-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.accessory-img-wrapper {
  width: 100%;
  height: 200px; /* Altura para imágenes de accesorios */
  overflow: hidden;
}

.accessory-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Para que el accesorio se vea completo */
  padding: 15px; /* Pequeño padding para que no se pegue a los bordes */
}

.accessory-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.1em;
  margin: 15px 10px 5px;
  color: #333;
  min-height: 2.2em; /* Asegura espacio */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.accessory-card .accessory-price {
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 15px;
  display: block;
}

.add-to-cart-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: auto;
}

.add-to-cart-btn:hover {
  background-color: #45a049;
}
</style>