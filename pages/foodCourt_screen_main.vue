<template>
  <section class="v-screen-home"
           :class="{
              'show-second-image': showSecondImage
           }"
  >
    <div class="v-screen-home__menu-content">
      <img class="v-screen-home__menu-content__img"
           src="/ouverture_terrasse.png" alt="ouverture de la terrasse">
    </div>
    <div class="v-screen-home__menu-content"
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
         <div class="v-screen-home__box__item__name" >{{menu?.name}}</div>
         <div class="v-screen-home__box__item__foodMain" >{{menu?.foodMain}}</div>
         <div class="v-screen-home__box__item__foodDesc" >{{menu?.foodDesc}}</div>
         <div class="v-screen-home__box__item__price" >
           <div>{{menu?.price1}}</div>
           <div>{{menu?.price2}}</div>
         </div>
       </div>


     </div>

      <div></div>
    </div>
  </section>
</template>





<script setup lang="ts">
import {computed, onMounted, ref, type Ref} from 'vue'
import {useRouter} from "#app";
import {
  foodCourt_GetCurrentWeekMenu,
  getFoodCourtData,
  type IMenuData__foodCourt__weekMenu
} from "~/composables/foodCourtData";

const showSecondImage = ref(false)

const currentWeekMenuData: Ref<IMenuData__foodCourt__weekMenu | null> = ref(null)

const currentDayXLSXIndex = new Date().getDay()

const dateRef = new Date()

if(useRouter().currentRoute.value.query.next) {
    dateRef.setDate(dateRef.getDate() + 7)
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
    const order = [0, 1, 2, 3]
    // const order = [2, 0, 1, 3]
    // const order = [1, 2, 0, 3]

    const arrayToReturn = Array.from({length: 4}, (_, i) => {
        if( currentWeekMenuData.value === null ) return null

        const index = i + 1

        const imageIndex = (() => {
          if (index === 1)  return 2
          if (index === 2) return 3
          if (index === 3) return 1
          return 0
        })()

        return {
            name:     currentWeekMenuData.value[`station${i + 1}_name` as keyof IMenuData__foodCourt__weekMenu],
            foodMain: currentWeekMenuData.value[`jour${currentDayXLSXIndex}_station${i + 1}_menu` as keyof IMenuData__foodCourt__weekMenu],
            foodDesc: currentWeekMenuData.value[`jour${currentDayXLSXIndex}_station${i + 1}_description` as keyof IMenuData__foodCourt__weekMenu],
            price1:   currentWeekMenuData.value[`jour${currentDayXLSXIndex}_station${i + 1}_prix_public` as keyof IMenuData__foodCourt__weekMenu],
            price2:   currentWeekMenuData.value[`jour${currentDayXLSXIndex}_station${i + 1}_prix_apprenti` as keyof IMenuData__foodCourt__weekMenu],
            img:      imgMenuURL[imageIndex],
        }
    })


    return order.map((value) => {
        return arrayToReturn[value]
    })

})

onMounted(() => {
    setFoodCourtData()
    window.setInterval(() => {
            setFoodCourtData()
        },
        5_000
    )

    setAutoToggleBetweenImages()
})

function setAutoToggleBetweenImages() {
    window.setInterval(() => {
        showSecondImage.value = !showSecondImage.value
    }, 5_000)
}

function setFoodCourtData() {

    getFoodCourtData().then((data) => {
      currentWeekMenuData.value = foodCourt_GetCurrentWeekMenu(data)
    })

}
</script>





<style lang="scss" scoped >
.v-screen-home {
  .v-screen-home__menu-content:nth-child(1) {
    display: none !important;
  }
  .v-screen-home__menu-content:nth-child(2) {
    display: block !important;
  }

  &.show-second-image {
    .v-screen-home__menu-content:nth-child(1) {
      display: block !important;
    }
    .v-screen-home__menu-content:nth-child(2) {
      display: none !important;
    }
  }
}

.v-screen-home__menu-content {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
}

.v-screen-home__menu-content__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.v-screen-home__title {
  background: var(--app-color--yellow);
  line-height: 1.75em;
  font-size: 1.25vw;
  text-align: center;
  font-weight: 900;
  height: 2.5vw;

  &:first-letter {
    text-transform: capitalize;
  }
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

.v-screen-home__box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: white;
  box-sizing: border-box;
  //padding: .25vw;
  //gap: .25vw;
  height: calc( 100% - 2.5vw );
  width: 100%;
}

.v-screen-home__box__item {
  background-size: 125% auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  position: relative;
}

.v-screen-home__box__item__foodMain {
  font-size: 3vw;
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
