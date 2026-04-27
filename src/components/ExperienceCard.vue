<template>
  <div class="card">
    <div class="lbl">Experience</div>

    <!-- Internal scroll only — page never moves -->
    <div class="scroll-inner">
      <div class="tl">
        <div class="tl-item" v-for="e in experiences" :key="e.role + e.period">
          <div class="tl-period">{{ e.period }}</div>
          <div class="tl-role">{{ e.role }}</div>
          <div class="tl-org">{{ e.org }}</div>
          <ul class="tl-bullets">
            <li v-for="b in e.bullets" :key="b">{{ b }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { experiences } from '../data/index.js'
</script>

<style scoped>
/* Internal scroll — isolated to this box */
.scroll-inner {
  flex: 1; overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(99,102,241,0.3) transparent;
  padding-right: 4px; min-height: 0;
}
.scroll-inner::-webkit-scrollbar       { width: 4px; }
.scroll-inner::-webkit-scrollbar-track { background: transparent; }
.scroll-inner::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 4px; }

.tl { display: flex; flex-direction: column; gap: 1.4rem; }

.tl-item { position: relative; padding-left: 1.1rem; }

.tl-item::before {
  content: ''; position: absolute; left: 0; top: .5rem;
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--accent); box-shadow: 0 0 10px rgba(99,102,241,.72);
}
.tl-item::after {
  content: ''; position: absolute; left: 3.5px; top: 1.1rem;
  width: 1px; bottom: -1.4rem;
  background: linear-gradient(to bottom, rgba(99,102,241,.35), transparent);
}
.tl-item:last-child::after { display: none; }

/* BIGGER text throughout */
.tl-period {
  font-family: var(--fm); font-size: .72rem;   /* was .57 */
  font-weight: 500; letter-spacing: .06em; color: var(--accent); margin-bottom: .1rem;
}
.tl-role {
  font-family: var(--fd); font-weight: 700;
  font-size: .96rem;                           /* was .78 */
  color: #e0e7ff; line-height: 1.25; margin-bottom: .08rem;
}
.tl-org {
  font-size: .78rem;                           /* was .65 */
  color: var(--text-3); margin-bottom: .35rem;
}
.tl-bullets { list-style: none; display: flex; flex-direction: column; gap: .22rem; }
.tl-bullets li {
  font-size: .82rem;                           /* was .68 */
  line-height: 1.58; color: var(--text-2);
  padding-left: .9rem; position: relative;
}
.tl-bullets li::before {
  content: '▸'; position: absolute; left: 0;
  color: rgba(99,102,241,.6); font-size: .68rem; top: .06rem;
}
</style>
