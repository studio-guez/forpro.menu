<template>
    <section class="v-app-text-content"
    >
        <div class="v-app-text-content__title" v-if="day">{{day}}</div>
        <div class="v-app-text-content__content">{{cuisine_du_monde}}</div>
        <div class="v-app-text-content__content">{{fourchette_verte}}</div>
        <div class="v-app-text-content__content">{{burger}}</div>
        <div class="v-app-text-content__content">{{street_food}}</div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    day?: string
    cuisine_du_monde: string
    fourchette_verte: string
    burger: string
    street_food: string
    color: string
}>()
</script>





<style lang="scss" scoped >
.v-app-text-content {
  color: v-bind(color);
}

.v-app-text-content__title {
    font-size: 17pt;
    line-height: 15pt;
    font-weight: 600;
}

.v-app-text-content__content {
    font-size: 12pt;
    line-height: 15pt;
    font-weight: 700;
}
</style>
