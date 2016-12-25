<template>
    <form class="form-inline">
        <div class="form-group">
            <textarea class="form-control" rows="5" placeholder="Write your mind...">{{message}}</textarea>
        </div>
        <button class="btn btn-default">Say It!</button>
    </form>
</template>

<script>
    export default {
        components: {},

        data()
        {
            return {
                message: '',
            };
        },
    };
</script>
