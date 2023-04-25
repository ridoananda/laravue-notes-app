<script setup>
import CardNote from "../components/CardNote.vue";
import { computed } from "@vue/reactivity";
import store from "../store";
store.dispatch("noteLoad");
const notes = computed(() => store.state.notes);
</script>

<template>
    <div class="py-4 md:py-5 flex flex-wrap">
        <CardNote v-for="(note, index) in notes" :key="index" :note="note" />
    </div>
</template>
