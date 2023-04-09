// require('./bootstrap');
import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./views/App.vue";
import Navigation from "./components/Navigation.vue";

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

axios.defaults.withCredentials = true;
VueMarkdownEditor.lang.use("en-US", enUS);
VueMarkdownEditor.use(vuepressTheme, {
    Prism,
    codeHighlightExtensionMap: {
        vue: "xml",
    },
});
// VueMarkdownEditor.use(createMermaidPlugin())
VMdPreview.use(vuepressTheme, {
    Prism,
    codeHighlightExtensionMap: {
        vue: "xml",
    },
});
VueMarkdownEditor.use(createEmojiPlugin());

const app = createApp(App);
app.use(router).use(store).use(VMdPreview).use(VueMarkdownEditor).mount("#app");
