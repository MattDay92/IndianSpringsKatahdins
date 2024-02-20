<script setup>
import { getDatabase, ref, set, push } from 'firebase/database'

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

</script>

<template>
    <footer>
        <div class="footer-social">
            <h2>Follow us on Facebook</h2>
            <a href="https://www.facebook.com/profile.php?id=61555159784777" target="_blank"><i
                    class="fa-brands fa-square-facebook"></i></a>
        </div>
        <div class="subscribe-form">
            <form name="newsletter-form" @submit.prevent="updateFormData">
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
    }).then(
        () => {
            alert('Successfully Subscribed to the ISK Newsletter!', 'success');
            event.target.reset()
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
    )

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

.footer-social {
    text-align: center;
    margin-bottom: 2vh;
}

.footer-social h2{
    font-size: 2rem;
}

@media (max-width: 425px) {
    .footer-social{
        display: none;
    }
}

@media (max-width: 768px) {
    .footer-social h2{
        font-size: 1.5rem ;
    }
}

.fa-brands {
    font-size: 30px;
}

.subscribe-form {
    padding-top: 2vh;
    padding-bottom: 2vh;
    text-align: center;
}
</style>