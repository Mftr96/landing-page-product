<script>
import helper from '../data/helper';
export default {
    name: "AppHeader",
    data() {
        return {

        };
    },
    methods: {
        // logComponentName() {
        //     console.log(`Component Name: ${this.$options.name}`);
        // },
    },
    mounted() {
        helper.logComponentName(this.$options);
        console.log(this.$options);
    },
};
</script>

<template>
    <font-awesome-icon :icon="['fas', 'pen']" />
    <h1>aaaa</h1>
</template>

<style scoped></style>
