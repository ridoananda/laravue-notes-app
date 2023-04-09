<template>
    <Navigation />
    <div class="container">
        <RouterView></RouterView>
    </div>
</template>
<script setup>
import { useStore } from "vuex";
import Navigation from "../components/Navigation.vue";

const store = useStore();
store.dispatch("checkUserLoggedIn");
</script>
