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
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      single-expand
      :show-expand="true"
      :expanded="expanded"
      :search="search"
      hide-default-footer
      @click:row="clickedRow"
    >
      <template v-slot:expanded-item="{ item }">
        <td :colspan="headers.length">
          <v-data-table
            :headers="headers"
            :items="items"
            item-key="name"
            hide-default-footer
            @click:row="item"
          ></v-data-table>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "Nutrition",
  components: {},
  data() {
    return {
      search: null,
      icons: [
        {
          name: "mdi-plus",
          handler: () => {},
        },
      ],
      expanded: [],
      headers: [
        {
          text: "Localisation",
          sortable: true,
          value: "name",
        },
        {
          text: "Paquets scannés",
          sortable: true,
          value: "scanned",
        },
        {
          text: "Paquets entrants",
          sortable: true,
          value: "incoming",
        },
        {
          text: "Paquets sortants",
          sortable: true,
          value: "outgoing",
        },
        {
          text: "Paquets inconnus",
          sortable: true,
          value: "unknown",
        },
      ],
      items: [
        {
          id: 1,
          name: "Location 1",
          scanned: 159,
          incoming: 6,
          outgoing: 24,
          unknown: 4,
          test: "Test 1",
        },
        {
          id: 2,
          name: "Location 2",
          scanned: 45,
          incoming: 6,
          outgoing: 24,
          unknown: 4,
          test: "Test 2",
        },
      ],
    };
  },
  methods: {
    clickedRow(value) {
      if (this.expanded.length && this.expanded[0].id == value.id) {
        this.expanded = [];
      } else {
        this.expanded = [];
        this.expanded.push(value);
      }
    },
  },
};
</script>
