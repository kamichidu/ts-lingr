<template>
    <li class="media">
        <div class="media-left">
            <a>
                <img class="media-object" v-bind:src="message.iconUrl" v-bind:alt="message.speakerId">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{message.nickname}} <span>{{message.timestamp}}</span></h4>
            {{message.text}}
        </div>
    </li>
</template>

<script>
    export default {
        components: {
        },

        props: ['message'],

        data()
        {
            return {};
        },
    };
</script>
