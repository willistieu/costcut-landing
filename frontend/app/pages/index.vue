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
        <v-col cols="6" class="text-right d-none d-md-block">
          <v-btn href="#features" variant="text" class="text-none mr-2">Features</v-btn>
          <v-btn href="#how-it-works" variant="text" class="text-none mr-2">How It Works</v-btn>
          <v-btn href="#faq" variant="text" class="text-none mr-2">FAQ</v-btn>
          <!-- <v-btn color="primary" variant="outlined" class="text-none rounded-pill px-6">Get Started for Free</v-btn> -->
        </v-col>
      </v-row>

      <!-- 1. Hero Section -->
      <v-row class="mt-16 pt-12 mb-16 pb-16 align-center">
        <v-col cols="12" md="8" class="text-left">
          <h1 class="text-h2 text-sm-h1 font-weight-black mb-6 line-height-1-2">
            Stop Overpaying for AI.<br />
            <span class="text-gradient">Optimize Your Token Usage with CostCut AI.</span>
          </h1>
          <p class="text-h6 text-muted mb-8 font-weight-regular" style="max-width: 650px;">
            The ultimate AI wrapper that combines local open-source models with your favorite Cloud APIs. Cut your costs, keep the performance.
          </p>
          <div class="d-flex flex-wrap gap-4">
            <v-btn to="/contact" color="primary" size="x-large" class="text-none rounded-pill px-8 mr-4 mb-4 font-weight-bold primary-glow" elevation="8">
              Contact for info
              <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
            </v-btn>
            <!-- <v-btn variant="outlined" color="white" size="x-large" class="text-none rounded-pill px-8 mb-4 font-weight-bold" prepend-icon="mdi-play-circle-outline">
              View Demo
            </v-btn> -->
          </div>
        </v-col>
        <v-col cols="12" md="4" class="justify-center">
          <div class="position-relative w-100">
             <iframe width="100%" height="300" src="https://www.youtube.com/embed/43iraCxzBJI" title="CostCut AI Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-xl elevation-10" style="border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"></iframe>
          </div>
        </v-col>
      </v-row>

      <!-- 2. Pain Point & Solution -->
      <v-row class="mt-16 pt-16">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">Tired of seeing your AI budget vanish?</h2>
        </v-col>

        <v-col cols="12" md="6">
          <div class="glass-panel pa-8 h-100 border-error-subtle hover-lift">
            <div class="d-flex align-center mb-6">
              <v-avatar color="error" variant="tonal" size="56" class="mr-4">
                <v-icon icon="mdi-alert-circle-outline" size="32"></v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold text-error">The Problem</h3>
            </div>
            <p class="text-body-1 text-muted">
              Standard API calls for every prompt are inefficient and expensive.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <div class="glass-panel pa-8 h-100 border-success-subtle hover-lift">
            <div class="d-flex align-center mb-6">
              <v-avatar color="success" variant="tonal" size="56" class="mr-4">
                <v-icon icon="mdi-check-circle-outline" size="32"></v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold text-success">The Solution</h3>
            </div>
            <p class="text-body-1 text-muted">
              CostCut AI acts as an intelligent layer. We use advanced local models (Llama 3.2, Qwen 3, Phi-3) and caching to "pre-process" and optimize your prompts *before* they reach the cloud.
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- 3. Key Features -->
      <v-row id="features" class="mt-16 pt-16">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">Key Features</h2>
        </v-col>

        <v-col cols="12" md="4" sm="6" v-for="(feature, i) in features" :key="i">
          <div class="glass-panel pa-8 h-100 text-center hover-lift d-flex flex-column align-center">
            <v-icon :icon="feature.icon" size="64" :color="feature.color" class="mb-6"></v-icon>
            <h3 class="text-h5 font-weight-bold mb-4">{{ feature.title }}</h3>
            <p class="text-body-1 text-muted">
              {{ feature.desc }}
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- 4. How It Works -->
      <v-row id="how-it-works" class="mt-16 pt-16">
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold mb-4">How It Works</h2>
        </v-col>
        <v-col cols="12">
          <div class="glass-panel pa-8 py-16" style="min-height: 200px;">
             <v-row>
               <v-col cols="12" md="4" class="text-center mb-8 mb-md-0 position-relative">
                  <div class="text-h1 font-weight-black text-primary opacity-20 position-absolute w-100 text-center" style="top: -20px; left: 0; z-index: 0;">1</div>
                  <div class="position-relative z-index-1">
                    <h4 class="text-h5 font-weight-bold mb-4">Select Your Model</h4>
                    <p class="text-muted">Choose from our supported open-source models or plug in your own API key.</p>
                  </div>
               </v-col>
               <v-col cols="12" md="4" class="text-center mb-8 mb-md-0 position-relative">
                  <div class="text-h1 font-weight-black text-primary opacity-20 position-absolute w-100 text-center" style="top: -20px; left: 0; z-index: 0;">2</div>
                  <div class="position-relative z-index-1">
                    <h4 class="text-h5 font-weight-bold mb-4">Enable Saving Mode</h4>
                    <p class="text-muted">Activate our optimization layer with one click.</p>
                  </div>
               </v-col>
               <v-col cols="12" md="4" class="text-center position-relative">
                  <div class="text-h1 font-weight-black text-primary opacity-20 position-absolute w-100 text-center" style="top: -20px; left: 0; z-index: 0;">3</div>
                  <div class="position-relative z-index-1">
                    <h4 class="text-h5 font-weight-bold mb-4">Chat & Save</h4>
                    <p class="text-muted">Experience high-quality AI responses while watching your token consumption drop in real-time.</p>
                  </div>
               </v-col>
             </v-row>
          </div>
        </v-col>
      </v-row>

      <!-- 5. Why Choose Us? -->
      <v-row class="mt-16 pt-16">
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold mb-4">Why Choose Us?</h2>
        </v-col>
        <v-col cols="12">
          <div class="glass-panel rounded-xl overflow-hidden">
            <v-table class="bg-transparent text-left" theme="dark">
              <thead>
                <tr>
                  <th class="text-h6 font-weight-bold pa-6 text-primary border-bottom-subtle">Feature</th>
                  <th class="text-h6 font-weight-bold pa-6 text-white border-bottom-subtle">Traditional AI Chat</th>
                  <th class="text-h6 font-weight-bold pa-6 text-success border-bottom-subtle">CostCut AI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pa-6 font-weight-bold text-white border-bottom-subtle">Token Usage</td>
                  <td class="pa-6 text-muted border-bottom-subtle">Full cost per prompt</td>
                  <td class="pa-6 text-success font-weight-bold border-bottom-subtle">Optimized (Up to 80% less)</td>
                </tr>
                <tr>
                  <td class="pa-6 font-weight-bold text-white border-bottom-subtle">Budget Control</td>
                  <td class="pa-6 text-muted border-bottom-subtle">No built-in limit</td>
                  <td class="pa-6 text-success font-weight-bold border-bottom-subtle">Monthly token caps</td>
                </tr>
                <tr>
                  <td class="pa-6 font-weight-bold text-white border-bottom-subtle">Model Hybrid</td>
                  <td class="pa-6 text-muted border-bottom-subtle">Single source</td>
                  <td class="pa-6 text-success font-weight-bold border-bottom-subtle">Local + Cloud Hybrid</td>
                </tr>
                <tr>
                  <td class="pa-6 font-weight-bold text-white">Performance</td>
                  <td class="pa-6 text-muted">Standard</td>
                  <td class="pa-6 text-success font-weight-bold">High-speed, Cost-efficient</td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </v-col>
      </v-row>

      <!-- 6. Social Proof / Dashboard Preview -->
      <v-row class="mt-16 pt-16">
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold mb-4">Dashboard Snapshot</h2>
        </v-col>
        <v-col cols="12" class="text-center">
          <div class="glass-panel pa-8 hover-lift">
             <v-img :src="dashboardImg" height="500" cover class="rounded-xl elevation-5 mx-auto mb-8" style="max-width: 900px;" alt="Dashboard Preview Graphic"></v-img>
             <p class="text-h6 font-italic text-muted max-w-md mx-auto" style="max-width: 800px;">
               "See your savings in real-time. Our dashboard visualizes exactly how many tokens you've saved compared to standard usage."
             </p>
          </div>
        </v-col>
      </v-row>

      <!-- 7. FAQ -->
      <v-row id="faq" class="mt-16 pt-16">
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold mb-4">Frequently Asked Questions</h2>
        </v-col>
        <v-col cols="12" md="10" class="mx-auto">
          <v-expansion-panels variant="accordion" class="glass-panel rounded-xl custom-panels bg-transparent">
            <v-expansion-panel v-for="(faq, i) in faqs" :key="i" class="bg-transparent border-bottom-subtle">
              <v-expansion-panel-title class="text-h6 font-weight-bold text-white py-4">{{ faq.q }}</v-expansion-panel-title>
              <v-expansion-panel-text class="text-body-1 text-muted pb-4">
                <div v-html="faq.a"></div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <div class="text-center mt-8">
             <v-btn variant="outlined" color="primary" class="rounded-pill px-8 text-none font-weight-bold">Still have questions?</v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- 8. Footer / Final CTA -->
      <v-row class="mt-16 pt-16 mb-16 pb-16">
        <v-col cols="12">
          <div class="glass-panel pa-12 text-center final-cta-container position-relative overflow-hidden d-flex flex-column align-center">
            <div class="glow-orb glow-orb-secondary" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 600px; opacity: 0.3;"></div>
            <div class="position-relative z-index-1">
              <h2 class="text-h3 font-weight-black mb-6">Ready to reduce your AI costs?</h2>
              <v-btn color="primary" size="x-large" class="text-none rounded-pill px-10 font-weight-bold primary-glow" elevation="12">
                Start Saving Now
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Footer Links -->
      <v-row class="mt-8 pt-8 border-top-muted">
        <v-col cols="12" md="6">
          <div class="d-flex align-center mb-2">
            <v-icon icon="mdi-cpu-64-bit" color="primary" class="mr-2"></v-icon>
            <span class="font-weight-bold">CostCut AI</span>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="text-md-right">
          <!-- <v-btn to="/documentation" variant="text" size="small" class="text-none text-muted">Documentation</v-btn> -->
          <v-btn to="/privacy-policy" variant="text" size="small" class="text-none text-muted">Privacy Policy</v-btn>
          <v-btn to="/contact" variant="text" size="small" class="text-none text-muted">Support</v-btn>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import dashboardImg from '~/assets/images/image.png';

