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

        <div class="col-12 photo2" width="auto">
            <div class="text-center duck-text my-0 mx-auto ">
                <h3>Rubber Duck debuggings</h3>
                <p>
                    Spiegare il codice ad una paperella di
                    gomma aiuta i programmatori a
                    chiarire il pensiero e individuare
                    errori nascosti.
                </p>
                <p>lorem*10</p>
                <a class="btn " href="">ACQUISTALA SUBITO !</a>
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


.photo1{
    outline: 1px solid black;
}
.photo2 {
    background-image: url(../assets/fromDesigner/imgs/banner-bg.png);
    background-size: 100% 100%;
    background-position: 100%;
    background-size: contain;
    outline: 1px solid black;
    
   
    
}
.duck-text{
    outline: 1px solid pink;
   

}
a{
    outline: 1px solid black;
}

</style>
