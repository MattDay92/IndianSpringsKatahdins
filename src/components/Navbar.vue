<script>

const openNav = () => {
    document.getElementById('mobile-nav-section').style.height = "50vh"
}

export default {
    methods: {
        openNav() {
            const navHeight = document.getElementById('mobile-nav-section')
            if (navHeight.style.height === '0px'){
                navHeight.style.height = "fit-content"
                navHeight.style.opacity = "1"
                navHeight.style.pointerEvents = "all"
            } else {
                navHeight.style.height = '0'
                navHeight.style.opacity = '0'
                navHeight.style.pointerEvents = "none"
            }
        }
    }
};

</script>

<template>
    <nav id="nav">
        <div class="nav-section">
            <a class="nav-text" href="/about">About</a>
            <a class="nav-text"
                href="https://docs.google.com/document/d/e/2PACX-1vTe_sI1G2pWT-D4oTsGsDW-W-6cRxPwfUoAJWYUUMqqbWAFRUdsPDrMAvksfG6mpJtDrzcUolQTjD-H/pub"
                target="_blank">Meat for Sale</a>
        </div>
        <a href="/"><img class="nav-logo" alt="Indian Springs Katahdins" src="@/components/photos/ISKLogoText.png"></a>
        <div class="nav-section">
            <a class="nav-text" href="/livestock">Livestock for Sale</a>
            <a class="nav-text" href="/recipes">Recipes</a>
            <a class="nav-text" href="/contact">Contact</a>
        </div>
        <i @click="openNav" class="fa-solid fa-bars"></i>
    </nav>
    <div id="mobile-nav-section" class="mobile-nav-section" style="height: 0px;">
        <a class="mobile-nav-text" href="/about">About</a>
        <a class="mobile-nav-text"
            href="https://docs.google.com/document/d/e/2PACX-1vTe_sI1G2pWT-D4oTsGsDW-W-6cRxPwfUoAJWYUUMqqbWAFRUdsPDrMAvksfG6mpJtDrzcUolQTjD-H/pub"
            target="_blank">Meat for Sale</a>
        <a class="mobile-nav-text" href="/livestock">Livestock for Sale</a>
        <a class="mobile-nav-text" href="/recipes">Recipes</a>
        <a class="mobile-nav-text" href="/contact">Contact</a>
    </div>
</template>

<style scoped>
#nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    opacity: 1;
    height: 10vh;
    width: 100vw;
    background: black;
    color: white;
    font-size: 1.5rem;
    z-index: 100;
}

.nav-section {
    display: flex;
    justify-content: space-around;
    width: 35vw;
}

.nav-text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15vw;
    text-align: center;
    font-weight: 700;
}

.nav-logo {
    width: 12vw;
    margin-top: 1vh;
}

@media (max-width: 768px) {

    .nav-text {
        display: none;
    }

    .fa-bars {
        display: block !important;
        position: absolute;
        left: 10vw;
    }

    .nav-logo {
        width: 25vw !important;
    }

    #mobile-nav-section {
        display: flex !important;
        position: fixed;
        z-index: 80;
        flex-direction: column;
        background: black;
        color: white;
        padding-top: 10vh;
        padding-bottom: 5vh;
        height: 0;
        transition: height 0.5s ease-in-out;
        opacity: 0;
        width: 100vw;
    }

    .mobile-nav-text {
        display: block !important;
        text-align: center;
        font-weight: 700;
        padding-top: 5vh;
        color: white;
    }
}

.fa-bars,
#mobile-nav-section,
.mobile-nav-text {
    display: none;
}
</style>