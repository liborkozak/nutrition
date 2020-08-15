<template>
  <v-card>
    <v-toolbar flat>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        :label="$t('search')"
        single-line
        hide-details
      ></v-text-field>
      <v-btn v-for="(icon, key) in icons" :key="key" icon @click="icon.handler">
        <v-icon>{{ icon.name }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-data-table :headers="headers" :items="ingredients" :search="search">
      <template slot="item.edit" slot-scope="data">
        <v-btn icon @click="edit(data.item)">
          <v-icon>mdi-pen</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <Popup ref="popup" @save="save" />
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Popup from "@/components/ingredients/popup/Popup.vue";

export default {
  name: "Ingredients",
  components: {
    Popup,
  },
  data: function () {
    return {
      search: null,
      popupData: null,
      icons: [
        {
          name: "mdi-plus",
          handler: this.add,
        },
      ],
      headers: [
        {
          text: this.$t("ingredients.table.name"),
          align: "start",
          value: "name",
        },
        { text: this.$t("ingredients.table.calories"), value: "calories" },
        { text: this.$t("ingredients.table.fat"), value: "fat" },
        { text: this.$t("ingredients.table.carbs"), value: "carbs" },
        { text: this.$t("ingredients.table.protein"), value: "protein" },
        { text: this.$t("ingredients.table.iron"), value: "iron" },
        { text: this.$t("ingredients.table.glycemic"), value: "glycemic" },
        { value: "edit" },
      ],
    };
  },
  computed: {
    ...mapGetters(["getIngredients"]),
    ingredients() {
      return this.getIngredients.map((item) => ({ ...item }));
    },
  },
  methods: {
    ...mapActions(["addIngredient", "editIngredient"]),
    add() {
      this.showPopup();
    },
    edit(data) {
      this.showPopup(data);
    },
    showPopup(data) {
      this.$refs["popup"].show(data);
    },
    hidePopup() {
      this.$refs["popup"].hide();
    },
    async save(data) {
      if (data.id) {
        await this.editIngredient(data);
      } else {
        await this.addIngredient(data);
      }
      this.hidePopup();
    },
  },
};
</script>
