<script>
import myData from '../data/store';
import helper from '../data/helper';
export default {
    name: "AppDescription",
    data() {
        return {
            myData,
        };
    },
    methods: {},
    mounted() {
        helper.logComponentName(this.$options);

    },
};
</script>

<template>
    <section class="row">
        <!-- UP/LEFTDESCRIPTION -->
        <div class="col-12  col-lg-4 ">
            <div class="container h-100 d-flex flex-column justify-content-between  ">
                <div class="text-center mx-auto" v-for="(description, key) in myData.upDescriptionParagraphs">
                    <h3 class="">{{ description.title }}</h3>
                    <p class="">{{ description.p }}</p>
                </div>
            </div>
        </div>
        <!-- DUCK IMAGE -->
        <div class="col-12 col-lg-4">
            <img src="../assets/fromDesigner/imgs/invisible.png" alt="">
        </div>
        <!-- DOWN/RIGHT DESCRIPTION -->
        <div class="col-12 col-lg-4">
            <div class="container h-100 d-flex flex-column justify-content-between">
                <div class="text-center mx-auto" v-for="(description, key) in myData.downDescriptionParagraphs">
                    <h3 class="">{{ description.title }}</h3>
                    <p class="">{{ description.p }}</p>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}
</style>
