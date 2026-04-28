<template>
  <div class="card">
    <div class="scroll-inner">
    <!-- Certifications -->
    <div class="lbl">Certifications</div>
    <div class="cert-list">
      <div class="cert-row" v-for="c in certs" :key="c.name">
        <div class="cert-icon" :style="{ background: c.bg }">
          <svg v-if="c.type === 'radio'" width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="#818cf8" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
            <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
            <circle cx="12" cy="20" r="1" fill="#818cf8" stroke="none"/>
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="#fb923c" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
        <div>
          <div class="cert-name">{{ c.name }}</div>
          <div class="cert-issuer">{{ c.issuer }}</div>
        </div>
      </div>
    </div>

    <div class="hero-divider" style="margin: 0.65rem 0;"></div>

    <!-- Education -->
    <div class="lbl">Education</div>
    <div class="edu-block">
      <div class="edu-school">{{ personal.education.school }}</div>
      <div class="edu-degree">{{ personal.education.degree }}</div>
      <div class="edu-years">{{ personal.education.years }}</div>
    </div>

    <!-- Connect icons -->
    <div class="connect-row">
      <a :href="personal.github" class="icon-btn" title="GitHub" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .3.2.66.79.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z"/>
        </svg>
      </a>
      <a :href="personal.linkedin" class="icon-btn" title="LinkedIn" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.57V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/>
        </svg>
      </a>
      <a :href="'mailto:' + personal.email" class="icon-btn" title="Email">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </a>
    </div>

    <!-- Email text -->
    <div class="contact-email">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
      <a :href="'mailto:' + personal.email">{{ personal.email }}</a>
    </div>
    </div>
  </div>
</template>

<script setup>
import { certs, personal } from '../data/index.js'
</script>

<style scoped>
.cert-list { display: flex; flex-direction: column; gap: .55rem; }

.cert-row {
  display: flex; align-items: flex-start; gap: .65rem;
  padding: .6rem .65rem; border-radius: 11px;
  background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
  transition: all .35s ease;
}
.cert-row:hover { background: rgba(99,102,241,.07); border-color: rgba(99,102,241,.26); }

.cert-icon {
  width: 2.2rem; height: 2.2rem; border-radius: .5rem;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

/* BIGGER text */
.cert-name   { font-size: .84rem; font-weight: 600; color: #e0e7ff; margin-bottom: .08rem; }
.cert-issuer { font-size: .72rem; color: var(--text-3); }

.edu-block {
  padding: .6rem .65rem; border-radius: 11px;
  background: rgba(99,102,241,.06); border: 1px solid rgba(99,102,241,.16);
  flex-shrink: 0;
}
.edu-school { font-size: .86rem; font-weight: 600; color: #e0e7ff; margin-bottom: .06rem; }
.edu-degree { font-size: .76rem; color: var(--text-2); margin-bottom: .06rem; }
.edu-years  { font-family: var(--fm); font-size: .68rem; color: var(--accent); }

.connect-row { display: flex; gap: .5rem; margin-top: auto; padding-top: .65rem; flex-shrink: 0; }

/* Bigger icon buttons */
.icon-btn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 2.7rem; height: 2.7rem; border-radius: .7rem;
  background: rgba(255,255,255,.055); border: 1px solid rgba(255,255,255,.1);
  color: var(--text-2); text-decoration: none; transition: all .35s ease;
}
.icon-btn:hover {
  background: rgba(99,102,241,.2); border-color: rgba(99,102,241,.5);
  color: #e0e7ff; box-shadow: 0 0 16px rgba(99,102,241,.35); transform: scale(1.08);
}

.contact-email {
  display: flex; align-items: center; gap: .4rem;
  font-size: .76rem; color: var(--text-3); margin-top: .38rem;
}
.contact-email a { color: #818cf8; text-decoration: none; }
.contact-email a:hover { color: #a5b4fc; }
</style>
