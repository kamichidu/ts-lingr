<template>
    <div>
        <x-message-list />
        <x-input-form />
    </div>
</template>

<script>
    import MessageList from './MessageList.vue';
    import InputForm from './InputForm.vue';

    export default {
        components: {
            'x-message-list': MessageList,
            'x-input-form': InputForm,
        },

        data()
        {
            return {};
        },
    };
</script>
