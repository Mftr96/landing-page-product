<script>
import myData from '../data/store';
import helper from '../data/helper';
export default {
    name: "AppFooter",
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
    <!-- NEWSLETTER FORM -->
    <section class="">
        <h3 class="text-center mx-auto">Iscriviti per rimanere aggiornato</h3>
        <p class="text-center mx-auto mb-5">Iscriviti alla nostra newsletter per rimanere aggiornato su sconti e novità
        </p>
        <form action="" method="post">
            <div class="w-100 row justify-content-center mx-auto">
                <input class="col-11" name="email"  type="email" placeholder="Lascia la tua mail qui..." id="">
                <button class="col-1" type="submit"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </form>
        <!-- SOCIAL ICON -->
        <div class="d-flex justify-content-center mb-3">
            <div class="d-flex justify-content between gap-3">
                <i v-for="social in myData.socials" :class="`fa-brands fa-${social}`"></i>
            </div>
        </div>

    </section>
    <!-- FOOTER -->
    <footer class="d-flex  justify-content-center align-items-center">
        <p class="p-0 my-0 mx-auto ">&#169;BooLanding Product. Designed by Boolean</p>
    </footer>
    
    
    

</template>

<style scoped>
section {
    background-color: #f8f8f8;
}
i {
    color: var(--newsletter-icon-color);
}
i:not(.fa-solid .fa-paper-plane){
    border: 1px solid grey;
    border-radius: 25px;
    padding: 1rem;      
};
h3{
    font-weight: 400;
}
</style>
