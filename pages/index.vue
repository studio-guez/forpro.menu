<template>
    <section
        class="v-index"
    >
        <div class="v-index__menu">
            <div class="v-index__menu__header">
                <AppHeader/>
            </div>
            <div class="v-index__menu__text">

                <AppTextContentFoodLab color="#37007d">
                  Carbonnade flamande
                  <br>Pommes frites
                  <br>Carottes jaune confites
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  Rôti de porc, sauce aux champignons
                  <br>Polenta gratinée
                  <br>Mousseline de courges
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  Cuisse de canette laquée
                  <br>Nouilles Udon
                  <br>Pack Choi
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  Cordonbleu au Gruyère AOP
                  <br>Pommes rissolées
                  <br>Cote de blette
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  Filet de merlu, vierge à la pomme.
                  <br>Fregola Sarda à la tomate séchée
                  <br>Chou kale sauté
                  <br>&nbsp;
                </AppTextContentFoodLab>
            </div>
            <div class="v-index__menu__bg">
                <AppSvgFoodLab/>
            </div>
        </div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import AppTextContent from "~/components/AppTextContent.vue";
import AppSvgFoodLab from "~/components/AppSvgFoodLab.vue";
import AppTextContentFoodLab from "~/components/AppTextContentFoodLab.vue";

const props = defineProps<{
    message?: string
}>()
</script>





<style lang="scss" scoped >
.v-index {
    display: flex;
    align-items: center;
    justify-content: center;
}

.v-index__menu {
    width: 21cm;
    height: 29.7cm;
    position: relative;
}

.v-index__menu__header {
    position: absolute;
    top: 5.75cm;
    width: 100%;
}

.v-index__menu__text {
    position: absolute;
    top: 10.175cm;
    left: 7.65cm;
    height: 141.1mm;
    width: 12cm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //transform: translate(-2cm, 0);
}

.v-index__menu__bg {
    user-select: none;
    pointer-events: none;
    width: 100%;
    height: 100%;
}
</style>
