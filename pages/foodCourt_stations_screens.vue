<template>
  <section class="v-screen-stations"
  >
    <div class="v-screen-stations__box"
         v-if="todayMenu"
    >
      <div class="v-screen-stations__box__item"
           :style="{
                backgroundImage: `url(${todayMenu[screenIndex]?.img})`
            }"
      >
<!--        <div class="v-screen-stations__box__item__name" >{{todayMenu[screenIndex]?.name}}</div>-->
        <div class="v-screen-stations__box__item__foodMain" >{{todayMenu[screenIndex]?.foodMain}}</div>
        <div class="v-screen-stations__box__item__foodDesc" >{{todayMenu[screenIndex]?.foodDesc}}</div>
        <div class="v-screen-stations__box__item__price" >
          <div>{{todayMenu[screenIndex]?.price1}}</div>
          <div>{{todayMenu[screenIndex]?.price2}}</div>
        </div>
      </div>


    </div>

    <div></div>
  </section>
</template>





<script setup lang="ts">
import {computed, onMounted, ref, type Ref} from 'vue'
import readXlsxFile, {type Row} from "read-excel-file";
import {isEvenWeek} from "~/utils/isEvenWeek";
import {useRouter} from "#app";

const xlsxContent: Ref<Row[] | null> = ref(null)

const currentDayXLSXIndex = new Date().getDay() - 1

const dateRef = new Date()
if(useRouter().currentRoute.value.query.next) {
    dateRef.setDate(dateRef.getDate() + 7)
}

let screenIndex = 0
if(useRouter().currentRoute.value.query.screen) {
    const screenIndexValue = useRouter().currentRoute.value.query.screen

    if(typeof screenIndexValue === 'string') {
      screenIndex = parseInt(screenIndexValue)
    }
}

const stringFormatedDate = new Date(dateRef).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
})

const imgMenuURL = [
    'bg-cuisine_du_monde.jpg',
    'bg-fourchette_verte.jpg',
    'bg-burger.jpg',
    'bg-street_food.jpg',
]

const todayMenu = computed(() => {
    // const order = [0, 1, 2, 3]
    const order = [2, 0, 1, 3]
    // const order = [1, 2, 0, 3]

    const arrayToReturn = Array.from({length: 4}, (_, i) => {
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


    return order.map((value) => {
        return arrayToReturn[value]
    })

})

onMounted(() => {
    getXLSLContent()
})

function getXLSLContent() {
    fetch('https://hosting.for-pro.ch/foodcourt.xlsx')
        .then(response => response.blob())
        .then(blob => readXlsxFile(blob, {
            sheet: isEvenWeek(dateRef) ? 1 : 2
        }))
        .then((rows) => {
            xlsxContent.value = rows
        }).catch(() => {
        xlsxContent.value = null
    })
}
</script>





<style lang="scss" scoped >
.v-screen-stations {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.v-screen-stations__title {
  background: var(--app-color--yellow);
  line-height: 1.75em;
  font-size: 1.25vw;
  text-align: center;
  font-weight: 900;

  &:first-letter {
    text-transform: capitalize;
  }
}

.v-screen-stations__box__item__name {
  position: absolute;
  top: .5em;
  font-size: 2vw;
  line-height: 1em;
  font-weight: 900;
  text-align: center;
  width: 100%;
}

.v-screen-stations__box {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: white;
  box-sizing: border-box;
  //padding: .25vw;
  //gap: .25vw;
  height: 100%;
  width: 100%;
}

.v-screen-stations__box__item {
  background-size: 125% auto;
  //background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  position: relative;
}

.v-screen-stations__box__item__foodMain {
  font-size: 8vw;
  line-height: 1em;
  font-weight: 900;
  text-align: center;
  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
}

.v-screen-stations__box__item__foodDesc {
  font-size: 4vw;
  line-height: 1em;
  font-weight: 900;
  text-align: center;
}

.v-screen-stations__box__item__price {
  position: absolute;
  bottom: .5em;
  font-size: 3.8vw;
  line-height: 1em;
  font-weight: 900;
  text-align: center;
  width: 100%;
}


</style>
