<script>
import myData from "../data/store";
import helper from "../data/helper";
export default {
    name: "AppFaq",
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
    <!-- FAQ -->
    <section class="row">
        <img class="col-lg-5" src="../assets/fromDesigner/imgs/single-image2.png" width="100" alt="">
        <div class="col-12 col-lg-5">
            <h3 class="">FAQS</h3>
            <details v-for="faq of myData.faqs">
                <summary>{{ faq.question }}
                    <hr>
                </summary>
                <p>{{ faq.answer }}</p>
            </details>
        </div>
    </section>
    <!-- DESCRIPTION -->
    <div class="row">
        <div v-for="info of myData.faqsDescriptions" class="col-12 text-center">
            <svg class="icon ">
                <use :xlink:href="`/icons.svg#${info.icon}`"></use>
            </svg>
            <h3>{{ info.h }}</h3>
            <p>{{ info.p }}</p>
        </div>
    </div>

</template>

<style scoped>
img {
    object-fit: cover;
}
svg{
    width: 24px;
    height: 24px;
    color: blue;
}
details[open] p {
  animation: reveal 0.5s ease-out forwards;
}
details p {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease-out, max-height 0.5s ease-out;
}
@keyframes reveal {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px; 
  }
}
</style>
