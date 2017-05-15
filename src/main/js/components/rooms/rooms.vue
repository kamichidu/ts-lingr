<template>
    <dl>
        <template v-for="room in rooms">
            <dt>{{room.name}}</dt>
            <dd>{{room.description}}</dd>
        </template>
    </dl>
</template>

<script lang="ts" src="./rooms.vue.ts"></script>
