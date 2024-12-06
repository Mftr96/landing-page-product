<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper-bundle.css";
import myData from '../data/store';
import helper from '../data/helper';
import { Pagination } from 'swiper/modules';

export default {
    name: "AppAbout",
    components: {
        Swiper,
        SwiperSlide,
      

    },

    data() {
        return {
            myData,
            modules:[Pagination],
            paginationOptions: {
                clickable: true,
            },

        };
    },
    methods: {},
    mounted() {
        helper.logComponentName(this.$options);

    },
    created(){
        console.log(this.modules); // Vedi se è definito

    }
};
</script>

<template>
    <section class="w-100">
        <h3 class="text-center">La collezione di paperelle</h3>
        <p class="text-center">Una paperella per ogni stile di programmazione</p>
        <div class="mx-auto border border-warning  w-100">
            <Swiper :modules="modules" :slides-per-view="1" :pagination="paginationOptions" :loop="true"
                :Autoplay="{ delay: 3000 }" class="mySwiper w-100">
                <SwiperSlide class=" w-100 mb-4 d-flex flex-column justify-content-center align-items-center "
                    v-for="(photo) of myData.photos">
                    <img class="mb-2" :src="`src/assets/fromDesigner/imgs/${photo.path}`" height="100" width="100" alt="">
                    <div class="p-0">
                        <svg v-for="n in 5" class="icon text-warning">
                            <use :xlink:href="`/icons.svg#${'star-fill'}`"></use>
                        </svg>
                    </div>
                    <h4 class="p-0">{{ photo.title }}</h4>
                    <p class="p-0 text-success">${{ photo.price }}</p>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<style scoped>
section {
    outline: 1px solid crimson
}
img{
    object-fit: cover;
}

.mySwiper {
    outline: 1px solid pink
}
.icon{
    width: 24px;
    height: 24px;
    fill: #fecf59;
}
.mySwiper{
    outline: 2px solid;

}
</style>
