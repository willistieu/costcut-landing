<template>
  <div class="landing-page position-relative">
    <!-- Glowing Orbs Background -->
    <div class="glow-orb glow-orb-primary" style="top: 10%; left: 10%; width: 400px; height: 400px;"></div>
    <div class="glow-orb glow-orb-secondary" style="top: 40%; right: 5%; width: 500px; height: 500px; animation-delay: -2s;"></div>
    <div class="glow-orb glow-orb-primary" style="bottom: 10%; left: 20%; width: 300px; height: 300px; animation-delay: -5s;"></div>

    <v-container class="position-relative z-index-1 pb-16">
      
      <!-- Navbar (Simple) -->
      <v-row class="py-6 align-center">
        <v-col cols="6">
          <div class="text-h5 font-weight-bold d-flex align-center">
            <v-icon icon="mdi-cpu-64-bit" color="primary" class="mr-2"></v-icon>
            Cost<span class="text-primary">Cut</span>
          </div>
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn variant="text" class="text-none mr-2">Features</v-btn>
          <v-btn variant="text" class="text-none mr-2">Architecture</v-btn>
          <v-btn color="primary" variant="outlined" class="text-none rounded-pill px-6">Join Waitlist</v-btn>
        </v-col>
      </v-row>

      <!-- Hero Section -->
      <v-row class="mt-16 pt-12 mb-16 pb-16 align-center">
        <v-col cols="12" md="8" class="text-left">
          <h1 class="text-h2 text-sm-h1 font-weight-black mb-6 line-height-1-2">
            Premium AI.<br />
            <span class="text-gradient">Fraction of the Cost.</span>
          </h1>
          <p class="text-h6 text-muted mb-8 font-weight-regular" style="max-width: 600px;">
            An intelligent routing engine that delivers state-of-the-art AI chat experiences by seamlessly orchestrating local GGUF models and Cloud APIs.
          </p>
          <div class="d-flex flex-wrap gap-4">
            <v-btn color="primary" size="x-large" class="text-none rounded-pill px-8 mr-4 mb-4 font-weight-bold primary-glow" elevation="8">
              Join the Waitlist
              <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
            </v-btn>
            <v-btn variant="outlined" color="white" size="x-large" class="text-none rounded-pill px-8 mb-4 font-weight-bold" prepend-icon="mdi-presentation">
              View Pitch Deck
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="d-none d-md-flex justify-center">
          <div class="position-relative w-100">
            <v-img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop" class="rounded-xl elevation-10" cover aspect-ratio="1" alt="AI Hero Graphic"></v-img>
            <!-- Decorative element overlaid on image -->
            <div class="glass-panel pa-4 position-absolute text-center" style="bottom: -20px; left: -20px; right: 20px;">
               <div class="text-subtitle-2 font-weight-bold"><v-icon icon="mdi-robot-outline" color="primary" class="mr-1"></v-icon> Intelligent Routing Active</div>
               <div class="text-caption text-success font-weight-bold">Saved $42 this session</div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Problem vs Solution Section -->
      <v-row class="mt-16 pt-16">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">The API Bill Trap</h2>
          <p class="text-subtitle-1 text-muted mx-auto mb-8" style="max-width: 600px;">
            Scaling AI shouldn't mean bankrupting your startup with unpredictable cloud costs.
          </p>
          <v-img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" height="300" cover class="rounded-xl elevation-5 mx-auto mb-8" style="max-width: 800px;" alt="Data Chart Graphic"></v-img>
        </v-col>

        <v-col cols="12" md="6">
          <div class="glass-panel pa-8 h-100 border-error-subtle">
            <div class="d-flex align-center mb-6">
              <v-avatar color="error" variant="tonal" size="56" class="mr-4">
                <v-icon icon="mdi-alert-circle-outline" size="32"></v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold text-error">The Problem</h3>
            </div>
            <ul class="custom-list text-body-1">
              <li class="mb-4"><strong>Unpredictable Scaling:</strong> Paying per token means a successful launch equals a massive bill.</li>
              <li class="mb-4"><strong>Wasted Resources:</strong> Using GPT-4 class models for trivial tasks like formatting or simple drafting.</li>
              <li><strong>Budget Anxiety:</strong> Fear of malicious abuse or runaway loops destroying your runway.</li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <div class="glass-panel pa-8 h-100 border-success-subtle">
            <div class="d-flex align-center mb-6">
              <v-avatar color="success" variant="tonal" size="56" class="mr-4">
                <v-icon icon="mdi-check-circle-outline" size="32"></v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold text-success">The CostCut Solution</h3>
            </div>
            <ul class="custom-list text-body-1">
              <li class="mb-4"><strong>Hybrid Architecture:</strong> Offload 80% of tasks to local GGUF models (Llama 3.2, Qwen 3).</li>
              <li class="mb-4"><strong>Intelligent Routing:</strong> Only trigger expensive Cloud APIs when complex reasoning is strictly required.</li>
              <li><strong>Hard Cost Controls:</strong> Strict token limits and automatic local fallbacks guarantee you never exceed budget.</li>
            </ul>
          </div>
        </v-col>
      </v-row>

      <!-- Key Differentiators -->
      <v-row class="mt-16 pt-16">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">Why CostCut?</h2>
          <p class="text-subtitle-1 text-muted mx-auto mb-8" style="max-width: 600px;">
            We've built the most efficient AI inference pipeline designed specifically for constrained environments and VPS deployments.
          </p>
          <v-img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" height="250" cover class="rounded-xl elevation-5 mx-auto mb-8" style="max-width: 800px;" alt="Tech Infrastructure Graphic"></v-img>
        </v-col>

        <v-col cols="12" md="4">
          <div class="glass-panel pa-8 h-100 text-center hover-lift">
            <v-icon icon="mdi-transit-connection-variant" size="64" color="primary" class="mb-6"></v-icon>
            <h3 class="text-h5 font-weight-bold mb-4">Cloud Optimized Pipeline</h3>
            <p class="text-body-1 text-muted">
              A multi-step process combining strong agents (prep), Local Drafting, targeted Web Search, Cloud Verification, and Local Synthesis to minimize API calls.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="glass-panel pa-8 h-100 text-center hover-lift">
            <v-icon icon="mdi-shield-check" size="64" color="secondary" class="mb-6"></v-icon>
            <h3 class="text-h5 font-weight-bold mb-4">Resource Safeguards</h3>
            <p class="text-body-1 text-muted">
              Automatic 70% CPU and RAM caps ensure the host system remains responsive, making CostCut perfectly viable for cheap VPS deployments.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="glass-panel pa-8 h-100 text-center hover-lift">
            <v-icon icon="mdi-chart-line-variant" size="64" color="success" class="mb-6"></v-icon>
            <h3 class="text-h5 font-weight-bold mb-4">Absolute Cost Control</h3>
            <p class="text-body-1 text-muted">
              Set hard monthly limits. If Cloud quotas are hit, the system seamlessly falls back to 100% local inference without dropping user requests.
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- Architecture Visualization Placeholder -->
      <v-row class="mt-16 pt-16">
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold mb-4">How It Works</h2>
        </v-col>
        <v-col cols="12">
          <div class="glass-panel pa-8 d-flex flex-column align-center justify-center text-center py-16" style="min-height: 400px;">
            <v-img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" height="200" cover class="rounded-xl mb-8 w-100" style="max-width: 800px;" alt="Architecture Flow Graphic"></v-img>
            <v-icon icon="mdi-sitemap" size="80" color="primary" class="mb-6"></v-icon>
            <h3 class="text-h5 font-weight-bold mb-2">Node.js + SQLite & Nuxt Architecture</h3>
            <p class="text-body-1 text-muted max-w-md mx-auto mb-8">
              A robust, lightweight backend managing a dynamic queue of inference tasks, routing between local `node-llama-cpp` instances and external API providers.
            </p>
            <div class="d-flex align-center justify-center flex-wrap gap-4 mt-4 w-100 architecture-flow">
              <div class="arch-node">User Request</div>
              <v-icon icon="mdi-arrow-right" class="mx-2"></v-icon>
              <div class="arch-node highlight">Router Engine</div>
              <v-icon icon="mdi-arrow-right" class="mx-2"></v-icon>
              <div class="d-flex flex-column gap-2">
                <div class="arch-node local">Local Model (Free)</div>
                <div class="arch-node cloud">Cloud API (Paid)</div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Final CTA -->
      <v-row class="mt-16 pt-16 mb-16 pb-16">
        <v-col cols="12">
          <div class="glass-panel pa-12 text-center final-cta-container position-relative overflow-hidden d-flex flex-column align-center">
            <v-img src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=1200&auto=format&fit=crop" cover class="position-absolute w-100 h-100" style="top: 0; left: 0; opacity: 0.15;" alt="Abstract Space Graphic"></v-img>
            <div class="glow-orb glow-orb-secondary" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 600px; opacity: 0.3;"></div>
            <div class="position-relative z-index-1">
              <h2 class="text-h3 font-weight-black mb-6">Invest in the Future of <br/><span class="text-gradient">Efficient AI.</span></h2>
              <p class="text-h6 text-muted mb-8 mx-auto" style="max-width: 600px;">
                Join the revolution of sustainable, cost-effective AI deployment. Don't let cloud providers tax your innovation.
              </p>
              <v-btn color="primary" size="x-large" class="text-none rounded-pill px-10 font-weight-bold primary-glow" elevation="12">
                Get Early Access
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Footer -->
      <v-row class="mt-8 pt-8 border-top-muted">
        <v-col cols="12" md="6">
          <div class="d-flex align-center mb-2">
            <v-icon icon="mdi-cpu-64-bit" color="primary" class="mr-2"></v-icon>
            <span class="font-weight-bold">CostCut</span>
          </div>
          <p class="text-caption text-muted">© 2026 CostCut Inc. All rights reserved.</p>
        </v-col>
        <v-col cols="12" md="6" class="text-md-right">
          <v-btn variant="text" size="small" class="text-none text-muted">Privacy Policy</v-btn>
          <v-btn variant="text" size="small" class="text-none text-muted">Terms of Service</v-btn>
          <v-btn variant="text" size="small" class="text-none text-muted">Contact</v-btn>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<style scoped>
