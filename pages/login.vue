<script setup>
const auth = useCookie("poke-auth");
function authenticate() {
  auth.value = true;
}
function logOut() {
  auth.value = false;
}
</script>

<template>
  <h1>Login</h1>
  <button @click="authenticate">Authenticate Me!</button>
  <button @click="logOut">Log Me Out!</button>
</template>
