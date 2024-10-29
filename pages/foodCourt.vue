<template>
    <section
        class="v-food-court"
    >
        <div class="v-food-court__menu">
            <div class="v-food-court__menu__header">
                <AppHeader/>
            </div>
            <div class="v-food-court__menu__text">
                <AppTextContent
                    day="Lundi"
                    cuisine_du_monde="Nouilles sautées au bœuf"
                    fourchette_verte="Soupe campagnarde"
                    burger="Cheeseburger"
                    street_food="Tenders de poulet Kentucky"
                    color="black"
                />
                <AppTextContent
                    day="Mardi"
                    cuisine_du_monde="Piadine au jambon cru, burrata et crème de balsamique"
                    fourchette_verte="Gnocchi à la marinara"
                    burger="Pulled chicken burger"
                    street_food="Chili dog carne"
                    color="black"
                />
                <AppTextContent
                    day="Mercredi"
                    cuisine_du_monde="Salade césar"
                    fourchette_verte="Tarte flambée aux champignons"
                    burger="Racletteburger"
                    street_food="Onigiri à la truite et sésame"
                    color="black"
                />
                <AppTextContent
                    day="Jeudi"
                    cuisine_du_monde="Pastillas de poulet"
                    fourchette_verte="Saucisse de veau et roesti"
                    burger="Cheeseburger"
                    street_food="Meatballs sandwich"
                    color="black"
                />
                <AppTextContent
                    day="Vendredi"
                    cuisine_du_monde="Assortiments de makis"
                    fourchette_verte="Farfalle al ragù"
                    burger="LabFish burger"
                    street_food="French tacos au poulet"
                    color="black"
                />
            </div>
            <div class="v-food-court__menu__bg">
                <AppSvgFoodCourt/>
            </div>
        </div>
    </section>
</template>



























<script setup lang="ts">
import { defineProps } from 'vue'
import AppTextContent from "~/components/AppTextContent.vue";

const props = defineProps<{
    message?: string
}>()
</script>





<style lang="scss" scoped >
.v-food-court {
    display: flex;
    align-items: center;
    justify-content: center;
}

.v-food-court__menu {
    width: 21cm;
    height: 29.7cm;
    position: relative;
}

.v-food-court__menu__header {
    position: absolute;
    top: 5.75cm;
    width: 100%;
}

.v-food-court__menu__text {
    position: absolute;
    top: 11.075cm;
    left: 7.65cm;
    height: 153.4mm;
    width: 12cm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //transform: translate(-2cm, 0);
}

.v-food-court__menu__bg {
    user-select: none;
    pointer-events: none;
    width: 100%;
    height: 100%;
}
</style>
