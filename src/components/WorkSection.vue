<script setup lang="ts">
import { profile } from '../data/profile'
</script>

<template>
  <section class="section" id="work" aria-labelledby="work-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="work-h">Selected work</h2>
      </div>

      <div class="grid">
        <template v-for="item in profile.selectedWork" :key="item.area">
          <div class="span-3">
            <p class="t-label">{{ item.period }}</p>
            <p class="t-card">{{ item.area }}</p>
          </div>
          <div class="span-9 start-4">
            <p class="t-card">{{ item.company }}</p>
            <p>{{ item.detail }}</p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
