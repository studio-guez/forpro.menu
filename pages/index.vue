<template>
    <section
        class="v-index app-page"
        ref="elementToScale"
    >
        <div class="v-index__menu app-page__menu"
             ref="elementForSize"
        >
            <div class="v-index__menu__header">
                <AppHeader/>
            </div>
            <div class="v-index__menu__text" v-if="xlsxContent">

                <AppTextContentFoodLab color="#37007d">
                  {{ xlsxContent[1][1] }}
                  <br>{{ xlsxContent[2][1] }}
                  <br>{{ xlsxContent[3][1] }}
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  {{ xlsxContent[4][1] }}
                  <br>{{ xlsxContent[5][1] }}
                  <br>{{ xlsxContent[6][1] }}
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  {{ xlsxContent[7][1] }}
                  <br>{{ xlsxContent[8][1] }}
                  <br>{{ xlsxContent[9][1] }}
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  {{ xlsxContent[10][1] }}
                  <br>{{ xlsxContent[11][1] }}
                  <br>{{ xlsxContent[12][1] }}
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  {{ xlsxContent[13][1] }}
                  <br>{{ xlsxContent[14][1] }}
                  <br>{{ xlsxContent[15][1] }}
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
import {nextTick, onBeforeUnmount, onMounted, ref, type Ref, type UnwrapRef} from 'vue'
import readXlsxFile, {type Row} from "read-excel-file";
import AppHeader from "../components/AppHeader.vue";
import AppTextContentFoodLab from "../components/AppTextContentFoodLab.vue";
import AppSvgFoodLab from "../components/AppSvgFoodLab.vue";
import {scaleTransform} from "~/utils/scaleTransform";

const xlsxContent: Ref<Row[] | null> = ref(null)

const elementToScale: Ref<UnwrapRef<null | HTMLElement>> = ref(null)
const elementForSize: Ref<UnwrapRef<null | HTMLElement>> = ref(null)

onMounted(() => {
    fetch('https://hosting.for-pro.ch/foodlab.xlsx')
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
    background: var(--app-color--orange);
  }
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
