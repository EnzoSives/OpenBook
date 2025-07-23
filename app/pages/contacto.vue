<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1>Contacto</h1>
      <p>¿Tienes alguna duda o sugerencia? ¡Nos encantaría escucharte!</p>
      <form class="contact-form">
        <input type="text" placeholder="Tu Nombre" required />
        <input type="email" placeholder="Tu Correo Electrónico" required />
        <textarea placeholder="Tu Mensaje" rows="6" required></textarea>
        <button type="submit" class="btn-primary">Enviar Mensaje</button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({ title: 'Contacto - OpenBook' })
</script>
<style scoped>
.page-container { padding: 40px 20px; }
.content-wrapper { max-width: 600px; margin: 0 auto; text-align: center; }
h1 { font-family: 'Playfair Display', serif; }
.contact-form { display: flex; flex-direction: column; gap: 15px; margin-top: 30px; }
.contact-form input, .contact-form textarea { padding: 15px; border: 1px solid #ddd; border-radius: 5px; font-family: 'Roboto', sans-serif; }
.btn-primary { background-color: #4CAF50; color: white; padding: 15px; border: none; border-radius: 5px; cursor: pointer; font-size: 1em; }
</style>