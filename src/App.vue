<script setup lang="ts">
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import StatementSection from './components/StatementSection.vue'
import WorkSection from './components/WorkSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteNav />
  <main id="top">
    <HeroSection />
    <StatementSection />
    <WorkSection />
    <ExperienceSection />
    <SkillsSection />
  </main>
  <SiteFooter />
</template>
