<script setup>
import { onMounted, reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const route = useRouter();
const store = useStore();
const loginForm = reactive({
    email: "",
    password: "",
    errors: [],
});
const login = async () => {
    try {
        const response = await axios.post("/login", loginForm);
        store.commit("SET_USER_LOGIN", response.data);
        route.push({ name: "NoteCreate" });
    } catch (error) {
        loginForm.errors = error.response.data.errors;
    }
};
onMounted(() => {
    if (store.getters.isLoggedIn) return route.push("/");
});
</script>
<template>
    <div class="w-full h-screen flex items-center justify-center">
        <form class="border rounded-xl p-4 space-y-3" @submit.prevent="login">
            <div>
                <input
                    v-model="loginForm.email"
                    type="email"
                    class="rounded-md focus:outline-none focus:ring border px-2 py-1 block"
                    placeholder="Email"
                />
                <div
                    v-if="loginForm.errors.email"
                    class="text-sm mt-1 text-red-500"
                >
                    {{ loginForm.errors.email[0] }}
                </div>
            </div>
            <div>
                <input
                    v-model="loginForm.password"
                    type="password"
                    class="rounded-md focus:outline-none focus:ring border px-2 py-1 block"
                    placeholder="Password"
                />
                <div
                    v-if="loginForm.errors.password"
                    class="text-sm mt-1 text-red-500"
                >
                    {{ loginForm.errors.password[0] }}
                </div>
            </div>
            <button type="submit" class="flex justify-center items-center">
                <div class="bg-gray-800 text-white py-1 text-sm px-4 rounded">
                    Login
                </div>
            </button>
        </form>
    </div>
</template>
