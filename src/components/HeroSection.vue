<script setup lang="ts">
import { profile } from '../data/profile'
import EmailAction from './EmailAction.vue'
</script>

<template>
  <section class="hero hero--statement" id="bio" data-enter aria-labelledby="hero-h">
    <div class="wrap">
      <div class="hero-text hero__in">
        <div>
          <p class="t-label">{{ profile.name }}, Bangkok</p>
          <h1 id="hero-h">Software engineer for high-traffic fintech systems</h1>
          <p class="hero__lead">
            Ten years of production software, most recently at EarnIn: consent, analytics and
            frontend architecture for products that handle money and personal data.
          </p>
          <div class="btn-row">
            <EmailAction />
            <a class="btn btn--secondary" :href="profile.resumeUrl" download>Résumé (PDF)</a>
          </div>
        </div>
        <dl class="hero__facts">
          <div><dt>Experience</dt><dd>10+ years</dd></div>
          <div><dt>Most recently</dt><dd>EarnIn, Growth team</dd></div>
          <div><dt>Based in</dt><dd>Bangkok, Thailand</dd></div>
          <div><dt>Education</dt><dd>B.Eng., Kasetsart University</dd></div>
        </dl>
      </div>
    </div>
  </section>
</template>
