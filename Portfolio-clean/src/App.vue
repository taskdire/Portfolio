<template>
  <div id="spotlight"></div>
  <div class="bento">
    <HeroCard        class="c-hero"  />
    <ProjectCarousel class="c-proj"  />
    <ExperienceCard  class="c-exp"   />
    <CertsCard       class="c-certs" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroCard        from './components/HeroCard.vue'
import ProjectCarousel from './components/ProjectCarousel.vue'
import ExperienceCard  from './components/ExperienceCard.vue'
import CertsCard       from './components/CertsCard.vue'

onMounted(() => {
  const spotlight = document.getElementById('spotlight')
  window.addEventListener('mousemove', (e) => {
    spotlight.style.background =
      `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px,` +
      `rgba(99,102,241,0.08) 0%, rgba(99,102,241,0.025) 35%, transparent 70%)`
  }, { passive: true })

  document.querySelectorAll('.card').forEach((card, i) => {
    card.animate(
      [{ opacity: 0, transform: 'translateY(28px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 580, delay: 55 + i * 90, easing: 'cubic-bezier(0.22,1,0.36,1)', fill: 'forwards' }
    )
  })
})
</script>
