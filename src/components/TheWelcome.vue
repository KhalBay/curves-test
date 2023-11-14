<script setup lang="ts">
</script>

<template>
  <div class="slide">
    <div class="slide-item-wrap">
      <div class="slide-title">Обработка файла завершена</div>
      <div class="slide-ico"></div>
    </div>

    <div class="slide-progress">100%</div>

    <div class="slide-progressbar">
      <div class="slide-progressbar-wrap">
        <img src="/ico-video.svg">
        <div class="slide-progressbar-info">
          <div class="slide-progressbar-info__title">Тестовое задание от Егора.vue</div>
          <div class="slide-progressbar-info-wrap">
            <p>16.7 МБ</p>
            <p>•</p>
            <p>9:37</p>
          </div>
        </div>
      </div>
      <img src="/mini-logo.svg">
    </div>

    <router-link class="slide-link-next" to="/file-view">Перейти к работе с файлом</router-link>
  </div>
</template>

<style lang="scss" scoped>
.slide {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  border: 1px solid #C7C7C7;
  padding: 20px 30px;
  border-radius: 12px;
  background-color: white;

  &-item-wrap {
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 0 20px 0;
  }

  &-title {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
  }

  &-ico {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #E1FE03;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      display: block;
      width: 10px;
      height: 4px;
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      transform: rotate(-45deg);
    }
  }

  &-progress {
    text-align: center;
    font-size: 24px;
    width: 100%;
    font-weight: 500;
    line-height: 28px;
    margin: 0 0 32px 0;
  }

  &-progressbar {
    border-radius: 12px;
    background: #E1FE03;
    padding: 10px 14px;
    border: 1px solid #D9D9D9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 32px 0;

    &-wrap {
      display: flex;
      align-items: center;
      gap: 13px;
    }

    &-info {
      min-width: 500px;

      &__title {
        font-size: 16px;
        line-height: 22px
      }

      &-wrap {
        display: flex;
        gap: 9px;

        & > p {
          color: #7E7E7E;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
        }
      }
    }
  }

  &-link-next {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    padding: 10px 24px;
    border-radius: 72px;
    border: 1px solid #191B08;
    cursor: pointer;
  }
}
</style>