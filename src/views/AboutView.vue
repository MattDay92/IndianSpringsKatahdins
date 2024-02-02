<script setup>
import Navbar from '@/components/Navbar.vue';
import FooterVue from '@/components/Footer.vue';
</script>

<template>
  <Navbar />
  <main on="alignImages()">
    <h1>About Indian Springs Katahdins</h1>
    <article>
      <div id="our-story-1">
        <h2>Our Story</h2>
        <p>Indian Springs Katahdins is a small farm in Trafalgar, Indiana, owned by Jeff and Emily Bradley. I (Emily) am a
          former elementary teacher, stay-at-home mom, and high school secretary, and recently retired to be at home full
          time. Jeff has retired from his 30+ year career as a mechanical engineer, but continues to work from home part
          time as a consultant. Our favorite work is now that of sheep farmers!</p>
        <p>We purchased our farm, which was a former 9-hole golf course, in 2017. After many updates to the farmhouse, our
          son and his wife lived here for a few years. In June of 2020, Jeff and I moved to the farm after they moved to a
          house in town. We continued to work on the property, including having a permanent perimeter fence installed
          around the majority of the 33 acres in June 2021. </p>
        <p>The Katahdin sheep breed is one that was developed in the 1950’s by Michael Piel, a sheep farmer and amateur
          geneticist, near Mount Katahdin, the highest mountain in Maine (also known as the northern terminus of the
          Appalachian Trail). Katahdins are medium-sized, with ewes weighing 120 to 160 pounds and rams weighing 180 to
          250 pounds. It is a hair sheep that sheds its hair coat, not needing to be sheared like a wool sheep. It also is
          a meat breed, adapts well to different climates, and is more resistant to parasite infections. Katahdin ewes
          have good mothering skills and usually lamb easily, with lambs being born vigorous and alert. The breed is ideal
          for pasture lambing and grass/forage-based management systems. To learn more about the breed, visit this
          Katahdin FAQ page at this <a class="our-story-link" href="https://www.baalands.com/katahdinfaqs"
            target="_blank">link</a></p>

      </div>
      <div id="our-story-img-div-1"><img class="our-story-img" src="@/components/photos/AboutCollage1.png" /></div>
    </article>
    <article>
      <div id="our-story-img-div-2"><img class="our-story-img" src="@/components/photos/AboutCollage2.png" /></div>
      <div id="our-story-2">
        <p>In July 2021, we purchased our starter flock of 20 Katahdin ewes and a livestock guardian dog, who were all
          born on the same farm at approximately the same time, on pasture in Feb/Mar 2021. The dog had only known being
          with sheep and they were used to her being around. Once they arrived on our farm, we started moving them daily,
          from paddock to paddock, with them being fenced in an area with temporary fence posts, strung with 3 strands of
          polybraid (we now only use 2 strands), which was electrified using a clip that connected to the hot wire atop
          our perimeter fence. </p>
        <p>Our first few days were quite an experience as we learned, for the first time in our life, how to work with
          livestock. We are very grateful no one took video (that we are aware of) of that first pasture move! If only we
          had known the #1 rule of working with sheep – Never chase sheep! Since that time, we have learned a great deal
          more and the sheep have come to know us as their shepherds and they know our voices. All we have to do now when
          we want to move them is walk to the corner of the paddock and either clap our hands or call, ‘Sheep! Sheep!’ and
          they come running – if they haven’t already come when we started opening up a gate to the next paddock. </p>
        <p>We added our first registered Katahdin ram at Thanksgiving that fall and, in April and May 2022, 18 lambs were
          born. Of those, we kept 6 ewe lambs. The others were sold as breeding stock or meat or added to our own freezer.
          We also purchased 6 additional ewe lambs and another livestock guardian dog (this time a male) from the same
          farmer of our original flock. We also purchased an additional registered Katahdin ram later that fall. </p>
        <p>In April/May 2023, we had 25 ewes give birth to 42 lambs! We have kept 5 of those ewe lambs to bring our
          breeding ewes to a total of 31, after culling some of the ewes, and losing 1 due to a prolapse and another to
          pneumonia. We are looking forward to April and May 2024, our 3rd lambing season! </p>
        <p>We plan to keep a breeding flock of around 30 ewes. We will sell our lambs either as commercial breeding stock,
          or to those that want to finish them before butchering, or as meat cuts, either to sell or for our own use. </p>
      </div>
    </article>

  </main>
  <FooterVue />
</template>

<style>
article {
  width: 80vw;
  margin: auto;
  display: flex;
  justify-content: space-around;
}

h1 {
  text-align: center;
}

#our-story-1,
#our-story-2 {
  text-align: center;
  width: 40vw;
}

#our-story-img-div-1,
#our-story-img-div-2 {
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;  
}

.our-story-img {
  width: 100%;
}

.our-story-link {
  color: #efb250;
}
</style>

