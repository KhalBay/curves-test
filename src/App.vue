<script setup lang="ts">
import HeaderDesktop from "@/components/HeaderDesktop.vue"
import FooterComponent from "@/components/FooterComponent.vue"
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderDesktop/>

  <RouterView />

  <FooterComponent/>
</template>

<style lang="scss" scoped>

</style>
