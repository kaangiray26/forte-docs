<template>
    <ul class="list-group ft-list list-group-flush bg-light p-2">
        <li>
            <span class="fw-bold">Forte API</span>
        </li>
        <li class="list-group-item ft-list-item clickable" path="/" @click="go">Introduction</li>
        <li class="list-group-item ft-list-item clickable" path="/getting-started" @click="go">Getting Started</li>
        <li>
            <span class="fw-bold">Reference</span>
        </li>
        <li class="list-group-item ft-list-item clickable" path="/artists" @click="go">Artists</li>
        <li class="list-group-item ft-list-item clickable" path="/albums" @click="go">Albums</li>
        <li class="list-group-item ft-list-item clickable" path="/tracks" @click="go">Tracks</li>
        <li class="list-group-item ft-list-item clickable" path="/playlists" @click="go">Playlists</li>
        <li class="list-group-item ft-list-item clickable" path="/stations" @click="go">Stations</li>
        <li class="list-group-item ft-list-item clickable" path="/users" @click="go">Users</li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

async function go(obj) {
    router.push(obj.target.attributes.path.value);
}
</script>