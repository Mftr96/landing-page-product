<script>
import helper from '../data/helper';
export default {
    name: "AppFooter",
    data() {
        return {

        };
    },
    methods: {},
    mounted() {
        helper.logComponentName(this.$options);
    },
};
</script>

<template>
    <section class="">
        <h3 class="text-center mx-auto">Iscriviti per rimanere aggiornato</h3>
        <p class="text-center mx-auto mb-5">Iscriviti alla nostra newsletter per rimanere aggiornato su sconti e novità
        </p>
        <form action="" method="post">
            <div class="w-100 d-flex justify-content-center">
                <input name="email" class="w-75" type="email" placeholder="Lascia la tua mail qui..."  id="">
                <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </form>
        <div class="d-flex justify-content-center">
            <div class="d-flex justify-content between gap-3">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>

    </section>
    <footer class="d-flex justify-content-center align-items-center">
        <p class="mx-auto">&#169;BooLanding Product. Designed by Boolean</p>
    </footer>

</template>

<style scoped>
i:not(.fa-paper-plane){
    color:var(--money-color);
    border: 1px solid grey;
    border-radius: 25px;
    padding: 1rem;
}
section {
    outline: 1px solid pink;
}

h3 {
    outline: 1px solid purple;
}

div {
    outline: 1px solid crimson;
}
section{
    background-color: #f8f8f8;
}
</style>
