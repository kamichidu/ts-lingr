<template>
    <ul>
        <x-message v-for="message in messages" v-bind:message="message" />
    </ul>
</template>

<script>
    import Message from './Message.vue';

    export default {
        components: {
            'x-message': Message,
        },

        props: ['messages'],

        data()
        {
            return {};
        },
    };
</script>
