<script setup>
import axios from "axios";
import { reactive, computed, watch } from "vue";
import { useStore } from "vuex";
import { toast } from "vue3-toastify";

const props = defineProps({
    submitText: String,
});
const emits = defineEmits(["submit"]);
const store = useStore();
const note = computed(() => store.state.note);

const formData = reactive({
    title: "",
    text: "",
    is_active: 0,
});

watch(note, (val) => {
    formData.title = val.title;
    formData.text = val.text;
});
const handleUploadImage = async (event, insertImage, files) => {
    let formData = new FormData();
    formData.append("image", files[0]);
    const { data } = await axios.post("/api/image/note", formData, {
        headers: {
            "content-type": "multipart/form-data",
        },
    });
    insertImage({
        url: data.url,
        desc: files[0].name,
        // width: 'auto',
        // height: 'auto',
    });
};

const storeNote = async () => {
    emits("submit", formData);
};
const handleCopyCodeSuccess = () => {
    toast.success("Berhasil disalin!");
};
</script>
<template>
    <input
        v-model="formData.title"
        type="text"
        class="rounded-md focus:outline-none focus:ring border px-2 py-1 block mb-4 w-full"
        placeholder="Title"
    />
    <div class="mb-4">
        <input
            type="checkbox"
            v-model="formData.is_active"
            id="is_active"
            class="mr-2"
        />
        <label for="is_active">Active</label>
    </div>
    <v-md-editor
        v-model="formData.text"
        :disabled-menus="[]"
        left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save emoji | tip | todo-list"
        height="40rem"
        @upload-image="handleUploadImage"
        @copy-code-success="handleCopyCodeSuccess"
    ></v-md-editor>
    <div class="flex justify-center items-center mt-5">
        <div
            class="bg-gray-800 text-white py-2 px-4 rounded-lg cursor-pointer"
            @click="storeNote"
        >
            {{ submitText }}
        </div>
    </div>
</template>
