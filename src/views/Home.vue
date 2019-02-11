<template>
  <div class="home">
    <div class="hotend">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="typer font-weight-thin text-uppercase" >
      <vue-typer :text="iams" erase-style='backspace'></vue-typer>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'home',
  components: { VueTyper },
  data() {
    return {
      iams: ['Developer', 'Hacker', 'Maker']
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes printX {
  50% {
    transform: translateX(600px);
  }
}

div.home {
  overflow: hidden
}

div.hotend {
  position: absolute;
  top: -10px;
  animation: printX 6s 1s infinite ease-in-out;
  right: 1000px;
  z-index: 0;

  img {
    width: 200px;
  }
}

div.typer /deep/ {
  margin: 8rem 0 0 5rem;
  overflow: hidden;
  font-size: 10em;

  hr {
    width: 80%
  }
}

.vue-typer {
  z-index: 10;
  overflow: hidden;
}

@media screen and (max-width: 1200px) {
  div.typer {
    font-size: 6em;
  }

  div.hotend {
    right: 500px;

    img {
      width: 175px;
    }
  }

  @keyframes printX {
    50% {
      transform: translateX(400px);
    }
  }
}

@media screen and (max-width: 900px) {
  div.typer {
    font-size: 6em;
  }

  div.hotend {
    right: 600px;

    img {
      width: 175px;
    }
  }

  @keyframes printX {
    50% {
      transform: translateX(400px);
    }
  }
}

@media screen and (max-width: 600px) {
  div.typer {
    font-size: 5em;
    margin: 8rem 0 0 1rem;
  }

  div.hotend {
    right: 400px;

    img {
      width: 165px;
    }
  }

  @keyframes printX {
    50% {
      transform: translateX(350px);
    }
  }
}

@media screen and (max-width: 500px) {
  div.typer {
    font-size: 4em;
  }
  
  div.hotend {
    right: 350px;

    img {
      width: 165px;
    }
  }
}

@media screen and (max-width: 450px) {
  div.hotend {
    animation: printX 6s 1s infinite ease-in-out;
    right: 300px;
    
    img {
      width: 160px;
    }
  }

  div.typer {
    font-size: 3em;
    
    hr {
      display: none;
    }
  }
}
</style>

