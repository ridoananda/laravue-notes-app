<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from "vuex";
const route = useRoute()
const store = useStore()
// onMounted(() => )
store.dispatch('noteDetail', route.params.slug)
const note = computed(() => store.state.note)
// function loadNoteDetail() {
// }
// loadNoteDetail()
    // store.dispatch('noteDetail')

</script>
<template>
    <div class="py-3 pb-5 md:w-10/12 mx-auto" v-if="note">
        <div class="text-2xl font-semibold md:text-3xl">{{ store.state.note.title }}</div>
        <div class="flex items-center space-x-2 pt-1 text-sm">
            <div class="bg-gray-100 rounded-md pt-0.5 px-3 font-semibold">{{ note.category }}</div>
            <div class="text-gray-500">Published on {{ note.created_at }}</div>
        </div>
        <div class="text-gray-800 my-3 leading-7">
            <v-md-preview :text="note.text"></v-md-preview>
        </div>
        <div class="flex items-center space-x-2 mt-4">
            <img
                src="../../../assets/images/r-logo.png"
                class="w-14 h-14 rounded-full object-cover"
            />
            <div>
                <div class="text-xl font-bold">{{ note.user.name }}</div>
                <div class="text-sm text-gray-500">{{ note.user.status }}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
::v-deep .vuepress-markdown-body {
    padding: 0 !important;
    font-family: "Catamaran";
}
::v-deep .vuepress-markdown-body div[class*="v-md-pre-wrapper-"] {
    margin: 0 !important;
    border-radius: 0.5rem !important;
}
</style>