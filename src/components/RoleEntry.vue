<script setup lang="ts">
import type { Role } from '../data/profile'

defineProps<{ role: Role }>()
</script>

<template>
  <div class="span-3">
    <p class="t-label">{{ role.period }}</p>
    <p class="t-card">{{ role.company }}</p>
    <p class="t-small muted">{{ role.context }}</p>
    <p v-if="role.technologies.length" class="t-small muted">
      Technologies: {{ role.technologies.join(', ') }}
    </p>
  </div>
  <div class="span-9 start-4">
    <p class="t-card">{{ role.title }}</p>
    <ul class="checks">
      <li v-for="highlight in role.highlights" :key="highlight">{{ highlight }}</li>
    </ul>
  </div>
</template>
