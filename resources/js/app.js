// require('./bootstrap');
import { createApp } from "vue";
import router from './router'
import store from './store'
import Navigation from './components/Navigation.vue'

import VueMarkdownEditor from '@kangc/v-md-editor';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import enUS from '@kangc/v-md-editor/lib/lang/en-US';
import Prism from 'prismjs';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';
import axios from "axios";
axios.defaults.withCredentials = true
VueMarkdownEditor.lang.use('en-US', enUS);
VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});
// VueMarkdownEditor.use(createMermaidPlugin())
VueMarkdownEditor.use(createEmojiPlugin())
VMdPreview.use(vuepressTheme, {
    Prism,
});

const app = createApp({
    created(){
        store.dispatch('checkUserLoggedIn')
    }
})
app.component('navigation', Navigation)
app.use(router)
    .use(store)
    .use(VMdPreview)
    .use(VueMarkdownEditor)
    .mount('#app')

