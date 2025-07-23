<template>
  <div class="testimonial-card">
    <p class="quote">"{{ quote }}"</p>
    <p class="author">- {{ author }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  quote: string;
  author: string;
}>();
</script>

<style scoped>
/* Estilos específicos para TestimonialCard.vue */
.testimonial-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  max-width: 400px; /* Ancho máximo para el testimonio */
  margin: 0 auto; /* Centrar */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-card .quote {
  font-family: 'Playfair Display', serif; /* Una fuente que evoque citas */
  font-size: 1.2em;
  font-style: italic;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
}

.testimonial-card .author {
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: #333;
  margin-top: auto; /* Empuja el autor hacia abajo */
}
</style>