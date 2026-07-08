<template>
  <div class="privacy-page position-relative min-vh-100 d-flex flex-column">
    <!-- Glowing Orbs Background -->
    <div class="glow-orb glow-orb-secondary" style="top: 10%; left: -5%; width: 400px; height: 400px; opacity: 0.15;"></div>
    <div class="glow-orb glow-orb-primary" style="bottom: 20%; right: 10%; width: 450px; height: 450px; animation-delay: -5s; opacity: 0.15;"></div>

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
              Privacy <span class="text-gradient">Policy</span>
            </h1>
            <p class="text-body-1 text-muted">Last updated: July 8, 2026</p>
          </div>

          <div class="glass-panel pa-8 pa-md-12 text-body-1 text-muted">
            <p class="mb-6">
              At CostCut AI, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or use our services.
            </p>

            <h3 class="text-h5 font-weight-bold text-white mt-8 mb-4">1. Local Processing First</h3>
            <p class="mb-6">
              Unlike traditional AI wrappers, CostCut AI routes a significant portion of your requests to <strong>local models running on your own infrastructure</strong>. This means that for locally-handled queries, your data never leaves your server. We believe the best way to secure your data is not to collect it at all.
            </p>

            <h3 class="text-h5 font-weight-bold text-white mt-8 mb-4">2. Cloud API Requests</h3>
            <p class="mb-6">
              When complex tasks require Cloud APIs (like OpenAI or Anthropic), we only transmit the necessary context required to fulfill the request. Your API keys are encrypted at rest and in transit, and are strictly used to authenticate with the providers you authorize. We do not log the contents of your cloud requests.
            </p>

            <h3 class="text-h5 font-weight-bold text-white mt-8 mb-4">3. Data We Collect</h3>
            <p class="mb-6">
              We collect minimal usage telemetry strictly for billing purposes and dashboard visualizations (e.g., token counts and optimization metrics). This data is aggregated and anonymized wherever possible.
            </p>

            <h3 class="text-h5 font-weight-bold text-white mt-8 mb-4">4. Security Measures</h3>
            <p class="mb-6">
              We employ industry-standard encryption, secure architectures, and regular security audits to protect your data. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h3 class="text-h5 font-weight-bold text-white mt-8 mb-4">5. Contact Us</h3>
            <p class="mb-6">
              If you have questions or concerns about this privacy policy or our data practices, please contact us via our <router-link to="/contact" class="text-primary text-decoration-none font-weight-bold">Contact Page</router-link>.
            </p>
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
</style>
