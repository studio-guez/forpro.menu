<template>
    <section class="v-screen-home"
    >
      <div class="v-screen-home__title">
       {{stringFormatedDate}}
      </div>
     <div class="v-screen-home__box"
          v-if="todayMenu"
     >
       <div class="v-screen-home__box__item"
            v-for="menu of todayMenu"
            :style="{
                backgroundImage: `url(${menu?.img})`
            }"
       >
         <div class="v-screen-home__box__item__foodMain" >{{menu?.foodMain}}</div>
         <div class="v-screen-home__box__item__foodDesc" >{{menu?.foodDesc}}</div>
         <div class="v-screen-home__box__item__price" >
           <div>{{menu?.price1}}</div>
           <div>{{menu?.price2}}</div>
         </div>
       </div>


     </div>

      <div></div>
    </section>
</template>





<script setup lang="ts">
import {computed, defineProps, nextTick, onMounted, ref, type Ref, type UnwrapRef} from 'vue'
import readXlsxFile, {type Row} from "read-excel-file";
import AppTextContent from "~/components/AppTextContent.vue";

const xlsxContent: Ref<Row[] | null> = ref(null)

const currentDayXLSXIndex = new Date().getDay() - 1

const stringFormatedDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
})

const imgMenuURL = [
    'bg-burger.jpg',
    'bg-cuisine_du_monde.jpg',
    'bg-fourchette_verte.jpg',
    'bg-street_food.jpg',
]

const todayMenu = computed(() => {
    return Array.from({length: 4}, (_, i) => {
        if( xlsxContent.value === null ) return null
        return {
            name:     xlsxContent.value[currentDayXLSXIndex * 4 + i + 1][1],
            foodMain: xlsxContent.value[currentDayXLSXIndex * 4 + i + 1][2],
            foodDesc: xlsxContent.value[currentDayXLSXIndex * 4 + i + 1][3],
            price1: xlsxContent.value[currentDayXLSXIndex * 4 + i + 1][4],
            price2: xlsxContent.value[currentDayXLSXIndex * 4 + i + 1][5],
            img:      imgMenuURL[i],
        }
    })

})

onMounted(() => {
    fetch('Menu_FoodCourt.xlsx')
        .then(response => response.blob())
        .then(blob => readXlsxFile(blob))
        .then((rows) => {
            xlsxContent.value = rows
        })
})
</script>





<style lang="scss" scoped >
.v-screen-home {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.v-screen-home__title {
  background: var(--app-color--yellow);
  line-height: 1.75em;
  font-size: 1.25vw;
  text-align: center;
  font-weight: 900;
}

.v-screen-home__box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: white;
  box-sizing: border-box;
  //padding: .25vw;
  //gap: .25vw;
  height: 100%;
  width: 100%;
}

.v-screen-home__box__item {
  background-size: 150% auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  position: relative;
}

.v-screen-home__box__item__name {
  position: absolute;
  top: .5em;
  font-size: 2vw;
  line-height: 1em;
  font-weight: 900;
  text-align: center;
  width: 100%;
}

.v-screen-home__box__item__foodMain {
  font-size: 4vw;
  line-height: 1em;
  font-weight: 900;
  text-align: center;
}

.v-screen-home__box__item__foodDesc {
  font-size: 4vw;
  line-height: 1em;
  font-weight: 900;
  text-align: center;
}

.v-screen-home__box__item__price {
  position: absolute;
  bottom: .5em;
  font-size: 2.8vw;
  line-height: 1em;
  font-weight: 900;
  text-align: center;
  width: 100%;
}


</style>
