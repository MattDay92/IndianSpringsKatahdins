
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
        </main>
    </div>
</template>

<script setup>

import Navbar from '@/components/Navbar.vue';
import { getDatabase, ref, child, get } from "firebase/database";
import { onMounted, reactive } from 'vue';

const dbRef = ref(getDatabase());

const state = reactive({
    emails: []
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

onMounted(getEmails);


</script>

<style scoped>
.email-div{
    text-align: center;
    padding-top: 10vh;
}
.email-list {
    padding-top: 10vh;
    list-style-type: none;
}
</style>