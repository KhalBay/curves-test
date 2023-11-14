<script setup lang="ts">
import {ref} from "vue";
import {RateInfoT} from "@/models/interfaces";

const rateInfo = ref<RateInfoT[]>([
  {title: 'Тариф', value: 'Начальный'},
  {title: 'Остаток', value: '15 мин.'},
])

</script>

<template>
  <header class="header">
    <img src="/logo.svg">

    <div class="header-info">
      <div class="header-rate">
        <div v-for="rate in rateInfo">
          <div class="header-rate__title">{{rate.title}}</div>
          <div class="header-rate__value">{{rate.value}}</div>
        </div>
      </div>
      <div class="header-profile">
        <img src="/profile.svg">
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  padding: 12px;
  box-sizing: border-box;
  border-bottom: 1px solid #C7C7C7;
  background-color: white;

  &-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &-rate {
    display: flex;
    gap: 16px;
    border-radius: 72px;
    padding: 4px 24px 8px;
    box-sizing: border-box;
    background-color: #191B08;
    cursor: pointer;

    &__title {
      font-size: 8px;
      font-weight: 400;
      line-height: 10px;
      color: #D9D9D9;
    }

    &__value {
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      color: #E1FE03;
    }
  }

  &-profile {
    box-sizing: border-box;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #C7C7C7;
  }
}
</style>