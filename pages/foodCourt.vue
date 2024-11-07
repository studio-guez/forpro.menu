<template>
    <section
        class="v-food-court app-page"
        ref="elementToScale"
    >
        <div class="v-food-court__menu app-page__menu"
             ref="elementForSize"
        >
            <div class="v-food-court__menu__header">
                <AppHeader/>
            </div>
            <div class="v-food-court__menu__text"
                 v-if="xlsxContent"
            >
                <AppTextContent
                    day="Lundi"
                    :cuisine_du_monde="xlsxContent[1][2]"
                    :fourchette_verte="xlsxContent[2][2]"
                    :burger="xlsxContent[3][2]"
                    :street_food="xlsxContent[4][2]"
                    color="black"
                />
                <AppTextContent
                    day="Mardi"
                    :cuisine_du_monde="xlsxContent[5][2]"
                    :fourchette_verte="xlsxContent[6][2]"
                    :burger="xlsxContent[7][2]"
                    :street_food="xlsxContent[8][2]"
                    color="black"
                />
                <AppTextContent
                    day="Mercredi"
                    :cuisine_du_monde="xlsxContent[9][2]"
                    :fourchette_verte="xlsxContent[10][2]"
                    :burger="xlsxContent[11][2]"
                    :street_food="xlsxContent[12][2]"
                    color="black"
                />
                <AppTextContent
                    day="Jeudi"
                    :cuisine_du_monde="xlsxContent[13][2]"
                    :fourchette_verte="xlsxContent[14][2]"
                    :burger="xlsxContent[15][2]"
                    :street_food="xlsxContent[16][2]"
                    color="black"
                />
                <AppTextContent
                    day="Vendredi"
                    :cuisine_du_monde="xlsxContent[17][2]"
                    :fourchette_verte="xlsxContent[18][2]"
                    :burger="xlsxContent[19][2]"
                    :street_food="xlsxContent[20][2]"
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
import {nextTick, onBeforeUnmount, onMounted, ref, type Ref, type UnwrapRef} from 'vue'
import readXlsxFile, {type Row} from "read-excel-file";
import AppHeader from "../components/AppHeader.vue";
import AppTextContent from "../components/AppTextContent.vue";
import AppSvgFoodCourt from "../components/AppSvgFoodCourt.vue";
import {scaleTransform} from "~/utils/scaleTransform";

const xlsxContent: Ref<Row[] | null> = ref(null)

const elementToScale: Ref<UnwrapRef<null | HTMLElement>> = ref(null)
const elementForSize: Ref<UnwrapRef<null | HTMLElement>> = ref(null)

onMounted(() => {
    fetch('https://hosting.for-pro.ch/foodcourt.xlsx')
        .then(response => response.blob())
        .then(blob => readXlsxFile(blob))
        .then((rows) => {
            xlsxContent.value = rows
            console.log( rows )
        })

    nextTick(() => {
        setPageScale()
        window.addEventListener('resize', setPageScale)
    })
})

function setPageScale() {
    if(elementToScale.value && elementForSize.value) scaleTransform({
        elementToScale: elementToScale.value,
        elementForSize: elementForSize.value
    })
}

onBeforeUnmount(() => {
    window.removeEventListener('resize', setPageScale)
})


</script>





<style lang="scss" scoped >
@media screen {
  :global(body) {
    background: var(--app-color--yellow);
  }
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
