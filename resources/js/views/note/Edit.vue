<script setup>
import axios from "axios";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Form from "./Form.vue";
const route = useRoute();
const store = useStore();
const router = useRouter();
import { toast } from "vue3-toastify";

onMounted(async () => {
    await store.dispatch("noteDetail", route.params.slug);
});
const updateNote = async (formData) => {
    try {
        const { data } = await axios.put(
            `/api/note/${route.params.slug}`,
            formData
        );
        toast.success(data.message);
        router.push({ name: "NoteDetail", params: { slug: data[0].slug } });
    } catch (error) {
        console.log(error.response.data);
    }
};
</script>
<template>
    <div class="pb-6">
        <div class="text-center font-bold my-4 text-xl">Edit Note</div>
        <Form submit-text="Edit" @submit="updateNote" />
    </div>
</template>
