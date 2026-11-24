<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { emailAddress, profile } from '../data/profile'
import { sections } from '../data/sections'
import EmailAction from './EmailAction.vue'

const printEmail = ref('')
const fillForPrint = () => {
  printEmail.value = emailAddress()
}
const clearAfterPrint = () => {
  printEmail.value = ''
}

onMounted(() => {
  addEventListener('beforeprint', fillForPrint)
  addEventListener('afterprint', clearAfterPrint)
})

onUnmounted(() => {
  removeEventListener('beforeprint', fillForPrint)
  removeEventListener('afterprint', clearAfterPrint)
})
</script>

<template>
  <footer class="footer closing" id="contact" aria-labelledby="close-h">
    <div class="wrap">
      <div class="closing__cta close--type">
        <div class="section-head">
          <h2 id="close-h">Hire a senior engineer for your systems</h2>
          <p>{{ profile.location }}. Email is the fastest way to reach me.</p>
        </div>
        <EmailAction />
        <p class="t-small muted">
          Or download the <a class="link" :href="profile.resumeUrl" download>résumé (PDF)</a>.
        </p>
      </div>

      <div class="closing__links">
        <div class="grid">
          <div class="span-4 stack-5">
            <p class="footer__lede">{{ profile.name }}</p>
            <p>Software engineer in Bangkok.</p>
          </div>
          <div class="span-4 footer__col">
            <h3>Contact</h3>
            <ul>
              <li><EmailAction variant="link" /></li>
              <li><a :href="profile.linkedinUrl">LinkedIn</a></li>
              <li><a :href="profile.githubUrl">GitHub</a></li>
              <li><a :href="profile.resumeUrl" download>Résumé (PDF)</a></li>
              <li><span v-if="printEmail" class="print-email">{{ printEmail }}</span></li>
            </ul>
          </div>
          <div class="span-4 footer__col">
            <h3>Sections</h3>
            <ul>
              <li v-for="section in sections" :key="section.id">
                <a :href="'#' + section.id">{{ section.label }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__legal">
          <span>© 2026 Teerawit Jumpadong</span>
          <span>Product names and logos are trademarks of their owners. Typefaces: Red Hat Display and Red Hat Text, via Google Fonts.</span>
        </div>
      </div>
    </div>
  </footer>
</template>
