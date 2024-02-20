

<template>
    <div>
        <Navbar />
        <main>
            <div class="email-div">
                <div v-if="state.emails.length">
                    <h2>Mailing List Emails:</h2>
                    <ul class="email-list">
                        <li v-for="(email, index) in state.emails" :key="index">{{ email.emailAddress }}</li>
                    </ul>
                </div>
                <div v-else>
                    <p>No data available</p>
                </div>
            </div>
            <div class="recipes">
                <form name="recipe-form" @submit.prevent="addRecipe">
                    <h2 class="form-label">Add New Recipe</h2>
                    <input class="form-control" name="RecipeName" placeholder="Enter Recipe Name" />
                    <textarea id="tiny" name="RecipeBody" placeholder="Enter Recipe Info"></textarea>
                    <button class="btn" type="submit">Add Recipe</button>
                </form>
                <div class="recipe-div">
                    <div v-if="state.recipes.length">
                        <h2>Recipes:</h2>
                        <div class="recipe-list">
                            <div v-for="(recipe, index) in state.recipes" :key="index">
                                <div class="card">
                                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                                    <div class="card-body">
                                        <h3 class="card-title">{{ recipe.recipeName }}</h3>
                                        <div class="card-text" v-html="recipe.recipeBody"></div>
                                        <button @click="deleteRecipe(state.recipeIndices[index])"
                                            class="btn btn-sm btn-danger">Delete</button>
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

onMounted(() => {
    tinymce.init({
        selector: 'textarea#tiny',
        menu: {
            edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
            view: { title: 'View', items: 'code | visualaid visualchars visualblocks | preview fullscreen | showcomments' },
            insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
            format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
            table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
            help: { title: 'Help', items: 'help' }
        },
        plugins: [
            'advlist', 'autolink', 'link', 'image', 'lists', 'anchor',
            'searchreplace', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
            'media', 'table', 'template', 'help'
        ],
    });
});

document.addEventListener('focusin', (e) => {
    if (e.target.closest(".tox-tinymce, .tox-tinymce-aux, .moxman-window, .tam-assetmanager-root") !== null) {
        e.stopImmediatePropagation();
    }
});

const dbRef = ref(getDatabase());

const state = reactive({
    emails: [],
    recipes: [],
    recipeIndices: []
});


const getEmails = () => {
    get(child(dbRef, 'emails')).then((snapshot) => {
        if (snapshot.exists()) {

            Object.values(snapshot.val()).forEach((email) => {
                state.emails.push(email)
            });

            console.log(state.emails)

        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

const addRecipe = (event) => {
    event.preventDefault()
    const db = getDatabase();

    const recipeName = event.target.RecipeName.value
    const recipeBody = tinymce.get('tiny').getContent();

    const recipeListRef = ref(db, 'recipes')

    const newRecipeRef = push(recipeListRef)

    set(newRecipeRef, {
        recipeName,
        recipeBody
    }).then(
        () => {
            alert('Successfully Added a New Recipe!', 'success');
            event.target.reset()
            location.reload()
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
    )
}

const getRecipes = () => {
    get(child(dbRef, 'recipes')).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const key = childSnapshot.key; 
                const recipe = childSnapshot.val(); 

                state.recipes.push(recipe);

                state.recipeIndices.push(key);
            });

            console.log("Recipes:", state.recipes);
            console.log("Recipe Indices:", state.recipeIndices);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error("Error fetching recipes:", error);
    });
}

const deleteRecipe = (key) => {
    const db = getDatabase();

    const recipeRef = ref(db, `recipes/${key}`);
    remove(recipeRef).then(() => {
        console.log("Recipe deleted successfully");
        state.recipes = state.recipes.filter(recipe => recipe.key !== key);
        location.reload()
    }).catch((error) => {
        console.error("Error deleting recipe:", error);
    });
}

onMounted(getEmails);

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

.email-div {
    text-align: center;
    padding-top: 10vh;
}

.email-list {
    padding-top: 10vh;
    list-style-type: none;
}
</style>

