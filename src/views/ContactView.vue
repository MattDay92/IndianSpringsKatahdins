<script setup>
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar.vue';
import FooterVue from '@/components/Footer.vue';

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
  <Navbar />
  <main>
    <div id="liveAlertPlaceholder"></div>

    <div class="img-div">
      <img alt="Contact Indian Springs Katahdins" src="@/components/photos/ContactISK.png" />
    </div>
    <form class="form" ref="form" @submit.prevent="sendEmail">
      <input type="hidden" value="Indian Springs Katahdins" name="to_name">
      <label>Name</label>
      <input class="form-control" type="text" name="from_name">
      <label>Email</label>
      <input class="form-control" type="email" name="from_email">
      <label>Message</label>
      <textarea class="form-control" name="message"></textarea>
      <input class="btn" type="submit" id="liveAlertBtn" value="Send">
    </form>
  </main>
  <FooterVue />
</template>

<script>


export default {

  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_f0jmayd', 'contact_form', this.$refs.form, {
          publicKey: 'H4LdO0FDSGyj6mW27',
        })
        .then(
          () => {
            console.log('SUCCESS!');

            this.resetForm();

            alert('Message sent successfully!', 'success');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
    resetForm() {
      this.$refs.form.reset();
    },
  },
};

</script>

<style scoped>
.alert {
  position: fixed;
}

.img-div {
  display: flex;
  justify-content: center;
  width: 60vw;
  margin: auto;
}

img {
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin: auto;
}

.btn {
  background: #f99c06;
  color: white;
  width: 50%;
  margin: auto;
  margin-top: 2vh;
}
</style>