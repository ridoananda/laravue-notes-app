<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import Form from "./Form.vue";
import { toast } from "vue3-toastify";
const router = useRouter();

const storeNote = async (formData) => {
    try {
        const { data } = await axios.post("/api/note", formData);
        toast.success(data.message);
        router.push({ name: "NoteDetail", params: { slug: data[0].slug } });
    } catch (error) {
        console.log(error.response.data);
    }
};
</script>
<template>
    <div class="pb-6">
        <div class="text-center font-bold my-4 text-xl">Create Note</div>
        <Form submit-text="Create" @submit="storeNote" />
    </div>
</template>
