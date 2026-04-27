<template>
  <div class="card">
    <!-- Header: label + nav controls -->
    <div class="proj-header">
      <div class="lbl" style="margin-bottom:0">Featured Projects</div>
      <div class="proj-nav">
        <!-- Dot indicators — click to jump to any project -->
        <div class="proj-dots">
          <div
            v-for="(p, i) in projects"
            :key="i"
            class="proj-dot"
            :class="{ active: i === idx }"
            @click="goTo(i)"
          ></div>
        </div>
        <!-- Prev / Next arrows -->
        <button class="btn-icon" @click="prev" :disabled="idx === 0">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button class="btn-icon" @click="next" :disabled="idx === projects.length - 1">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Animated slide transition between projects -->
    <transition name="slide" mode="out-in">
      <div class="proj-slide" :key="idx">

        <!-- 3D model preview / image area -->
        <div class="model-box">
          <!-- Real image if provided; set img: '/images/yourfile.png' in data/index.js -->
          <img
            v-if="current.img"
            :src="current.img"
            class="model-img"
            :alt="current.title"
          />
          <!-- Fallback: animated wireframe cube -->
          <svg v-else class="cube" width="54" height="54" viewBox="0 0 60 60" fill="none">
            <polygon points="30,4 55,17 30,30 5,17"
              :stroke="current.color" stroke-width="1.3" fill="rgba(99,102,241,0.09)"/>
            <polygon points="5,17 30,30 30,56 5,43"
              :stroke="current.color2" stroke-width="1.3" fill="rgba(99,102,241,0.055)"/>
            <polygon points="55,17 30,30 30,56 55,43"
              stroke="#a78bfa" stroke-width="1.3" fill="rgba(167,139,250,0.055)"/>
            <line x1="30" y1="4"  x2="30" y2="56" stroke="rgba(99,102,241,0.2)" stroke-width=".7" stroke-dasharray="3,3"/>
            <line x1="5"  y1="30" x2="55" y2="30" stroke="rgba(99,102,241,0.2)" stroke-width=".7" stroke-dasharray="3,3"/>
          </svg>
          <span class="model-lbl">{{ current.modelLabel }}</span>
        </div>

        <!-- Thumbnail strip — add real images via thumbs[].img in data/index.js -->
        <div class="proj-thumbs" v-if="current.thumbs?.length">
          <div
            v-for="(thumb, ti) in current.thumbs"
            :key="ti"
            class="proj-thumb"
            :class="{ 'active-thumb': ti === 0 }"
          >
            <img v-if="thumb.img" :src="thumb.img" :alt="thumb.label"/>
            <span v-else>{{ thumb.label }}</span>
          </div>
        </div>

        <!-- Text content -->
        <p class="proj-title">{{ current.title }}</p>
        <p class="proj-meta">{{ current.stack }}</p>
        <p class="proj-desc" v-html="current.desc"></p>

        <!-- Action buttons -->
        <div class="proj-btns">
          <button class="btn btn-accent">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.3"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {{ current.cta }}
          </button>
          <button class="btn btn-ghost">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .3.2.66.79.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z"/>
            </svg>
            GitHub
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/index.js'

// ── Carousel state ───────────────────────────────────────────
const idx = ref(0)

// Computed shorthand so template stays clean
const current = computed(() => projects[idx.value])

const next = () => { if (idx.value < projects.length - 1) idx.value++ }
const prev = () => { if (idx.value > 0) idx.value-- }
const goTo = (i) => { idx.value = i }
</script>

<style scoped>
/* ============================================================
   ProjectCarousel.vue — scoped styles
   Safe to edit without touching any other card.
   ============================================================ */

.proj-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  flex-shrink: 0;
}

.proj-nav   { display: flex; gap: 0.28rem; align-items: center; }
.proj-dots  { display: flex; gap: 0.28rem; align-items: center; }

.proj-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  transition: all 0.3s ease;
  cursor: pointer;
}
.proj-dot.active {
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  width: 15px;
  border-radius: 3px;
}

.proj-slide {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

/* Model / image box */
.model-box {
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(99,102,241,0.09), rgba(167,139,250,0.05));
  border: 1px solid rgba(99,102,241,0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.32rem;
  padding: 0.65rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.6rem;
  flex-shrink: 0;
  min-height: 95px;
}
.model-box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg, transparent, transparent 14px,
    rgba(99,102,241,0.035) 14px, rgba(99,102,241,0.035) 15px
  );
}

/* Real image support */
.model-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  opacity: 0.85;
}

/* Rotating wireframe cube */
.cube { position: relative; z-index: 1; animation: spinY 9s linear infinite; }
@keyframes spinY { from { transform: rotateY(0); } to { transform: rotateY(360deg); } }

.model-lbl {
  position: relative;
  z-index: 1;
  font-family: var(--fm);
  font-size: 0.57rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--accent);
  background: rgba(3,5,13,0.55);
  padding: 0.12rem 0.4rem;
  border-radius: 4px;
}

/* Thumbnail strip */
.proj-thumbs { display: flex; gap: 0.35rem; margin-bottom: 0.58rem; flex-shrink: 0; }
.proj-thumb {
  flex: 1;
  height: 34px;
  border-radius: 7px;
  background: rgba(99,102,241,0.09);
  border: 1px solid rgba(99,102,241,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--fm);
  font-size: 0.53rem;
  color: var(--accent);
  letter-spacing: 0.08em;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.proj-thumb:hover {
  background: rgba(99,102,241,0.2);
  border-color: rgba(99,102,241,0.45);
}
.proj-thumb img { width: 100%; height: 100%; object-fit: cover; opacity: 0.75; }
.proj-thumb.active-thumb {
  border-color: rgba(99,102,241,0.7);
  background: rgba(99,102,241,0.18);
  box-shadow: 0 0 10px rgba(99,102,241,0.3);
}

/* Text */
.proj-title {
  font-family: var(--fd);
  font-size: clamp(0.95rem, 1.7vw, 1.38rem);
  font-weight: 700;
  color: #e0e7ff;
  line-height: 1.15;
  margin-bottom: 0.16rem;
  flex-shrink: 0;
}
.proj-meta {
  font-family: var(--fm);
  font-size: 0.59rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--accent);
  margin-bottom: 0.55rem;
  flex-shrink: 0;
}
.proj-desc {
  font-size: 0.74rem;
  line-height: 1.7;
  color: var(--text-2);
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(99,102,241,0.3) transparent;
}
.proj-desc :deep(strong) { color: #c7d2fe; font-weight: 600; }

.proj-btns { display: flex; flex-wrap: wrap; gap: 0.42rem; padding-top: 0.58rem; flex-shrink: 0; }

/* Slide transition */
.slide-enter-active, .slide-leave-active { transition: all 0.32s cubic-bezier(0.4,0,0.2,1); }
.slide-enter-from { opacity: 0; transform: translateX(22px); }
.slide-leave-to   { opacity: 0; transform: translateX(-22px); position: absolute; width: 100%; }
</style>
