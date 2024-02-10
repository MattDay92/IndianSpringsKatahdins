<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <div>
    <Navbar />
    <main>
        <embed typeof="application/pdf" src="/ISKPriceSheet.pdf"></embed>  
    </main>
  </div>
</template>

<style scoped>

  embed {
    width: 100%;
    height: 80vh;
  }
</style>