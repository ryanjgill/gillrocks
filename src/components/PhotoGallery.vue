<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <v-layout row wrap class="thumbnails">
      <v-img
        v-for="(image, imageIndex) in images"
        :src="getImageThumbnail(image)"
        :lazy-src="getImageThumbnail(image)"
        :key="imageIndex"
        aspect-ratio="1.777"
        class="grey lighten-2 ma-1"
        :width="300"
        :min-width="250"
        :max-width="500"
        @click="index = imageIndex"
      >
        <v-layout
          slot="placeholder"
          fill-height
          align-center
          justify-center
          ma-0
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
      </v-img>
    </v-layout>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';

export default {
  components: {
    'gallery': VueGallery
  },
  name: 'PhotoGallery',
  props: {
    images: Array,
    name: String
  },
  data() {
    return {
      index: null,
      hasSelectedIndex: null
    }
  },
  methods: {
    getImageThumbnail(image) {
      let slugs = image.split('/')
      return slugs.map((slug, index) => {
        return (index+1) === slugs.length  ?  `thumbnails/${slug}` : slug
      }).join("/")
    } 
  }
}
</script>

<style lang="scss" scoped>
  .thumbnails {
    justify-content: space-evenly;

    .v-image {
      border-radius: 4px;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>