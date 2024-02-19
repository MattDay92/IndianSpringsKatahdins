<template>
  <div>
      <Navbar />
      <main>
          <div class="recipes">
              <div class="recipe-div">
                  <div v-if="state.recipes.length">
                      <div class="recipe-list">
                          <div v-for="(recipe, index) in state.recipes" :key="index">
                              <div class="card">
                                  <!-- <img src="..." class="card-img-top" alt="..."> -->
                                  <div class="card-body">
                                      <h3 class="card-title">{{ recipe.recipeName }}</h3>
                                      <div class="card-text" v-html="recipe.recipeBody"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div v-else>
                      <p>No data available</p>
                  </div>
              </div>
          </div>
      </main>
  </div>
</template>

<script setup>

import Navbar from '@/components/Navbar.vue';
import { getDatabase, ref, child, get, push, set, remove } from "firebase/database";
import { onMounted, reactive } from 'vue';

const dbRef = ref(getDatabase());

const state = reactive({
  recipes: [],
});

const getRecipes = () => {
  get(child(dbRef, 'recipes')).then((snapshot) => {
      if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
              const recipe = childSnapshot.val(); 
              state.recipes.push(recipe);
          });

          console.log("Recipes:", state.recipes);
      } else {
          console.log("No data available");
      }
  }).catch((error) => {
      console.error("Error fetching recipes:", error);
  });
}

onMounted(getRecipes)

</script>

<style scoped>
.recipe-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  color: black;
  margin: 5px;
  width: 20vw;
  height: 300px;
  overflow-y: scroll;
}

.recipes {
  width: 80vw;
  display: flex;
  justify-content: space-around;
  margin: auto;
  text-align: center;
  margin-top: 10vh;
  padding-bottom: 10vh;
}
</style>

