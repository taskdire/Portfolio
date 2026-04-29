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

        <!-- 3D model preview / image / video area -->
        <div class="model-box">
          <video
            v-if="current.thumbs && current.thumbs[selectedThumbIdx] && current.thumbs[selectedThumbIdx].video"
            :src="current.thumbs[selectedThumbIdx].img"
            class="model-img"
            controls
            autoplay
            loop
            muted
          ></video>
          <img
            v-else-if="current.thumbs && current.thumbs[selectedThumbIdx] && current.thumbs[selectedThumbIdx].img"
            :src="current.thumbs[selectedThumbIdx].img"
            class="model-img"
            :alt="current.thumbs[selectedThumbIdx].label"
          />
          <img
            v-else-if="current.img"
            :src="current.img"
            class="model-img"
            :alt="current.title"
          />
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
        </div>

        <!-- Thumbnail strip — add real images via thumbs[].img in data/index.js -->
        <div class="proj-thumbs" v-if="current.thumbs?.length">
          <div
            v-for="(thumb, ti) in current.thumbs"
            :key="ti"
            class="proj-thumb"
            :class="{ 'active-thumb': ti === selectedThumbIdx }"
            @click="selectedThumbIdx = ti"
            style="cursor:pointer;"
          >
            <span>{{ thumb.label }}</span>
          </div>
        </div>

        <!-- Text content -->
        <p class="proj-title">{{ current.title }}</p>
        <p class="proj-meta">{{ current.stack }}</p>
        <p class="proj-desc" v-html="current.desc"></p>

      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { projects } from '../data/index.js'

// ── Carousel state ───────────────────────────────────────────
const idx = ref(0)
const selectedThumbIdx = ref(0)

// Computed shorthand so template stays clean
const current = computed(() => projects[idx.value])

// Reset selected thumb when project changes
watch(idx, () => { selectedThumbIdx.value = 0 })

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
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(99,102,241,0.3) transparent;
  padding-right: 4px;
  padding-bottom: 0.6rem;
}
.proj-slide::-webkit-scrollbar       { width: 4px; }
.proj-slide::-webkit-scrollbar-track { background: transparent; }
.proj-slide::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 4px; }

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
  min-height: 200px;
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
  object-fit: contain;
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
  min-height: 0;
}
.proj-desc :deep(strong) { color: #c7d2fe; font-weight: 600; }

.proj-btns { 
  display: flex; flex-wrap: wrap; gap: 0.42rem; flex-shrink: 0;
  position: absolute; bottom: 1.05rem; left: 1.05rem;
}

@media (max-width: 600px) {
  .proj-slide {
    position: relative;
  }
  .proj-btns {
    position: static;
    margin-top: 1rem;
    left: unset;
    bottom: unset;
  }
}

/* Slide transition */
.slide-enter-active, .slide-leave-active { transition: all 0.32s cubic-bezier(0.4,0,0.2,1); }
.slide-enter-from { opacity: 0; transform: translateX(22px); }
.slide-leave-to   { opacity: 0; transform: translateX(-22px); position: absolute; width: 100%; }
</style>
