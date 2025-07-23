<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1>Mi Perfil</h1>
      <p>Aquí podrás ver y editar la información de tu cuenta, tu historial de pedidos y tus libros favoritos.</p>
      </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Mi Perfil - OpenBook'
})
</script>

<style scoped>
.page-container {
  padding: 40px 20px;
  background-color: #fff;
}
.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
h1 {
  font-family: 'Playfair Display', serif;
  margin-bottom: 20px;
}
</style>