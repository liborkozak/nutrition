<template>
  <v-card flat>
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item.name">{{ $t(`${item.name}.title`) }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.name">
        <v-card flat>
          <component :is="item.component" />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import Nutrition from "@/components/nutrition/Nutrition.vue";
import Ingredients from "@/components/ingredients/Ingredients.vue";

export default {
  name: "Main",
  components: {
    Nutrition,
    Ingredients,
  },
  data: () => ({
    tab: null,
    items: [
      {
        name: "nutrition",
        component: "Nutrition",
      },
      {
        name: "ingredients",
        component: "Ingredients",
      },
    ],
  }),
  mounted() {
    this.fetchIngredients();
  },
  methods: {
    ...mapActions(["fetchIngredients"]),
  },
};
</script>