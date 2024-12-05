<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import helper from '../data/helper';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { iconName } from '@fortawesome/free-brands-svg-icons/fa42Group';
import myData from '../data/store';
export default {
    name: "AppHeader",
    data() {
        return {
            myData,
        };
    },
    methods: {

    },
    mounted() {
        helper.logComponentName(this.$options);
    },
};
</script>

<template>
    <header class="row justify-content-between">
        <!-- LOGO -->
        <div class="col-2">
            <img src="../assets/fromDesigner/imgs/logo.png" width="" alt="">
        </div>
        <!-- BOOTSTRAP OFFCANVAS BUTTON -->
        <button class="btn  col-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">
            <i class="fa-solid fa-bars"></i>
        </button>
        <!-- OFFCANVAS -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <!-- OFFCANVAS LINK MENU -->
            <div class="offcanvas-body">
                <ul>
                    <li v-for="link in myData.offcanvasLinks" class="dropdown-item mb-4">{{ link }}</li>
                </ul>
            </div>
        </div>

    </header>
</template>

<style scoped>

</style>
