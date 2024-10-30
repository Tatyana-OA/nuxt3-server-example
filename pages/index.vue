<script setup>
const { data: scizor } = await useFetch(
  "https://pokeapi.co/api/v2/pokemon/scizor"
);
</script>

<template>
  <ul>
    <li><img :src="scizor.sprites.front_default" alt="pokeImage" /></li>
    <li>Pokemon ID: {{ scizor.id }}</li>
    <li>Pokemon Name: {{ scizor.name }}</li>
    <li>Pokemon Types: {{ scizor.types }}</li>
  </ul>
  <div>
    <pre>
      {{ scizor }}
    </pre>
  </div>
</template>
