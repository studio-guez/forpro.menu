<template>
    <section
        class="v-index"
    >
        <div class="v-index__menu">
            <div class="v-index__menu__header">
                <AppHeader/>
            </div>
            <div class="v-index__menu__text">
                <AppTextContent
                    day="Lundi"
                    cuisine_du_monde="Curry vert de poulet, riz Basmati"
                    fourchette_verte="Fusilli"
                    burger="CheeseBurger"
                    street_food="croque monsieur"
                />
                <AppTextContent
                    day="Mardi"
                    cuisine_du_monde="Curry vert de poulet, riz Basmati"
                    fourchette_verte="Fusilli"
                    burger="CheeseBurger"
                    street_food="croque monsieur"
                />
                <AppTextContent
                    day="Mercredi"
                    cuisine_du_monde="Curry vert de poulet, riz Basmati"
                    fourchette_verte="Fusilli"
                    burger="CheeseBurger"
                    street_food="croque monsieur"
                />
                <AppTextContent
                    day="Jeudi"
                    cuisine_du_monde="Curry vert de poulet, riz Basmati"
                    fourchette_verte="Fusilli"
                    burger="CheeseBurger"
                    street_food="croque monsieur"
                />
                <AppTextContent
                    day="Vendredi"
                    cuisine_du_monde="Curry vert de poulet, riz Basmati"
                    fourchette_verte="Fusilli"
                    burger="CheeseBurger"
                    street_food="croque monsieur"
                />
            </div>
            <div class="v-index__menu__bg">
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
    top: 11.075cm;
    left: 7.65cm;
    height: 153.4mm;
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
