<template>
  <div class="contact-page position-relative min-vh-100 d-flex flex-column">
    <!-- Glowing Orbs Background -->
    <div class="glow-orb glow-orb-primary" style="top: 20%; left: 10%; width: 500px; height: 500px; opacity: 0.2;"></div>
    <div class="glow-orb glow-orb-secondary" style="bottom: 10%; right: 5%; width: 400px; height: 400px; animation-delay: -3s; opacity: 0.2;"></div>

    <v-container class="position-relative z-index-1 flex-grow-1 d-flex flex-column justify-center py-16">
      
      <!-- Back to Home -->
      <div class="mb-8">
        <v-btn to="/" variant="text" prepend-icon="mdi-arrow-left" class="text-none font-weight-bold text-muted px-0">
          Back to Home
        </v-btn>
      </div>

      <v-row justify="center">
        <v-col cols="12">
          <div class="text-center mb-12">
            <h1 class="text-h2 font-weight-black mb-4">
              Let's <span class="text-gradient">Connect</span>
            </h1>
            <p class="text-h6 text-muted font-weight-regular max-w-md mx-auto">
              Have questions about CostCut AI? Want to request a demo or explore enterprise pricing? We'd love to hear from you.
            </p>
          </div>

          <v-row>
            <!-- Contact Info -->
            <v-col cols="12" md="4" class="mb-8 mb-md-0">
              <div class="glass-panel pa-8 h-100 d-flex flex-column">
                <h3 class="text-h5 font-weight-bold mb-6">Contact Information</h3>
                
                <div class="d-flex align-start mb-6">
                  <v-avatar color="primary" variant="tonal" size="48" class="mr-4 mt-1">
                    <v-icon icon="mdi-email-outline"></v-icon>
                  </v-avatar>
                  <div>
                    <h4 class="font-weight-bold text-white mb-1">Email Us</h4>
                    <p class="text-muted mb-0">support@costcut.ai</p>
                    <p class="text-muted">sales@costcut.ai</p>
                  </div>
                </div>

                <div class="d-flex align-start mb-6">
                  <v-avatar color="success" variant="tonal" size="48" class="mr-4 mt-1">
                    <v-icon icon="mdi-map-marker-outline"></v-icon>
                  </v-avatar>
                  <div>
                    <h4 class="font-weight-bold text-white mb-1">Our Office</h4>
                    <p class="text-muted mb-0">123 Innovation Drive</p>
                    <p class="text-muted">Tech Hub, CA 94105</p>
                  </div>
                </div>

                <div class="d-flex align-start flex-grow-1">
                  <v-avatar color="secondary" variant="tonal" size="48" class="mr-4 mt-1">
                    <v-icon icon="mdi-chat-processing-outline"></v-icon>
                  </v-avatar>
                  <div>
                    <h4 class="font-weight-bold text-white mb-1">Live Chat</h4>
                    <p class="text-muted mb-0">Available Monday to Friday</p>
                    <p class="text-muted">9am - 5pm PST</p>
                  </div>
                </div>

                <div class="mt-8 pt-6 border-top-subtle d-flex gap-4">
                  <v-btn icon="mdi-twitter" variant="text" color="muted"></v-btn>
                  <v-btn icon="mdi-linkedin" variant="text" color="muted"></v-btn>
                  <v-btn icon="mdi-github" variant="text" color="muted"></v-btn>
                </div>
              </div>
            </v-col>

            <!-- Contact Form -->
            <v-col cols="12" md="8">
              <div class="glass-panel pa-8">
                <v-form @submit.prevent="submitForm">
                  <h3 class="text-h5 font-weight-bold mb-6">Send us a message</h3>
                  
                  <v-row>
                    <v-col cols="12" sm="6" class="py-2">
                      <v-text-field
                        v-model="form.firstName"
                        label="First Name"
                        variant="outlined"
                        bg-color="rgba(255,255,255,0.03)"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-2">
                      <v-text-field
                        v-model="form.lastName"
                        label="Last Name"
                        variant="outlined"
                        bg-color="rgba(255,255,255,0.03)"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="py-2">
                      <v-text-field
                        v-model="form.email"
                        label="Work Email"
                        type="email"
                        variant="outlined"
                        bg-color="rgba(255,255,255,0.03)"
                        hide-details="auto"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="py-2">
                      <v-select
                        v-model="form.interest"
                        :items="['General Inquiry', 'Request Demo', 'Enterprise Pricing', 'Technical Support']"
                        label="What can we help you with?"
                        variant="outlined"
                        bg-color="rgba(255,255,255,0.03)"
                        hide-details="auto"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" class="py-2">
                      <v-textarea
                        v-model="form.message"
                        label="Message"
                        variant="outlined"
                        bg-color="rgba(255,255,255,0.03)"
                        rows="4"
                        hide-details="auto"
                        required
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" class="mt-4">
                      <v-btn
                        type="submit"
                        color="primary"
                        size="x-large"
                        block
                        class="text-none font-weight-bold primary-glow rounded-pill"
                        :loading="loading"
                      >
                        Send Message
                        <v-icon icon="mdi-send" class="ml-2" size="small"></v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    
    <v-snackbar v-model="showSuccess" color="success" timeout="3000">
      Message sent successfully! We will get back to you soon.
      <template v-slot:actions>
        <v-btn variant="text" @click="showSuccess = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);
const showSuccess = ref(false);

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  interest: 'General Inquiry',
  message: ''
});

const submitForm = () => {
  loading.value = true;
  // Simulate API call
  setTimeout(() => {
    loading.value = false;
    showSuccess.value = true;
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      interest: 'General Inquiry',
      message: ''
    };
  }, 1500);
};
</script>

<style scoped>
.z-index-1 {
  z-index: 1;
}

.max-w-md {
  max-width: 600px;
}

.border-top-subtle {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
