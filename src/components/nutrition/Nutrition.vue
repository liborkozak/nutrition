<template>
  <v-container>
    <NutritionTable />
  </v-container>
</template>

<script>
import NutritionTable from "@/components/nutrition/table/Table.vue";

export default {
  name: "Nutrition",
  components: {
    NutritionTable,
  },
};
</script>