.z-index-1 {
  z-index: 1;
}

.line-height-1-2 {
  line-height: 1.2 !important;
}

.custom-list {
  list-style-type: none;
  padding-left: 0;
}

.custom-list li {
  position: relative;
  padding-left: 28px;
}

.custom-list li::before {
  content: '•';
  position: absolute;
  left: 8px;
  color: var(--color-text-muted);
  font-size: 1.5em;
  line-height: 1;
  top: -4px;
}

.border-error-subtle {
  border-color: rgba(244, 67, 54, 0.2);
}

.border-success-subtle {
  border-color: rgba(76, 175, 80, 0.2);
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
}

.hero-graphic {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50% !important;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, rgba(17, 17, 26, 0.8) 70%);
  border: 1px solid rgba(99, 102, 241, 0.3);
  position: relative;
}

.hero-graphic::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  border: 1px dashed rgba(99, 102, 241, 0.5);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
}

.border-top-muted {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.max-w-md {
  max-width: 600px;
}

.arch-node {
  padding: 12px 24px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 600;
  font-size: 0.9rem;
}

.arch-node.highlight {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.5);
  color: #a5b4fc;
}

.arch-node.local {
  background: rgba(76, 175, 80, 0.1);
  border-color: rgba(76, 175, 80, 0.3);
  color: #81c784;
}

.arch-node.cloud {
  background: rgba(244, 67, 54, 0.1);
  border-color: rgba(244, 67, 54, 0.3);
  color: #e57373;
}

@media (max-width: 600px) {
  .architecture-flow {
    flex-direction: column;
  }
  .architecture-flow .mdi-arrow-right {
    transform: rotate(90deg);
    margin: 16px 0 !important;
  }
}
</style>
