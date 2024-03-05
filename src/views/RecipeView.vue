<template>
  <div>
      <Navbar />
      <main>
          <div class="img-div">
            <img src="@/components/photos/RecipesHeader.png" />
          </div>
          <div class="recipes">
              <div class="recipe-div">
                  <div v-if="state.recipes.length">
                      <div class="recipe-list">
                          <div v-for="(recipe, index) in state.recipes" :key="index">
                              <div class="card">
                                  <!-- <img src="..." class="card-img-top" alt="..."> -->
                                  <div class="card-body">
                                      <h2 class="card-title">{{ recipe.recipeName }}</h2>
                                      <a class="btn" target="_blank" :href="`${recipe.recipeBody}`">View Recipe</a>
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
      <FooterVue />
  </div>
</template>

<script setup>

import Navbar from '@/components/Navbar.vue';
import FooterVue from '@/components/Footer.vue';
import { getDatabase, ref, child, get } from "firebase/database";
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
.img-div {
    display: flex;
    justify-content: center;
    width: 45vw;
    margin: auto;
}

img {
    width: 100%;
}

.recipe-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80vw;
}

.card {
  color: black;
  margin: 5px;
  width: 25vw;
  height: 200px;
  overflow-y: scroll;
}

.card-title{
  font-weight: 700;
}

.card-body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
}

@media (max-width: 768px) {
    .img-div {
        width: 80vw !important;
    }

    .card{
      width: 35vw;
    }
}

@media (max-width: 425px) {

  .img-div{
    padding-top: 5vh;
  }

    .card{
      width: 70vw;
    }

    .recipe-list{
      justify-content: center;
    }
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

