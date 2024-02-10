<script setup>

</script>

<template>
    <div class="banner">
        <img class="banner-img" alt="Indian Springs Katahdins Logo" src="@/components/photos/ISKLogoTransparent.png">
        <h1 class="banner-info">At Indian Springs, we raise 100% grass-fed Katahdin sheep, rotationally grazing them on our farm in Trafalgar, Indiana. We sell meat cuts, whole lambs for butcher, and commercial breeding stock.</h1>
    </div>
</template>

<style scoped>
.banner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    margin: auto;
    min-height: 95vh;
}

.banner-img{
    width: 30vw;
}

.banner-info{
    width: 30vw;
    min-height: 25vh;
    text-align: center;
    font-size: 1.5rem;
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

@media (max-width: 769px) {
    .banner{
        width: 60vw;
    }
}

@media (max-width: 425px) {
    .banner{
        width: 80vw;
    }    
}
</style>