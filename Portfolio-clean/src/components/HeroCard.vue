<template>
  <div class="card">

    <!-- Status pill -->
    <span class="pill">
      <span class="pill-dot"></span>{{ personal.status }}
    </span>

    <!-- Name -->
    <h1 class="hero-name">{{ personal.name }}</h1>
    <p class="hero-title">{{ personal.title }}</p>
    <p class="hero-bio">{{ personal.bio }}</p>

    <!-- Stats row -->
    <div class="hero-stats">
      <div class="stat-box" v-for="s in personal.stats" :key="s.key">
        <div class="stat-val">{{ s.val }}</div>
        <div class="stat-key">{{ s.key }}</div>
      </div>
    </div>

    <!-- ─────────────────────────────────────────────────
         CORE SKILLS — static, all visible, no marquee
         Lives here so the hero box feels full
    ───────────────────────────────────────────────── -->
    <div class="hero-divider"></div>
    <div class="skills-section-label">Core Skills</div>

    <!-- Flat pill row — all skills visible at once -->
    <div class="skills-pill-row">
      <span
        v-for="s in marqueeSkills" :key="s"
        claskillss="badge"
      >{{ s }}</span>
    </div>

    <!-- Categorised 2×2 grid -->


    <!-- Bottom tags -->
    <div class="hero-tags">
      <span class="badge badge-green">
        <svg width="7" height="7" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" r="3.5" fill="#6ee7b7"/>
        </svg>
        Open to Collaboration
      </span>
      <span class="badge">{{ personal.location }}</span>
      <span class="badge">HAM Radio · {{ personal.callsign }}</span>
    </div>

  </div>
</template>

<script setup>
import { personal, marqueeSkills } from '../data/index.js'
</script>

<style scoped>
/* ── Status pill ──────────────────────────────────────────── */
.pill {
  display: inline-flex; align-items: center; gap: .4rem;
  background: rgba(99,102,241,.12); border: 1px solid rgba(99,102,241,.34);
  border-radius: 999px; padding: .22rem .72rem;
  font-size: .75rem; font-weight: 500; color: #a5b4fc;
  letter-spacing: .025em; margin-bottom: .6rem; flex-shrink: 0;
} 
.pill-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--green); box-shadow: 0 0 6px 2px rgba(110,231,183,.6);
  animation: blink 2.2s ease-in-out infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }

/* ── Name / title / bio ───────────────────────────────────── */
.hero-name {
  font-family: var(--fd);
  font-size: clamp(2rem, 3.2vw, 3rem);
  font-weight: 800; line-height: 1.05; letter-spacing: -.025em;
  background: linear-gradient(130deg, #f0f4ff 20%, #a5b4fc 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; margin-bottom: .28rem; flex-shrink: 0;
}
.hero-title {
  font-family: var(--fd); font-size: clamp(.92rem, 1.3vw, 1.05rem);
  font-weight: 700; color: #818cf8; letter-spacing: .01em;
  margin-bottom: .5rem; flex-shrink: 0;
}
.hero-bio {
  font-size: .88rem; line-height: 1.68; color: var(--text-2);
  margin-bottom: .6rem; flex-shrink: 0;
}

/* ── Stats ────────────────────────────────────────────────── */
.hero-stats {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: .38rem; flex-shrink: 0; margin-bottom: .1rem;
}
.stat-box {
  padding: .5rem; border-radius: 9px;
  background: rgba(99,102,241,.07); border: 1px solid rgba(99,102,241,.18);
  text-align: center;
}
.stat-val {
  font-family: var(--fd); font-size: 1.1rem; font-weight: 800;
  color: #c7d2fe; line-height: 1; margin-bottom: .16rem;
}
.stat-key { font-size: .66rem; color: var(--text-3); letter-spacing: .04em; }

/* ── Core Skills header ───────────────────────────────────── */
.skills-section-label {
  font-family: var(--fm); font-size: .62rem; font-weight: 500;
  letter-spacing: .14em; text-transform: uppercase;
  color: var(--text-3); margin-bottom: .42rem; flex-shrink: 0;
}

/* ── Flat pill row (no marquee — all visible at once) ─────── */
.skills-pill-row {
  display: flex; flex-wrap: wrap; gap: .32rem;
  margin-bottom: .5rem; flex-shrink: 0; font-size: 100;
}

/* ── Categorised skill groups ─────────────────────────────── */
.skill-groups {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: .38rem; flex-shrink: 0; margin-bottom: .5rem;
}
.skill-group {
  padding: .45rem .52rem; border-radius: 10px;
  background: rgba(255,255,255,.025); border: 1px solid rgba(255,255,255,.07);
}
.skill-group-label {
  font-family: var(--fm); font-size: .58rem; font-weight: 500;
  letter-spacing: .12em; text-transform: uppercase;
  color: var(--text-3); margin-bottom: .35rem;
}
.skill-group-tags { display: flex; flex-wrap: wrap; gap: .27rem; }

/* Base skill tag */
.skill-tag {
  display: inline-flex; align-items: center; padding: .2rem .55rem;
  border-radius: 999px; font-size: .74rem; font-weight: 500;
  border: 1px solid rgba(99,102,241,.3);
  background: rgba(99,102,241,.09); color: #c7d2fe;
  transition: all .28s ease; cursor: default; white-space: nowrap;
}
.skill-tag:hover { background: rgba(99,102,241,.22); border-color: rgba(99,102,241,.65); color: #e0e7ff; }
.skill-tag.green { border-color: rgba(110,231,183,.28); background: rgba(110,231,183,.07); color: #6ee7b7; }
.skill-tag.amber { border-color: rgba(251,191,36,.28);  background: rgba(251,191,36,.07);  color: #fbbf24; }
.skill-tag.blue  { border-color: rgba(56,189,248,.28);  background: rgba(56,189,248,.07);  color: #7dd3fc; }

/* ── Bottom tags ──────────────────────────────────────────── */
.hero-tags {
  display: flex; flex-wrap: wrap; gap: .32rem;
  margin-top: auto; padding-top: .5rem; flex-shrink: 0;
  position: absolute; bottom: 1.05rem; left: 1.05rem;
  width: calc(100% - 2.1rem);
}
</style>
