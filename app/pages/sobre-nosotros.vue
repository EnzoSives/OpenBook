<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1>Sobre Nosotros</h1>
      <p>OpenBook nació de una pasión compartida por los libros en el corazón de Madariaga. Creemos que cada libro tiene una historia y cada lector un libro esperándolo. Nuestra misión es conectar esas dos mitades, ofreciendo tanto las últimas novedades como joyas usadas llenas de vida.</p>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({ title: 'Sobre Nosotros - OpenBook' })
</script>
<style scoped>
.page-container { padding: 40px 20px; }
.content-wrapper { max-width: 800px; margin: 0 auto; text-align: center; line-height: 1.8; }
h1 { font-family: 'Playfair Display', serif; margin-bottom: 20px; }
</style>