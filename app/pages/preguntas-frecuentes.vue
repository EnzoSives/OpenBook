<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1>Preguntas Frecuentes</h1>
      <div class="faq-item">
        <h3>¿Hacen envíos a todo el país?</h3>
        <p>Sí, realizamos envíos a toda Argentina a través de Correo Argentino. El costo y tiempo de envío varía según tu localidad.</p>
      </div>
      <div class="faq-item">
        <h3>¿Cuál es la diferencia entre un libro nuevo y uno usado?</h3>
        <p>Nuestros libros usados son ejemplares de segunda mano que han sido cuidadosamente seleccionados para asegurar que estén en excelente estado. Pueden tener pequeños signos de uso, pero garantizamos su completa legibilidad.</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({ title: 'Preguntas Frecuentes - OpenBook' })
</script>
<style scoped>
.page-container { padding: 40px 20px; }
.content-wrapper { max-width: 800px; margin: 0 auto; }
h1 { font-family: 'Playfair Display', serif; text-align: center; margin-bottom: 40px; }
.faq-item { margin-bottom: 30px; }
.faq-item h3 { margin-bottom: 10px; }
</style>