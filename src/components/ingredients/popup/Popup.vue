<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $t('ingredients.popup.title') }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="formData.name"
                :label="`${$t('ingredients.popup.name')}`"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="formData.calories"
                :label="`${$t('ingredients.popup.calories')}`"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="formData.fat"
                :label="`${$t('ingredients.popup.fat')}`"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="formData.carbs"
                :label="`${$t('ingredients.popup.carbs')}`"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="formData.protein"
                :label="`${$t('ingredients.popup.protein')}`"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="formData.iron"
                :label="`${$t('ingredients.popup.iron')}`"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="formData.glycemic"
                :label="`${$t('ingredients.popup.glycemic')}`"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>{{ $t('tips.required') }}</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="hide()">{{ $t('close') }}</v-btn>
        <v-btn color="blue darken-1" text @click="$emit('save', formData)">{{ $t('save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "IngredientsPopup",
  data() {
    return {
      dialog: false,
      formData: {},
    };
  },
  methods: {
    show(data = {}) {
      this.formData = data;
      this.dialog = true;
    },
    hide() {
      this.formData = {};
      this.dialog = false;
    },
  },
};
</script>