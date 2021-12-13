<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
const store = useStore()
const router = useRouter()
const handleUploadImage = () => {}
const formData = reactive({
    title: '',
    category: '',
    text: '',
})

const storeNote = async () => {
    try {
        const { data } = await axios.post('/api/note', formData)
        router.push({ name: 'NoteDetail', params: { slug: data[0].slug }})
    } catch (error) {
        console.log(error.response.data);
    }
}
</script>
<template>
    <div class="pb-6">
        <div class="text-center font-bold my-4 text-xl">Create Note</div>
        <input v-model="formData.title" type="text" class="rounded-md focus:outline-none focus:ring border px-2 py-1 block mb-4 w-full" placeholder="Title">
        <input v-model="formData.category" type="text" class="rounded-md focus:outline-none focus:ring border px-2 py-1 block mb-4 w-full" placeholder="Category">
        <v-md-editor v-model="formData.text" :disabled-menus="[]" left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save emoji | tip" height="40rem" @upload-image="handleUploadImage"></v-md-editor>
        <div class="flex justify-center items-center mt-5">
            <div class="bg-gray-800 text-white py-2 px-4 rounded-lg" @click="storeNote">Create</div>
        </div>
    </div>
</template>