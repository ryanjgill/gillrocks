<template>
  <div>
    <v-card>
      <v-card-text>
        <div class="display-3 font-weight-thin">3D Printing</div>
        <hr>
        <v-layout row wrap my-4>
          <v-flex xs12 md8 lg7>
            <p>I own 2 FDM (Fused Deposition Modeling) printers. I started off with the Anet A8.
              It was a great way to learn about 3D printing and get a feel for the field.
              Then I upgraded to a CR-10 Mini that I picked up second hand from a co-woker. The 
              metal frame really makes a big difference in print quality.
            </p>
          </v-flex>
          <v-flex xs6>
            <div class="display-1 font-weight-light">Anet A8</div>
            <ul>
              <li>Build Volume: 220 x 220 x 240mm</li>
              <li>Type: FDM</li>
              <li>Cost: $165</li>
              <li>Mods: Too many to count</li>
            </ul>
          </v-flex>
          <v-flex xs6>
            <div class="display-1 font-weight-light">CR-10 Mini</div>
            <ul>
              <li>Build Volume: 300 x 220 x 300mm</li>
              <li>Type: FDM</li>
              <li>Cost: $399</li>
              <li>Mods: E3Dv6 Hotend, Noctua fans, dampers</li>
            </ul>
          </v-flex>
        </v-layout>
        <v-flex xs12 md8 lg7>
            <p>Check me out on <a :href="thingiverseUrl" target="_blank">Thingiverse.com</a>.
            </p>
          </v-flex>
      </v-card-text>
    </v-card>
    <v-card class="mt-4">
      <v-card-text>
        <div class="display-2 font-weight-thin">Recent Prints</div>
        <hr>
        <PhotoGallery name="recentPrints" title="Recent Prints" :images="allPhotos"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import PhotoGallery from '@/components/PhotoGallery.vue'

export default {
  name: 'Printing',
  components: {
    PhotoGallery
  },
  data () {
    return {
      drawer: null,
      filaCubeRainbowFilament: [
        'images/printing/filacube_rainbow/IMG_20180810_160158.jpg',
        'images/printing/filacube_rainbow/IMG_20180811_001609.jpg',
        'images/printing/filacube_rainbow/IMG_20180811_001629.jpg',
        'images/printing/filacube_rainbow/IMG_20180811_001649.jpg',
        'images/printing/filacube_rainbow/IMG_20180811_125020.jpg',
        'images/printing/filacube_rainbow/IMG_20180811_131844.jpg',
        'images/printing/filacube_rainbow/IMG_20180811_131900.jpg',
        'images/printing/filacube_rainbow/IMG_20180813_081438.jpg',
        'images/printing/filacube_rainbow/IMG_20180814_081217.jpg',
        'images/printing/filacube_rainbow/IMG_20180814_181257.jpg',
        'images/printing/filacube_rainbow/IMG_20180814_181331.jpg',
        'images/printing/filacube_rainbow/IMG_20180815_080753.jpg',
        'images/printing/filacube_rainbow/IMG_20180815_080931.jpg',
        'images/printing/filacube_rainbow/IMG_20180815_080953.jpg',
        'images/printing/filacube_rainbow/IMG_20180815_153012.jpg',
        'images/printing/filacube_rainbow/IMG_20180815_153028.jpg',
        'images/printing/filacube_rainbow/IMG_20180815_195425.jpg',
        'images/printing/filacube_rainbow/IMG_20180815_195443.jpg',
        'images/printing/filacube_rainbow/IMG_20180815_195457.jpg',
        'images/printing/filacube_rainbow/IMG_20180815_195527.jpg',
        'images/printing/filacube_rainbow/IMG_20180816_084228.jpg'
      ],
      prusamentGalaxyBlack: [
        'images/printing/prusament_galaxy_black/IMG_20190206_150500.jpg',
        'images/printing/prusament_galaxy_black/IMG_20190206_150511.jpg',
        'images/printing/prusament_galaxy_black/IMG_20190206_150828.jpg',
        'images/printing/prusament_galaxy_black/IMG_20190207_115933.jpg',
        'images/printing/prusament_galaxy_black/IMG_20190207_120421.jpg',
        'images/printing/prusament_galaxy_black/IMG_20190207_120545.jpg'
      ],
      thingiverseUrl: 'https://www.thingiverse.com/ryanjgill/makes'
    }
  },
  computed: {
    allPhotos() {
      return [...this.prusamentGalaxyBlack, ...this.filaCubeRainbowFilament];
    }
  }
}
</script>
<style lang="scss" scoped>
p {
  font-size: 1.2em;
}

@media screen and (max-width: 500px) {
  .display-1 {
    font-size: 1.8em !important;
  }
}
</style>
