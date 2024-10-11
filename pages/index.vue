<template>
  <Head>
    <Title>Home | YOLET Dynamics</Title>
    <Meta name="description" content="Building Legacies" />
  </Head>
  <div class="h-screen flex flex-col justify-between bg-mainBlack-500 dm-font">
    <div class="flex flex-col">
      <NavBar />
      <main>
        <Hero />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import Hero from '~/components/Hero.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    NavBar,
    Hero,
    Footer,
  },
};
</script>