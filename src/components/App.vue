<template>
    <div class="vw-100 complete-view d-flex flex-column">
        <NavBar />
        <div class="view row g-0">
            <div class="d-none d-md-flex col-auto">
                <SideBar />
            </div>
            <div class="col">
                <ContentView />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SideBar from './SideBar.vue';
import NavBar from './NavBar.vue';
import ContentView from './ContentView.vue';

const title = ref(null);

onMounted(() => {
    title.value = 'Everything is fine!';
});
</script>