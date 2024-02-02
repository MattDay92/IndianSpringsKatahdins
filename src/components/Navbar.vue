<script>

</script>

<template>
    <nav id="nav">
        <a class="nav-text" href="/about">About</a>
        <a class="nav-text" href="/menu">Menu</a>
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
    }

    .nav-logo{
        width: 12vw !important;
        margin-top: 1vh;
    }
</style>