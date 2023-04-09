<script setup>
import axios from "axios";

const props = defineProps({
    note: {
        type: Object,
        required: true,
    },
});
const deleteNote = async (slug) => {
    const confirmation = confirm("Are you sure ?");
    if (!confirmation) return;
    try {
        const { data } = await axios.delete(`/api/note/${slug}`);
        alert(data.message);
    } catch (error) {
        console.log(error.response);
    }
};
</script>
<template>
    <div class="md:px-1 md:w-6/12 w-full">
        <div
            @click="
                $router.push({
                    name: 'NoteDetail',
                    params: { slug: note.slug },
                })
            "
            class="border rounded-xl border-gray-300 px-3 py-2 mb-3 cursor-pointer block"
        >
            <div class="text-2xl font-semibold">{{ note.title }}</div>
            <div class="text-gray-700">
                {{
                    note.text.length > 100
                        ? note.text.substring(0, 110) + " . . ."
                        : note.text
                }}
            </div>
            <div class="flex items-center pt-2 space-x-2 text-sm">
                <div class="text-gray-500">
                    Dipublikasikan pada {{ note.created_at }}
                </div>
                <div
                    class="text-gray-500"
                    v-if="$store.getters.isLoggedIn"
                    @click.stop="deleteNote(note.slug)"
                >
                    Hapus
                </div>
            </div>
        </div>
    </div>
</template>
