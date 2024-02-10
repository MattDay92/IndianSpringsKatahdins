<script>

</script>

<template>
    <nav id="nav">
        <a class="nav-text" href="/about">About</a>
        <a class="nav-text" href="https://docs.google.com/document/d/e/2PACX-1vTe_sI1G2pWT-D4oTsGsDW-W-6cRxPwfUoAJWYUUMqqbWAFRUdsPDrMAvksfG6mpJtDrzcUolQTjD-H/pub" target="_blank">Meat for Sale</a>
        <a href="/"><img class="nav-logo" alt="Indian Springs Katahdins" src="@/components/photos/ISKLogoText.png"></a>
        <a class="nav-text" href="/recipes">Recipes</a>
        <a class="nav-text" href="/contact">Contact</a>
    </nav>
</template>

<style scoped>
    #nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        height: 10vh;
        opacity: 1;
        width: 100vw;
        background: black;
        color: white;
        font-size: 30px;
        z-index: 100;
    }

    .nav-text{
        width: 15vw;
        text-align: center;
        font-weight: 700;
    }

    .nav-logo{
        width: 12vw !important;
        margin-top: 1vh;
    }
</style>