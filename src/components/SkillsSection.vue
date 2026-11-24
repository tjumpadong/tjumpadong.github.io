<script setup lang="ts">
import { profile } from '../data/profile'

const iconFor: Record<string, string> = {
  'JavaScript (Node.js, React, TypeScript)': 'react',
  Scala: 'scala',
  Elixir: 'elixir',
  Python: 'python',
  GraphQL: 'graphql',
  MongoDB: 'mongodb',
  PostgreSQL: 'postgres',
  AWS: 'aws',
  GCP: 'google-cloud',
  Docker: 'docker',
  Kubernetes: 'kubernetes',
  Nginx: 'nginx',
  Playwright: 'playwright',
  Claude: 'anthropic',
}

const iconsFor = (items: string[]) => items.map((item) => iconFor[item]).filter(Boolean)
</script>

<template>
  <section class="section" id="skills" style="--h: 1; --hm: 2" aria-labelledby="skills-h">
    <div class="wrap stack-6">
      <div class="section-head">
        <h2 id="skills-h">
          Skills.
          <span class="muted">The languages, data stores and infrastructure I use at work.</span>
        </h2>
      </div>

      <div class="grid">
        <div v-for="group in profile.skills" :key="group.group" class="span-3">
          <h3>{{ group.group }}</h3>
          <div v-if="iconsFor(group.items).length" class="ic-row" aria-hidden="true">
            <img
              v-for="icon in iconsFor(group.items)"
              :key="icon"
              class="ic ic-24"
              :src="'/assets/icons/' + icon + '.svg'"
              alt=""
            />
          </div>
          <ul class="checks">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div class="grid">
        <div class="span-6">
          <p class="t-label">Education</p>
          <p>
            {{ profile.education.institution }}, {{ profile.education.location }}:
            {{ profile.education.degree }}, GPA {{ profile.education.gpa }}.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
