<script setup>

</script>

<template>
    <div class="banner">
        <img class="banner-img" alt="Indian Springs Katahdins Logo" src="@/components/photos/ISKLogoTransparent.png">
    </div>
</template>

<style scoped>
.banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin: auto;
    min-height: 95vh;
}

.banner-info{
    width: 40vw;
    min-height: 25vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.banner-btns {
    width: 25vw;
    margin: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

button {
    align-items: center;
    background-image: linear-gradient(144deg, #f99006, #f99c06 50%, #f6db9c);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    flex-wrap: wrap;
    font-family: Phantomsans, sans-serif;
    font-size: 15px !important;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 100px !important;
    padding: 15px 15px !important;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
}

button:active,
button:hover {
    outline: 0;
    transform: scale(1.1);
}

@media (min-width: 768px) {
    button {
        font-size: 24px;
        min-width: 196px;
    }
}
</style>