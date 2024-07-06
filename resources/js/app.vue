<template>
    <div id="app">
        <h1>Hello, Vue 3!</h1>
        <header_shop />
    </div>
</template>

<script>
import Header_shop from "./components/header_shop.vue";

export default {
    name: 'App',
    components: {Header_shop},
};
</script>

<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

h1 {
    color: #42b983;
}

</style>
