<template>
  <div>
    <v-card>
      <v-card-text>
        <h1 class="display-3 font-weight-thin">Electronics</h1>
        <hr>
        <v-layout row wrap my-4>
          <v-flex xs12 md10 lg8>
            <p class="font-weight-thin font-italic">I love programming, but especially get a kick out of making things move in real life with code.
              Check out some of my recent hardware projects on <a :href="hacksterUrl" target="_blank">Hackster.io</a>.
            </p>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
    <v-card class="mt-4" @click="loadHackster">
      <v-card-text>
        <v-img class="hackster" src="images/hacksterio.jpg"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Electronics',
  components: {},
  data () {
    return {
      hacksterUrl: 'https://www.hackster.io/ryanjgill2/'
    }
  },
  methods: {
    loadHackster() {
      window.open(this.hacksterUrl, "_blank");   
    }
  }
}
</script>
<style lang="scss" scoped>
p {
  font-size: 1.5em;
  margin-bottom: 0;
}

.hackster:hover {
  cursor: pointer;
}
</style>
