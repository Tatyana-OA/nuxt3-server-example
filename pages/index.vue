<script setup>
const { data: scizor } = await useFetch("/api/scizor");
</script>
<template>
  <ul>
    <li><img :src="scizor.sprite" alt="sprite" /></li>
    <li>Pokemon ID: {{ scizor.id }}</li>
    <li>Pokemon Name: {{ scizor.name }}</li>
  </ul>
</template>
