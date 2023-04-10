<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const route = useRoute();
const store = useStore();
store.dispatch("noteDetail", route.params.slug);
const note = computed(() => store.state.note);
</script>
<template>
    <div class="py-3 md:w-6/12 2xl:w-8/12 mx-auto" v-if="note">
        <div class="text-2xl font-semibold md:text-3xl flex items-center">
            {{ store.state.note.title }}
            <RouterLink
                :to="{ name: 'NoteEdit', params: { slug: note.slug } }"
                v-if="store.getters.isLoggedIn"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-gray-600 ml-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z"
                    ></path>
                    <path d="M16 7h4"></path>
                    <path
                        d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3"
                    ></path>
                </svg>
            </RouterLink>
        </div>
        <div class="flex items-center space-x-2 pt-1 text-sm">
            <div class="text-gray-500">
                Dipublikasikan pada {{ note.created_at }}
            </div>
        </div>
        <div class="text-gray-800 my-3 leading-7 lg:text-lg">
            <v-md-preview :text="note.text"></v-md-preview>
        </div>
        <div class="flex items-center space-x-3 py-4">
            <img
                src="../../../assets/images/profile.jpg"
                class="w-12 h-12 rounded-full object-cover"
            />
            <div>
                <div class="text-xl font-bold">{{ note.user.name }}</div>
                <div class="text-sm status" v-html="note.user.status"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
:deep(.status) > a {
    font-weight: 600;
}
:deep(.vuepress-markdown-body) {
    padding: 0 !important;
    font-family: "Catamaran";
}
:deep(.vuepress-markdown-body div[class*="v-md-pre-wrapper-"]) {
    margin: 0 !important;
    border-radius: 0.5rem !important;
}
</style>
