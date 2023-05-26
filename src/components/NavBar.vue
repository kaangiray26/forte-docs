<template>
    <div class="ft-navbar d-flex justify-content-between py-3">
        <div class="d-flex flex-nowrap align-items-center clickable px-3" @click="home">
            <img class="me-1" src="/images/favicon.svg" width="34" height="34">
            <span class="fw-bold text-nowrap fs-4">Forte for Developers</span>
        </div>
        <div></div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

async function home() {
    router.push("/");
}
</script>