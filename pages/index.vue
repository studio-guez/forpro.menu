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
                  Poulet Satay
                  <br>Riz frit
                  <br>Chou chinois mariné
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  Gigot d’agneau du Valais et jus au thym
                  <br>Gratin dauphinois
                  <br>Carotte confite à la mandarine
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  Moules marinières
                  <br>Pommes frites
                  <br>&nbsp;
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  Mole de bœuf
                  <br>Mousseline de patate douce
                  <br>Maïs et courge rôtie
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  Pavé de saumon à l’oseille
                  <br>Riz safrané
                  <br>Mousseline de céleri
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
