# Fundraising Landing Page Implementation Plan

This plan outlines the creation of a high-impact, investor-focused landing page for **CostCut**. The goal is to highlight the project's unique value proposition: delivering premium AI chat experiences while drastically reducing API costs through a hybrid local/cloud architecture and intelligent token-saving pipelines.


## Proposed Changes

### Frontend (Nuxt 4 + Vuetify 4)

#### [MODIFY] `frontend/app/pages/index.vue`
- Replace the existing `index.vue` file with the new landing page content.

#### [NEW] `frontend/app/pages/index.vue` (The Landing Page)
Create a new, premium landing page designed with a glassmorphism aesthetic to wow investors.

**Proposed Sections:**
1. **Hero Section:**
   - Catchy Headline: "Premium AI. Fraction of the Cost." or "AI Without the Cloud Bill."
   - Subheadline summarizing the hybrid local/cloud approach.
   - Two CTAs: "Join the Waitlist" and "View Pitch Deck" (placeholder).
   - Visuals: Animated glowing orbs and glassmorphic cards in the background to emphasize a state-of-the-art tech aesthetic.

2. **The Problem vs. The Solution:**
   - **Problem:** Unpredictable, skyrocketing LLM API costs for scale.
   - **Solution (CostCut):** An intelligent routing engine that offloads tasks to local GGUF models (Llama 3.2, Qwen 3) and only uses expensive Cloud APIs when strictly necessary.

3. **Key Differentiators (Features):**
   - **Cloud Optimized Pipeline:** Highlight the multi-step process (Qwen3 prep -> Local Draft -> Web Search -> Cloud Verification -> Local Synthesis).
   - **Resource Safeguards:** Highlight the automatic 70% CPU/RAM caps, making it viable for cheap VPS deployments.
   - **Cost Controls:** Monthly token limits and automatic local fallbacks to ensure costs *never* exceed budgets.

4. **Architecture Visualization:**
   - A clean, interactive, or visually appealing diagram/flowchart representing the Node.js/SQLite + Nuxt architecture and the inference routing engine.

5. **Final CTA:**
   - "Invest in the Future of Efficient AI."

#### [MODIFY] `frontend/nuxt.config.ts` (if necessary)
- Ensure any new fonts (e.g., Inter or Outfit) or Vuetify theme extensions required for the premium landing page are properly configured.

## Verification Plan

### Automated Tests
- Run `npm run build` in the frontend directory to ensure the new pages and renaming do not break the Nuxt routing and build process.

### Manual Verification
- Start the frontend development server (`npm run dev`).
- Navigate to `http://localhost:3000/` and verify the landing page renders correctly, animations are smooth, and the design meets the "premium glassmorphism" requirements.
- Click the "Join the Waitlist" CTA and verify it triggers the expected action (e.g., opens a modal, scrolls to a form, or opens an email link).
