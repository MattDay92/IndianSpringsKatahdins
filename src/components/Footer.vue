<script setup>
import { getDatabase, ref, set, push } from 'firebase/database'

</script>

<template>
    <footer>
        <div class="footer-social">
            <h2>Follow us on Facebook</h2>
            <a href="https://www.facebook.com/profile.php?id=61555159784777" target="_blank"><i class="fa-brands fa-square-facebook"></i></a>
        </div>
        <div class="subscribe-form">
            <form @submit.prevent="updateFormData">
                <label>Subscribe to the ISK Newsletter</label>
                <input class="form-control" name="signupemail" placeholder="Enter Email Address" />
                <button class="btn" type="submit">Subscribe</button>
            </form>
        </div>
    </footer>
</template>

<script>

const updateFormData = (event) => {
        event.preventDefault()
        const db = getDatabase();

        const emailAddress = event.target.signupemail.value

        const emailListRef = ref(db, 'emails')

        const newEmail = push(emailListRef)

        set(newEmail, {
            emailAddress
        })
    }

</script>

<style scoped>
footer {
    min-height: 15vh;
    background: black;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.footer-social{
    text-align: center;
    margin-bottom: 2vh;
}

.fa-brands{
    font-size: 30px;
}

.subscribe-form{
    padding-top: 2vh;
    padding-bottom: 2vh;
    text-align: center;
}
</style>