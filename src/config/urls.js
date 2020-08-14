const FIREBASE_URL = `https://${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseio.com`;

export const ingredientsUrl = () => `${FIREBASE_URL}/ingredients.json`;
