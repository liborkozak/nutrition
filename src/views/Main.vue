<template>
  <v-container>
    <Nutrition />
    <v-tabs>
      <v-tab>Item One</v-tab>
      <v-tab>Item Two</v-tab>
      <v-tab>Item Three</v-tab>
    </v-tabs>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import Nutrition from "@/components/nutrition/Nutrition.vue";

export default {
  name: "Main",
  components: {
    Nutrition,
  },
  mounted() {
    this.fetchSpecification();
  },
  methods: {
    ...mapActions(["fetchSpecification"]),
  },
};
</script>
