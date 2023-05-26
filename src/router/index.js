import { createRouter, createWebHistory } from 'vue-router';

import Introduction from "/components/Introduction.vue"

const routes = [
    {
        path: "/",
        component: Introduction,

    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router