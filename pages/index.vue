<script setup>
const { data: pokemon, error } = await useFetch("/api/pokemon");
</script>
<template>
  <ul v-if="pokemon">
    <li><img :src="pokemon.sprite" alt="sprite" /></li>
    <li>Pokemon ID: {{ pokemon.id }}</li>
    <li>Pokemon Name: {{ pokemon.name }}</li>
  </ul>
  <div v-else>
    {{ error }}
  </div>
</template>
