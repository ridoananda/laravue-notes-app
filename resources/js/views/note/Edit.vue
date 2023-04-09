<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useStore();
const router = useRouter();
const handleUploadImage = () => {};
const formData = ref("");
onMounted(async () => {
    await store.dispatch("noteDetail", route.params.slug);
    formData.value = store.state.note;
});
const updateNote = async () => {
    try {
        const { data } = await axios.put(
            `/api/note/${route.params.slug}`,
            formData.value
        );
        console.log(data);
        router.push({ name: "NoteDetail", params: { slug: data[0].slug } });
    } catch (error) {
        console.log(error.response.data);
    }
};
</script>
<template>
    <div class="pb-6">
        <div class="text-center font-bold my-4 text-xl">Edit Note</div>
        <input
            v-model="formData.title"
            type="text"
            class="rounded-md focus:outline-none focus:ring border px-2 py-1 block mb-4 w-full"
            placeholder="Title"
        />
        <v-md-editor
            v-model="formData.text"
            :disabled-menus="[]"
            left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save emoji | tip"
            height="40rem"
            @upload-image="handleUploadImage"
        ></v-md-editor>
        <div class="flex justify-center items-center mt-5">
            <div
                class="bg-gray-800 text-white py-2 px-4 rounded-lg"
                @click="updateNote"
            >
                Edit
            </div>
        </div>
    </div>
</template>
