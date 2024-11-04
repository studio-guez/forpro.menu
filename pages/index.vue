<template>
    <section
        class="v-index"
    >
        <div class="v-index__menu">
            <div class="v-index__menu__header">
                <AppHeader/>
            </div>
            <div class="v-index__menu__text" v-if="xlslContent">

                <AppTextContentFoodLab color="#37007d">
                  {{xlslContent[1][1]}}
                  <br>{{xlslContent[2][1]}}
                  <br>{{xlslContent[3][1]}}
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  {{xlslContent[4][1]}}
                  <br>{{xlslContent[5][1]}}
                  <br>{{xlslContent[6][1]}}
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  {{xlslContent[7][1]}}
                  <br>{{xlslContent[8][1]}}
                  <br>{{xlslContent[9][1]}}
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  {{xlslContent[10][1]}}
                  <br>{{xlslContent[11][1]}}
                  <br>{{xlslContent[12][1]}}
                  <br>&nbsp;
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  {{xlslContent[13][1]}}
                  <br>{{xlslContent[14][1]}}
                  <br>{{xlslContent[15][1]}}
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
import AppSvgFoodLab from "~/components/AppSvgFoodLab.vue";
import AppTextContentFoodLab from "~/components/AppTextContentFoodLab.vue";
import readXlsxFile, {type Row} from "read-excel-file";

const props = defineProps<{
    message?: string
}>()

const xlslContent: Ref<Row[] | null> = ref(null)

onMounted(() => {
    fetch('Menu_FoodLab.xlsx')
        .then(response => response.blob())
        .then(blob => readXlsxFile(blob))
        .then((rows) => {
            xlslContent.value = rows
            console.log( rows )
        })
})


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
