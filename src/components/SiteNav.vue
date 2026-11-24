<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { sections } from '../data/sections'
import EmailAction from './EmailAction.vue'

const active = ref('')
let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = entry.target.id
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  for (const section of sections) {
    const el = document.getElementById(section.id)
    if (el) observer.observe(el)
  }
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <header class="nav nav--centre">
    <div class="wrap nav__bar">
      <a class="skip-link" href="#top">Skip to content</a>
      <a class="nav__logo" href="#top">
        <span class="mark mark--initial" aria-hidden="true">T</span>Teerawit
      </a>
      <nav class="nav__links" aria-label="Main">
        <div v-for="section in sections" :key="section.id" class="nav__item">
          <a
            class="nav__link"
            :href="'#' + section.id"
            :aria-current="active === section.id ? 'location' : undefined"
          >{{ section.label }}</a>
        </div>
      </nav>
      <div class="nav__actions">
        <EmailAction />
      </div>
      <button class="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" /></svg>
      </button>
    </div>
  </header>
</template>
