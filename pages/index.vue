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
            <div class="v-index__menu__text" v-if="foodLabData">

                <AppTextContentFoodLab color="#37007d">
                  <div v-html="foodLabData.jour1_menu"/>
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  <div v-html="foodLabData.jour2_menu"/>
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  <div v-html="foodLabData.jour3_menu"/>
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  <div v-html="foodLabData.jour4_menu"/>
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  <div v-html="foodLabData.jour5_menu"/>
                </AppTextContentFoodLab>


                <AppTextContentFoodLab color="#37007d">
                  <div v-html="foodLabData.jour6_menu"/>
                </AppTextContentFoodLab>
            </div>
            <div class="v-index__origin"
                 v-if="foodLabData"
            >
              <div>Boeuf : Suisse</div>
              <div>Dorade : France - Loire Atlantique</div>
              <div>Poulet : Suisse</div>
              <div>Porc : Suisse</div>
            </div>
            <div class="v-index__menu__bg">
                <AppSvgFoodLab/>
            </div>
        </div>
    </section>
</template>





<script setup lang="ts">
import {nextTick, onBeforeUnmount, onMounted, ref, type Ref, type UnwrapRef} from 'vue'
import AppHeader from "../components/AppHeader.vue";
import AppTextContentFoodLab from "../components/AppTextContentFoodLab.vue";
import AppSvgFoodLab from "../components/AppSvgFoodLab.vue";
import {scaleTransform} from "~/utils/scaleTransform";
import {foodLab_GetCurrentWeekMenu, getfoodLabData, type IMenuData__foodLab__weekMenu} from "~/composables/foodLabData";

const foodLabData = ref<null | IMenuData__foodLab__weekMenu>(null)

const elementToScale: Ref<UnwrapRef<null | HTMLElement>> = ref(null)
const elementForSize: Ref<UnwrapRef<null | HTMLElement>> = ref(null)

onMounted(() => {

    getfoodLabData().then(data => {
      foodLabData.value = foodLab_GetCurrentWeekMenu(data)
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
    top: calc( 722.8cm / 100);
    left: 7.65cm;
    height: calc( 1610.8mm / 10);
    width: 12cm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //transform: translate(-2cm, 0);
}

.v-index__origin {
  position: absolute;
  font-size: 8.5pt;
  line-height: 9.5pt;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  color: #37007d;
  left: 1.25cm;
  bottom: 3.6cm;
}

.v-index__menu__bg {
    user-select: none;
    pointer-events: none;
    width: 100%;
    height: 100%;
}
</style>
