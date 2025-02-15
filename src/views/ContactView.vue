<script setup>
import { ref, onMounted } from "vue";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar.vue";
import FooterVue from "@/components/Footer.vue";

// Reactive state
const formData = ref({
  name: "",
  email: "",
  message: ""
});

const responseMessage = ref("");
const alertPlaceholder = ref(null);

onMounted(() => {
  alertPlaceholder.value = document.getElementById("liveAlertPlaceholder");
});

// Handle form submission
const handleSubmit = async () => {
  console.log(formData.value);

  try {
    const response = await fetch("https://indian-springs-katahdins.vercel.app/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    const result = await response.json();
    responseMessage.value = result.message;
  } catch (error) {
    responseMessage.value = "An error occurred while sending the email.";
  }
};

// Reset form
const resetForm = () => {
  formData.value = {
    name: "",
    email: "",
    inquiryType: [],
    message: "",
  };
};

const alert = (message, type) => {
  if (!alertPlaceholder.value) return;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible" role="alert">
      <div>${message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  alertPlaceholder.value.append(wrapper);
};
</script>

<template>
  <Navbar />
  <main>


    <div v-if="responseMessage" class="alert alert-primary alert-dismissible fade show" role="alert">
      <p>{{ responseMessage }}</p>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

    </div>

    <div class="img-div">
      <img alt="Contact" src="@/components/photos/ContactISK.png" />
    </div>

    <div class="contact-content">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <label>
            Name:
            <input type="text" class="form-control" v-model="formData.name" required />
          </label><br />

          <label>
            Email:
            <input type="email" class="form-control" v-model="formData.email" required />
          </label><br />

          <label>
            Message:
            <textarea class="form-control" v-model="formData.message" required></textarea>
          </label><br />

          <button type="submit" class="btn">Send</button>
        </form>

        <div class="contact-direct-div">
          <h2>Address</h2>
          <p class="mb-0">6709 S 200 W</p>
          <p>Trafalgar, IN 46181</p>
          <h2>Direct Inquiries</h2>
          <p>Indian.Springs.Katahdins@gmail.com</p>
          <h2>Follow us on Facebook!</h2>
          <a href="https://www.facebook.com/profile.php?id=61555159784777" target="_blank"><i alt="Facebook"
              class="fa-brands fa-square-facebook"></i></a>


      </div>
    </div>

  </main>
  <FooterVue />
</template>

<style>
.contact-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  width: 80vw;
}

.form-div {
  display: flex;
  justify-content: space-around;
}

.contact h2 {
  margin-top: 10vh;
}

.form-control {
  width: 30vw;
}

@media (max-width: 768px) {
  .img-div {
    width: 80vw !important;
    padding-top: 10vh;
  }

  .contact-content {
    flex-wrap: wrap;
  }

  .form {
    width: 80vw !important;
  }


  .contact-direct-div {
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
}

@media (max-width: 425px) {
  .form-control {
    width: 70vw;
  }
}

.contact-direct-div {
  text-align: center;
}

.alert {
  position: fixed;
  top: 15vh; 
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999; 
}


.img-div {
  display: flex;
  justify-content: center;
  width: 45vw;
  margin: auto;
}

img {
  width: 100%;
}

.form-control:focus {
  box-shadow: none;
}

.btn {
  background: #f99c06;
  color: white;
  width: 100%;
  margin: auto;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.fa-brands {
  font-size: 30px;
}
</style>