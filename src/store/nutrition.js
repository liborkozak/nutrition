import http from "@/services/http";
import { ingredientsUrl } from "@/config/urls";

const SET_INGREDIENTS = "SET_INGREDIENTS";

export default {
  namespaced: false,
  state: {
    ingredients: [],
  },
  actions: {
    async fetchIngredients({ commit }) {
      const { data } = await http.get(ingredientsUrl());

      const ingredients = [];
      Object.keys(data).forEach((item) =>
        ingredients.push({
          ...data[item],
          id: item,
        })
      );

      commit(SET_INGREDIENTS, ingredients);
    },
    async addIngredient({ dispatch }, body) {
      await http.post(ingredientsUrl(), body);
      dispatch("fetchIngredients");
    },
    async editIngredient({ dispatch }, body) {
      await http.patch(ingredientsUrl(), {
        [body.id]: body,
      });
      dispatch("fetchIngredients");
    },
  },
  mutations: {
    [SET_INGREDIENTS](state, ingredients) {
      state.ingredients = ingredients;
    },
  },
  getters: {
    getIngredients(state) {
      return state.ingredients;
    },
  },
};
