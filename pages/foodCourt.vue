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
                    cuisine_du_monde="Curry panang"
                    fourchette_verte="Lasagne au bœuf, bouquet de salades"
                    burger="Cheeseburger"
                    street_food="Baguette Merguez"
                    color="black"
                />
                <AppTextContent
                    day="Mardi"
                    cuisine_du_monde="Bobun au bœuf"
                    fourchette_verte="Panini à la mozzarella et pesto rosso, salade mêlées"
                    burger="Chicken louisiana burger"
                    street_food="Shrimp po boys"
                    color="black"
                />
                <AppTextContent
                    day="Mercredi"
                    cuisine_du_monde="Couscous à l'agneau, tajine de légumes"
                    fourchette_verte="Schnitzel de poulet, pommes duchesse"
                    burger="Cheeseburger"
                    street_food="Hot fondue"
                    color="black"
                />
                <AppTextContent
                    day="Jeudi"
                    cuisine_du_monde="Gyros"
                    fourchette_verte="Orzotto à la courge et grana padano"
                    burger="BBQ pulled pork burger"
                    street_food="Accra de morue"
                    color="black"
                />
                <AppTextContent
                    day="Vendredi"
                    cuisine_du_monde="Enchilada"
                    fourchette_verte="Penne à la puttanesca"
                    burger="Cheeseburger"
                    street_food="Nems au papet, saladine croquante"
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
