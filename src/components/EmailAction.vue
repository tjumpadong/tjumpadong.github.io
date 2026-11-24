<script setup lang="ts">
import { emailAddress } from '../data/profile'

defineProps<{ variant?: 'primary' | 'link' }>()

function open() {
  window.location.href = 'mailto:' + emailAddress()
}
</script>

<template>
  <button
    v-if="variant === 'link'"
    class="link link--button"
    type="button"
    aria-label="Email Teerawit (opens your email app)"
    @click="open"
  >
    Email Teerawit
  </button>
  <button
    v-else
    class="btn btn--primary"
    type="button"
    aria-label="Email Teerawit (opens your email app)"
    @click="open"
  >
    Email Teerawit<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8" /><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" /></svg>
  </button>
</template>
