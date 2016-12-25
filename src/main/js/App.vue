<template>
    <div>
        <header>
            <x-header />
        </header>
        <div class="container">
            <x-message-list v-bind:messages="messages" />
            <x-input-form />
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import MessageList from './MessageList.vue';
    import InputForm from './InputForm.vue';

    export default {
        components: {
            'x-header': Header,
            'x-message-list': MessageList,
            'x-input-form': InputForm,
        },

        props: ['messages'],

        data()
        {
            return {};
        },
    }
</script>
