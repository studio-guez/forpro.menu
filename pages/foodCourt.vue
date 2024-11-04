<template>
    <section
        class="v-food-court"
    >
        <div class="v-food-court__menu">
            <div class="v-food-court__menu__header">
                <AppHeader/>
            </div>
            <div class="v-food-court__menu__text"
                 v-if="xlslContent"
            >
                <AppTextContent
                    day="Lundi"
                    :cuisine_du_monde="xlslContent[1][2]"
                    :fourchette_verte="xlslContent[2][2]"
                    :burger="xlslContent[3][2]"
                    :street_food="xlslContent[4][2]"
                    color="black"
                />
                <AppTextContent
                    day="Mardi"
                    :cuisine_du_monde="xlslContent[5][2]"
                    :fourchette_verte="xlslContent[6][2]"
                    :burger="xlslContent[7][2]"
                    :street_food="xlslContent[8][2]"
                    color="black"
                />
                <AppTextContent
                    day="Mercredi"
                    :cuisine_du_monde="xlslContent[9][2]"
                    :fourchette_verte="xlslContent[10][2]"
                    :burger="xlslContent[11][2]"
                    :street_food="xlslContent[12][2]"
                    color="black"
                />
                <AppTextContent
                    day="Jeudi"
                    :cuisine_du_monde="xlslContent[13][2]"
                    :fourchette_verte="xlslContent[14][2]"
                    :burger="xlslContent[15][2]"
                    :street_food="xlslContent[16][2]"
                    color="black"
                />
                <AppTextContent
                    day="Vendredi"
                    :cuisine_du_monde="xlslContent[17][2]"
                    :fourchette_verte="xlslContent[18][2]"
                    :burger="xlslContent[19][2]"
                    :street_food="xlslContent[20][2]"
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
import readXlsxFile, {type Row} from "read-excel-file";

const props = defineProps<{
    message?: string
}>()

const xlslContent: Ref<Row[] | null> = ref(null)


onMounted(() => {
    fetch('Menu_FoodCourt.xlsx')
        .then(response => response.blob())
        .then(blob => readXlsxFile(blob))
        .then((rows) => {
            xlslContent.value = rows
            console.log( rows )
        })
})


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
