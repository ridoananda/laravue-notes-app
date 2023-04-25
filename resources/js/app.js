// require('./bootstrap');
import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./views/App.vue";

import VueMarkdownEditor from "@kangc/v-md-editor";
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import enUS from "@kangc/v-md-editor/lib/lang/en-US";
import Prism from "prismjs";
import createEmojiPlugin from "@kangc/v-md-editor/lib/plugins/emoji/index";
import "@kangc/v-md-editor/lib/plugins/emoji/emoji.css";
import "@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css";
import axios from "axios";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import createCopyCodePlugin from "@kangc/v-md-editor/lib/plugins/copy-code/index";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";
import createHighlightLinesPlugin from "@kangc/v-md-editor/lib/plugins/highlight-lines/index";
import "@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css";
import createTodoListPlugin from "@kangc/v-md-editor/lib/plugins/todo-list/index";
import "@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css";
import createLineNumbertPlugin from "@kangc/v-md-editor/lib/plugins/line-number/index";
import createAlignPlugin from "@kangc/v-md-editor/lib/plugins/align";

axios.defaults.withCredentials = true;
VueMarkdownEditor.use(vuepressTheme, {
    Prism,
    codeHighlightExtensionMap: {
        vue: "xml",
    },
});
VueMarkdownEditor.lang.use("en-US", enUS);
VueMarkdownEditor.use(createAlignPlugin());
VueMarkdownEditor.use(createLineNumbertPlugin());
VueMarkdownEditor.use(createTodoListPlugin());
VueMarkdownEditor.use(createHighlightLinesPlugin());
VueMarkdownEditor.use(createCopyCodePlugin());
VueMarkdownEditor.use(createEmojiPlugin());
VMdPreview.use(vuepressTheme, {
    Prism,
    codeHighlightExtensionMap: {
        vue: "xml",
    },
});
VMdPreview.use(createAlignPlugin());
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(createTodoListPlugin());
VMdPreview.use(createCopyCodePlugin());
VMdPreview.use(createHighlightLinesPlugin());
VMdPreview.use(createEmojiPlugin());

const app = createApp(App);
app.use(router)
    .use(store)
    .use(Vue3Toasity, {
        autoClose: 3000,
    })
    .use(VMdPreview)
    .use(VueMarkdownEditor)
    .mount("#app");
