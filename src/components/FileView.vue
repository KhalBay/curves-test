<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import {api} from "@/api";
import type {FileScriptT, GroupedSpeakersT} from "@/models/interfaces";

const fileData = ref<FileScriptT[]>([])
const groupedSpeakers = ref<GroupedSpeakersT[]>([])
const visibleContent = ref(false)
const videoPlayer = ref(null)
const videoCurrentTime = ref()

const currentFragmentIndex = computed(() => {
  return fileData.value.findIndex(el => Math.trunc(el.start) >= videoCurrentTime.value)
})

const checkLastSpeaker = (index: number) => {
  return index - 1 < 0 || groupedSpeakers.value[index]?.speaker !== groupedSpeakers.value[index - 1]?.speaker
}

const formattedTime = (time: number) => {
  if (time < 60) return `00:${time < 10 ? '0': ''}${Math.trunc(time)}`
  return `${Math.trunc(time / 60) < 10 ? '0' : ''}${Math.trunc(time / 60)}:${Math.trunc(time % 60) < 10 ? '0' : ''}${Math.trunc(time % 60)}`
}

const groupSpeakerText = (data: FileScriptT[]) => {
  let groupIndexes: number[] = []
  let currentSpeaker = 0
  let startTime = 0
  let currentText: string[] = []

  data.forEach((el: FileScriptT, idx) => {
    if (el.speaker !== currentSpeaker || currentText[currentText.length - 1].endsWith('.')) {
      if (currentText.length > 0) groupedSpeakers.value.push({speaker: currentSpeaker, text: currentText, start: startTime, groupIndexes: groupIndexes})
      currentText = [el.text]
      currentSpeaker = el.speaker
      startTime = el.start
      groupIndexes = [] // Обнуление groupIndexes для каждого нового объекта
      groupIndexes.push(idx)
    } else {
      currentText.push(el.text)
      groupIndexes.push(idx) // Обновление groupIndexes при каждой итерации
    }
  })

  if (currentText.length > 0) groupedSpeakers.value.push({speaker: currentSpeaker, text: currentText, start: startTime, groupIndexes: groupIndexes})
}

const changeActiveText = (index: number) => {
  if (videoPlayer.value) videoPlayer.value.currentTime = fileData.value[index].start + 1
}

onMounted(async () => {
  const res = await api.fileData.get()
  fileData.value = res.data.script
  visibleContent.value = true

  setInterval(() => {
    videoCurrentTime.value = Math.trunc(videoPlayer.value?.currentTime)
  }, 100)

  groupSpeakerText(fileData.value)
})

watch(() => currentFragmentIndex.value, () => {
  let blockContent = document.querySelector('.file-view-fragments');
  let activeText
  setTimeout(() => {
    activeText = document.querySelector('.active-span-idx')
    activeText?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    })
  },100)
})
</script>

<template>
  <div class="file-view" v-if="visibleContent">
    <div class="file-view-frame">
      <div class="file-view-title">Полная расшифровка текста</div>
      <div class="file-view-fragments">
        <div v-for="(fragment, idx) in groupedSpeakers" :key="fragment.start">
          <div class="fragment-title" v-if="checkLastSpeaker(idx)">Спикер {{fragment.speaker}}</div>
          <div class="text-info">
            <p class="text-info__time">{{formattedTime(fragment.start)}}</p>
            <div class="text-info__text">
              <span
                  v-for="(text, i) in fragment.text"
                  :key="fragment.groupIndexes[i]"
                  :class="{'active-span-idx': fragment.groupIndexes[i] === currentFragmentIndex - 1}"
                  @click="changeActiveText(fragment.groupIndexes[i])"
              >
                {{text}}&nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="file-view-video-wrap">
      <video src="/video16873471912.mp4" controls ref="videoPlayer" playsinline></video>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.file-view {
  display: flex;
  gap: 17px;

  &-frame {
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 70vh;
    background-color: white;
    box-sizing: border-box;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid #C7C7C7;
  }

  &-title {
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
  }

  &-fragments {
    height: 100%;
    overflow-y: scroll;
  }

  .fragment-title {
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
    margin: 16px 0 0 0;
  }

  .text-info {
    display: flex;
    gap: 25px;
    margin: 10px 0;

    &__time {
      color: #AAA;
      font-size: 15px;
      font-weight: 400;
      line-height: 22px;
    }

    &__text {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
    }

    span {
      &:hover {
        background-color: #EBE6D8;
        border-radius: 12px;
      }
      &.active-span-idx {
        background-color: #E1FE03;
        border-radius: 12px;
      }
    }
  }

  &-video-wrap {
    width: auto;
    height: 270px;
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 12px;
    border: 1px solid #C7C7C7;
    display: flex;
  }
}
</style>