<script setup>
import Navbar from '@/components/Navbar.vue';
import FooterVue from '@/components/Footer.vue';
</script>

<template>
    <div>
        <Navbar />
        <main>
            <div class="img-div">
                <img alt="Livestock For Sale" src="@/components/photos/LivestockForSale.png" />
            </div>
            <div class="livestock-text">
                Are you interested in purchasing a starter flock of Katahdin lambs or sheep, additions to your current
                flock, or even just lambs to finish yourself? Our ewes will be lambing beginning in late April and we
                anticipate having 45+ lambs born. Because we use 2 separate registered Katahdin rams, we anticipate being able to sell
                starter flocks with ewes and a ram that are not genetically related. Contact us for more information.
            </div>
            <a class="btn" href="/contact">Contact</a>
        </main>
        <FooterVue />
    </div>
</template>

<style scoped>
main{
    text-align: center;
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

.livestock-text {
    width: 40vw;
    text-align: center;
    margin: auto;
    font-size: 1.5rem;
}

.btn{
    margin-bottom: 10vh;
}



@media (max-width: 768px) {
    .img-div {
        width: 80vw !important;
    }

    .livestock-text {
        width: 70vw;
    }
}

@media (max-width: 468px) {
    main {
        padding-top: 20vh;
    }

    .livestock-text {
        font-size: 1rem;
    }
}
</style>