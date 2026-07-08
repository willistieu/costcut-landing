<template>
  <div class="docs-page position-relative min-vh-100 d-flex flex-column">
    <!-- Glowing Orbs Background -->
    <div class="glow-orb glow-orb-primary" style="top: 20%; left: 10%; width: 500px; height: 500px; opacity: 0.15;"></div>
    <div class="glow-orb glow-orb-secondary" style="bottom: 10%; right: 5%; width: 400px; height: 400px; animation-delay: -3s; opacity: 0.15;"></div>

    <v-container class="position-relative z-index-1 flex-grow-1 py-16">
      <!-- Back to Home -->
      <div class="mb-8">
        <v-btn to="/" variant="text" prepend-icon="mdi-arrow-left" class="text-none font-weight-bold text-muted px-0">
          Back to Home
        </v-btn>
      </div>

      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="text-center mb-12">
            <h1 class="text-h2 font-weight-black mb-4">
              <span class="text-gradient">Documentation</span>
            </h1>
            <p class="text-h6 text-muted font-weight-regular max-w-md mx-auto">
              Learn how to integrate and maximize your savings with CostCut AI.
            </p>
          </div>

          <div class="glass-panel pa-8 pa-md-12 text-body-1 text-muted">
            <h2 class="text-h4 font-weight-bold text-white mb-6">Getting Started</h2>
            <p class="mb-6">
              CostCut AI provides an intelligent optimization layer that connects seamlessly to your existing workflows. By routing simple tasks to local open-source models, we drastically reduce the overhead on your Cloud API keys.
            </p>

            <h3 class="text-h5 font-weight-bold text-white mt-8 mb-4">1. Installation</h3>
            <p class="mb-4">You can easily set up CostCut AI by following our quick start guide.</p>
            <div class="code-block bg-grey-darken-4 pa-4 rounded-lg mb-6 font-monospace">
              npm install costcut-ai
            </div>

            <h3 class="text-h5 font-weight-bold text-white mt-8 mb-4">2. Configuration</h3>
            <p class="mb-4">
              Initialize CostCut AI with your chosen local models and your Cloud API keys.
            </p>
            <div class="code-block bg-grey-darken-4 pa-4 rounded-lg mb-6 font-monospace">
              import { CostCut } from 'costcut-ai';<br><br>
              const client = new CostCut({<br>
              &nbsp;&nbsp;cloudKey: process.env.CLOUD_API_KEY,<br>
              &nbsp;&nbsp;localModel: 'llama-3.2',<br>
              &nbsp;&nbsp;savingMode: true<br>
              });
            </div>

            <h3 class="text-h5 font-weight-bold text-white mt-8 mb-4">3. Key Concepts</h3>
            <ul class="mb-6 ml-4">
              <li class="mb-2"><strong class="text-white">Smart Routing:</strong> Our engine evaluates query complexity dynamically.</li>
              <li class="mb-2"><strong class="text-white">Intelligent Caching:</strong> We store embeddings of past queries to resolve identical requests instantly at zero cost.</li>
              <li class="mb-2"><strong class="text-white">Budget Limits:</strong> Hard-caps that automatically switch your system to 100% local processing when you run out of your monthly quota.</li>
            </ul>

            <v-divider class="my-8 border-opacity-25"></v-divider>

            <div class="text-center">
              <p class="mb-4">Looking for detailed API references and advanced configurations?</p>
              <v-btn color="primary" variant="outlined" class="rounded-pill px-8">View Full API Reference</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.z-index-1 {
  z-index: 1;
}

.max-w-md {
  max-width: 600px;
}

.font-monospace {
  font-family: monospace;
}

ul {
  list-style-type: disc;
}
</style>
