<script setup lang="ts">
import {ref} from "vue";
import type {FooterLinkT} from "@/models/interfaces";

const footerLinks = ref<FooterLinkT[]>([
  {title: 'Тарифы', link: '/'},
  {title: 'Связаться с нами', link: '/'},
  {title: 'Политика обработки данных', link: '/'},
  {title: 'Оставить обратную связь', link: '/'},
])

</script>

<template>
  <footer class="footer">
    <div class="footer-info">
      <img src="/logo.svg">
      <div class="footer-info__links">
        <router-link v-for="(link, idx) in footerLinks" :to="link.link" :key="idx">{{link.title}}</router-link>
      </div>
    </div>
    <div class="footer-text">
      <div class="footer-text__text">
        Автоматическая расшифровка <br> аудио и видео в текст
      </div>
      <div class="footer-text__copyright">ⓒ‎ Шöпот by (~ᴗ~) СURVES и LABirint</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #EBE6D8;
  width: 100%;
  height: auto;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 38px;

  &-info, &-text {
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    align-items: end;

    &__links {
      display: flex;
      gap: 40px;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      color: #191B08;
    }
  }
}
</style>