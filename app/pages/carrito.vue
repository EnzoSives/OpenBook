<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1>Carrito de Compras</h1>
      <div class="cart-content">
        <p>Tu carrito está vacío.</p>
        <NuxtLink to="/libros" class="btn-primary">Explorar libros</NuxtLink>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Carrito de Compras - OpenBook'
})
</script>

<style scoped>
.page-container {
  padding: 40px 20px;
  background-color: #f9f9f9;
}
.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
h1 {
  font-family: 'Playfair Display', serif;
  text-align: center;
  margin-bottom: 30px;
}
.cart-content {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
}
.btn-primary {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
}
</style>