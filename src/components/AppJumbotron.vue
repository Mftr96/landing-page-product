<script>
import myData from '../data/store';
import helper from '../data/helper';
export default {
    name: "AppJumbotron",
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
    <section class="row flex-column">
        <div class="col-12 photo1" width="auto">
            <img src="../assets/fromDesigner/imgs/banner-image.png" width="auto" alt="">
        </div>
        <div class="col-12">
            <div>
                <img class="img-background" src="../assets/fromDesigner/imgs/banner-bg.png" alt="">
            </div>
            <div class="text-center duck-text my-0 mx-auto ">
                <h3>{{myData.jumbotron[0].h}}</h3>
                <p>{{ myData.jumbotron[1].p }}</p>
                <a class="btn" href="">{{myData.jumbotron[2].a}}</a>
            </div>
        </div>



    </section>

</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.img-background{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
section{
    position: relative;
}

.photo2 {
    outline: 2px solid pink;

}

.btn:hover{
    background-color: black;
    color: white;
    transition: 0.5s;
}

.duck-text {
    outline: 1px solid pink;
    position: relative;
    z-index: 1;



}

a {
    outline: 1px solid black;
}
</style>
