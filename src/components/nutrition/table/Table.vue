<template>
  <v-container>
    <NutritionTableSpecification />
    <v-row v-for="row in 3" :key="row">
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>One of three columns</v-card>
      </v-col>
    </v-row>
    <NutritionTableItem />
  </v-container>
</template>

<script>
import NutritionTableSpecification from "@/components/nutrition/table/specification/Specification.vue";
import NutritionTableItem from "@/components/nutrition/table/item/Item.vue";

export default {
  name: "NutritionTable",
  components: {
    NutritionTableSpecification,
    NutritionTableItem,
  },
  data: () => ({}),
};
</script>
