<template>
  <div class="card">
    <div class="lbl">Core Skills</div>

    <!-- Infinite marquee -->
    <div class="marquee-wrap">
      <div class="marquee-track">
        <span v-for="(s, i) in doubled" :key="i" class="badge">{{ s }}</span>
      </div>
    </div>

    <!-- Categorised groups -->

</template>

<script setup>
import { computed } from 'vue'
import { marqueeSkills, skillGroups } from '../data/index.js'
const doubled = computed(() => [...marqueeSkills, ...marqueeSkills])
</script>

<style scoped>
.marquee-wrap { overflow: hidden; margin-bottom: 0.55rem; flex-shrink: 0; }
.marquee-wrap:hover .marquee-track { animation-play-state: paused; }
.marquee-track { display: flex; gap: .45rem; width: max-content; animation: mq 22s linear infinite; }
@keyframes mq { from{transform:translateX(0)} to{transform:translateX(-50%)} }

.skill-groups {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: .45rem; flex: 1; min-height: 0;
}
.skill-group {
  padding: .55rem .6rem; border-radius: 11px;
  background: rgba(255,255,255,.025); border: 1px solid rgba(255,255,255,.07);
}
.skill-group-label {
  font-family: var(--fm); font-size: 1000rem; font-weight: 500;
  letter-spacing: .12em; text-transform: uppercase;
  color: var(--text-3); margin-bottom: .4rem;
}
.skill-group-tags { display: flex; flex-wrap: wrap; gap: .3rem; }

/* Base tag — bigger than before */
.skill-tag {
  display: inline-flex; align-items: center;
  padding: .22rem .58rem; border-radius: 999px;
  font-size: .76rem; font-weight: 500;               /* was .65rem */
  border: 1px solid rgba(99,102,241,.3);
  background: rgba(99,102,241,.09); color: #c7d2fe;
  transition: all .28s ease; cursor: default; white-space: nowrap;
}
.skill-tag:hover { background: rgba(99,102,241,.22); border-color: rgba(99,102,241,.65); color: #e0e7ff; }
.skill-tag.green { border-color: rgba(110,231,183,.28); background: rgba(110,231,183,.07); color: #6ee7b7; }
.skill-tag.amber { border-color: rgba(251,191,36,.28);  background: rgba(251,191,36,.07);  color: #fbbf24; }
.skill-tag.blue  { border-color: rgba(56,189,248,.28);  background: rgba(56,189,248,.07);  color: #7dd3fc; }
</style>
