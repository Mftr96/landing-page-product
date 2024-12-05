<script>
//importing components
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppDescription from './components/AppDescription.vue';
import AppAbout from './components/AppAbout.vue';
import AppFaq from './components/AppFaq.vue';
import AppFooter from './components/AppFooter.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { iconName } from '@fortawesome/free-brands-svg-icons/fa42Group';
import helper from './data/helper.js';
export default {
    name: "App",
    components: {
        AppHeader,
        AppJumbotron,
        AppDescription,
        AppAbout,
        AppFaq,
        AppFooter,
    },
    data() {
        return {
            helper,

        };
    },
    methods: {},
    mounted() { },
};
</script>

<template>
    <AppHeader />
    <AppJumbotron />
    <AppDescription />
    <AppAbout />
    <AppFaq/>
    <AppFooter />
</template>

<style scoped></style>
