import http from "@/services/http";
import { ingredientsUrl } from "@/config/urls";

export default {
  namespaced: false,
  state: {
    specification: {},
  },
  actions: {
    async fetchSpecification() {
      const { data } = await http.get(ingredientsUrl());
      console.log(data);
    },
  },
};
