/**
*  作者： penghan
*  时间：
*  注释：
**/

<template>
    <div class="layout">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "layout",
        components: {},
        props: [],
        data() {
            return {}
        },

        mounted() {
            let vm = this;
        },
        methods: {}
    }
</script>

<style scoped lang='less'>
    .layout {

    }
</style>