const features = ref([
  { title: 'Smart Saving Mode', desc: 'Automatically optimizes prompts using lightweight local models to minimize token expenditure without losing output quality.', icon: 'mdi-piggy-bank', color: 'success' },
  { title: 'Model Flexibility', desc: 'Seamlessly switch between cutting-edge local models and your preferred Cloud API providers.', icon: 'mdi-swap-horizontal', color: 'primary' },
  { title: 'Total Budget Control', desc: 'Set your monthly token limits. Never get an unexpected bill at the end of the month again.', icon: 'mdi-chart-pie', color: 'warning' },
  { title: 'Full-Featured AI Chat', desc: 'Enjoy the same powerful chat experience you love, now with a layer of cost-efficiency built-in.', icon: 'mdi-chat', color: 'info' },
  { title: 'Intelligent Caching', desc: 'Repeated or similar queries are handled by our system, eliminating redundant API calls.', icon: 'mdi-database-clock', color: 'secondary' }
]);

const faqs = ref([
  {
    q: 'What exactly is CostCut AI?',
    a: 'CostCut AI is an intelligent optimization layer for your AI workflows. It acts as a smart bridge between your queries and Cloud AI models, using local open-source models and advanced caching to filter, refine, and optimize prompts. This reduces the number of tokens sent to expensive cloud services, saving you money without compromising response quality.'
  },
  {
    q: 'Do I still get to use the AI models I love?',
    a: 'Yes! CostCut AI doesn\'t replace your favorite Cloud models; it enhances them. You can continue using top-tier models through your own API keys, but with our optimization layer working in the background to ensure you only pay for what’s truly necessary.'
  },
  {
    q: 'Is it difficult to set up?',
    a: 'Not at all. You can get started by simply selecting your preferred model from our integrated list (like Llama 3.2, Qwen 3, or Phi-3) and connecting your Cloud API keys. Our interface is designed to be intuitive for both developers and casual users.'
  },
  {
    q: 'How does "Saving Mode" actually save me money?',
    a: 'Saving Mode uses a two-pronged approach:<br/><br/>1. <strong>Local Pre-processing:</strong> It uses lightweight local models to process simple tasks or "clean" complex prompts, preventing unnecessary cloud requests.<br/>2. <strong>Intelligent Caching:</strong> The system learns from your frequent or similar queries. Instead of re-sending redundant prompts to the cloud, it retrieves optimized responses from its local cache, costing you zero cloud tokens.'
  },
  {
    q: 'Will my AI responses become less intelligent if I use CostCut AI?',
    a: 'Absolutely not. CostCut AI is designed to preserve intelligence. For complex tasks, the system intelligently routes the core request to your high-performance Cloud model while using local models only for structuring, cleaning, or optimizing the context. You get the quality you expect with a smaller token bill.'
  },
  {
    q: 'Which models are supported?',
    a: 'We currently support a robust suite of open-source models, including <strong>Llama 3.2, Qwen 3, and Phi-3</strong>. We are constantly adding support for new models as they become available.'
  },
  {
    q: 'How do I control my monthly AI spending?',
    a: 'You can set a <strong>Monthly Token Limit</strong> directly in the CostCut AI dashboard. Once you approach or reach this limit, the system can notify you or restrict further cloud calls, ensuring you never face an "end-of-month surprise" on your API bill.'
  },
  {
    q: 'Can I see exactly how much I am saving?',
    a: 'Yes. Our built-in <strong>Dashboard</strong> provides real-time visualization of your token consumption. You can see a direct comparison of your costs <em>with</em> vs. <em>without</em> CostCut AI, showing you exactly how many tokens (and dollars) you’ve saved over time.'
  },
  {
    q: 'Is my data safe when using CostCut AI?',
    a: 'Privacy is a core pillar of CostCut AI. Because we utilize local models, a significant portion of your data processing happens right on your machine, never leaving your environment. Your Cloud API keys are handled securely and are used strictly for the requests you authorize.'
  }
]);
</script>

<style scoped>
.z-index-1 {
  z-index: 1;
}

.line-height-1-2 {
  line-height: 1.2 !important;
}

.border-error-subtle {
  border-color: rgba(244, 67, 54, 0.2) !important;
}

.border-success-subtle {
  border-color: rgba(76, 175, 80, 0.2) !important;
}

.border-bottom-subtle {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
}

.border-top-muted {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.opacity-20 {
  opacity: 0.2;
}

.custom-panels {
  background: transparent !important;
}
</style>
