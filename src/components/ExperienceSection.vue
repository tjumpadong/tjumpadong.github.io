<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { profile } from '../data/profile'
import RoleEntry from './RoleEntry.vue'

const recent = computed(() => profile.experience.slice(0, 3))
const earlier = computed(() => profile.experience.slice(3))

const isDesktop = ref(true)
const printOpen = ref(false)
let mq: MediaQueryList | undefined

const sync = () => {
  isDesktop.value = mq?.matches ?? true
}
const openForPrint = () => {
  printOpen.value = true
}
const closeAfterPrint = () => {
  printOpen.value = false
}

onMounted(() => {
  mq = window.matchMedia('(min-width: 640px)')
  sync()
  mq.addEventListener('change', sync)
  addEventListener('beforeprint', openForPrint)
  addEventListener('afterprint', closeAfterPrint)
})

onUnmounted(() => {
  mq?.removeEventListener('change', sync)
  removeEventListener('beforeprint', openForPrint)
  removeEventListener('afterprint', closeAfterPrint)
})
</script>

<template>
  <section class="section" id="experience" style="--h: 2" aria-labelledby="experience-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="experience-h">Experience</h2>
      </div>

      <div class="grid">
        <RoleEntry v-for="role in recent" :key="role.company" :role="role" />
      </div>

      <details class="experience-earlier" :open="isDesktop || printOpen">
        <summary>Four earlier roles, 2013 to 2019</summary>
        <div class="grid">
          <RoleEntry v-for="role in earlier" :key="role.company" :role="role" />
        </div>
      </details>
    </div>
  </section>
</template>
