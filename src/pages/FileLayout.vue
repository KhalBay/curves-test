<script setup lang="ts">
import FileView from "@/components/FileView.vue";

const headerHeight = document.querySelector("header")?.offsetHeight
const footerHeight = document.querySelector("footer")?.offsetHeight
</script>

<template>
  <main :class="`pb-${footerHeight} pt-${headerHeight}`">
    <FileView />
  </main>
</template>